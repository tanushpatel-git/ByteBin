"use client";

import { m } from "framer-motion";
import { GitBranch, Box, CheckCircle2, TrendingUp } from "lucide-react";
import { floatingCardReveal, pipelineLineVariants, EASE_PREMIUM } from "./loaderVariants";
import { useEffect, useState } from "react";

const PIPELINE_NODES = [
  { label: "Repository", icon: GitBranch },
  { label: "Build", icon: Box },
  { label: "Test", icon: CheckCircle2 },
  { label: "Deploy", icon: TrendingUp },
];

export function LoaderGrid() {
  const [activeNode, setActiveNode] = useState(-1);

  // Activate nodes starting at 2.4s
  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    
    // Start sequence at 2.4s
    const startDelay = 2400;
    
    // Animate one node every 150ms
    PIPELINE_NODES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setActiveNode(i);
        }, startDelay + (i * 150))
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
      {/* Floating Cards Background - these sit behind the terminal/logo in space */}
      
      {/* Top Left Card - Analytics */}
      <m.div
        variants={floatingCardReveal}
        initial="initial"
        animate="animate"
        transition={{ delay: 2.0 }}
        className="absolute top-1/4 left-[15%] w-48 bg-white/50 backdrop-blur-md rounded-2xl border border-white p-4 shadow-xl hidden lg:block"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#D3ACFF]/20 flex items-center justify-center">
            <TrendingUp size={16} className="text-[#D3ACFF]" />
          </div>
          <div>
            <div className="h-2 w-16 bg-[#18181B]/10 rounded-full mb-1" />
            <div className="h-2 w-10 bg-[#18181B]/5 rounded-full" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-[#18181B]/5 rounded-full" />
          <div className="h-2 w-3/4 bg-[#18181B]/5 rounded-full" />
        </div>
      </m.div>

      {/* Top Right Card - Repository */}
      <m.div
        variants={floatingCardReveal}
        initial="initial"
        animate="animate"
        transition={{ delay: 2.1 }}
        className="absolute top-[20%] right-[15%] w-56 bg-white/50 backdrop-blur-md rounded-2xl border border-white p-4 shadow-xl hidden lg:block"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GitBranch size={14} className="text-[#18181B]/40" />
            <span className="text-xs font-semibold text-[#18181B]/60">bytebin/core</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3FA66A]/10 text-[#3FA66A] font-medium">
            Public
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D3ACFF] to-[#a78bfa]" />
          <div className="flex flex-col justify-center gap-1 flex-1">
            <div className="h-1.5 w-full bg-[#18181B]/10 rounded-full" />
            <div className="h-1.5 w-2/3 bg-[#18181B]/5 rounded-full" />
          </div>
        </div>
      </m.div>

      {/* Bottom Center - Deployment Pipeline */}
      <m.div
        variants={floatingCardReveal}
        initial="initial"
        animate="animate"
        transition={{ delay: 2.2 }}
        className="absolute bottom-1/4 w-[90%] max-w-2xl bg-white/60 backdrop-blur-xl rounded-3xl border border-white p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-2">
          {PIPELINE_NODES.map((node, i) => {
            const Icon = node.icon;
            const isActive = i <= activeNode;
            
            return (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-3 relative">
                  <m.div
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 relative z-10 ${
                      isActive ? "bg-[#3FA66A] text-white shadow-[0_0_20px_rgba(63,166,106,0.3)]" : "bg-white text-[#18181B]/30 border border-[#18181B]/5"
                    }`}
                  >
                    <Icon size={20} />
                  </m.div>
                  <span className={`text-[11px] font-medium absolute -bottom-6 whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-[#18181B]" : "text-[#18181B]/40"
                  }`}>
                    {node.label}
                  </span>
                </div>
                
                {i < PIPELINE_NODES.length - 1 && (
                  <div className="h-1 flex-1 mx-4 bg-[#18181B]/5 rounded-full relative overflow-hidden">
                    <m.div
                      variants={pipelineLineVariants}
                      initial="hidden"
                      animate={i < activeNode ? "visible" : "hidden"}
                      style={{ originX: 0 }}
                      className="absolute inset-0 bg-[#3FA66A]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Production Ready Badge */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={activeNode === PIPELINE_NODES.length - 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          className="absolute -top-4 right-6 bg-[#18181B] text-white text-[11px] font-medium px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#3FA66A]" />
          Production Ready
        </m.div>
      </m.div>
      
    </div>
  );
}
