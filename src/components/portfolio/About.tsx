import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { profile, services } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Introduction */}
        <div>
          <SectionHeading
            index="02"
            eyebrow="A little about me"
            title="Still learning. Already building."
          />

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-4 rounded-xl border border-brand/30 bg-brand/5 px-5 py-4 text-sm font-medium text-brand transition-all hover:border-brand hover:bg-brand hover:text-primary-foreground hover:shadow-[0_12px_30px_rgba(15,118,110,0.18)]"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-brand">
                <ArrowUpRight className="size-4" />
              </span>
              <span className="flex flex-col items-start gap-0.5">
                <span className="text-xs uppercase tracking-[0.18em] opacity-70">
                  Background &amp; experience
                </span>
                <span className="font-display text-base">View résumé</span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* Services */}
        <div>
          <Reveal>
            <div className="flex items-end justify-between gap-5 border-b border-border pb-4">
              <div>
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                  <span className="font-display text-sm text-gold">02B</span>
                  Services
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  What I can help with.
                </h3>
              </div>
              <span className="hidden font-display text-xs text-muted-foreground sm:block">
                04 offerings
              </span>
            </div>
          </Reveal>

          <div className="mt-5 space-y-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.08 + i * 0.06}>
                <motion.article
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group flex gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-colors hover:border-brand/35 hover:bg-card/90"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/5 text-brand">
                    <Check className="size-3.5" />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-brand">
                      {service.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {service.copy}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
