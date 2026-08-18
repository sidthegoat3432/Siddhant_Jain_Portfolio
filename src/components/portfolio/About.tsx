import { motion } from "framer-motion";
import { ArrowUpRight, Check, Image as ImageIcon } from "lucide-react";
import {
  aboutCards,
  ABOUT_BACKGROUND_POSTER,
  ABOUT_BACKGROUND_VIDEO,
  profile,
  services,
} from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const VIDEO_PLACEHOLDER = "BACKGROUND_VIDEO";
const POSTER_PLACEHOLDER = "BACKGROUND_POSTER";

function BackgroundMedia() {
  const hasVideo =
    ABOUT_BACKGROUND_VIDEO && ABOUT_BACKGROUND_VIDEO !== VIDEO_PLACEHOLDER;
  const hasImage = Boolean(profile.profileImage);
  const hasPoster =
    ABOUT_BACKGROUND_POSTER && ABOUT_BACKGROUND_POSTER !== POSTER_PLACEHOLDER;

  return (
    <div className="profile-image group relative min-h-[18rem] overflow-hidden rounded-[2rem] border border-border bg-card/60 shadow-[0_24px_70px_rgba(11,18,32,0.1)] sm:min-h-[22rem]">
      {hasVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={ABOUT_BACKGROUND_VIDEO}
          poster={hasPoster ? ABOUT_BACKGROUND_POSTER : undefined}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Siddhant background video"
        />
      ) : hasImage ? (
        <img
          src={profile.profileImage}
          alt={`${profile.name} portrait`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(15,118,110,0.2),transparent_32%),linear-gradient(145deg,#e8efeb,#eae6da_72%)]" />
          <div className="absolute inset-5 rounded-[1.5rem] border border-dashed border-ink/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex size-14 items-center justify-center rounded-2xl border border-brand/25 bg-card/70 text-brand">
              <ImageIcon className="size-6" strokeWidth={1.5} />
            </span>
            <span className="font-display text-xl font-semibold text-ink/75">
              BACKGROUND_VIDEO
            </span>
            <span className="max-w-[18rem] text-xs uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
              Add an about-section video or portrait in the content config
            </span>
          </div>
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-6 bottom-5 flex items-center justify-between border-t border-white/35 pt-3 text-[10px] uppercase tracking-[0.2em] text-white/85">
        <span>{hasVideo ? "Background motion / 001" : "Portrait / 001"}</span>
        <span className="text-brand">SJ</span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="02"
        eyebrow="Hi, I&apos;m Siddhant"
        title="A builder, learner, and creative problem-solver."
        description="A closer look at the places, interests, and working energy behind the portfolio."
      />

      <div className="mt-14 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {aboutCards.map((card, i) => (
          <Reveal key={card.number} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative h-full min-w-0 overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-colors hover:border-brand/40 hover:bg-card/90 sm:p-6"
            >
              <span className="font-display text-sm text-gold">{card.number}</span>
              <h3 className="mt-8 font-display text-xl font-semibold leading-tight text-ink transition-colors group-hover:text-brand">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.copy}
              </p>
              <span className="absolute -bottom-7 -right-2 font-display text-7xl font-semibold leading-none tracking-[-0.12em] text-ink/[0.04]">
                {card.number}
              </span>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid min-w-0 gap-14 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="min-w-0">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand">
              Current focus
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              {profile.bio}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-4 rounded-xl border border-brand/30 bg-brand/5 px-5 py-4 text-sm font-medium text-brand transition-all hover:border-brand hover:bg-brand hover:text-primary-foreground hover:shadow-[0_12px_30px_rgba(15,118,110,0.18)]"
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

          <Reveal delay={0.2} className="mt-10">
            <BackgroundMedia />
          </Reveal>
        </div>

        <div className="min-w-0">
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
                  className="group flex min-w-0 gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-colors hover:border-brand/35 hover:bg-card/90"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/5 text-brand">
                    <Check className="size-3.5" />
                  </span>
                  <div className="min-w-0">
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
