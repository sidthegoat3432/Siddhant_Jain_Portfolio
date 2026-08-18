import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useTilt } from "@/hooks/use-tilt";

/**
 * Wraps any visual in a 3D cursor-tilt. Applied to the project scenes, poster
 * frames, and About media panels so every visual responds to the pointer.
 */
export function Tilt({
  children,
  className,
  maxX = 10,
  maxY = 12,
}: {
  children: ReactNode;
  className?: string;
  maxX?: number;
  maxY?: number;
}) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(
    maxX,
    maxY,
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
