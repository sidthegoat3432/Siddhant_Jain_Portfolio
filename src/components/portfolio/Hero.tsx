import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Circle,
  Crosshair,
  MapPin,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
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

// Live Toronto clock — a prominent editorial time readout that keeps the
// hero feeling alive. Ticks every second in Toronto's timezone.
function TorontoClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  }).format(now);

  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(now);

  return (
    <div className="flex items-center gap-4">
      <span className="relative flex size-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
        <span className="relative inline-flex size-2 rounded-full bg-brand" />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Toronto / live
        </p>
        <p className="mt-1 font-display text-2xl font-semibold tabular-nums leading-none tracking-tight text-ink sm:text-3xl">
          {time}
        </p>
        <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {date}
        </p>
      </div>
    </div>
  );
}

function KineticMark() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // 3D tilt — the card leans toward the cursor, smoothed by springs.
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 160,
    damping: 18,
  });

  // Layer parallax — each plane drifts at its own depth as the pointer moves.
  const gridX = useTransform(mx, [-0.5, 0.5], [9, -9]);
  const gridY = useTransform(my, [-0.5, 0.5], [9, -9]);
  const orbitX = useTransform(mx, [-0.5, 0.5], [-18, 18]);
  const orbitY = useTransform(my, [-0.5, 0.5], [-18, 18]);
  const monoX = useTransform(mx, [-0.5, 0.5], [6, -6]);
  const monoY = useTransform(my, [-0.5, 0.5], [6, -6]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow:
          "0 30px 80px rgba(11,18,32,0.16), 0 0 44px rgba(185,28,28,0.14)",
      }}
      whileTap={{ scale: 0.985 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative flex aspect-square w-full max-w-[31rem] items-center justify-center overflow-hidden rounded-[2rem] border border-ink/15 bg-card/70 shadow-[0_24px_70px_rgba(11,18,32,0.1)] will-change-transform"
    >
      {/* Breathing aurora — always drifting behind the layers */}
      <motion.div style={{ x: orbitX, y: orbitY }} className="absolute inset-0">
        <div className="kinetic-aurora absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(185,28,28,0.2),transparent_34%,transparent_60%,rgba(180,83,9,0.1))]" />
      </motion.div>

      {/* Grid — slowly drifts + mouse parallax */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="kinetic-grid-drift absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(11,18,32,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(11,18,32,0.12)_1px,transparent_1px)] [background-size:38px_38px] dark:[background-image:linear-gradient(rgba(238,242,249,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(238,242,249,0.14)_1px,transparent_1px)]"
      />

      {/* Orbital system — rings spin on their own, dots travel, and the whole
          system leans toward your cursor on hover */}
      <motion.div
        style={{ x: orbitX, y: orbitY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="kinetic-spin relative size-[68%] rounded-full border border-brand/30 transition-colors duration-500 group-hover:border-brand/70">
          <span className="absolute -right-1 top-1/2 flex size-3.5 -translate-y-1/2 items-center justify-center rounded-full bg-gold shadow-[0_0_18px_rgba(180,83,9,0.75)]">
            <span className="size-1.5 rounded-full bg-ink" />
          </span>
          <span className="absolute -bottom-1 left-[18%] flex size-3 rounded-full bg-brand shadow-[0_0_18px_rgba(185,28,28,0.75)]" />

          {/* Counter-rotating dashed ring with its own traveling dot */}
          <div className="kinetic-spin-reverse absolute inset-[16%] rounded-full border border-dashed border-gold/50">
            <span className="absolute -top-1.5 left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(180,83,9,0.7)]" />
          </div>
          <div className="absolute inset-[31%] rounded-full border border-ink/20" />
        </div>
      </motion.div>

      {/* Light sweep — a band of light periodically crosses the mark */}
      <div className="kinetic-sweep pointer-events-none absolute inset-y-0 left-0 z-[5] w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      {/* Rising particles */}
      <span className="kinetic-rise absolute bottom-[22%] left-[20%] size-2 rounded-full bg-brand/80" />
      <span
        className="kinetic-rise absolute bottom-[20%] left-[58%] size-1.5 rounded-full bg-gold/90"
        style={{ animationDelay: "1.3s" }}
      />
      <span
        className="kinetic-rise absolute bottom-[24%] left-[42%] size-1.5 rounded-full bg-brand/70"
        style={{ animationDelay: "2.6s" }}
      />
      <span
        className="kinetic-rise absolute bottom-[16%] left-[72%] size-2 rounded-full bg-brand/80"
        style={{ animationDelay: "3.9s" }}
      />

      {/* Monogram — breathing + drifting with the pointer */}
      <motion.div
        style={{ x: monoX, y: monoY }}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute flex flex-col items-center gap-2"
      >
        <Crosshair className="size-5 text-brand" strokeWidth={1.5} />
        <span className="font-display text-[clamp(4rem,10vw,7rem)] font-semibold leading-none tracking-[-0.1em] text-ink/90">
          SJ
        </span>
        <span className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
          Digital systems / 2026
        </span>
      </motion.div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-ink/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="flex items-center gap-2">
          <Circle className="size-2 fill-brand text-brand" />
          Signal online
        </span>
        <span>43° 39′ N / 79° 23′ W</span>
      </div>
    </motion.div>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(185,28,28,0.12),transparent_42%),radial-gradient(ellipse_at_90%_60%,rgba(180,83,9,0.08),transparent_36%),radial-gradient(ellipse_at_70%_12%,rgba(185,28,28,0.08),transparent_48%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(11,18,32,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(11,18,32,0.1)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)] dark:[background-image:linear-gradient(rgba(238,242,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(238,242,249,0.08)_1px,transparent_1px)]" />
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
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_38px_rgba(185,28,28,0.25)]"
              >
                Enter the work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="group/cta inline-flex items-center gap-3 rounded-full border border-border bg-card/30 px-6 py-3.5 text-sm font-medium text-ink transition-all hover:border-brand/50 hover:text-brand"
              >
                Read the approach
                <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
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
                The Toronto skyline at dusk, shot from the air — the city this
                whole site is built around.
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
          <div className="flex flex-wrap items-end gap-8 sm:gap-12">
            <TorontoClock />
            <a
              href="#about"
              className="flex items-center gap-3 pb-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-ink"
            >
              Continue downward
              <ArrowDown className="size-4 animate-bounce text-brand" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
