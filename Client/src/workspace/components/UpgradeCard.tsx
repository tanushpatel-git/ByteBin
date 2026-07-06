"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export function UpgradeCard() {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="mx-3 p-4 rounded-2xl bg-gradient-to-br from-[#EDE9FF] to-[#F3EEE8] border border-[#D3ACFF]/30 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-[#D3ACFF]/30 flex items-center justify-center">
          <Zap size={14} className="text-[#7C3AED]" />
        </div>
        <p className="text-[13px] font-semibold text-[#171717]">Upgrade to Pro</p>
      </div>
      <p className="text-[11px] text-[#6B7280] leading-relaxed mb-3">
        Unlock unlimited deployments, team collaboration, and priority support.
      </p>
      <Link
        href="#"
        className="flex items-center gap-1.5 text-[12px] font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors group"
      >
        View plans
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
}
