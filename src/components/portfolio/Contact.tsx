import { ArrowUpRight, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border"
    >
      {/* soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.14),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              index="06"
              eyebrow="Contact"
              title="Let's build something serious."
              description="Whether it's a full-time role, a contract, or a project that needs shipping — I'm open to the conversation."
            />

            <Reveal delay={0.16}>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-10 inline-flex items-center gap-4"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                  <Mail className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Write to me
                  </span>
                  <span className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand sm:text-2xl">
                    {profile.email}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green" />
                </span>
                Currently {profile.availability.toLowerCase()}
              </p>
            </Reveal>
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Elsewhere on the internet
              </p>
            </Reveal>
            <div className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur">
              {socialLinks.map((social, i) => (
                <Reveal key={social.label} delay={i * 0.05}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent/50"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-ink/70 transition-colors group-hover:border-brand/40 group-hover:text-brand">
                        <SocialIcon icon={social.icon} className="size-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-display text-sm font-medium text-ink">
                          {social.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {social.handle}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
