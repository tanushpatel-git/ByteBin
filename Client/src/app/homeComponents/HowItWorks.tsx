"use client";

import React from "react";
import { GitBranch, Box, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect Repository",
      description: "Import your project from GitHub, GitLab, or Bitbucket with a single click. We automatically detect your framework.",
      icon: GitBranch,
      color: "from-[#F5D7C8] to-orange-200",
    },
    {
      num: "02",
      title: "Deploy Automatically",
      description: "Every push to your main branch triggers a production build. Pull requests get isolated preview environments.",
      icon: Box,
      color: "from-[#D3ACFF] to-purple-300",
    },
    {
      num: "03",
      title: "Scale Globally",
      description: "Your site is served from our edge network across 35 regions, ensuring millisecond latency for every user.",
      icon: TrendingUp,
      color: "from-blue-200 to-cyan-200",
    },
  ];

  return (
    <section className="py-32 bg-[#FBF5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
            From code to global in seconds
          </h2>
          <p className="text-[18px] text-[#6B7280]">
            A workflow so smooth it feels like magic.
          </p>
        </div>

        <div className="relative">
          {/* Animated Connector Line */}
          <div className="absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#F5D7C8] via-[#D3ACFF] to-blue-200 hidden md:block opacity-30" />
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] mb-8 shadow-sm group-hover:-translate-y-2 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                      <Icon size={28} className="text-[#18181B]" />
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/40 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="text-[#D3ACFF] font-mono text-[14px] font-bold tracking-widest mb-4">
                    STEP {step.num}
                  </span>
                  <h3 className="text-2xl font-bold text-[#18181B] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
