"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";

const NOTIFICATIONS = [
  { id: "n1", title: "Deployment successful", body: "bytebin-core → production", time: "2m ago", dot: "bg-emerald-400" },
  { id: "n2", title: "PR #42 merged", body: "feat/workspace-switcher → main", time: "18m ago", dot: "bg-[#D3ACFF]" },
  { id: "n3", title: "Build failed", body: "design-system → staging", time: "1h ago", dot: "bg-red-400" },
];

export function Notifications() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visible = NOTIFICATIONS.filter((n) => !dismissed.has(n.id));

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center justify-center w-8 h-8 rounded-xl hover:bg-[#F3EEE8] transition-colors"
        aria-label="Notifications"
      >
        <Bell size={16} className="text-[#6B7280]" />
        {visible.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D3ACFF] border border-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-[#EAE2D9] shadow-xl shadow-black/5 overflow-hidden z-50"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#EAE2D9]">
              <p className="text-[13px] font-semibold text-[#171717]">Notifications</p>
              <button
                onClick={() => setOpen(false)}
                className="w-5 h-5 rounded-md hover:bg-[#F3EEE8] flex items-center justify-center"
                aria-label="Close notifications"
              >
                <X size={12} className="text-[#6B7280]" />
              </button>
            </div>

            {visible.length === 0 ? (
              <p className="text-[13px] text-[#6B7280] text-center py-8">All caught up!</p>
            ) : (
              <div className="divide-y divide-[#F3EEE8]">
                {visible.map((n) => (
                  <div key={n.id} className="flex items-start gap-3 px-4 py-3 hover:bg-[#FDFCFB] group">
                    <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#171717]">{n.title}</p>
                      <p className="text-[11px] text-[#6B7280] truncate">{n.body}</p>
                      <p className="text-[10px] text-[#9CA3AF] mt-0.5">{n.time}</p>
                    </div>
                    <button
                      onClick={() => setDismissed((s) => new Set([...s, n.id]))}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Dismiss ${n.title}`}
                    >
                      <X size={11} className="text-[#9CA3AF] hover:text-[#6B7280]" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
