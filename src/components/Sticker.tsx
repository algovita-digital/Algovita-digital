import type { LucideIcon } from "lucide-react";
import { accentClasses, type Accent } from "@/lib/accents";

const sizes = {
  sm: { box: "size-12 rounded-icon", icon: "size-6" },
  md: { box: "size-[72px] rounded-card", icon: "size-9" },
  lg: { box: "size-24 rounded-card", icon: "size-12" },
};

type StickerProps = {
  icon: LucideIcon;
  accent: Accent;
  size?: keyof typeof sizes;
  /** Position + rotation, e.g. "right-4 top-2 -rotate-12" */
  className?: string;
};

/** Decorative cut-out: 1px black outline, flat fill, slightly rotated, never grid-aligned. */
export default function Sticker({
  icon: Icon,
  accent,
  size = "md",
  className = "",
}: StickerProps) {
  const s = sizes[size];
  return (
    <div
      aria-hidden="true"
      className={`absolute z-20 grid place-items-center border border-carbon ${s.box} ${accentClasses[accent]} ${className}`}
    >
      <Icon className={s.icon} strokeWidth={2.25} />
    </div>
  );
}
