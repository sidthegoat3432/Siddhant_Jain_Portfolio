import { motion } from "framer-motion";
import { tools } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Ticker() {
  const row = [...tools.map((tool) => tool.name), ...tools.map((tool) => tool.name)];
  return (
    <div className="relative mt-16 overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-sm uppercase tracking-[0.2em] text-ink/55"
          >
            {name}
            <span className="size-1.5 rounded-full bg-brand/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="04"
        eyebrow="Capabilities"
        title="The stack behind the work."
        description="The tools and technologies I reach for to ship dependable software — from interface to infrastructure."
      />

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {tools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.04}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/50 p-4 backdrop-blur transition-colors hover:border-brand/40 hover:bg-card/80 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {tool.category}
                </span>
                <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-brand/70 transition-colors group-hover:bg-gold" />
              </div>
              <h3 className="mt-7 font-display text-base font-medium leading-tight text-ink sm:text-lg">
                {tool.name}
              </h3>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Ticker />
    </section>
  );
}
