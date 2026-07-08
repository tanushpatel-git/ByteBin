import Image from "next/image";
import React from "react";

export const TimelineEvent = ({
    time,
    icon: Icon,
    iconColor,
    bgColor,
    title,
    subtitle,
    badge,
    badge2,
    duration,
    avatars,
    active,
}: {
    time: string;
    icon: React.ElementType;
    iconColor: string;
    bgColor: string;
    title: string;
    subtitle: string;
    badge?: string;
    badge2?: string;
    duration?: string;
    avatars?: boolean;
    active?: boolean;
}) => (
    <div className="flex gap-4 relative group">
        <div className="w-12 text-right shrink-0">
            <span
                className={`text-[12px] font-semibold ${
                    active ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"
                }`}
            >
                {time}
            </span>
        </div>
        <div className="relative">
            <div className="absolute -left-4 top-2.5 w-[33px] h-[1px] bg-[var(--border-subtle)] group-hover:bg-[var(--accent)]/50 transition-colors" />
            <div
                className={`w-5 h-5 rounded-full ${bgColor} border-2 border-[var(--bg-card)] flex items-center justify-center relative z-10`}
            >
                <div className={`w-1.5 h-1.5 rounded-full ${iconColor.replace("text-", "bg-")}`} />
            </div>
        </div>
        <div className="flex-1 pb-6">
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <h4
                        className={`text-[13px] font-semibold ${
                            active ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"
                        }`}
                    >
                        {title}
                    </h4>
                    {badge && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[var(--accent-light)] text-[var(--accent)]">
                            {badge}
                        </span>
                    )}
                    {badge2 && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                            @{badge2}
                        </span>
                    )}
                </div>
                <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
            </div>
            <p className="text-[12px] text-[var(--text-muted)] mb-2.5">{subtitle}</p>
            {duration && (
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)] font-medium bg-[var(--bg-base)] inline-flex px-2 py-1 rounded-md border border-[var(--border-subtle)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]/30" />
                    {duration}
                </div>
            )}
            {avatars && (
                <div className="flex items-center mt-3">
                    {[1, 2, 3].map((i) => (
                        <Image
                            key={i}
                            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=F4ECFF`}
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full border-2 border-[var(--bg-card)] -ml-1.5 first:ml-0 bg-[var(--accent-light)]"
                            alt="avatar"
                        />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-[var(--bg-card)] -ml-1.5 bg-[var(--bg-base)] flex items-center justify-center text-[9px] font-bold text-[var(--text-muted)]">
                        +2
                    </div>
                </div>
            )}
        </div>
    </div>
);