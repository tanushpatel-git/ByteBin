"use client";

import React from "react";
import {
    LineChart,
    Line,
    ResponsiveContainer,
} from "recharts";

interface DeploymentsChartProps {
    data: Record<string, unknown>[];
}

export const DeploymentsChart = ({ data }: DeploymentsChartProps) => {
    return (
        <div className="h-[90px] w-full mb-4 relative ml-[-10px]">
            <ResponsiveContainer width="105%" height="100%">
                <LineChart data={data}>
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--accent)"
                        strokeWidth={2.5}
                        dot={{
                            r: 3,
                            fill: "var(--bg-card)",
                            stroke: "var(--accent)",
                            strokeWidth: 2,
                        }}
                        activeDot={{ r: 5, fill: "var(--accent)", stroke: "var(--bg-card)" }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
