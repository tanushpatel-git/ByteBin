import { Terminal, Plus } from "lucide-react";
import { cn } from "../utils";

const TABS = [
  { id: "bash", label: "bash" },
  { id: "node", label: "node" },
];

export function TerminalTabs() {
  const activeTab = "bash";

  return (
    <div className="flex items-center gap-1 px-3 border-b border-[#E6DDD3] bg-[#EDE6DE] h-9 shrink-0">
      <Terminal size={12} className="text-[#9CA3AF] mr-1 shrink-0" />

      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <div
            key={tab.id}
            className={cn(
              "flex items-center gap-1.5 px-3 h-6 rounded-lg text-[11px] font-medium transition-colors",
              isActive
                ? "bg-[#F3EEE8] text-[#171717] shadow-sm"
                : "text-[#9CA3AF] hover:text-[#6B7280] hover:bg-[#E8E0D8]"
            )}
          >
            {tab.label}
          </div>
        );
      })}

      <button
        className="ml-auto flex items-center justify-center w-5 h-5 rounded-md hover:bg-[#E8E0D8] text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
        aria-label="New terminal"
      >
        <Plus size={12} />
      </button>
    </div>
  );
}
