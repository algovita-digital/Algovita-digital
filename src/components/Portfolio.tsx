import { ArrowUpRight, Rocket } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { accentClasses } from "@/lib/accents";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Sticker from "./Sticker";
import Button from "./Button";
import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="bg-sky-wash"
      ribbon="a"
      ribbonClassName="inset-x-0 top-0 h-[75%] w-full max-sm:top-20 max-sm:h-80"
    >
      <Sticker icon={Rocket} accent="ember" size="md" className="motion-float right-6 top-5 hidden -rotate-12 md:grid" />

      <SectionHeading
        title="Selected Work"
        tagline="A look at what we build, from online stores to AI assistants."
      />

      {/* Add or edit projects in data/projects.ts — this grid maps over the array. */}
      <div className="motion-stagger mt-20 grid gap-6 md:mt-28 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <Reveal
            as="article"
            key={project.id}
            className="motion-lift flex flex-col overflow-hidden rounded-card-lg border border-carbon bg-paper-white"
          >
            <div
              className={`relative grid h-56 place-items-center border-b border-carbon ${accentClasses[project.accent]}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              ) : (
                <span aria-hidden="true" className="display-type font-lateral text-[8rem] text-carbon">
                  {project.mark}
                </span>
              )}
              <span className="rounded-pill absolute left-4 top-4 border border-carbon bg-paper-white px-3 py-1.5 text-xs font-bold leading-none tracking-[0.03em] text-carbon">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-[24px] font-bold leading-[1.2]">{project.title}</h3>
              <p className="mt-3 text-[15px] font-medium leading-[1.39]">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-pill border border-carbon bg-soft-mist px-3 py-1.5 text-xs font-bold leading-none tracking-[0.03em]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  href={project.href}
                  icon={<ArrowUpRight className="size-4" strokeWidth={2.5} />}
                >
                  View project
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
