"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "./utils";

export function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <motion.div
      animate={{ width: focused ? 280 : 220 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative"
    >
      <div
        className={cn(
          "flex items-center gap-2 h-8 px-3 rounded-xl border transition-all",
          focused
            ? "bg-white border-[#D3ACFF]/60 shadow-[0_0_0_3px_rgba(211,172,255,0.12)]"
            : "bg-[#F3EEE8] border-[#EAE2D9]"
        )}
      >
        <Search size={13} className="text-[#9CA3AF] shrink-0" />
        <input
          type="text"
          placeholder="Search files, commands…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 text-[13px] text-[#171717] placeholder:text-[#9CA3AF] bg-transparent outline-none min-w-0"
          aria-label="Search workspace"
        />
        <AnimatePresence>
          {!focused && (
            <motion.kbd
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#EAE2D9] text-[10px] font-medium text-[#9CA3AF] shrink-0"
            >
              ⌘K
            </motion.kbd>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
