import { Layers, Bot, Target, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Sticker from "./Sticker";
import Reveal from "./Reveal";

type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
  surface: string; // full class strings so Tailwind detects them
  layout: string;
};

const pillars: Pillar[] = [
  {
    title: "Modern Tech Stack",
    description:
      "React and Next.js under the hood, so your site loads fast, ranks well, and is easy to grow as your business does.",
    icon: Layers,
    surface: "bg-electric-blue",
    layout: "md:-rotate-1",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Chatbots and automations that answer customers, capture leads, and take repetitive work off your plate around the clock.",
    icon: Bot,
    surface: "bg-lavender",
    layout: "md:translate-y-10 md:rotate-1",
  },
  {
    title: "Result-Driven Approach",
    description:
      "Every project starts with a goal — more enquiries, faster replies, higher sales — and we measure our work against it.",
    icon: Target,
    surface: "bg-mint-pop",
    layout: "md:-rotate-1",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      className="bg-paper-white"
      ribbon="b"
      ribbonClassName="inset-x-0 top-5 h-[95%] w-full max-sm:top-[10%] max-sm:h-80"
    >
      <Sticker icon={Sparkles} accent="sun" size="md" className=" motion-float right-6 top-4 hidden rotate-12 md:grid" />

      <SectionHeading
        title="Why Algovita Digital"
        tagline="Modern code, smart automation, and a focus on results you can measure."
      />

      <div className="motion-stagger mt-20 grid gap-6 md:mt-28 md:grid-cols-3 md:gap-8">
        {pillars.map(({ title, description, icon: Icon, surface, layout }) => (
          <Reveal
            as="article"
            key={title}
            className={`motion-lift rounded-card-lg border border-carbon p-6 md:p-8 ${surface} ${layout}`}
          >
            <div className="grid size-14 place-items-center rounded-icon border border-carbon bg-paper-white">
              <Icon className="size-7" strokeWidth={2.25} />
            </div>
            <h3 className="mt-8 text-[30px] font-bold leading-[1.1]">{title}</h3>
            <p className="mt-4 text-[15px] font-medium leading-[1.39]">{description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
