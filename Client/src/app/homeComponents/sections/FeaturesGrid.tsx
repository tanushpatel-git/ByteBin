"use client";

import { FolderKanban, Rocket, Zap, Users, GitMerge, BarChart2 } from "lucide-react";
import { m } from "framer-motion";
import { SpotlightCard } from "../motion/SpotlightCard";
import { Reveal } from "../motion/Reveal";  

export function FeaturesGrid() {
  const features = [
    {
      icon: FolderKanban,
      title: "Repository Management",
      description: "Organize, scale, and secure your codebases with enterprise-grade repository controls and granular access management.",
    },
    {
      icon: Rocket,
      title: "Instant Deployments",
      description: "Push to main and watch your code go live globally in milliseconds. Zero configuration required.",
    },
    {
      icon: Zap,
      title: "Edge Functions",
      description: "Run server-side logic closer to your users. Achieve ultra-low latency without managing infrastructure.",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Review code, share preview deployments, and iterate faster with built-in team workflows.",
    },
    {
      icon: GitMerge,
      title: "Git Integration",
      description: "Deep integration with GitHub, GitLab, and Bitbucket. Automatic CI/CD triggered on every push.",
    },
    {
      icon: BarChart2,
      title: "Developer Analytics",
      description: "Gain insights into build times, deployment success rates, and team velocity with native dashboards.",
    },
  ];

  return (
    <section className="py-24 bg-[#FBF5EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
              Everything you need to ship faster
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              A complete platform engineered for modern frontend teams. Build, deploy, and scale with tools that get out of your way.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <SpotlightCard className="h-full rounded-3xl p-8 group">
                  <m.div 
                    variants={{
                      rest: { rotate: 0 },
                      hover: { rotate: 6, scale: 1.1 }
                    }}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-2xl bg-[#F5D7C8]/20 flex items-center justify-center mb-6 group-hover:bg-[#D3ACFF]/20 transition-colors"
                  >
                    <Icon size={24} className="text-[#18181B] group-hover:text-[#D3ACFF] transition-colors" />
                  </m.div>
                  <m.div
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -2 }
                    }}
                    initial="rest"
                    whileHover="hover"
                  >
                    <h3 className="text-[20px] font-semibold text-[#18181B] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] leading-relaxed">
                      {feature.description}
                    </p>
                  </m.div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
