/**
 * The Workneev logo: a rounded-square mark holding a lowercase "n", and the
 * lowercase wordmark with its middle "n" in the brand colour. Drawn entirely
 * as SVG, and coloured from --logo-word / --logo-n so it follows whichever
 * theme the surrounding section is using.
 */
export default function Logo({ size = 30, markOnly = false, title = 'Workneev' }) {
  // the mark occupies a 32-unit square; the wordmark runs to x = 152
  const vbW = markOnly ? 32 : 152;
  const uid = markOnly ? 'wk-logo-mark' : 'wk-logo';

  return (
    <svg
      width={(size * vbW) / 32}
      height={size}
      viewBox={`0 0 ${vbW} 32`}
      fill="none"
      overflow="visible"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9a73f5" />
          <stop offset=".55" stopColor="#6a3bc4" />
          <stop offset="1" stopColor="#4a2589" />
        </linearGradient>
        <linearGradient id={`${uid}-hl`} x1="16" y1="1" x2="16" y2="15.4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* the mark: glossy violet square, soft top highlight, 1px inner light edge */}
      <rect x="0" y="0" width="32" height="32" rx="7" fill={`url(#${uid}-g)`} />
      <path d="M7 1h18a6 6 0 0 1 6 6v8.4H1V7a6 6 0 0 1 6-6Z" fill={`url(#${uid}-hl)`} />
      <rect x=".75" y=".75" width="30.5" height="30.5" rx="6.25" stroke="#fff" strokeOpacity=".28" strokeWidth="1.5" />
      <g stroke="#fff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.4 23.2V13.6" />
        <path d="M10.4 17.5c0-2.5 2-4 4.4-4s4.4 1.7 4.4 4.3v5.4" />
      </g>

      {/* the wordmark */}
      {!markOnly && (
        <text
          x="42"
          y="23.6"
          fontFamily="Outfit, Manrope, system-ui, sans-serif"
          fontSize="23"
          fontWeight="600"
          letterSpacing="-0.23"
          fill="var(--logo-word)"
        >
          work
          <tspan fill="var(--logo-n)">n</tspan>
          eev
        </text>
      )}
    </svg>
  );
}
