import { ArrowUpRight } from "lucide-react";
import { trackRecord } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function TrackRecord() {
  return (
    <section
      id="track-record"
      className="track-record-section relative overflow-hidden border-y border-border/70"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.25em] text-brand">
          <span className="font-display text-sm text-gold">04</span>
          <span>Track record</span>
          <span className="h-px w-12 bg-ink/25" />
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <Reveal>
            <h2 className="max-w-5xl font-display text-[clamp(3.6rem,9vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-ink">
              Built, tested, <span className="track-record-script">in progress.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-sm border-l border-gold/50 pl-5 text-sm leading-relaxed text-muted-foreground lg:mb-2">
              A record of the work, learning, and practice happening outside the
              polished surface of this site.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-ink/20">
          {trackRecord.map((item, index) => (
            <Reveal key={`${item.year}-${item.title}`} delay={index * 0.06}>
              <article className="track-record-row group grid gap-4 border-b border-ink/20 py-7 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-9">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {item.year}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors group-hover:text-brand sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-gold sm:justify-self-end"
                  >
                    {item.linkLabel ?? "Open record"}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 sm:block">
                    Field note / {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
