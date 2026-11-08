import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { site } from "@/data/site";
import Section from "./Section";
import Sticker from "./Sticker";
import Button from "./Button";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-paper-white"
      ribbon="b"
      ribbonClassName="inset-x-0 top-0 h-[100%] w-full max-sm:top-59 max-sm:h-76"
    >
      <Sticker icon={Send} accent="violet" size="lg" className="motion-float right-5 top-5 hidden rotate-12 md:grid" />
      <Sticker icon={MessageCircle} accent="mint" size="md" className="motion-float right-[22%] top-[18%] hidden -rotate-6 lg:grid" />

      <Reveal as="h2" className="display-type font-lateral text-[clamp(2.5rem,12vw,11rem)]">
        Let&apos;s talk
      </Reveal>

      <div className="motion-stagger mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <Reveal>
          <p className="max-w-xl text-[clamp(1.05rem,1.8vw,1.5rem)] font-medium leading-[1.25]">
            {site.tagline} Tell us what you&apos;re building and we&apos;ll reply
            with a clear plan.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Social media">
            {site.socials.map((social) => (
              <li key={social.label}>
                <Button
                  href={social.href}
                  icon={<ArrowUpRight className="size-4" strokeWidth={2.5} />}
                >
                  {social.label}
                </Button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="motion-lift rounded-card-lg border border-carbon bg-voltage-violet p-6 text-paper-white md:p-8">
          <h3 className="text-[30px] font-bold leading-[1.1]">Start a conversation</h3>
          <p className="mt-3 text-[15px] font-medium leading-[1.39]">
            The fastest way to reach us is WhatsApp. Email works just as well.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Button
              href={site.whatsappUrl}
              variant="filled"
              icon={<MessageCircle className="size-4" strokeWidth={2.5} />}
            >
              Chat on WhatsApp
            </Button>
            <Button
              href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(site.email)}`}
              icon={<Mail className="size-4" strokeWidth={2.5} />}
            >
              {site.email}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
