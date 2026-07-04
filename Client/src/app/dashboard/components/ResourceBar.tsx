"use client";

import React from "react";
import { motion } from "framer-motion";

export const ResourceBar = ({
    icon,
    label,
    value,
    progress,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    progress: number;
}) => (
    <div>
        <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
                {icon}
                <span className="text-[13px] font-medium text-[var(--text-main)]">{label}</span>
            </div>
            <span className="text-[12px] text-[var(--text-muted)]">{value}</span>
        </div>
        <div className="h-2 w-full bg-[var(--bg-base)] rounded-full overflow-hidden border border-[var(--border-subtle)]/50">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[var(--accent)] to-[#a78bfa] rounded-full"
            />
        </div>
    </div>
);
