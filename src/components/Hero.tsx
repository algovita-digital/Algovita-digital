import { ArrowDown, Bot, Check, Code2, MessageCircle, Rocket } from "lucide-react";
import Section from "./Section";
import Sticker from "./Sticker";
import Button from "./Button";

const stack = ["Next.js", "React", "Tailwind CSS", "AI chatbots", "Make.com", "ManyChat"];

export default function Hero() {
  return (
    <Section
      id="top"
      className="bg-sky-wash"
      ribbon="a"
      ribbonClassName="inset-0 h-full w-full max-sm:inset-x-0 max-sm:top-[23%] max-sm:bottom-auto max-sm:h-89"
      innerClassName="pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Sticker cluster: asymmetric, rotated, overlapping — never grid-aligned */}
      <Sticker icon={Rocket} accent="ember" size="lg" className="motion-float right-8 top-28 hidden rotate-12 md:grid" />
      <Sticker icon={Code2} accent="violet" size="md" className="motion-float motion-float-delay-1 right-[22%] top-[58%] hidden -rotate-6 md:grid" />
      <Sticker icon={Bot} accent="sun" size="md" className="motion-float motion-float-delay-2 right-[4%] top-[50%] hidden rotate-[8deg] lg:grid" />

      <h1 className="motion-enter display-type font-lateral text-[clamp(2rem,6.8vw,6.25rem)] lg:max-w-[80%] leading-[0.95]">
        Transforming Businesses with Next-Gen Web Development &amp; AI Automation
      </h1>

      <p className="motion-enter motion-delay-1 mt-10 max-w-xl text-[clamp(1.05rem,1.8vw,1.5rem)] font-medium leading-[1.25]">
        We build high-performance web applications and intelligent AI automations
        that save time, scale sales, and elevate your brand.
      </p>

      <div className="motion-enter motion-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
        <Button href="#services" icon={<ArrowDown className="size-4" strokeWidth={2.5} />}>
          Explore Services
        </Button>
        <Button href="#contact">Let&apos;s Talk</Button>
      </div>

      <div aria-hidden="true" className="motion-enter motion-delay-3 mt-8 flex items-center justify-center gap-4 md:hidden">
        <span className="motion-float grid size-12 rotate-[-8deg] place-items-center rounded-card border border-carbon bg-electric-blue">
          <Code2 className="size-6" strokeWidth={2.25} />
        </span>
        <span className="motion-float motion-float-delay-1 grid size-12 translate-y-2 rotate-[6deg] place-items-center rounded-card border border-carbon bg-sunburst">
          <Bot className="size-6" strokeWidth={2.25} />
        </span>
        <span className="motion-float motion-float-delay-2 grid size-12 rotate-[-5deg] place-items-center rounded-card border border-carbon bg-mint-pop">
          <MessageCircle className="size-6" strokeWidth={2.25} />
        </span>
      </div>

      <ul className="motion-enter motion-delay-3 mt-8 flex max-w-xl flex-wrap justify-center gap-1.5 md:mt-12 md:justify-start" aria-label="Technologies we work with">
        {stack.map((item) => (
          <li
            key={item}
            className="motion-press rounded-pill border border-carbon bg-lavender px-3 py-1.5 text-xs font-bold leading-none tracking-[0.03em] transition-[translate,color,background-color] duration-150 hover:bg-carbon hover:text-paper-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
