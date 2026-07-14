"use client";

import { m } from "framer-motion";
import { GitBranch, Box, TrendingUp, CheckCircle2 } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { useEffect, useRef, useState } from "react";

const PIPELINE_STEPS = [
  { label: "Repository", icon: GitBranch },
  { label: "Commit", icon: GitBranch },
  { label: "Build", icon: Box },
  { label: "Tests", icon: CheckCircle2 },
  { label: "Deploy", icon: TrendingUp },
  { label: "Production", icon: CheckCircle2 },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
    }, 1200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
              From code to global in seconds
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              A workflow so smooth it feels like magic.
            </p>
          </div>
        </Reveal>

        {/* Animated Deployment Pipeline */}
        <Reveal delay={0.1}>
          <div className="flex items-center justify-center gap-0 mb-24 overflow-x-auto pb-4">
            {PIPELINE_STEPS.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;
              const isPulse = i === activeStep;
              return (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center gap-2">
                    <m.div
                      animate={isPulse
                        ? { scale: [1, 1.15, 1], boxShadow: ["0 0 0px rgba(211,172,255,0)", "0 0 16px rgba(211,172,255,0.7)", "0 0 0px rgba(211,172,255,0)"] }
                        : {}}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "border-[#D3ACFF] bg-[#D3ACFF]/20"
                          : "border-[#ECE3D8] bg-white"
                      }`}
                    >
                      <Icon size={16} className={isActive ? "text-[#D3ACFF]" : "text-[#6B7280]"} />
                    </m.div>
                    <span className={`text-[10px] font-medium transition-colors ${isActive ? "text-[#18181B]" : "text-[#6B7280]"}`}>
                      {step.label}
                    </span>
                  </div>
                  {i < PIPELINE_STEPS.length - 1 && (
                    <div className="w-12 h-[2px] mb-5 mx-1 relative overflow-hidden bg-[#ECE3D8]">
                      <m.div
                        animate={i < activeStep ? { scaleX: 1 } : { scaleX: 0 }}
                        initial={{ scaleX: 0 }}
                        style={{ originX: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-[#D3ACFF]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="relative">
          {/* Animated Connector Line */}
          <div className="absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#F5D7C8] via-[#D3ACFF] to-blue-200 hidden md:block opacity-30" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={index} delay={index * 0.12}>
                  <div className="relative flex flex-col items-center text-center group">
                    <m.div
                      whileHover={{ y: -8, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] mb-8 shadow-sm`}
                    >
                      <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                        <Icon size={28} className="text-[#18181B]" />
                      </div>
                    </m.div>

                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/40 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="text-[#D3ACFF] font-mono text-[14px] font-bold tracking-widest mb-4">
                      STEP {step.num}
                    </span>
                    <h3 className="text-2xl font-bold text-[#18181B] mb-4">{step.title}</h3>
                    <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-[280px]">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
