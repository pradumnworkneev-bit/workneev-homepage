import { useEffect, useState } from 'react';

const MODULES = [
  ['Trainer Workspace', 'Plan, run and follow every cohort.'],
  ['Student Portfolio', 'A record of what each student has built.'],
  ['School Admin', 'One view across programmes and batches.'],
  ['Coding Lab', 'Write, run and test code in the classroom.'],
];

const TABS = ['Overview', 'Batches', 'Coding Lab', 'Verification'];

/* Everything below is illustrative sample data, labelled as such in the panel.
   In a code line, |pipes| mark the Python keywords. */
const BATCHES = [
  { name: 'Batch A', trainer: 'Trainer 1', students: 24, progress: 72 },
  { name: 'Batch B', trainer: 'Trainer 2', students: 19, progress: 48 },
  { name: 'Batch C', trainer: 'Trainer 3', students: 27, progress: 31 },
];

const PROBLEMS = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    level: 'Easy',
    pass: 82,
    file: 'solution.py',
    code: [
      '|def| two_sum(nums, target):',
      '    seen = {}',
      '    |for| i, x |in| enumerate(nums):',
      '        |if| target - x |in| seen:',
      '            |return| [seen[target - x], i]',
      '        seen[x] = i',
    ],
  },
  {
    id: 'parens',
    title: 'Valid Parentheses',
    level: 'Medium',
    pass: 64,
    file: 'parens.py',
    code: [
      '|def| is_valid(s):',
      '    pairs, stack = {")": "(", "]": "["}, []',
      '    |for| c |in| s:',
      '        |if| c |in| pairs:',
      '            |if| |not| stack |or| stack.pop() != pairs[c]:',
      '                |return| False',
      '        |else|: stack.append(c)',
      '    |return| |not| stack',
    ],
  },
  {
    id: 'schedule',
    title: 'Course Schedule',
    level: 'Hard',
    pass: 41,
    file: 'schedule.py',
    code: [
      '|def| can_finish(n, prereqs):',
      '    graph, seen = {}, [0] * n',
      '    |for| a, b |in| prereqs:',
      '        graph.setdefault(b, []).append(a)',
      '    |def| walk(u):',
      '        |if| seen[u]: |return| seen[u] == 2',
      '        seen[u] = 1',
      '        |return| all(walk(v) |for| v |in| graph.get(u, []))',
    ],
  },
];

const QUEUE = [
  { id: 's1', student: 'Student 1', batch: 'Batch A', problem: 'Two Sum', when: '2 hours ago' },
  { id: 's2', student: 'Student 2', batch: 'Batch B', problem: 'Valid Parentheses', when: 'Yesterday' },
  { id: 's3', student: 'Student 3', batch: 'Batch A', problem: 'Course Schedule', when: 'Yesterday' },
];

