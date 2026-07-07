import { Check, ChevronDown } from "lucide-react";
import { WORKSPACES } from "../data/constants";

export function WorkspaceSwitcher() {
  return (
    <div className="flex items-center gap-2.5 w-full px-3 py-2 rounded-xl hover:bg-[var(--bg-card)] transition-colors cursor-pointer group">
      <div className="w-7 h-7 rounded-lg bg-[#D3ACFF]/20 border border-[#D3ACFF]/40 flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-[#7C3AED]">BC</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-[var(--text-main)] truncate">bytebin-core</p>
      </div>
      <ChevronDown size={14} className="text-[var(--text-muted)] shrink-0 group-hover:text-[var(--accent)] transition-colors" />
    </div>
  );
}
