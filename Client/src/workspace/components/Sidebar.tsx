import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { SidebarNav } from "./SidebarNav";
import { RepositoryTree } from "./RepositoryTree";
import { UpgradeCard } from "./UpgradeCard";
import { GitBranch } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="flex flex-col h-full bg-[#FDFCFB] border-r border-[#EAE2D9] w-60 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#EAE2D9]">
        <div className="w-8 h-8 rounded-xl bg-[#171717] flex items-center justify-center shadow-sm">
          <span className="text-white text-[13px] font-black tracking-tight">B</span>
        </div>
        <span className="text-[15px] font-bold text-[#171717] tracking-tight">ByteBin</span>
      </div>

      {/* Workspace Switcher */}
      <div className="px-2 py-3 border-b border-[#EAE2D9]">
        <WorkspaceSwitcher />
      </div>

      {/* Nav */}
      <div className="py-3 border-b border-[#EAE2D9]">
        <SidebarNav />
      </div>

      {/* Repository Explorer */}
      <div className="flex-1 overflow-y-auto py-3 scrollbar-hide">
        <div className="flex items-center gap-2 px-5 mb-2">
          <GitBranch size={12} className="text-[#6B7280]" />
          <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
            Explorer
          </span>
        </div>
        <RepositoryTree />
      </div>

      {/* Upgrade Card */}
      <div className="py-3 border-t border-[#EAE2D9]">
        <UpgradeCard />
      </div>
    </aside>
  );
}
