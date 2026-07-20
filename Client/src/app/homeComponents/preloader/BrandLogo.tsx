"use client";

import { m } from "framer-motion";
import { 
  logoContainerVariants, 
  logoGlowVariants, 
  wordContainerVariants, 
  letterVariants, 
  subtitleVariants 
} from "./loaderVariants";

export function BrandLogo() {
  const brandName = "BYTEBIN".split("");

  return (
    <div className="flex flex-col items-center justify-center relative z-20">
      <m.div
        variants={logoContainerVariants}
        initial="initial"
        animate="animate"
        className="relative flex items-center justify-center mb-6"
      >
        {/* Glow behind logo */}
        <m.div
          variants={logoGlowVariants}
          className="absolute w-[120px] h-[120px] rounded-full bg-[#D3ACFF] blur-[32px] pointer-events-none"
        />
        
        {/* Logo Mark */}
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D3ACFF] to-[#a78bfa] flex items-center justify-center text-white font-bold text-3xl shadow-[0_0_40px_rgba(211,172,255,0.4)] z-10 border border-white/20 backdrop-blur-md">
          B
        </div>
      </m.div>

      {/* Brand Name */}
      <m.div
        variants={wordContainerVariants}
        initial="initial"
        animate="animate"
        className="flex font-bold text-4xl tracking-tight text-[#18181B] mb-3"
      >
        {brandName.map((letter, i) => (
          <m.span key={i} variants={letterVariants} className="inline-block">
            {letter}
          </m.span>
        ))}
      </m.div>

      {/* Subtitle */}
      <m.div
        variants={subtitleVariants}
        initial="initial"
        animate="animate"
        className="text-[#716B78] font-medium tracking-wide text-sm"
      >
        Building developer workspace...
      </m.div>
    </div>
  );
}
