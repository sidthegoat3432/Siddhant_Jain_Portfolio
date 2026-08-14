import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Decorative fallbacks rendered until a real image/video URL is added.
const tints = [
  "from-teal-400/40 via-teal-500/20 to-ink",
  "from-amber-400/40 via-amber-500/20 to-ink",
  "from-sky-400/40 via-teal-500/20 to-ink",
  "from-amber-400/30 via-rose-400/20 to-ink",
];

function ProjectMedia({ project, index }: { project: Project; index: number }) {
  const hasMedia = Boolean(project.video || project.image);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card">
      {project.video ? (
        <video
          className="h-full w-full object-cover"
          src={project.video}
          muted
          loop
          playsInline
          autoPlay
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${tints[index % tints.length]}`}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="font-display text-6xl font-semibold text-cream/15">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-cream/15 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cream/40">
              {project.video === "" && project.image === ""
                ? "Media placeholder"
                : "Media"}
            </span>
          </div>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="flex size-12 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-500 group-hover:scale-100 scale-75">
          {project.video ? (
            <Play className="size-4 translate-x-px" />
          ) : (
            <ArrowUpRight className="size-5" />
          )}
        </span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="02"
          eyebrow="Work"
          title="Projects built to ship."
          description="A selection of shipped work — real projects, real constraints, and code that stays maintainable."
        />
        <Reveal delay={0.1} className="shrink-0">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-cream"
          >
            Looking for a developer?
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08}>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectMedia project={project} index={i} />

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream transition-colors group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="shrink-0 pt-1 font-display text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
