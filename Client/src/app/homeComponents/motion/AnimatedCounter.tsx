"use client";

import { useEffect, useRef } from "react";
import { m, useInView, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  direction = "up", 
  className = "", 
  suffix = "", 
  prefix = "",
  duration = 2
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000
  });

  const displayValue = useTransform(springValue, (current) => {
    return `${prefix}${Math.round(current).toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{prefix}{value.toLocaleString()}{suffix}</span>;
  }

  return (
    <m.span ref={ref} className={className}>
      {displayValue}
    </m.span>
  );
}
