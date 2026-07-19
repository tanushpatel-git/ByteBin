"use client";

import { Command, Triangle, Hexagon, Circle, Square, Infinity as InfinityIcon } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { useState } from "react";

export function TrustedBy() {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const companies = [
    { name: "Acme Corp", icon: Command },
    { name: "Global Tech", icon: Triangle },
    { name: "NextGen", icon: Hexagon },
    { name: "Innovate", icon: Circle },
    { name: "Synergy", icon: Square },
    { name: "Infinity", icon: InfinityIcon },
  ];

  // Double the array for seamless looping
  const marqueeItems = [...companies, ...companies];

  return (
    <section className="py-12 border-y border-[#ECE3D8]/60 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <p className="text-center text-[12px] font-medium text-[#6B7280] uppercase tracking-widest mb-8">
          Trusted by innovative teams worldwide
        </p>

        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div 
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <m.div 
            animate={
              shouldReduceMotion
                ? {}
                : { x: ["0%", "-50%"] }
            }
            transition={{
              duration: 25,
              ease: "linear",
              repeat: typeof window !== "undefined" ? Infinity : 0, // avoid hydration issues
              repeatType: "loop"
            }}
            style={{}}
            className={`flex items-center gap-16 md:gap-24 w-max ${isHovered ? 'animation-pause' : ''}`}
          >
            {marqueeItems.map((company, index) => {
              const Icon = company.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-[#18181B] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <Icon size={24} strokeWidth={2.5} />
                  <span className="font-bold text-[18px] tracking-tight">{company.name}</span>
                </div>
              );
            })}
          </m.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .animation-pause {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
}
