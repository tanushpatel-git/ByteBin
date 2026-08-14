"use client";

import { ReactNode, useRef, useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  movementX?: number;
  movementY?: number;
  mouseX?: any;
  mouseY?: any;
}

export function ParallaxLayer({ 
  children, 
  className = "",
  movementX = 20,
  movementY = 20,
  mouseX,
  mouseY
}: ParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotion();

  // We map the mouse position (-0.5 to 0.5) to the movement range
  const x = useTransform(mouseX, [-0.5, 0.5], [-movementX, movementX]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-movementY, movementY]);

  // Apply spring for smooth movement
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  if (shouldReduceMotion || !mouseX || !mouseY) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </m.div>
  );
}
