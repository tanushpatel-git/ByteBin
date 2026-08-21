"use client";

import { ReactNode, useRef } from "react";
import { m, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({ 
  children, 
  className = "",
  spotlightColor = "rgba(211, 172, 255, 0.15)"
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Use springs to make the spotlight follow smoothly
  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, black, transparent)`;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      onMouseMove={handleMouseMove}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        borderColor: "rgba(211, 172, 255, 0.5)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative overflow-hidden border border-[#ECE3D8] bg-white transition-colors duration-300 ${className}`}
    >
      <m.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`,
          maskImage,
          WebkitMaskImage: maskImage
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </m.div>
  );
}