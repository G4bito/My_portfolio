"use client";

import { useReducedMotion } from "@/lib/motion";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}): ReactNode {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUnblur({
  children,
  delay = 0,
  duration = 1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}): ReactNode {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={
        reducedMotion ? false : { opacity: 0, scale: 0.96, filter: "blur(8px)" }
      }
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: EASE,
      }}
      style={{ transformOrigin: "center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