/** One code line, with the pipe-marked keywords picked out. */
function CodeLine({ text }) {
  return (
    <>
      {text.split('|').map((part, i) =>
        i % 2 ? (
          <span className="k" key={i}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
      {'\n'}
    </>
  );
}

function Editor({ problem }) {
  const [out, setOut] = useState({ text: 'Press Run to test this solution.', ok: false });

  useEffect(() => {
    setOut({ text: 'Press Run to test this solution.', ok: false });
  }, [problem.id]);

  const run = () => {
    setOut({ text: 'Running tests…', ok: false });
    setTimeout(() => setOut({ text: '✓ Sample tests passed · saved to portfolio', ok: true }), 700);
  };

  return (
    <div className="code" aria-label={`Sample Python solution in the Coding Lab: ${problem.title}`}>
      <div className="code-top">
        <span>{problem.file} · Python 3</span>
        <button className="run" onClick={run}>
          Run ▸
        </button>
      </div>
      {problem.code.map((line, i) => (
        <CodeLine key={i} text={line} />
      ))}
      <div className={`out${out.ok ? ' ok' : ''}`} aria-live="polite">
        {out.text}
      </div>
    </div>
  );
}

/** One tab panel. The ones not showing are inert, so they stay out of the tab order. */
function Panel({ on, label, children }) {
  return (
    <div className={`pane-panel${on ? ' on' : ''}`} role="tabpanel" aria-label={label} inert={!on}>
      {children}
    </div>
  );
}

export default function Kovaan({ onPrefill }) {
  const [tab, setTab] = useState('Overview');
  const [problem, setProblem] = useState(PROBLEMS[0]);
  const [queue, setQueue] = useState(QUEUE.map((q) => ({ ...q, gone: false })));
  const [barsOn, setBarsOn] = useState(false);

  const awaiting = queue.filter((q) => !q.gone).length;

  // the batch bars grow each time that panel is opened
  useEffect(() => {
    if (tab !== 'Batches') {
      setBarsOn(false);
      return undefined;
    }
    const t = setTimeout(() => setBarsOn(true), 60);
    return () => clearTimeout(t);
  }, [tab]);

  const resolve = (id) => setQueue((q) => q.map((s) => (s.id === id ? { ...s, gone: true } : s)));

  return (
    <section className="band" id="kovaan">
      <div className="wrap kovaan">
        <div data-reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="eyebrow">Built by Workneev</span>
            <span
              className="tag violet"
              style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', padding: '3px 8px' }}
            >
              Product
            </span>
          </div>
          <h2 className="h2 heavy">Kovaan OS.</h2>
          <p className="sub">The operating layer for learning.</p>
          <p className="lede">
            Our advisory work keeps finding the same gap: leadership cannot see what trainers, students and
            administrators are doing day to day. Kovaan OS is the product we built for it, for colleges first
            and for schools whose curriculum now includes coding.
          </p>
          <div className="mods">
            {MODULES.map(([b, s]) => (
              <div key={b}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="ctas" style={{ marginTop: 28 }}>
            <a className="btn btn-primary" href="https://www.kovaan.com/" target="_blank" rel="noopener">
              Visit Kovaan OS
            </a>
            <a className="btn btn-secondary" href="#contact" onClick={() => onPrefill('Kovaan OS')}>
              Ask about it
            </a>
          </div>
          <p className="kept">
            <b>Kept separate.</b> Kovaan is offered on its own. It is never a condition of an engagement, and
            a Diagnostic does not recommend it.
          </p>
        </div>

        <div
          className="card portal"
          data-reveal
          style={{ '--d': '.1s' }}
          aria-label="Preview of the Kovaan OS Trainer Workspace"
        >
          <div className="side" role="tablist" aria-label="Kovaan OS sections" aria-orientation="vertical">
            <div className="logo">
              Kovaan<span> OS</span>
            </div>
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-pressed={tab === t}
                aria-selected={tab === t}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="pane">
            <div className="row-between">
              <div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Trainer Workspace</div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{tab}</div>
              </div>
              <span className="tag sample">Sample data</span>
            </div>

            <div className="pane-swap">
              <Panel on={tab === 'Overview'} label="Overview">
                <div className="kpis">
                  <div className="kpi">
                    <small>Students</small>
                    <b>70</b>
                  </div>
                  <div className="kpi">
                    <small>Problems set</small>
                    <b>12</b>
                  </div>
                  <div className="kpi">
                    <small>Awaiting review</small>
                    <b style={{ color: 'var(--pending)' }}>{awaiting}</b>
                  </div>
                </div>
                <Editor problem={problem} />
              </Panel>

              <Panel on={tab === 'Batches'} label="Batches">
                <div className="rows">
                  {BATCHES.map((b) => (
                    <div className="brow2" key={b.name}>
                      <div>
                        <b>{b.name}</b>
                        <small>
                          {b.trainer} · {b.students} students
                        </small>
                      </div>
                      <div className="bar" role="img" aria-label={`${b.progress} per cent of the syllabus covered`}>
                        <i style={{ width: barsOn ? `${b.progress}%` : 0 }} />
                      </div>
                      <span className="pc">{b.progress}%</span>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel on={tab === 'Coding Lab'} label="Coding Lab">
                <div className="rows">
                  {PROBLEMS.map((p) => (
                    <button
                      className={`prow${problem.id === p.id ? ' on' : ''}`}
                      key={p.id}
                      aria-pressed={problem.id === p.id}
                      onClick={() => setProblem(p)}
                    >
                      <b>{p.title}</b>
                      <span className={`chip ${p.level.toLowerCase()}`}>{p.level}</span>
                      <span className="pc">{p.pass}% pass</span>
                    </button>
                  ))}
                </div>
                <Editor problem={problem} />
              </Panel>

              <Panel on={tab === 'Verification'} label="Verification">
                <p className="qhead">
                  Awaiting review: <b>{awaiting}</b>
                </p>
                <div className="rows">
                  {queue.map((s) => (
                    <div className={`qrow${s.gone ? ' gone' : ''}`} key={s.id}>
                      <div>
                        <b>{s.student}</b>
                        <small>
                          {s.batch} · {s.problem} · {s.when}
                        </small>
                      </div>
                      <div className="qbtns">
                        <button className="qbtn ok" onClick={() => resolve(s.id)}>
                          Approve
                        </button>
                        <button className="qbtn" onClick={() => resolve(s.id)}>
                          Return
                        </button>
                      </div>
                    </div>
                  ))}
                  {awaiting === 0 && <p className="qhead">Queue clear. Nothing awaiting review.</p>}
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
