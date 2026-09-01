"use client";

import Link from "next/link";
import { useUser } from "@/lib/hooks/useAuth";
import { Plus } from "lucide-react";

export default function BlogHeader() {
  const { data: user } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-10 flex items-center justify-between pointer-events-auto">
      <Link
        href="/"
        className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors duration-300"
      >
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="group-hover:-translate-x-1 transition-transform duration-300">
          <path d="M0 5H15M0 5L4.5 1M0 5L4.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span>Back</span>
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href={user ? "/blog/create" : "/login?redirect=/blog/create"}
          className="group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-700 hover:text-slate-900 bg-white/70 hover:bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm transition-all duration-300"
        >
          <Plus size={13} className="text-[#A855F7] group-hover:rotate-90 transition-transform duration-300" />
          <span>Write</span>
        </Link>

        <Link
          href={user ? "/dashboard" : "/login"}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors duration-300 flex items-center gap-2"
        >
          {user ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span>{user.name?.split(" ")[0] || "Dashboard"}</span>
            </>
          ) : (
            "Sign In"
          )}
        </Link>
      </div>
    </header>
  );
}
