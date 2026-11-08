"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  as?: "article" | "div" | "h2";
  className?: string;
  children: ReactNode;
};

export default function Reveal({
  as = "div",
  className = "",
  children,
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const revealClassName = `motion-reveal ${className}`.trim();
  const revealState = visible ? "visible" : "pending";
  const setElementRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const bounds = element.getBoundingClientRect();
    const inViewport =
      bounds.bottom > 0 &&
      bounds.top < window.innerHeight * 1.08;

    if (!inViewport) {
      setVisible(false);
    }

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  if (as === "article") {
    return (
      <article
        ref={setElementRef}
        className={revealClassName}
        data-reveal-state={revealState}
      >
        {children}
      </article>
    );
  }

  if (as === "h2") {
    return (
      <h2
        ref={setElementRef}
        className={revealClassName}
        data-reveal-state={revealState}
      >
        {children}
      </h2>
    );
  }

  return (
    <div
      ref={setElementRef}
      className={revealClassName}
      data-reveal-state={revealState}
    >
      {children}
    </div>
  );
}
