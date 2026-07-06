"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "./utils";
import { WORKSPACES } from "./constants";
import type { Workspace } from "./types";

export function WorkspaceSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Workspace>(WORKSPACES[0]);

  const planColors: Record<Workspace["plan"], string> = {
    free: "bg-[#F3EEE8] text-[#6B7280]",
    pro: "bg-[#EDE9FF] text-[#7C3AED]",
    team: "bg-[#EFF6FF] text-[#2563EB]",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-2.5 w-full px-3 py-2 rounded-xl",
          "hover:bg-[#F3EEE8] transition-colors text-left"
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <div className="w-7 h-7 rounded-lg bg-[#D3ACFF]/20 border border-[#D3ACFF]/40 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-bold text-[#7C3AED]">{active.initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-[#171717] truncate">{active.name}</p>
          <p className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded-md w-fit mt-0.5", planColors[active.plan])}>
            {active.plan}
          </p>
        </div>
        <ChevronDown
          size={14}
          className={cn("text-[#6B7280] transition-transform", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#EAE2D9] rounded-xl shadow-lg shadow-black/5 overflow-hidden z-50"
            role="listbox"
          >
            {WORKSPACES.map((ws) => (
              <button
                key={ws.id}
                onClick={() => { setActive(ws); setOpen(false); }}
                className="flex items-center gap-2.5 w-full px-3 py-2.5 hover:bg-[#F8F5F2] transition-colors"
                role="option"
                aria-selected={ws.id === active.id}
              >
                <div className="w-6 h-6 rounded-md bg-[#D3ACFF]/20 border border-[#D3ACFF]/40 flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-bold text-[#7C3AED]">{ws.initials}</span>
                </div>
                <span className="text-[13px] text-[#171717] flex-1 text-left">{ws.name}</span>
                {ws.id === active.id && <Check size={12} className="text-[#D3ACFF]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
