"use client";

import { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
  rotation?: number;
  delay?: number;
}

export function Floating({ 
  children, 
  className = "",
  duration = 6,
  yOffset = 10,
  rotation = 2,
  delay = 0
}: FloatingProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Randomize slightly if not provided strictly, or rely on props
  return (
    <m.div
      animate={{ 
        y: [0, -yOffset, 0],
        rotate: [0, rotation, 0]
      }}
      transition={{ 
        repeat: Infinity, 
        duration,
        ease: "easeInOut",
        delay 
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
