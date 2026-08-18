import { motion } from "framer-motion";
import { useState } from "react";
import { languages, tools, strengths, type Tool } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function toolPreview(description: string) {
  const firstSentence = description.split(". ")[0] ?? description;
  return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
}

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
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <section
      id="skills"
      className="relative mx-auto min-w-0 max-w-6xl overflow-x-clip px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="04"
        eyebrow="Capabilities"
        title="The stack behind the work."
        description="The tools and technologies I reach for to ship dependable software — from interface to infrastructure. Click any capability to see how I use it."
      />

      <div className="toolkit-surface mt-14 grid min-w-0 grid-cols-2 gap-3 rounded-[2rem] border border-brand/10 p-3 sm:grid-cols-3 sm:gap-4 sm:p-5 lg:grid-cols-4">
        {tools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.04}>
            <motion.button
              type="button"
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.4 : 0.4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => setSelectedTool(tool)}
              className="toolkit-card group flex min-h-[15rem] w-full flex-col justify-between rounded-[1.15rem] p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:min-h-[16rem] sm:p-5"
              aria-label={`Learn more about ${tool.name}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="toolkit-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="toolkit-dot" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-xl">
                  {tool.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {toolPreview(tool.description)}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-border/80 pt-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {tool.category}
                </span>
                <span className="toolkit-detail">
                  Details <span aria-hidden>+</span>
                </span>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <Dialog
        open={selectedTool !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedTool(null);
        }}
      >
        <DialogContent className="max-w-xl border-brand/20 bg-card p-7 shadow-[0_24px_80px_rgba(11,18,32,0.2)] sm:p-9">
          {selectedTool && (
            <>
              <DialogHeader className="pr-8 text-left">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand">
                  Capability / {selectedTool.category}
                </p>
                <DialogTitle className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {selectedTool.name}
                </DialogTitle>
                <DialogDescription className="pt-3 text-base leading-relaxed text-muted-foreground">
                  {selectedTool.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 flex items-center gap-3 border-t border-border pt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="size-2 rounded-full bg-brand" />
                Part of Siddhant&apos;s working toolkit
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="mt-24 border-t border-border pt-12 sm:mt-32">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                <span className="font-display text-sm text-gold">04A</span>
                Languages
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                The languages I know.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A small part of who I am beyond the interface: the languages I use
              to communicate, collaborate, and connect.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {languages.map((language, i) => (
            <Reveal key={language.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group min-w-0 rounded-2xl border border-border bg-card/50 p-4 backdrop-blur transition-colors hover:border-gold/45 hover:bg-card/90 sm:p-5"
              >
                <span className="font-display text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-8 font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                  {language.name}
                </h4>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {language.note}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-28 border-t border-border pt-12 sm:mt-36">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                <span className="font-display text-sm text-gold">04B</span>
                How I work
              </p>
              <h3 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Good work is also about how you show up.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The working qualities behind the tools: thoughtful collaboration,
              clear ownership, and momentum when the path is still taking shape.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength, i) => (
            <Reveal key={strength.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative min-w-0 h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-colors hover:border-brand/35 hover:bg-card/80 sm:p-6"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-8 font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                  {strength.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {strength.copy}
                </p>
                <span className="absolute -bottom-8 -right-3 font-display text-7xl font-semibold leading-none tracking-[-0.1em] text-ink/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <Ticker />
    </section>
  );
}
