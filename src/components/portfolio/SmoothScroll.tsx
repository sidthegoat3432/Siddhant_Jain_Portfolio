import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery, inertia-based scrolling for the landing page.
 * - Smooths wheel/trackpad input into a cinematic glide.
 * - Intercepts `#anchor` links so nav jumps glide instead of snapping.
 * - Disabled entirely for users who prefer reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      // Lower lerp = longer, floatier glide. 0.085 keeps it clearly smooth
      // without feeling like the page drags behind the wheel.
      lerp: 0.085,
      smoothWheel: true,
      anchors: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
