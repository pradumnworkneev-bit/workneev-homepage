/**
 * Compares every interactive behaviour of the built React page against the
 * original design file. Run the reference server first:
 *   python -m http.server 5200
 * then:  node tools/behaviour-check.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILT = 'file:///' + path.join(root, 'dist/index.html').split(path.sep).join('/');
const ORIGINAL = 'http://127.0.0.1:5200/Workneev%20Homepage.dc.html';

const ROWS = '#dimensions [style*="grid-template-columns: 56px"], #dimensions div[data-dim]';

const activeRow = () => {
  const rows = [...document.querySelectorAll('#dimensions [style*="grid-template-columns: 56px"], #dimensions div[data-dim]')];
  const o = rows.map((r) => parseFloat(getComputedStyle(r).opacity));
  return o.indexOf(Math.max(...o)) + 1;
};

async function probe(browser, url, label) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message.slice(0, 120)));
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(2500);
  const r = { label };

  // --- count-up ---
  await page.evaluate(() => document.querySelectorAll('section')[5].scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(2600);
  r.counter = await page.evaluate(() => {
    const el = [...document.querySelectorAll('span')].find((s) => /^\d+$/.test(s.textContent.trim()) && s.nextElementSibling && s.nextElementSibling.textContent.includes('/100'));
    return el ? el.textContent.trim() : 'NOT FOUND';
  });

  // --- FAQ ---
  await page.evaluate(() => document.querySelector('details').scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(400);
  r.faqClosed = await page.evaluate(() => document.querySelector('details summary span:last-child').textContent.trim());
  await page.click('details summary');
  await page.waitForTimeout(500);
  r.faqOpen = await page.evaluate(() => document.querySelector('details summary span:last-child').textContent.trim());
  r.faqBodyVisible = await page.evaluate(() => document.querySelector('details > div').getBoundingClientRect().height > 20);
  await page.click('details summary');
  await page.waitForTimeout(400);
  r.faqReclosed = await page.evaluate(() => document.querySelector('details summary span:last-child').textContent.trim());

  // --- contact form ---
  await page.evaluate(() => document.querySelector('#contact').scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(400);
  const inputs = await page.$$('#contact form input');
  if (inputs[0]) await inputs[0].fill('Test Institute of Technology');
  if (inputs[1]) await inputs[1].fill('Principal');
  r.typedValue = inputs[0] ? await inputs[0].inputValue() : 'NO INPUT';
  r.noteBefore = await page.evaluate(() => document.querySelector('#contact form p').textContent.trim().slice(0, 34));
  await page.click('#contact form button[type=submit]');
  await page.waitForTimeout(600);
  r.noteAfter = await page.evaluate(() => document.querySelector('#contact form p').textContent.trim().slice(0, 34));
  r.noteColor = await page.evaluate(() => getComputedStyle(document.querySelector('#contact form p')).color);

  // --- dimensions: auto-advance, hover hold, click ---
  await page.evaluate(() => document.querySelector('#dimensions').scrollIntoView({ block: 'start' }));
  await page.mouse.move(720, 5);
  await page.waitForTimeout(1500);
  const seq = [];
  for (let i = 0; i < 26; i++) {
    const a = await page.evaluate(activeRow);
    if (seq[seq.length - 1] !== a) seq.push(a);
    await page.waitForTimeout(900);
  }
  r.sequence = seq.join('>');

  const rowHandles = await page.$$(ROWS);
  await rowHandles[4].hover();
  await page.waitForTimeout(600);
  r.hoverOpens = await page.evaluate(activeRow);
  await page.waitForTimeout(7000);
  r.hoverHolds = await page.evaluate(activeRow);
  await page.mouse.move(720, 5);
  await page.waitForTimeout(6500);
  r.releaseAdvances = (await page.evaluate(activeRow)) !== r.hoverHolds;
  await rowHandles[2].click({ position: { x: 5, y: 5 } });
  await page.waitForTimeout(800);
  r.clickSelects = await page.evaluate(activeRow);
  await page.mouse.move(720, 5);
  await page.waitForTimeout(300);

  // --- scroll progress bar at the bottom ---
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(900);
  r.progressBar = await page.evaluate(() => {
    const bar = document.querySelector('div[style*="z-index: 60"] > div, div[style*="z-index:60"] > div');
    if (!bar) return 'NOT FOUND';
    const m = new DOMMatrixReadOnly(getComputedStyle(bar).transform);
    return m.a.toFixed(2);
  });

  // --- sticky scrubbed scenes: which phase is lit at 3 depths ---
  const track = await page.evaluate(() => {
    const sec = [...document.querySelectorAll('section')].find((x) => x.querySelector('[style*="360vh"]'));
    if (!sec) return null;
    return { top: sec.offsetTop, h: sec.querySelector('[style*="360vh"]').offsetHeight };
  });
  const scenes = [];
  for (const f of [0.15, 0.45, 0.8]) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round(track.top + track.h * f));
    await page.waitForTimeout(800);
    scenes.push(await page.evaluate(() => {
      const sec = [...document.querySelectorAll('section')].find((x) => x.querySelector('[style*="360vh"]'));
      return [...sec.querySelectorAll('[style*="position: absolute"]')].slice(0, 4)
        .map((p) => Math.round(parseFloat(getComputedStyle(p).opacity) * 10)).join('');
    }));
  }
  r.scenes = scenes.join(' | ');

  r.errors = errors.length ? errors.join('; ') : 'none';
  await page.close();
  return r;
}

const browser = await chromium.launch();
const a = await probe(browser, ORIGINAL, 'ORIGINAL');
const b = await probe(browser, BUILT, 'REACT dist');
await browser.close();

const keys = Object.keys(a).filter((k) => k !== 'label');
let fails = 0;
console.log('\n' + 'check'.padEnd(17) + 'ORIGINAL'.padEnd(34) + 'REACT dist'.padEnd(34) + 'result');
console.log('-'.repeat(94));
for (const k of keys) {
  const av = String(a[k]);
  const bv = String(b[k]);
  const ok = av === bv;
  if (!ok) fails++;
  console.log(k.padEnd(17) + av.slice(0, 32).padEnd(34) + bv.slice(0, 32).padEnd(34) + (ok ? 'match' : '*** DIFFER ***'));
}
console.log('-'.repeat(94));
console.log(fails === 0 ? 'ALL BEHAVIOURS MATCH' : `${fails} behaviour(s) differ`);
process.exit(fails ? 1 : 0);
