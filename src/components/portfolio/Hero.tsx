import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Circle, Crosshair, MapPin } from "lucide-react";
import { useRef } from "react";
import {
  HERO_BACKGROUND_POSTER,
  HERO_BACKGROUND_VIDEO,
  profile,
} from "@/data/portfolio";
import { EASE } from "./Reveal";

const VIDEO_PLACEHOLDER = "BACKGROUND_VIDEO";

const sceneLinks = [
  { number: "01", label: "Intro", href: "#top" },
  { number: "02", label: "About", href: "#about" },
  { number: "03", label: "Work", href: "#projects" },
  { number: "04", label: "Record", href: "#track-record" },
  { number: "05", label: "Contact", href: "#contact" },
];

const introSequence = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const introItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

function KineticMark() {
  return (
    <div className="relative flex aspect-square w-full max-w-[31rem] items-center justify-center overflow-hidden rounded-[2rem] border border-ink/15 bg-card/70 shadow-[0_24px_70px_rgba(11,18,32,0.1)] backdrop-blur-sm">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(11,18,32,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(11,18,32,0.12)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(15,118,110,0.16),transparent_30%,transparent_64%,rgba(11,18,32,0.05))]" />

      {/* The orbital mark is intentionally CSS-made so the placeholder still feels designed. */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="relative size-[68%] rounded-full border border-brand/30"
      >
        <div className="absolute inset-[16%] rounded-full border border-gold/40 border-dashed" />
        <div className="absolute inset-[31%] rounded-full border border-ink/20" />
        <span className="absolute -right-1 top-1/2 flex size-3 -translate-y-1/2 items-center justify-center rounded-full bg-gold shadow-[0_0_14px_rgba(180,83,9,0.45)]">
          <span className="size-1 rounded-full bg-ink" />
        </span>
        <span className="absolute -bottom-1 left-[18%] flex size-2.5 rounded-full bg-brand shadow-[0_0_14px_rgba(15,118,110,0.45)]" />
      </motion.div>
      <div className="absolute flex flex-col items-center gap-2">
        <Crosshair className="size-5 text-brand" strokeWidth={1.5} />
        <span className="font-display text-[clamp(4rem,10vw,7rem)] font-semibold leading-none tracking-[-0.1em] text-ink/90">
          SJ
        </span>
        <span className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
          Digital systems / 2026
        </span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-ink/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="flex items-center gap-2">
          <Circle className="size-2 fill-brand text-brand" />
          Signal online
        </span>
        <span>28° 36′ N / 77° 13′ E</span>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const hasVideo = HERO_BACKGROUND_VIDEO !== VIDEO_PLACEHOLDER;

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(15,118,110,0.12),transparent_42%),radial-gradient(ellipse_at_90%_60%,rgba(180,83,9,0.08),transparent_36%),radial-gradient(ellipse_at_70%_12%,rgba(37,99,235,0.08),transparent_48%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(11,18,32,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(11,18,32,0.1)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="pointer-events-none absolute left-[7%] top-[18%] h-px w-[42%] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="pointer-events-none absolute right-[6%] top-[35%] h-[35%] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

      {hasVideo && (
        <motion.div
          style={{ scale: mediaScale, y: mediaY }}
          className="absolute inset-0 opacity-35"
        >
          <video
            className="h-full w-full object-cover"
            src={HERO_BACKGROUND_VIDEO}
            poster={HERO_BACKGROUND_POSTER}
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      )}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8 lg:px-12"
      >
        <div className="mb-10 flex items-center justify-between border-b border-border/70 pb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:mb-14">
          <span>Independent builder / portfolio 001</span>
          <span className="hidden sm:inline">Scroll to inspect the work</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            variants={introSequence}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={introItem} className="flex items-center gap-3">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-green ring-2 ring-green/20" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-ink/80">
                Available for meaningful work
              </span>
            </motion.div>

            <h1 className="mt-7 font-display text-[clamp(4rem,11.5vw,10.5rem)] font-semibold leading-[0.78] tracking-[-0.08em] text-ink">
              <span className="block overflow-hidden">
                <motion.span variants={introItem} className="block">
                  {profile.name.split(" ")[0]}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={introItem} className="block text-brand">
                  {profile.name.split(" ").slice(1).join(" ")}<span className="text-gold">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.div
              variants={introItem}
              className="mt-9 grid max-w-2xl gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8"
            >
              <span className="font-display text-sm text-gold">01 —</span>
              <p className="max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
                {profile.role} turning ideas into websites, visuals, and
                stories that are clear, considered, and ready to share.
              </p>
            </motion.div>

            <motion.div variants={introItem} className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_38px_rgba(15,118,110,0.25)]"
              >
                Enter the work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border border-border bg-card/30 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brand/50 hover:text-brand"
              >
                Read the approach
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.15, delay: 0.55, ease: EASE }}
            className="relative mx-auto w-full max-w-[31rem] lg:ml-auto"
          >
            <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>Hero visual</span>
              <span className="text-gold">
                {hasVideo ? "Background video" : "BACKGROUND_VIDEO"}
              </span>
            </div>
            <KineticMark />
            <div className="mt-4 flex items-start justify-between gap-4 text-xs text-muted-foreground">
              <span className="max-w-[15rem] leading-relaxed">
                A placeholder for Siddhant&apos;s background video. Replace the
                source in the content config when ready.
              </span>
              <span className="flex shrink-0 items-center gap-2 text-ink/75">
                <MapPin className="size-3.5 text-gold" />
                {profile.city}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-border/70 pt-5 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex gap-5">
            {sceneLinks.map((scene, index) => (
              <a
                key={scene.number}
                href={scene.href}
                className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink"
              >
                <span
                  className={index === 0 ? "text-brand" : "text-muted-foreground"}
                >
                  {scene.number}
                </span>
                <span className="hidden group-hover:inline sm:inline">
                  {scene.label}
                </span>
              </a>
            ))}
          </div>
          <a
            href="#about"
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-ink"
          >
            Continue downward
            <ArrowDown className="size-4 animate-bounce text-brand" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
