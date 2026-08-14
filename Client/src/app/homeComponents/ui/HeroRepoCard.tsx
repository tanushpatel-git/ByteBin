"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest } from "lucide-react";
import { staggerChildren } from "../motion/variants";

const COMMITS = [
  { id: "a9f2b4c", msg: "feat(auth)", status: "Building" },
  { id: "b3c4d5e", msg: "feat(auth)", status: "Deploying" },
  { id: "c5d6e7f", msg: "feat(auth)", status: "Production Ready" },
];

export function HeroRepoCard() {
  const [commitIndex, setCommitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommitIndex((prev) => (prev + 1) % COMMITS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <m.div
      whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(211,172,255,0.2)", borderColor: "rgba(211,172,255,0.5)" }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-[340px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#ECE3D8] p-5 cursor-default group"
    >
      <m.div 
        variants={staggerChildren}
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-3">
          <m.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-xl bg-[#F5D7C8]/30 flex items-center justify-center text-[#F5D7C8]"
          >
            <GitBranch size={20} className="text-orange-500" />
          </m.div>
          <div>
            <h3 className="text-[#18181B] font-semibold text-[14px]">frontend-monorepo</h3>
            <p className="text-[#6B7280] text-[12px]">Updated 2 mins ago</p>
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Public</div>
      </m.div>

      <div className="space-y-3 relative min-h-[60px]">
        <AnimatePresence mode="wait">
          <m.div 
            key={commitIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[12px] text-[#6B7280]"
          >
            <GitCommit size={14} className="group-hover:text-[#D3ACFF] transition-colors" />
            <span className="font-mono text-[#18181B]">{COMMITS[commitIndex].id}</span>
            <span>{COMMITS[commitIndex].msg}</span>
            <span className="ml-auto text-[10px] bg-gray-100 px-2 rounded-full">{COMMITS[commitIndex].status}</span>
          </m.div>
        </AnimatePresence>

        <m.div variants={staggerChildren} className="flex items-center gap-2 text-[12px] text-[#6B7280]">
          <GitPullRequest size={14} />
          <span>PR #42 opened by</span>
          <div className="w-4 h-4 rounded-full bg-gray-200"></div>
        </m.div>
      </div>
    </m.div>
  );
}
