"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { terminalVariants } from "./loaderVariants";

const TERMINAL_LINES = [
  { text: "git clone https://github.com/bytebin/workspace", delay: 1500, color: "text-[#D3ACFF]" },
  { text: "Installing packages...", delay: 1800 },
  { text: "Building workspace...", delay: 2100 },
  { text: "Creating environment...", delay: 2400 },
  { text: "Deploying...", delay: 2700 },
  { text: "Workspace Ready ✓", delay: 3000, color: "text-[#3FA66A]" },
];

export function LoaderTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, index) =>
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <m.div
      variants={terminalVariants}
      initial="initial"
      animate="animate"
      className="w-full max-w-lg mt-12 rounded-xl bg-[#18181B] border border-white/10 shadow-2xl overflow-hidden relative z-20"
    >
      {/* Terminal Header */}
      <div className="h-10 bg-[#232228] border-b border-white/5 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <div className="flex-1 text-center text-white/40 text-xs font-mono select-none">
          bash
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[220px]">
        <AnimatePresence>
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`mb-2 ${line.color || "text-white/70"}`}
            >
              {i === 0 ? `$ ${line.text}` : line.text}
            </m.div>
          ))}
        </AnimatePresence>
        
        {/* Blinking Cursor */}
        <m.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-[#D3ACFF]"
        >
          _
        </m.span>
      </div>
    </m.div>
  );
}
