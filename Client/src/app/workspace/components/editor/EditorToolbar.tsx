import { GitBranch, ChevronDown, Save, RotateCcw, Copy, Maximize2, Check } from "lucide-react";

export function EditorToolbar() {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-[#F8F5F2] border-b border-[#EAE2D9]">
      {/* Branch Selector */}
      <div className="relative">
        <button
          className="flex items-center gap-1.5 h-6 px-2.5 rounded-lg bg-white border border-[#EAE2D9] text-[12px] text-[#171717]"
        >
          <GitBranch size={12} />
          <span className="font-medium">main</span>
          <ChevronDown size={11} className="text-[#6B7280]" />
        </button>
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
          { icon: Copy, label: "Copy" },
          { icon: Maximize2, label: "Fullscreen" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center justify-center w-6 h-6 rounded-lg hover:bg-[#EAE2D9] text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
            title={label}
            aria-label={label}
          >
            <Icon size={13} />
          </button>
        ))}
      </div>
    </div>
  );
}
