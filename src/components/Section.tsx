import type { ReactNode } from "react";
import Ribbon from "./Ribbon";

type SectionProps = {
  id?: string;
  /** Background colour class, e.g. "bg-sky-wash" */
  className?: string;
  ribbon?: "a" | "b" | "c";
  ribbonClassName?: string;
  innerClassName?: string;
  children: ReactNode;
};

/** Full-bleed colour band with a centred 1440px container. */
export default function Section({
  id,
  className = "",
  ribbon,
  ribbonClassName,
  innerClassName = "py-20 md:py-28",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {ribbon && <Ribbon variant={ribbon} className={ribbonClassName} />}
      <div className={`relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
