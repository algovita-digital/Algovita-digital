/** Sticker palette from DESIGN.md. Full class strings so Tailwind can detect them. */
export type Accent = "blue" | "mint" | "lavender" | "ember" | "sun" | "violet" | "white";

export const accentClasses: Record<Accent, string> = {
  blue: "bg-electric-blue text-carbon",
  mint: "bg-mint-pop text-carbon",
  lavender: "bg-lavender text-carbon",
  ember: "bg-ember text-paper-white",
  sun: "bg-sunburst text-carbon",
  violet: "bg-voltage-violet text-paper-white",
  white: "bg-paper-white text-carbon",
};
