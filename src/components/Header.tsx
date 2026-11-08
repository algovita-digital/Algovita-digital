"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";
import Button from "./Button";

const pill =
  "rounded-pill border border-carbon bg-paper-white px-3 py-[15px] text-[13px] font-bold leading-none tracking-[0.032em] transition-colors duration-150 hover:bg-carbon hover:text-paper-white";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // Fixed 72px height + matching negative margin lets the bar float over the hero colour band.
    <header className="sticky top-0 z-50 -mb-[72px] h-[72px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-2 px-4 md:gap-3 md:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-1 rounded-pill border border-carbon bg-white py-1.5 pl-1.5 pr-4"
          aria-label={`${site.name} — home`}
        >
          <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-pill">
            <Image
              src="/algovita-favicon.png"
              alt=""
              width={100}
              height={100}
              className="size-full object-contain"
            />
          </span>
          <span className="font-bowlby-sc whitespace-nowrap text-[13px] leading-none tracking-[0.032em]">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} className={pill}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <Button href="#contact" variant="filled" size="sm" className="!hidden shrink-0 whitespace-nowrap !px-3 min-[360px]:!inline-flex md:!px-4">
            Get in Touch
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-pill border border-carbon bg-paper-white md:hidden"
          >
            {open ? <X className="size-5" strokeWidth={2.5} /> : <Plus className="size-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mx-4 flex flex-col gap-2 rounded-card border border-carbon bg-paper-white p-3 md:hidden"
        >
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-pill border border-carbon px-4 py-3 text-sm font-bold tracking-[0.032em] hover:bg-carbon hover:text-paper-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="filled" size="md" className="sm:hidden">
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
