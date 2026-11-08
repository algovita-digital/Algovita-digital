import { ArrowUpRight, Check, Code2, Sparkles, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Sticker from "./Sticker";
import Button from "./Button";
import Reveal from "./Reveal";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconSurface: string;
  surface: string;
  tagSurface: string;
  tags: string[];
  items: { title: string; detail: string }[];
};

const services: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Fast, modern websites and apps built for local businesses and startups that want to look sharp and sell online.",
    icon: Code2,
    iconSurface: "bg-electric-blue",
    surface: "bg-paper-white text-carbon",
    tagSurface: "bg-lavender",
    tags: ["Next.js", "React", "Tailwind CSS"],
    items: [
      {
        title: "Modern landing pages",
        detail: "Mobile-first pages designed to turn visitors into enquiries.",
      },
      {
        title: "Mini e-commerce stores",
        detail: "Simple storefronts that let you sell online without the bloat.",
      },
      {
        title: "High-speed web apps",
        detail: "Custom apps for startups that need to launch and scale quickly.",
      },
    ],
  },
  {
    title: "AI Automation Solutions",
    description:
      "Chatbots and workflow automations that reply instantly, capture leads, and keep your sales moving while you sleep.",
    icon: Workflow,
    iconSurface: "bg-sunburst",
    surface: "bg-voltage-violet text-paper-white",
    tagSurface: "bg-paper-white text-carbon",
    tags: ["ManyChat", "Make.com", "WhatsApp", "Instagram"],
    items: [
      {
        title: "Custom AI chatbots",
        detail: "Lead-generation and support bots that answer questions and qualify prospects 24/7.",
      },
      {
        title: "Instagram automations",
        detail: "ManyChat flows that reply to comments and DMs and capture contact details.",
      },
      {
        title: "WhatsApp workflows",
        detail: "Make.com scenarios that connect your forms, sheets, and WhatsApp so no lead slips through.",
      },
    ],
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      className="bg-concrete-gray"
      ribbon="c"
      ribbonClassName="inset-x-0 top-0 h-[70%] w-full max-sm:top-[8%] max-sm:h-90"
    >
      <Sticker icon={Check} accent="mint" size="sm" className="motion-float left-3 top-4 hidden -rotate-12 md:grid" />
      <Sticker icon={Sparkles} accent="violet" size="sm" className="motion-float right-5 top-10 hidden rotate-[10deg] md:grid" />

      <SectionHeading
        title="Services"
        tagline="Two focused services, built to help local businesses and startups grow online."
      />

      <div className="motion-stagger mt-20 grid gap-6 md:mt-28 lg:grid-cols-2 lg:gap-8">
        {services.map(({ title, description, icon: Icon, iconSurface, surface, tagSurface, tags, items }) => (
          <Reveal
            as="article"
            key={title}
            className={`motion-lift flex flex-col rounded-card-lg border border-carbon p-6 md:p-10 ${surface}`}
          >
            <div className={`grid size-14 place-items-center rounded-icon border border-carbon text-carbon ${iconSurface}`}>
              <Icon className="size-7" strokeWidth={2.25} />
            </div>

            <h3 className="mt-8 text-[30px] font-bold leading-[1.1]">{title}</h3>
            <p className="mt-4 max-w-lg text-[15px] font-medium leading-[1.39]">{description}</p>

            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${title} technologies`}>
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={`rounded-pill border border-carbon px-3 py-1.5 text-xs font-bold leading-none tracking-[0.03em] text-carbon ${tagSurface}`}
                >
                  {tag}
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-card border border-carbon bg-paper-white p-4 text-carbon"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-pill border border-carbon bg-mint-pop">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-[15px] font-bold leading-[1.2]">{item.title}</p>
                    <p className="mt-1 text-[13px] font-medium leading-[1.4]">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact" icon={<ArrowUpRight className="size-4" strokeWidth={2.5} />}>
                Start a project
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
