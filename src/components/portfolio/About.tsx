import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const focusAreas = [
  {
    title: "Full-stack development",
    copy: "End-to-end builds — interfaces, APIs, data, and deployment.",
  },
  {
    title: "Interface engineering",
    copy: "Fast, accessible front-ends with clean, maintainable code.",
  },
  {
    title: "Product thinking",
    copy: "Turning loose requirements into software that ships and holds up.",
  },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* Left — heading + bio */}
        <div>
          <SectionHeading
            index="02"
            eyebrow="About"
            title="Built on strong fundamentals, finished with intent."
          />

          <Reveal delay={0.16}>
            <p className="mt-8 text-lg leading-relaxed text-ink/80">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-ink"
            >
              <span className="border-b border-brand/40 pb-0.5 transition-colors group-hover:border-ink/40">
                View résumé
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Right — stats + focus areas */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.06 }}
                    className="font-display text-4xl font-semibold text-ink sm:text-5xl"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.06}>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Services &amp; strengths
            </p>
          </Reveal>
          <div className="mt-4 space-y-3">
            {focusAreas.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.06}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-brand/30 hover:bg-card/70">
                  <span className="mt-0.5 font-display text-sm font-medium text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
