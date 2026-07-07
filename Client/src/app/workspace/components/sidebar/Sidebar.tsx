import { GitBranch } from "lucide-react";

import { SidebarNav } from "./SidebarNav";
import { RepositoryTree } from "./RepositoryTree";


export function Sidebar() {
  return (
    <aside className="w-[280px] bg-[var(--bg-base)] border-r border-[var(--border-subtle)]/50 flex flex-col shrink-0 relative z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-colors duration-300 h-full">
      {/* Logo */}
      <div className="h-[72px] px-8 flex items-center gap-3 border-b border-[var(--border-subtle)]/50 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#a78bfa] flex items-center justify-center text-white font-bold text-[14px] shadow-sm shadow-[var(--accent)]/30">
          B
        </div>
        <span className="font-bold text-[17px] text-[var(--text-main)] tracking-tight">ByteBin</span>
      </div>



      {/* Navigation */}
      <div className="py-4 border-b border-[var(--border-subtle)]/50 shrink-0">
        <SidebarNav />
      </div>

      {/* File Explorer */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <div className="flex items-center gap-2 px-8 mb-3">
          <GitBranch size={14} className="text-[var(--text-muted)]" />
          <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
            Explorer
          </span>
        </div>
        <RepositoryTree />
      </div>

    </aside>
  );
}
