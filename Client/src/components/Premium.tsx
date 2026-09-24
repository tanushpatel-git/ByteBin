import {
  ArrowRight,
  Bell,
  Cloud,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

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
          <div className="mb-3 inline-flex rounded-full bg-[#e8e6ff] px-3 py-1 text-[9px] font-semibold text-[#6456ed]">
            Powerful, Flexible, Built for You.
          </div>

          <h2 className="text-2xl font-extrabold leading-tight text-[#112052]">
            Unlock Premium Benefits
            <br />
            With Our Advanced Features.
          </h2>

          <p className="mt-3 max-w-sm text-[11px] leading-5 text-[#78819e]">
            Get more control, more insights, and more productivity with our
            premium plan.
          </p>

          <button className="mt-5 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6252ef] to-[#7658f6] px-5 py-3 text-[10px] font-bold text-white shadow-lg shadow-[#6252ef]/20">
            Explore Premium Plans
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {premiumFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-lg border border-white bg-white p-4 shadow-sm"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#eeedff] text-[#6456ed]">
                  <Icon size={14} />
                </div>

                <h3 className="text-[10px] font-bold text-[#182557]">
                  {feature.title}
                </h3>

                <p className="mt-1 text-[8px] leading-4 text-[#8991ac]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}