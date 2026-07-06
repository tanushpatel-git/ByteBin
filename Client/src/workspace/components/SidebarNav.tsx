"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  GitBranch,
  Rocket,
  Activity,
  Settings,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "./utils";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "workspace", label: "Workspace", icon: LayoutDashboard, href: "/workspace", active: true },
  { id: "repositories", label: "Repositories", icon: GitBranch, href: "#" },
  { id: "deployments", label: "Deployments", icon: Rocket, href: "#" },
  { id: "activity", label: "Activity", icon: Activity, href: "#" },
  { id: "settings", label: "Settings", icon: Settings, href: "#" },
] as const;

export function SidebarNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="space-y-0.5 px-2">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === "workspace";
        const isHovered = hovered === item.id;

        return (
          <Link
            key={item.id}
            href={item.href}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors",
              isActive
                ? "text-[#171717] bg-[#F3EEE8]"
                : "text-[#6B7280] hover:text-[#171717] hover:bg-[#F3EEE8]"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {isActive && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#D3ACFF] rounded-full"
              />
            )}
            <Icon size={16} className={isActive ? "text-[#D3ACFF]" : undefined} />
            <span className="flex-1">{item.label}</span>
            {isHovered && !isActive && (
              <ChevronRight size={12} className="text-[#D3ACFF] opacity-60" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

// Separate AnimatePresence wrapper for the active indicator tooltip
export function NavHoverTooltip({ label, visible }: { label: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.span
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -4 }}
          className="absolute left-full ml-2 px-2 py-1 bg-[#171717] text-white text-[11px] rounded-md whitespace-nowrap z-50 pointer-events-none"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
