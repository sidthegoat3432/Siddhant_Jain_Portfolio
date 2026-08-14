import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import {
  HERO_BACKGROUND_POSTER,
  HERO_BACKGROUND_VIDEO,
  profile,
} from "@/data/portfolio";
import { EASE } from "./Reveal";

const VIDEO_PLACEHOLDER = "BACKGROUND_VIDEO";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-driven parallax: content drifts up + fades as the page scrolls.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const hasVideo = HERO_BACKGROUND_VIDEO !== VIDEO_PLACEHOLDER;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      {/* --- Cinematic background layers --- */}
      {/* Aurora glow (animated fallback + always-on ambience) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-[15%] top-[-20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.28),transparent_60%)] blur-3xl animate-aurora"
          aria-hidden
        />
        <div
          className="absolute -right-[10%] bottom-[-25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,182,76,0.18),transparent_60%)] blur-3xl animate-aurora-slow"
          aria-hidden
        />
      </div>

      {/* Video (only renders once a real URL replaces BACKGROUND_VIDEO) */}
      {hasVideo && (
        <motion.div
          style={{ scale: mediaScale }}
          className="absolute inset-0"
        >
          <video
            className="h-full w-full object-cover opacity-40"
            src={HERO_BACKGROUND_VIDEO}
            poster={HERO_BACKGROUND_POSTER}
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      )}

      {/* Fine grid + vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(245,241,232,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(245,241,232,0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0b1220_100%)]" />

      {/* --- Content --- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Availability + location */}
          <motion.div
            variants={rise}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-cream/80 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-cream/80 backdrop-blur">
              <MapPin className="size-3.5 text-gold" />
              {profile.city}
            </span>
          </motion.div>

          {/* Name */}
          <div className="mt-8">
            <h1 className="font-display text-[clamp(3.25rem,12vw,8.5rem)] font-semibold leading-[0.9] tracking-tight text-cream">
              <span className="block overflow-hidden">
                <motion.span
                  variants={rise}
                  className="block"
                  style={{ transformOrigin: "left" }}
                >
                  {profile.name.split(" ")[0]}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={rise}
                  className="block text-brand"
                  style={{ transformOrigin: "left" }}
                >
                  {profile.name.split(" ").slice(1).join(" ")}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I design and build fast, dependable web software — interfaces
            engineered with care, from first commit to production.
          </motion.p>

          {/* Role chip */}
          <motion.p
            variants={rise}
            className="mt-5 font-display text-sm font-medium uppercase tracking-[0.2em] text-gold"
          >
            {profile.role}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_32px_rgba(45,212,191,0.4)]"
            >
              View selected work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-cream backdrop-blur transition-colors hover:border-brand/50 hover:text-brand"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-cream"
      >
        Scroll
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block size-1.5 rounded-full bg-brand"
          />
        </span>
        <ArrowDown className="size-3.5" />
      </motion.a>
    </section>
  );
}
