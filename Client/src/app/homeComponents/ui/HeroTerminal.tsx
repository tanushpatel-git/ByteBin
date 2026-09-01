"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const STAGES = [
  { text: "git push origin main", color: "text-[#D3ACFF]", typing: true },
  { text: "Uploading...", color: "text-white/70", delay: 1000 },
  { text: "Running Tests...", color: "text-[#FFBD2E]", delay: 2000 },
  { text: "Building...", color: "text-white/70", delay: 3500 },
  { text: "Deploying...", color: "text-[#27C93F]", delay: 5000 },
  { text: "✓ Production Ready", color: "text-[#27C93F]", font: "font-bold", delay: 6500 },
  { text: "https://bytebin.app", color: "text-white/50", delay: 7000 },
];

export function HeroTerminal() {
  const [stageIndex, setStageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (stageIndex === 0) {
      // Typing effect for the first stage
      const targetText = STAGES[0].text;
      if (typedText.length < targetText.length) {
        timeoutId = setTimeout(() => {
          setTypedText(targetText.slice(0, typedText.length + 1));
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          setStageIndex(1);
        }, 500);
      }
    } else if (stageIndex < STAGES.length) {
      // Progress to next stage based on delay difference
      const currentDelay = STAGES[stageIndex].delay || 0;
      const nextDelay = STAGES[stageIndex + 1]?.delay || currentDelay + 3000;
      
      timeoutId = setTimeout(() => {
        setStageIndex(stageIndex + 1);
      }, nextDelay - currentDelay);
    } else {
      // Reset loop
      timeoutId = setTimeout(() => {
        setStageIndex(0);
        setTypedText("");
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [stageIndex, typedText]);

  return (
    <div className="w-full max-w-[320px] bg-[#18181B] rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 text-white/50 text-[10px] font-medium">
          <TerminalIcon size={12} />
          bash
        </div>
      </div>
      <div className="p-4 font-mono text-[12px] leading-relaxed min-h-[160px] flex flex-col">
        <div className="text-[#D3ACFF]">
          $ {stageIndex === 0 ? typedText : STAGES[0].text}
          {stageIndex === 0 && (
            <m.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              _
            </m.span>
          )}
        </div>
        
        <AnimatePresence>
          {STAGES.slice(1, stageIndex + 1).map((stage, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${stage.color} ${stage.font || ""} mt-1`}
            >
              {stage.text}
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
