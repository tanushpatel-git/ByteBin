import { ArrowRight, Bell, Cloud, Settings, Sparkles, Zap } from "lucide-react";
import PremiumCard from "@/components/molecules/PremiumCard";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

const premiumFeatures = [
  {
    icon: Zap,
    title: "Advanced Analytics",
    description: "Get detailed reports and productivity insights.",
  },
  {
    icon: Sparkles,
    title: "Automations",
    description: "Save time with smart workflows.",
  },
  {
    icon: Cloud,
    title: "File & Document Management",
    description: "Store and share files easily and securely.",
  },
  {
    icon: Settings,
    title: "Custom Workspaces",
    description: "Create spaces for different projects and teams.",
  },
  {
    icon: Bell,
    title: "Priority Support",
    description: "Get help when you need it, 24/7.",
  },
  {
    icon: Sparkles,
    title: "Integrations",
    description: "Connect with your favorite tools and apps.",
  },
];

export default function Premium() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 rounded-2xl bg-gradient-to-br from-[#f4f3ff] to-[#fafaff] p-8 md:flex-row md:p-10">
        <div className="md:w-[35%]">
          <Badge variant="secondary" className="mb-3">
            Powerful, Flexible, Built for You.
          </Badge>

          <h2 className="text-2xl font-extrabold leading-tight text-[#112052]">
            Unlock Premium Benefits
            <br />
            With Our Advanced Features.
          </h2>

          <p className="mt-3 max-w-sm text-[11px] leading-5 text-[#78819e]">
            Get more control, more insights, and more productivity with our
            premium plan.
          </p>

          <Button variant="compact" className="mt-5">
            Explore Premium Plans
            <ArrowRight size={13} />
          </Button>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {premiumFeatures.map((feature) => (
            <PremiumCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}