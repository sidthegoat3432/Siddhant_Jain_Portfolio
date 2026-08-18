import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { type MouseEvent } from "react";

/**
 * 3D cursor tilt — the element leans toward the pointer, smoothed by springs.
 * Reused across the project scenes, poster frames, and About media panels so
 * every visual on the site responds the same way.
 */
export function useTilt(maxX = 10, maxY = 12) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [maxX, -maxX]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-maxY, maxY]), {
    stiffness: 160,
    damping: 18,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
