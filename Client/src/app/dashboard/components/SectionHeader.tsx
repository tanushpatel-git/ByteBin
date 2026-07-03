import React from "react";
import { ChevronRight } from "lucide-react";

export const SectionHeader = ({
    title,
    action,
}: {
    title: string;
    action: string;
}) => (
    <div className="flex items-center justify-between mb-5">
        <h3 className="text-[16px] font-bold text-[var(--text-main)] tracking-tight">
            {title}
        </h3>
        <button className="text-[12px] font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-1 group bg-[var(--accent-light)]/50 px-2.5 py-1 rounded-full">
            {action}
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
    </div>
);
