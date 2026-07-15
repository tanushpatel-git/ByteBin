"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { m } from "framer-motion";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for hobbyists and personal projects.",
      features: ["1 User", "Deploy from GitHub", "Community Support", "100GB Bandwidth", "Shared Edge Network"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$20",
      period: "/mo",
      description: "For professional developers and small teams.",
      features: ["Up to 10 Users", "Unlimited Environments", "Priority Support", "1TB Bandwidth", "Password Protection", "Custom Domains"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced security and control for large teams.",
      features: ["Unlimited Users", "SSO & SAML", "Dedicated Success Manager", "Custom Bandwidth", "SOC2 Compliance", "99.99% Uptime SLA"],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-[#FBF5EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              Start for free, scale as you grow. No hidden fees.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 0.1} className={plan.highlighted ? "md:-translate-y-4" : ""}>
              {plan.highlighted ? (
                <m.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[32px] p-8 relative bg-[#18181B] text-white shadow-2xl border border-[#D3ACFF]/30"
                  style={{
                    boxShadow: "0 0 0 1px rgba(211,172,255,0.3), 0 20px 60px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Animated gradient border effect */}
                  <m.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-0 rounded-[32px] pointer-events-none overflow-hidden"
                    style={{ zIndex: -1 }}
                  >
                    <div className="absolute inset-[-2px] rounded-[34px] bg-gradient-to-r from-[#D3ACFF] via-[#F5D7C8] to-[#D3ACFF] opacity-20" />
                  </m.div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D3ACFF] text-[#18181B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                  <p className="text-[13px] mb-6 min-h-[40px] text-white/70">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-[14px] text-white/50">{plan.period}</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <m.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + 0.3, duration: 0.3 }}
                        className="flex items-center gap-3 text-[14px]"
                      >
                        <Check size={16} className="text-[#D3ACFF]" />
                        <span className="text-white/90">{feature}</span>
                      </m.li>
                    ))}
                  </ul>
                  <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/register"
                      className="block text-center w-full py-3 rounded-full font-medium bg-white text-[#18181B] hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(211,172,255,0.2)] hover:shadow-[0_0_25px_rgba(211,172,255,0.4)]"
                    >
                      Get Started
                    </Link>
                  </m.div>
                </m.div>
              ) : (
                <SpotlightCard className="rounded-[32px] p-8 relative">
                  <h3 className={cn("text-xl font-semibold mb-2 text-[#18181B]")}>{plan.name}</h3>
                  <p className="text-[13px] mb-6 min-h-[40px] text-[#6B7280]">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-[#18181B]">{plan.price}</span>
                    {plan.period && <span className="text-[14px] text-[#6B7280]">{plan.period}</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <m.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + 0.2, duration: 0.3 }}
                        className="flex items-center gap-3 text-[14px]"
                      >
                        <Check size={16} className="text-[#18181B]" />
                        <span className="text-[#6B7280]">{feature}</span>
                      </m.li>
                    ))}
                  </ul>
                  <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/register"
                      className="block text-center w-full py-3 rounded-full font-medium bg-[#FBF5EE] text-[#18181B] border border-[#ECE3D8] hover:bg-gray-100 transition-all"
                    >
                      Get Started
                    </Link>
                  </m.div>
                </SpotlightCard>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
