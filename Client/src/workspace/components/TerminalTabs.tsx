"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Plus, X } from "lucide-react";
import { cn } from "./utils";

interface Tab {
  id: string;
  label: string;
}

const DEFAULT_TABS: Tab[] = [
  { id: "bash", label: "bash" },
  { id: "node", label: "node" },
];

interface TerminalTabsProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function TerminalTabs({ activeTab, onTabChange }: TerminalTabsProps) {
  const [tabs, setTabs] = useState<Tab[]>(DEFAULT_TABS);

  const addTab = () => {
    const id = `shell-${tabs.length + 1}`;
    setTabs((prev) => [...prev, { id, label: `shell ${tabs.length + 1}` }]);
    onTabChange(id);
  };

  const removeTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tabs.length === 1) return;
    const next = tabs.filter((t) => t.id !== id);
    setTabs(next);
    if (activeTab === id) onTabChange(next[0].id);
  };

  return (
    <div className="flex items-center gap-1 px-3 border-b border-[#E6DDD3] bg-[#EDE6DE] h-9 shrink-0">
      <Terminal size={12} className="text-[#9CA3AF] mr-1 shrink-0" />

      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <motion.button
            key={tab.id}
            whileTap={{ scale: 0.96 }}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 h-6 rounded-lg text-[11px] font-medium transition-colors",
              isActive
                ? "bg-[#F3EEE8] text-[#171717] shadow-sm"
                : "text-[#9CA3AF] hover:text-[#6B7280] hover:bg-[#E8E0D8]"
            )}
          >
            {tab.label}
            {tabs.length > 1 && (
              <span
                onClick={(e) => removeTab(tab.id, e)}
                className="hover:text-red-400 transition-colors"
                role="button"
                aria-label={`Close ${tab.label}`}
              >
                <X size={10} />
              </span>
            )}
          </motion.button>
        );
      })}

      <button
        onClick={addTab}
        className="ml-auto flex items-center justify-center w-5 h-5 rounded-md hover:bg-[#E8E0D8] text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
        aria-label="New terminal"
      >
        <Plus size={12} />
      </button>
    </div>
  );
}
