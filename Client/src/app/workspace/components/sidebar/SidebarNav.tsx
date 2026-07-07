import {
  LayoutDashboard,
  GitBranch,
  Rocket,
  Activity,
  Settings,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "../utils";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "workspace", label: "Workspace", icon: LayoutDashboard, href: "/workspace", active: true },
  { id: "repositories", label: "Repositories", icon: GitBranch, href: "#" },
  { id: "deployments", label: "Deployments", icon: Rocket, href: "#" },
  { id: "activity", label: "Activity", icon: Activity, href: "#" },
  { id: "settings", label: "Settings", icon: Settings, href: "#" },
];

export function SidebarNav() {
  return (
    <nav className="space-y-1 px-5">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = item.active;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors group",
              isActive
                ? "text-[var(--text-main)] bg-[var(--accent)]/10"
                : "text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[var(--accent)] rounded-full" />
            )}
            <Icon size={18} className={isActive ? "text-[var(--accent)]" : "group-hover:text-[var(--accent)] transition-colors"} />
            <span className="flex-1">{item.label}</span>
            {!isActive && (
              <ChevronRight size={12} className="text-[var(--accent)] opacity-0 group-hover:opacity-60 transition-opacity" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
