import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "filled" | "ghost";
  size?: "sm" | "md";
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

const variants = {
  // Filled CTA: black fill, white text, 40px radius (DESIGN.md)
  filled:
    "rounded-card-lg bg-carbon text-paper-white hover:bg-paper-white hover:text-carbon",
  // Outlined ghost: white fill, black text, pill radius
  ghost:
    "rounded-pill bg-paper-white text-carbon hover:bg-carbon hover:text-paper-white",
};

const sizes = {
  sm: "px-4 py-[15px] text-[13px]",
  md: "px-6 py-4 text-sm",
};

export default function Button({
  href,
  variant = "ghost",
  size = "md",
  icon,
  className = "",
  children,
}: ButtonProps) {
  const isWeb = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`motion-press inline-flex items-center justify-center gap-2 border border-carbon font-bold leading-none tracking-[0.032em] transition-colors duration-150 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
