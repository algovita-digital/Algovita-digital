import Reveal from "./Reveal";

type SectionHeadingProps = {
  title: string;
  tagline: string;
};

/** Display headline + Aeonik tagline pair (DESIGN.md: display type is always paired with a tagline). */
export default function SectionHeading({ title, tagline }: SectionHeadingProps) {
  return (
    <Reveal>
      <h2 className="display-type font-lateral max-w-[14ch] text-[clamp(2.5rem,8vw,7.5rem)]">
        {title}
      </h2>
      <p className="mt-8 max-w-xl text-[clamp(1.05rem,1.8vw,1.5rem)] font-medium leading-[1.25]">
        {tagline}
      </p>
    </Reveal>
  );
}
