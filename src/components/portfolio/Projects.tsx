import { motion } from "framer-motion";
import { ArrowUpRight, CornerDownRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const sceneClasses = ["scene-teal", "scene-gold", "scene-blue", "scene-rose"];

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const hasMedia = Boolean(project.video || project.image);

  return (
    <div className={`project-scene ${sceneClasses[index % sceneClasses.length]}`}>
      {project.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
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
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <>
          <div className="scene-grid" />
          <div className="scene-orbit scene-orbit-one" />
          <div className="scene-orbit scene-orbit-two" />
          <div className="scene-orbit scene-orbit-three" />
          <div className="scene-core">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="scene-label">
            {hasMedia ? "Media placeholder" : "Project visual placeholder"}
          </div>
        </>
      )}
      <div className="scene-scanline" />
      <div className="absolute inset-x-6 bottom-5 flex items-center justify-between text-[9px] uppercase tracking-[0.24em] text-cream/50">
        <span>Frame / {String(index + 1).padStart(2, "0")}</span>
        <span>{project.year}</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Proof, not promises."
            description="A sequence of shipped work — products, systems, and interfaces built for people who expect the details to hold."
          />
          <Reveal delay={0.1} className="shrink-0 sm:pb-1">
            <p className="max-w-[13rem] border-l border-gold/50 pl-4 text-xs leading-relaxed text-muted-foreground">
              Four studies in turning complex requirements into clear digital
              experiences.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[90rem] space-y-20 px-5 sm:mt-24 sm:px-8 lg:px-12">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i % 2 === 0 ? 0 : 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.8fr)] lg:items-center lg:gap-14"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand via-brand/30 to-transparent lg:block" />
                <ProjectVisual project={project} index={i} />
                <span className="pointer-events-none absolute -bottom-9 -left-1 font-display text-[clamp(5rem,14vw,12rem)] font-semibold leading-none tracking-[-0.12em] text-cream/[0.035]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative z-10 lg:py-8">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="text-gold">Case study / 0{i + 1}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-6 max-w-md font-display text-3xl font-semibold leading-[0.95] tracking-tight text-cream transition-colors group-hover:text-brand sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-[11px] text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-9 inline-flex items-center gap-3 text-sm font-medium text-cream"
                >
                  <span className="border-b border-cream/30 pb-1 transition-colors group-hover/link:border-brand group-hover/link:text-brand">
                    Explore project
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full border border-border transition-all group-hover/link:border-brand group-hover/link:bg-brand group-hover/link:text-ink">
                    <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </span>
                </a>
              </div>

              <div className="absolute -right-3 top-2 hidden items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground xl:flex [writing-mode:vertical-rl]">
                <ExternalLink className="size-3 text-brand" />
                Open field notes
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <a
            href="#contact"
            className="group flex items-center justify-between border-y border-border py-6 text-sm text-muted-foreground transition-colors hover:text-cream"
          >
            <span className="flex items-center gap-3">
              <CornerDownRight className="size-4 text-gold" />
              More work available on request
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
