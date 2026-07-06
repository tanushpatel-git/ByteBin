"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

type DeployState = "idle" | "deploying" | "done";

const LABELS: Record<DeployState, string> = {
  idle: "Deploy",
  deploying: "Deploying…",
  done: "Deployed ✓",
};

const BG: Record<DeployState, string> = {
  idle: "bg-[#171717] hover:bg-[#0F0F0F]",
  deploying: "bg-[#7C3AED]",
  done: "bg-[#059669]",
};

export function DeployButton() {
  const [state, setState] = useState<DeployState>("idle");

  const handleClick = () => {
    if (state !== "idle") return;
    setState("deploying");
    setTimeout(() => setState("done"), 2400);
    setTimeout(() => setState("idle"), 4000);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      disabled={state !== "idle"}
      className={`relative flex items-center gap-2 h-8 px-4 rounded-xl text-white text-[13px] font-semibold overflow-hidden transition-colors ${BG[state]}`}
      aria-label="Deploy project"
    >
      {/* Shimmer on idle */}
      {state === "idle" && (
        <motion.span
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut",
            repeatDelay: 1.5,
          }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] pointer-events-none"
          aria-hidden="true"
        />
      )}
      <Rocket size={13} className={state === "deploying" ? "animate-bounce" : ""} />
      {LABELS[state]}
    </motion.button>
  );
}
