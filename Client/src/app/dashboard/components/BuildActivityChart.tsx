"use client";

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

interface BuildActivityChartProps {
    buildData: any[];
    weeklyBuilds: any[];
}

export const BuildActivityChart = ({ buildData, weeklyBuilds }: BuildActivityChartProps) => {
    return (
        <>
            <div className="flex items-center justify-between mb-4 flex-1">
                <div className="relative w-28 h-28">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={buildData}
                                innerRadius={38}
                                outerRadius={52}
                                paddingAngle={2}
                                dataKey="value"
                                stroke="none"
                            >
                                {buildData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-[var(--text-main)] leading-none">
                            96
                        </span>
                        <span className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider mt-1">
                            Total
                        </span>
                    </div>
                </div>

                <div className="space-y-2.5">
                    {buildData.map((item) => (
                        <div key={item.name} className="flex items-center gap-2.5">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-[12px] font-semibold text-[var(--text-main)] w-5">
                                {item.value}
                            </span>
                            <span className="text-[12px] text-[var(--text-muted)]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-[70px] w-full mt-2 ml-[-12px]">
                <ResponsiveContainer width="105%" height="100%">
                    <BarChart data={weeklyBuilds} barSize={8}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                            dy={5}
                        />
                        <Bar dataKey="builds" fill="var(--accent)" radius={[4, 4, 4, 4]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};