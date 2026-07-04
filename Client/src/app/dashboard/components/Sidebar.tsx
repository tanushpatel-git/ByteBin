import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Activity,
    FolderKanban,
    Rocket,
    Server,
    Settings,
    Users,
} from "lucide-react";

export const Sidebar = () => {
    return (
        <aside className="w-[280px] bg-[var(--bg-base)] border-r border-[var(--border-subtle)]/50 flex flex-col shrink-0 relative z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-colors duration-300">
            {/* Logo */}
            <div className="h-[72px] px-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#a78bfa] flex items-center justify-center text-white font-bold text-[14px] shadow-sm shadow-[var(--accent)]/30">
                    B
                </div>
                <span className="font-bold text-[17px] text-[var(--text-main)] tracking-tight">
                    ByteBin
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-5 py-6 space-y-7 overflow-y-auto scrollbar-hide">
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                        Overview
                    </p>
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] font-medium text-[13px] transition-all"
                    >
                        <Activity className="w-[18px] h-[18px]" />
                        Dashboard
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    </Link>
                    <Link
                        href="/dashboard/repositories"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)] font-medium text-[13px] transition-all group"
                    >
                        <FolderKanban className="w-[18px] h-[18px] group-hover:text-[var(--accent)] transition-colors" />
                        Repositories
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)] font-medium text-[13px] transition-all group"
                    >
                        <Rocket className="w-[18px] h-[18px] group-hover:text-[var(--accent)] transition-colors" />
                        Deployments
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)] font-medium text-[13px] transition-all group"
                    >
                        <Server className="w-[18px] h-[18px] group-hover:text-[var(--accent)] transition-colors" />
                        Infrastructure
                    </Link>
                </div>

                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                        Settings
                    </p>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)] font-medium text-[13px] transition-all group"
                    >
                        <Users className="w-[18px] h-[18px] group-hover:text-[var(--accent)] transition-colors" />
                        Team Members
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)] font-medium text-[13px] transition-all group flex-1"
                    >
                        <Settings className="w-[18px] h-[18px] group-hover:text-[var(--accent)] transition-colors" />
                        Project Settings
                        <div className="ml-auto w-5 h-5 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[9px] text-[var(--text-muted)] group-hover:border-[var(--accent)]/30 transition-colors">
                            ⌘,
                        </div>
                    </Link>
                </div>
            </nav>

            {/* Storage/Plan block */}
            <div className="p-5 mt-auto">
                <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[16px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[12px] font-semibold text-[var(--text-main)]">
                            Pro Plan
                        </span>
                        <span className="text-[10px] font-medium text-[var(--accent)] bg-[var(--accent-light)] px-2 py-0.5 rounded-full">
                            Active
                        </span>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--text-muted)]">Bandwidth</span>
                            <span className="font-medium text-[var(--text-main)]">
                                45GB <span className="text-[var(--text-muted)]">/ 100GB</span>
                            </span>
                        </div>
                        <div className="h-1.5 w-full bg-[var(--bg-base)] rounded-full overflow-hidden border border-[var(--border-subtle)]/50">
                            <div className="h-full bg-[var(--accent)] w-[45%] rounded-full" />
                        </div>
                    </div>
                    <button className="w-full mt-4 py-2 bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:bg-[var(--accent-light)] hover:border-[var(--accent-light)] hover:text-[var(--accent)] transition-colors text-[12px] font-medium text-[var(--text-main)] rounded-xl">
                        Upgrade plan
                    </button>
                </div>
            </div>

            {/* User Profile */}
            <div className="p-5 border-t border-[var(--border-subtle)]/50">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <Image
                        src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=F4ECFF"
                        alt="User"
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full bg-[var(--accent-light)] border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/50 transition-colors"
                    />
                    <div className="flex-1">
                        <h4 className="text-[13px] font-semibold text-[var(--text-main)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                            Vedant Patel
                        </h4>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                            vedant@bytebin.com
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};
