/** The illustrative Institutional Transformation Score, shared by the radar and the bars. */
export const FULL = [
  'Strategy, Transformation & Governance',
  'Autonomy, Growth & University Readiness',
  'Academic & Curriculum Architecture',
  'Faculty & Academic Capability',
  'Student Success & Employability',
  'Industry & Talent Ecosystem',
  'Research, Innovation & Entrepreneurship',
  'Quality & Institutional Excellence',
  'Digital, Data & Institutional Technology',
];

/** [short label, score, is a constraint] — in radar order. */
export const DIMS = [
  ['Strategy', 58, 1],
  ['Autonomy', 47, 1],
  ['Academic', 79, 0],
  ['Faculty', 73, 0],
  ['Student', 68, 0],
  ['Industry', 52, 1],
  ['Research', 66, 0],
  ['Quality', 83, 0],
  ['Digital', 72, 0],
];

export const MEDIAN = 61;

/** The bars, in the order the prototype lists them. */
export const ROWS = [
  { s: 83, o: 4, label: 'Quality & Institutional Excellence' },
  { s: 79, o: 5, label: 'Academic & Curriculum Architecture' },
  { s: 73, o: 6, label: 'Faculty & Academic Capability' },
  { s: 72, o: 7, label: 'Digital, Data & Institutional Technology' },
  { s: 68, o: 8, label: 'Student Success & Employability' },
  { s: 66, o: 9, label: 'Research, Innovation & Entrepreneurship' },
  { s: 58, o: 3, label: 'Strategy, Transformation & Governance', c: true, ord: 'Third' },
  { s: 52, o: 2, label: 'Industry & Talent Ecosystem', c: true, ord: 'Second' },
  { s: 47, o: 1, label: 'Autonomy, Growth & University Readiness', c: true, ord: 'First' },
];
