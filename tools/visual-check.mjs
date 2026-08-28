/**
 * Proves the React build renders identically to the original design file.
 *
 *   npm run build && npm run visual-check
 *
 * Opens "Workneev Homepage.dc.html" and "dist/index.html" side by side in the
 * same browser, walks both down the page in lockstep, and pixel-diffs each stop.
 * Scroll-driven animations only run while actually scrolling, so this captures
 * the viewport at fixed offsets rather than taking one full-page screenshot.
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const asUrl = (p) => 'file:///' + path.join(root, p).split(path.sep).join('/');

const ORIGINAL = asUrl('Workneev Homepage.dc.html');
const BUILT = asUrl('dist/index.html');
const OUT = path.join(root, 'tools/visual-check-output');
const SIZES = [[1440, 900], [1280, 800]];
const STOPS = 12;
// the hero's dashed ring turns on a 160s loop, so the two pages are never
// sampled at exactly the same angle — a few dozen pixels there is expected
const NOISE_FLOOR = 400;

async function walk(browser, url, width, height) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  // both webfaces must actually be usable before measuring: a screenshot taken
  // mid-FOUT re-wraps paragraphs and reads as a layout difference that is not one
  await page.waitForFunction(
    () => document.fonts.status === 'loaded'
      && document.fonts.check("700 46px 'Plus Jakarta Sans'")
      && document.fonts.check("600 11px 'JetBrains Mono'"),
    null,
    { timeout: 30000 },
  ).catch(() => {});
  // wait for the timed entrance animations to actually finish rather than
  // guessing a duration — the two pages boot at different speeds, and a
  // screenshot taken mid-wkFadeUp reads as a layout difference that is not one.
  // Scroll-driven animations are excluded (they never "finish"), as is the
  // hero's infinite 160s dial.
  await page.waitForFunction(() => document.getAnimations()
    .filter((a) => {
      const timed = a.timeline && a.timeline.constructor.name === 'DocumentTimeline';
      const t = a.effect && a.effect.getTiming();
      return timed && t && t.iterations !== Infinity;
    })
    .every((a) => a.playState === 'finished'), null, { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(1200);
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const frames = [];
  for (let i = 0; i < STOPS; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round(((total - height) * i) / (STOPS - 1)));
    await page.waitForTimeout(650);
    frames.push(await page.screenshot());
  }
  await page.close();
  return { total, frames };
}

if (!fs.existsSync(path.join(root, 'dist/index.html'))) {
  console.error('dist/index.html not found — run `npm run build` first.');
  process.exit(1);
}
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
let failed = false;

for (const [width, height] of SIZES) {
  const a = await walk(browser, ORIGINAL, width, height);
  const b = await walk(browser, BUILT, width, height);
  const heightNote = a.total === b.total ? 'match' : `MISMATCH ${a.total} vs ${b.total}`;
  let worst = 0;

  for (let i = 0; i < STOPS; i++) {
    const pa = PNG.sync.read(a.frames[i]);
    const pb = PNG.sync.read(b.frames[i]);
    const diff = new PNG({ width: pa.width, height: pa.height });
    const px = pixelmatch(pa.data, pb.data, diff.data, pa.width, pa.height, { threshold: 0.1 });
    worst = Math.max(worst, px);
    if (px > NOISE_FLOOR) {
      const stem = path.join(OUT, `${width}x${height}-stop${String(i).padStart(2, '0')}`);
      fs.writeFileSync(`${stem}-original.png`, a.frames[i]);
      fs.writeFileSync(`${stem}-built.png`, b.frames[i]);
      fs.writeFileSync(`${stem}-diff.png`, PNG.sync.write(diff));
      console.log(`  stop ${i}: ${px} px differ -> ${stem}-diff.png`);
    }
  }

  const ok = worst <= NOISE_FLOOR && a.total === b.total;
  if (!ok) failed = true;
  console.log(`${width}x${height}  page height ${heightNote}  worst stop ${worst} px  ${ok ? 'PASS' : 'FAIL'}`);
}

await browser.close();
process.exit(failed ? 1 : 0);
