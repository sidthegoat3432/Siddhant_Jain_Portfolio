import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Shared easing curve used across the site for a consistent feel.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.985, filter: "blur(8px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, delay, ease: EASE },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
