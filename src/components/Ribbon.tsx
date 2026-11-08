/**
 * Stand-in for the 3D inflatable ribbon in DESIGN.md.
 * A thick flat-colour tube (no gradients) with a grainy texture filter.
 * Swap for a real 3D render later by replacing this component's contents with an <Image />.
 */
const PATHS = {
  a: "M-80 430 C 180 120, 420 120, 640 330 S 1040 560, 1260 250 S 1500 120, 1560 200",
  b: "M-60 140 C 220 520, 520 520, 760 260 S 1180 -40, 1500 300",
  c: "M-40 360 C 260 60, 560 60, 720 300 S 1100 560, 1480 180",
} as const;

type RibbonProps = {
  variant?: keyof typeof PATHS;
  /** Positioning classes. Defaults to filling the parent section. */
  className?: string;
};

export default function Ribbon({
  variant = "a",
  className = "inset-0 h-full w-full",
}: RibbonProps) {
  const d = PATHS[variant];
  const filterId = `ribbon-grain-${variant}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute z-0 ${className}`}
    >
      <defs>
        <filter
          id={filterId}
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0"
            result="grain"
          />
          <feComposite in="grain" in2="SourceAlpha" operator="in" result="grainClipped" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="grainClipped" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter={`url(#${filterId})`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Electric Blue base tube */}
        <path d={d} stroke="#4da2ff" strokeWidth="120" />
        {/* Flat-colour shading bands give the "inflated" feel without gradients */}
        <path d={d} stroke="#2f86ec" strokeWidth="26" transform="translate(0 34)" />
        <path d={d} stroke="#9ccbff" strokeWidth="24" transform="translate(0 -34)" />
      </g>
    </svg>
  );
}
