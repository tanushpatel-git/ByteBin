"use client";

import { m } from "framer-motion";
import { useEffect, useState, memo } from "react";

// Generate random particles only on client to avoid hydration mismatch
const useParticles = (count: number) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [count]);

  return particles;
};

export const LoaderParticles = memo(function LoaderParticles() {
  const particles = useParticles(30);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-multiply opacity-40">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Particles */}
      {particles.map((p) => (
        <m.div
          key={p.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [-10, -30],
            x: Math.sin(p.id) * 10,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-[#18181B]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
});
