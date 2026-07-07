import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const CRUMBS = [
  { label: "bytebin-core", href: "#" },
  { label: "src", href: "#" },
  { label: "components", href: "#" },
  { label: "Sidebar.tsx", href: "#", active: true },
];

export function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 min-w-0">
      <Link
        href="/dashboard"
        className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors shrink-0"
        aria-label="Home"
      >
        <Home size={13} />
      </Link>
      {CRUMBS.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1 min-w-0">
          <ChevronRight size={12} className="text-[#D1D5DB] shrink-0" />
          <Link
            href={crumb.href}
            className={
              crumb.active
                ? "text-[12px] font-semibold text-[#171717] truncate"
                : "text-[12px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors truncate"
            }
            aria-current={crumb.active ? "page" : undefined}
          >
            {crumb.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
