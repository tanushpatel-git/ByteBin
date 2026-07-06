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
    <nav aria-label="Breadcrumb" className="flex items-center gap-1">
      <Link href="/dashboard" className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors" aria-label="Home">
        <Home size={13} />
      </Link>
      {CRUMBS.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={12} className="text-[#D1D5DB]" />
          <Link
            href={crumb.href}
            className={
              crumb.active
                ? "text-[12px] font-semibold text-[#171717]"
                : "text-[12px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
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
