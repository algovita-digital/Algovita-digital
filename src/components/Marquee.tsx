const MESSAGES = [
  "Now booking projects for 2026",
  "Next.js web development",
  "AI chatbots & automation",
  "Algovita Digital",
];

/** Black scrolling announcement strip. Two copies make the loop seamless. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {MESSAGES.map((m) => (
        <span
          key={m}
          className="px-6 py-2 text-xs font-bold uppercase leading-none tracking-[0.032em] whitespace-nowrap"
        >
          {m}
          <span className="ml-12" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-carbon text-paper-white">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
