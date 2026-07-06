"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  ChevronDown,
  Save,
  RotateCcw,
  Copy,
  Maximize2,
  Check,
} from "lucide-react";
import { cn } from "./utils";

const BRANCHES = ["main", "feat/workspace", "fix/hydration", "chore/deps"];

export function EditorToolbar() {
  const [branch, setBranch] = useState("main");
  const [branchOpen, setBranchOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-[#F8F5F2] border-b border-[#EAE2D9]">
      {/* Branch Selector */}
      <div className="relative">
        <button
          onClick={() => setBranchOpen((v) => !v)}
          className="flex items-center gap-1.5 h-6 px-2.5 rounded-lg bg-white border border-[#EAE2D9] text-[12px] text-[#6B7280] hover:text-[#171717] hover:border-[#D3ACFF]/50 transition-colors"
          aria-expanded={branchOpen}
        >
          <GitBranch size={12} />
          <span className="font-medium">{branch}</span>
          <ChevronDown size={11} className={cn("transition-transform", branchOpen && "rotate-180")} />
        </button>

        <AnimatePresence>
          {branchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.12 }}
              className="absolute left-0 top-full mt-1 w-48 bg-white rounded-xl border border-[#EAE2D9] shadow-lg shadow-black/5 overflow-hidden z-40"
            >
              {BRANCHES.map((b) => (
                <button
                  key={b}
                  onClick={() => { setBranch(b); setBranchOpen(false); }}
                  className={cn(
                    "flex items-center gap-2 w-full px-3 py-2 text-[12px] transition-colors",
                    b === branch
                      ? "text-[#7C3AED] bg-[#F4ECFF]"
                      : "text-[#6B7280] hover:text-[#171717] hover:bg-[#F8F5F2]"
                  )}
                >
                  <GitBranch size={11} />
                  {b}
                  {b === branch && <Check size={11} className="ml-auto" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Language Badge */}
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#3178C6]" />
        <span className="text-[11px] font-medium text-[#6B7280]">TypeScript</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 ml-auto">
        {[
          { icon: Save, label: "Save" },
          { icon: RotateCcw, label: "Reset" },
          { icon: copied ? Check : Copy, label: "Copy", onClick: handleCopy },
          { icon: Maximize2, label: "Fullscreen" },
        ].map(({ icon: Icon, label, onClick }) => (
          <motion.button
            key={label}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className="flex items-center justify-center w-6 h-6 rounded-lg hover:bg-[#EAE2D9] text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
            title={label}
            aria-label={label}
          >
            <Icon size={13} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
