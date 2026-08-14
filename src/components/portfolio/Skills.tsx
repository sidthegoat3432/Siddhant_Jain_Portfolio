import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { EASE, Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const allSkills = skillGroups.flatMap((group) =>
  group.items.map((item) => item.name),
);

function Ticker() {
  const row = [...allSkills, ...allSkills];
  return (
    <div className="relative mt-16 overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-sm uppercase tracking-[0.2em] text-cream/50"
          >
            {skill}
            <span className="size-1.5 rounded-full bg-brand/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Capabilities"
        title="The stack behind the work."
        description="The tools and technologies I reach for to ship dependable software — from interface to infrastructure."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card/50 p-6 backdrop-blur">
              <h3 className="font-display text-lg font-semibold text-cream">
                {group.category}
              </h3>
              <div className="mt-6 space-y-5">
                {group.items.map((item, si) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-cream/85">{item.name}</span>
                      <span className="font-display text-xs text-muted-foreground">
                        {item.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand to-gold"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 1.1,
                          delay: 0.15 + si * 0.08,
                          ease: EASE,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Ticker />
    </section>
  );
}
