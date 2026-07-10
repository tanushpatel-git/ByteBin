"use client";

import { Zap, ShieldCheck, Globe, GitBranch, Package, Users } from "lucide-react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";

export function BentoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Parallax effects for internal images/abstract shapes
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 30]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -20]), springConfig);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
              Engineered for scale
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              The architecture you need to grow from side project to enterprise without changing platforms.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Card 1: Global Edge (Large 2x2) */}
          <Reveal className="md:col-span-2 md:row-span-2 h-full" delay={0}>
            <SpotlightCard className="h-full rounded-[32px] p-8 md:p-12 flex flex-col justify-between group bg-[#FBF5EE]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D3ACFF]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#D3ACFF]/30 transition-colors" />
              <div className="relative z-10 max-w-sm">
                <m.div 
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 origin-left"
                >
                  <Globe size={24} className="text-[#18181B]" />
                </m.div>
                <h3 className="text-2xl font-bold text-[#18181B] mb-3">Global Edge Network</h3>
                <p className="text-[#6B7280]">Deploy your frontend and serverless functions to 35+ regions automatically. Millisecond latency for every user on Earth.</p>
              </div>
              
              {/* Abstract illustration with parallax */}
              <m.div 
                style={{ y: y1 }}
                className="mt-8 relative h-48 w-full border border-[#ECE3D8] rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden flex items-center justify-center"
              >
                <div className="flex gap-4 items-center px-4">
                  <m.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
                    transition={{ repeat: Infinity, duration: 3, delay: 0 }} 
                    className="w-16 h-16 rounded-full bg-[#D3ACFF]/40" 
                  />
                  <m.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }} 
                    transition={{ repeat: Infinity, duration: 4, delay: 1 }} 
                    className="w-12 h-12 rounded-full bg-[#F5D7C8]/60" 
                  />
                  <m.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} 
                    transition={{ repeat: Infinity, duration: 3.5, delay: 2 }} 
                    className="w-20 h-20 rounded-full bg-[#D3ACFF]/30" 
                  />
                  <m.div 
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }} 
                    transition={{ repeat: Infinity, duration: 4.5, delay: 3 }} 
                    className="w-14 h-14 rounded-full bg-[#F5D7C8]/50" 
                  />
                </div>
              </m.div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Enterprise Security (1x1) */}
          <Reveal className="md:col-span-1 md:row-span-1 h-full" delay={0.1}>
            <SpotlightCard className="h-full rounded-[32px] p-8 flex flex-col justify-between group">
              <m.div 
                whileHover={{ scale: 1.15, rotate: -6 }}
                className="w-10 h-10 rounded-2xl bg-[#F5D7C8]/30 flex items-center justify-center mb-4 origin-left"
              >
                <ShieldCheck size={20} className="text-[#18181B]" />
              </m.div>
              <div>
                <h3 className="text-[18px] font-bold text-[#18181B] mb-2">Enterprise Security</h3>
                <p className="text-[13px] text-[#6B7280]">SSO, SOC2 Type II, and Role-based Access Control out of the box.</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: Instant Deployments (1x1) */}
          <Reveal className="md:col-span-1 md:row-span-1 h-full" delay={0.2}>
            <SpotlightCard className="h-full rounded-[32px] p-8 flex flex-col justify-between group">
              <m.div 
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="w-10 h-10 rounded-2xl bg-[#D3ACFF]/30 flex items-center justify-center mb-4 origin-left"
              >
                <Zap size={20} className="text-[#18181B]" />
              </m.div>
              <div>
                <h3 className="text-[18px] font-bold text-[#18181B] mb-2">Instant Deploy</h3>
                <p className="text-[13px] text-[#6B7280]">Push to git and get a live preview URL in under 5 seconds.</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 4: Git Integration (2x1) */}
          <Reveal className="md:col-span-2 md:row-span-1 h-full" delay={0.3}>
            {/* Dark card, spotlight might be subtle, but we'll apply hover effects */}
            <m.div 
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="h-full bg-[#18181B] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#D3ACFF]/10 pointer-events-none" />
              <div className="relative z-10 max-w-[200px] mb-6 md:mb-0">
                <m.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-4 origin-left"
                >
                  <GitBranch size={20} className="text-white" />
                </m.div>
                <h3 className="text-[20px] font-bold text-white mb-2">Git Integration</h3>
                <p className="text-[13px] text-white/70">Seamless webhook sync with GitHub.</p>
              </div>
              <div className="relative z-10 flex-1 flex justify-end">
                <m.div style={{ x: y3 }} className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#18181B] bg-white flex items-center justify-center shadow-lg relative z-30"><Package size={20} /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#18181B] bg-[#F5D7C8] flex items-center justify-center shadow-lg relative z-20"><Users size={20} /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#18181B] bg-[#D3ACFF] flex items-center justify-center shadow-lg relative z-10"><Zap size={20} /></div>
                </m.div>
              </div>
            </m.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
