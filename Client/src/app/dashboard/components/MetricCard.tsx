"use client";

import React from "react";
import { motion } from "framer-motion";

export const MetricCard = ({
    icon,
    title,
    value,
    delta,
    positive,
    delay,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
    delta: string;
    positive: boolean;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,.015)] hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col justify-between h-[120px]"
    >
        <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)]">
                {icon}
            </div>
            <span className="text-[13px] font-medium text-[var(--text-muted)]">{title}</span>
        </div>
        <div className="flex items-end justify-between mt-4">
            <h3 className="text-[28px] font-bold text-[var(--text-main)] leading-none tracking-tight">
                {value}
            </h3>
            <div
                className={`flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full ${
                    positive
                        ? "text-[var(--success)] bg-[var(--success-bg)]"
                        : "text-red-600 bg-red-50"
                }`}
            >
                {delta}
            </div>
        </div>
    </motion.div>
);
