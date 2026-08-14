"use client";

import { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { blurReveal, fadeUp } from "./variants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  useBlur?: boolean;
}

export function Reveal({ children, className = "", delay = 0, useBlur = true }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, fallback to simple fadeUp with no transform/blur if possible
  const variant = shouldReduceMotion 
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay } } }
    : useBlur ? blurReveal : fadeUp;

  // Add delay to the variant if needed
  const customVariant = delay > 0 && !shouldReduceMotion ? {
    ...variant,
    visible: {
      ...(variant.visible as object),
      transition: {
        ...(variant.visible as any).transition,
        delay,
      }
    }
  } : variant;

  return (
    <m.div
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </m.div>
  );
}
