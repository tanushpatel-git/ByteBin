import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-[18px] text-[#6B7280]">
            Start for free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "rounded-[32px] p-8 transition-transform duration-300 relative",
                plan.highlighted
                  ? "bg-[#18181B] text-white shadow-2xl md:-translate-y-4 border border-[#18181B]"
                  : "bg-white text-[#18181B] border border-[#ECE3D8]"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D3ACFF] text-[#18181B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className={cn("text-xl font-semibold mb-2", plan.highlighted ? "text-white" : "text-[#18181B]")}>
                {plan.name}
              </h3>
              <p className={cn("text-[13px] mb-6 min-h-[40px]", plan.highlighted ? "text-white/70" : "text-[#6B7280]")}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className={cn("text-[14px]", plan.highlighted ? "text-white/50" : "text-[#6B7280]")}>{plan.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-[14px]">
                    <Check size={16} className={plan.highlighted ? "text-[#D3ACFF]" : "text-[#18181B]"} />
                    <span className={plan.highlighted ? "text-white/90" : "text-[#6B7280]"}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/register"
                className={cn(
                  "block text-center w-full py-3 rounded-full font-medium transition-all",
                  plan.highlighted
                    ? "bg-white text-[#18181B] hover:bg-gray-100 shadow-[0_0_15px_rgba(211,172,255,0.2)] hover:shadow-[0_0_25px_rgba(211,172,255,0.4)]"
                    : "bg-[#FBF5EE] text-[#18181B] border border-[#ECE3D8] hover:bg-gray-100"
                )}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
