import React from "react";
import {
    Search,
    FolderKanban,
    Rocket,
    Server,
    Activity,
    Users,
    Bell,
    ChevronRight,
    ChevronDown,
    CheckCircle2,
    Clock,
    GitCommit,
    Plus,
    RefreshCw,
    FilePlus,
    Hash,
    Sparkles,
    Monitor,
    GitBranch,
    Sun,
} from "lucide-react";

import { Sidebar } from "./components/Sidebar";
import { MetricCard } from "./components/MetricCard";
import { SectionHeader } from "./components/SectionHeader";
import { ResourceBar } from "./components/ResourceBar";
import { TimelineEvent } from "./components/TimelineEvent";
import { FadeIn } from "./components/FadeIn";
import { DeploymentsChart } from "./components/DeploymentsChart";
import { BuildActivityChart } from "./components/BuildActivityChart";

import {
    deploymentData,
    buildData,
    weeklyBuilds,
    recentCommits,
    activeRepositories,
} from "./data/dashboard";

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-[var(--bg-base)] text-[var(--text-main)] font-sans selection:bg-[var(--accent-light)] selection:text-[var(--accent)] overflow-hidden transition-colors duration-300">
            {/* Background Blobs */}
            <div className="fixed top-[-5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#FFDCC8]/20 blur-[100px] pointer-events-none" />
            <div className="fixed top-[15%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[var(--accent)]/15 blur-[100px] pointer-events-none" />

            <Sidebar />

            <main className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
                {/* Topbar */}
                <header className="flex items-center justify-between px-8 py-3.5 sticky top-0 bg-[var(--bg-base)]/80 backdrop-blur-xl z-40 border-b border-[var(--border-subtle)]/50 transition-colors duration-300">
                    <div className="flex-1 max-w-[320px]">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-[var(--text-muted)] group-focus-within:text-[var(--accent)] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="w-full pl-9 pr-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-full text-[13px] outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all shadow-sm placeholder:text-[var(--text-muted)] text-[var(--text-main)]"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <kbd className="px-1 py-0.5 text-[9px] font-medium text-[var(--text-muted)] bg-[var(--accent-light)] rounded">
                                    ⌘
                                </kbd>
                                <kbd className="px-1 py-0.5 text-[9px] font-medium text-[var(--text-muted)] bg-[var(--accent-light)] rounded">
                                    K
                                </kbd>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-[var(--bg-card)] border border-[var(--border-subtle)] p-0.5 rounded-full shadow-sm">
                            <span className="px-2.5 text-[12px] text-[var(--text-muted)]">In:</span>
                            <button className="px-3 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-[12px] font-medium transition-all">
                                All
                            </button>
                            <button className="px-3 py-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] text-[12px] font-medium transition-all">
                                Repos
                            </button>
                            <button className="px-3 py-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] text-[12px] font-medium transition-all">
                                Deployments
                            </button>
                            <button className="px-3 py-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] text-[12px] font-medium transition-all">
                                Teams
                            </button>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <button className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-main)] hover:bg-gray-50 transition-colors shadow-sm">
                                <Sun className="w-3.5 h-3.5" />
                            </button>
                            
                            <button className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-main)] hover:bg-gray-50 transition-colors shadow-sm relative">
                                <Bell className="w-3.5 h-3.5" />
                                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[var(--accent)] rounded-full text-[8px] text-white flex items-center justify-center font-bold border-2 border-[var(--bg-card)]">
                                    7
                                </span>
                            </button>
                            <button className="flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                                <div className="w-6 h-6 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] font-semibold text-[10px]">
                                    BB
                                </div>
                                <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="p-8 max-w-[1400px] w-full mx-auto relative z-10 flex gap-6">
                    <div className="flex-1 space-y-6">
                        {/* Header */}
                        <FadeIn yOffset={10} className="mb-2">
                            <h1 className="text-[36px] font-bold text-[var(--text-main)] tracking-tight leading-tight flex items-center gap-3">
                                Good morning, Developer! <span className="text-3xl">👋</span>
                            </h1>
                            <p className="text-[15px] text-[var(--text-muted)] mt-1.5 font-medium">
                                Here&apos;s what&apos;s happening with your projects today.
                            </p>
                        </FadeIn>

                        {/* Metrics */}
                        <div className="grid grid-cols-4 gap-5">
                            <MetricCard
                                icon={<FolderKanban className="w-4 h-4 text-[var(--accent)]" />}
                                title="Repositories"
                                value="24"
                                delta="↑ 3 this week"
                                positive
                                delay={0.05}
                            />
                            <MetricCard
                                icon={<Sparkles className="w-4 h-4 text-[var(--accent)]" />}
                                title="Deployments"
                                value="38"
                                delta="↑ 12 this week"
                                positive
                                delay={0.1}
                            />
                            <MetricCard
                                icon={<Rocket className="w-4 h-4 text-[var(--accent)]" />}
                                title="Builds"
                                value="96"
                                delta="↑ 8 this week"
                                positive
                                delay={0.15}
                            />
                            <MetricCard
                                icon={<Clock className="w-4 h-4 text-[var(--accent)]" />}
                                title="Uptime"
                                value="99.9%"
                                delta="All operational"
                                positive
                                delay={0.2}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            {/* Deployments Chart */}
                            <FadeIn delay={0.25} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-300">
                                <SectionHeader title="Deployments" action="View all" />
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="w-5 h-5 text-[var(--accent)]"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="2" y1="12" x2="22" y2="12" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[14px] text-[var(--text-main)]">
                                                api.bytebin.com
                                            </h4>
                                            <p className="text-[12px] text-[var(--text-muted)]">Production</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[var(--success-bg)] text-[var(--success)] text-[11px] font-medium rounded-full mb-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                                            Live
                                        </div>
                                        <p className="text-[11px] text-[var(--text-muted)]">2m ago</p>
                                    </div>
                                </div>

                                <DeploymentsChart data={deploymentData} />

                                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--border-subtle)]/50">
                                    <div>
                                        <p className="text-[13px] text-[var(--text-main)] font-semibold mb-0.5">
                                            99.9%
                                        </p>
                                        <p className="text-[11px] text-[var(--text-muted)]">Uptime</p>
                                    </div>
                                    <div>
                                        <p className="text-[13px] text-[var(--text-main)] font-semibold mb-0.5">
                                            120ms
                                        </p>
                                        <p className="text-[11px] text-[var(--text-muted)]">Latency</p>
                                    </div>
                                    <div>
                                        <p className="text-[13px] text-[var(--text-main)] font-semibold mb-0.5">
                                            23
                                        </p>
                                        <p className="text-[11px] text-[var(--text-muted)]">Instances</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Build Activity */}
                            <FadeIn delay={0.3} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-300 flex flex-col">
                                <SectionHeader title="Build activity" action="This week" />
                                <BuildActivityChart buildData={buildData} weeklyBuilds={weeklyBuilds} />
                            </FadeIn>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            {/* Recent Commits */}
                            <FadeIn delay={0.35} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-300">
                                <SectionHeader title="Recent commits" action="View all" />
                                <div className="space-y-4">
                                    {recentCommits.map((commit) => (
                                        <div
                                            key={commit.id}
                                            className="flex items-center justify-between group"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-xl bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                                                    {commit.author.includes("bot") ? (
                                                        <Monitor className="w-3.5 h-3.5 text-[var(--accent)]" />
                                                    ) : (
                                                        <GitCommit className="w-3.5 h-3.5 text-[var(--accent)]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-[13px] font-medium text-[var(--text-main)] mb-0.5 group-hover:text-[var(--accent)] transition-colors cursor-pointer line-clamp-1">
                                                        {commit.message}
                                                    </p>
                                                    <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                                                        <span>by {commit.author}</span>
                                                        <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                                                        <span>{commit.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)]" />
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            {/* Resource Usage */}
                            <FadeIn delay={0.4} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-300">
                                <SectionHeader title="Resource usage" action="This month" />
                                <div className="space-y-5">
                                    <ResourceBar
                                        icon={<Sun className="w-3.5 h-3.5 text-[var(--accent)]" />}
                                        label="CPU Usage"
                                        value="48%"
                                        progress={48}
                                    />
                                    <ResourceBar
                                        icon={<Server className="w-3.5 h-3.5 text-[var(--accent)]" />}
                                        label="Memory Usage"
                                        value="3.2 / 8 GB"
                                        progress={40}
                                    />
                                    <ResourceBar
                                        icon={<Activity className="w-3.5 h-3.5 text-[var(--accent)]" />}
                                        label="Bandwidth"
                                        value="120 / 500 GB"
                                        progress={24}
                                    />
                                    <ResourceBar
                                        icon={<FolderKanban className="w-3.5 h-3.5 text-[var(--accent)]" />}
                                        label="Storage"
                                        value="45 / 200 GB"
                                        progress={22}
                                    />
                                </div>
                            </FadeIn>
                        </div>

                        {/* Active Repositories */}
                        <FadeIn delay={0.45} className="mb-8">
                            <SectionHeader title="Active repositories" action="View all" />
                            <div className="grid grid-cols-4 gap-4">
                                {activeRepositories.map((repo) => (
                                    <div
                                        key={repo.name}
                                        className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[16px] p-4 hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <div className="w-7 h-7 rounded-[10px] bg-[var(--accent-light)] flex items-center justify-center text-[10px] font-bold text-[var(--accent)]">
                                                BB
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-semibold text-[var(--text-main)] line-clamp-1">
                                                    {repo.name}
                                                </h4>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <span className="text-[11px] text-[var(--text-muted)]">
                                                        {repo.type}
                                                    </span>
                                                    <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-0.5">
                                                        <span className="text-[9px]">☆</span> {repo.stars}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-5 w-full flex items-end gap-[2px]">
                                            {[40, 60, 30, 80, 50, 70, 40].map((h, j) => (
                                                <div
                                                    key={j}
                                                    className="flex-1 bg-[var(--accent)]/20 rounded-sm"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Panel */}
                    <div className="w-[280px] shrink-0 space-y-5">
                        <FadeIn delay={0.25} xOffset={20} yOffset={0} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <button className="w-7 h-7 flex items-center justify-center rounded-[10px] hover:bg-gray-50 text-[var(--text-main)]">
                                    <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                </button>
                                <span className="font-semibold text-[var(--text-main)] text-[13px]">
                                    May 2024
                                </span>
                                <button className="w-7 h-7 flex items-center justify-center rounded-[10px] hover:bg-gray-50 text-[var(--text-main)]">
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-7 gap-y-3 text-center mb-5">
                                {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
                                    <div
                                        key={d}
                                        className="text-[9px] font-semibold text-[var(--text-muted)]"
                                    >
                                        {d}
                                    </div>
                                ))}
                                {[...Array(35)].map((_, i) => {
                                    const day = i - 1;
                                    const isCurrentMonth = day > 0 && day <= 31;
                                    const isSelected = day === 15;

                                    return (
                                        <div
                                            key={i}
                                            className={`text-[12px] font-medium w-7 h-7 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-colors ${
                                                !isCurrentMonth
                                                    ? "text-[var(--border-subtle)]"
                                                    : isSelected
                                                    ? "bg-[var(--accent)] text-white shadow-sm shadow-[var(--accent)]/30"
                                                    : "text-[var(--text-main)] hover:bg-gray-50"
                                            }`}
                                        >
                                            {day > 0 ? (day > 31 ? day - 31 : day) : 30 + day}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex gap-1.5">
                                <button className="flex-1 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors text-white text-[12px] font-medium rounded-xl flex items-center justify-center gap-1.5 shadow-sm shadow-[var(--accent)]/20">
                                    <Plus className="w-3.5 h-3.5" /> New
                                </button>
                                <button className="w-9 h-9 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-main)] hover:bg-gray-50 transition-colors">
                                    <RefreshCw className="w-3.5 h-3.5" />
                                </button>
                                <button className="w-9 h-9 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-main)] hover:bg-gray-50 transition-colors">
                                    <FilePlus className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.35} xOffset={20} yOffset={0} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-1.5">
                                    <span className="font-semibold text-[var(--text-main)] text-[13px]">Today</span>
                                    <span className="w-1 h-1 rounded-full bg-[var(--text-main)]" />
                                    <span className="text-[var(--text-muted)] text-[13px]">May 15</span>
                                </div>
                                <button className="flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--accent-light)]/50 px-2 py-1 rounded-full">
                                    All <ChevronDown className="w-3 h-3" />
                                </button>
                            </div>

                            <div className="relative border-l border-[var(--border-subtle)] ml-4 space-y-6 pb-6">
                                <TimelineEvent
                                    time="07:00"
                                    icon={CheckCircle2}
                                    iconColor="text-[var(--success)]"
                                    bgColor="bg-[var(--success-bg)]"
                                    title="Deployed"
                                    subtitle="api.bytebin.com"
                                    badge="Prod"
                                    duration="07:00 - 07:30"
                                />
                                <TimelineEvent
                                    time="07:30"
                                    icon={GitBranch}
                                    iconColor="text-[var(--accent)]"
                                    bgColor="bg-[var(--accent-light)]"
                                    title="Build completed"
                                    subtitle="bytebin/core"
                                    duration="07:30 - 07:56"
                                />
                                <TimelineEvent
                                    time="08:12"
                                    icon={Users}
                                    iconColor="text-[var(--accent)]"
                                    bgColor="bg-[var(--accent-light)]"
                                    title="Team standup"
                                    subtitle="Engineering"
                                    duration="08:00 - 09:00"
                                    avatars
                                    active
                                />
                                <TimelineEvent
                                    time="09:15"
                                    icon={Hash}
                                    iconColor="text-[var(--accent)]"
                                    bgColor="bg-[var(--accent-light)]"
                                    title="New issue"
                                    subtitle="Bug in auth flow"
                                    badge2="jessica"
                                />
                            </div>

                            <button className="w-full py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors text-white text-[12px] font-medium rounded-xl shadow-sm shadow-[var(--accent)]/20 mt-1 hover:scale-[1.02] transform duration-300">
                                View activity
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </main>
        </div>
    );
}
