"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { m, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({ 
  children, 
  className = "", 
  intensity = 10,
  onClick,
  type = "button"
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Mouse position state for magnetic effect
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Smooth springs for the movement
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    if (isHovered) {
      // Calculate fraction of intensity to move (cap at max intensity)
      // e.g. if width is 100, max movement is intensity
      // position.x is relative to center.
      // A simple proportion is enough:
      smoothX.set(position.x * 0.1 * (intensity / 10));
      smoothY.set(position.y * 0.1 * (intensity / 10));
    } else {
      smoothX.set(0);
      smoothY.set(0);
    }
  }, [position, isHovered, smoothX, smoothY, intensity]);

  if (shouldReduceMotion) {
    return (
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <m.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      {children}
    </m.button>
  );
}
