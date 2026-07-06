"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LogOut, Settings, CreditCard, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "../utils";

const MENU_ITEMS = [
  { icon: User, label: "Profile", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: CreditCard, label: "Billing", href: "#" },
] as const;

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 hover:bg-[#F3EEE8] rounded-xl px-2 py-1.5 transition-colors"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="User menu"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D3ACFF] to-[#7C3AED] flex items-center justify-center shadow-sm">
          <span className="text-white text-[11px] font-bold">VS</span>
        </div>
        <ChevronDown
          size={12}
          className={cn("text-[#6B7280] transition-transform", open && "rotate-180")}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-[#EAE2D9] shadow-xl shadow-black/5 overflow-hidden z-50"
            role="menu"
          >
            <div className="px-4 py-3 border-b border-[#F3EEE8]">
              <p className="text-[13px] font-semibold text-[#171717]">Vedan S.</p>
              <p className="text-[11px] text-[#9CA3AF]">vedan@bytebin.dev</p>
            </div>

            <div className="py-1">
              {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-[#6B7280] hover:text-[#171717] hover:bg-[#F8F5F2] transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </Link>
              ))}
            </div>

            <div className="border-t border-[#F3EEE8] py-1">
              <button
                role="menuitem"
                className="flex items-center gap-2.5 w-full px-4 py-2 text-[13px] text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={14} />
                Sign out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
