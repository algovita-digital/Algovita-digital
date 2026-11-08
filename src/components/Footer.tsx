import { site } from "@/data/site";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-carbon text-paper-white">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <a
              href="#top"
              className="inline-flex w-fit items-center gap-2"
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
            <p className="max-w-sm text-xs leading-relaxed text-white/70">
              {site.tagline}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase leading-none tracking-[0.032em] underline-offset-4 hover:underline focus-visible:outline-paper-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-white/20 pt-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="w-fit font-bold uppercase tracking-[0.032em] underline-offset-4 hover:underline focus-visible:outline-paper-white"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
