"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalTabs } from "./TerminalTabs";
import { TERMINAL_LINES } from "./constants";
import { cn } from "./utils";

function TerminalLine({ line }: { line: (typeof TERMINAL_LINES)[number] }) {
  const styles: Record<string, string> = {
    command: "text-[#2D2D2D] font-semibold",
    success: "text-emerald-700",
    warning: "text-amber-600",
    error: "text-red-600",
    info: "text-[#4B4B4B]",
    link: "text-[#7C3AED] underline underline-offset-2 cursor-pointer hover:text-[#6D28D9]",
  };

  if (line.content === "") return <div className="h-3" aria-hidden="true" />;

  return (
    <div className={cn("text-[12px] font-mono leading-5", styles[line.type])}>
      {line.content}
    </div>
  );
}

export function Terminal() {
  const [activeTab, setActiveTab] = useState("bash");

  return (
    <div className="flex flex-col bg-[#F3EEE8] border-t border-[#E6DDD3] h-48 shrink-0">
      <TerminalTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 overflow-y-auto px-5 py-3 scrollbar-hide">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {TERMINAL_LINES.map((line) => (
            <motion.div
              key={line.id}
              variants={{
                hidden: { opacity: 0, x: -6 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <TerminalLine line={line} />
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[12px] font-mono text-[#2D2D2D] font-semibold">$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="w-2 h-3.5 bg-[#7C3AED] rounded-[2px]"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
