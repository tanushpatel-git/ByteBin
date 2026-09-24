import {
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import FeatureCard from "@/components/molecules/FeatureCard";

const features = [
  {
    icon: CheckCircle2,
    title: "Task Organization",
    description: "Keep your work structured and on track.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together, achieve more.",
  },
  {
    icon: CalendarDays,
    title: "Smart Calendar",
    description: "Never miss a deadline again.",
  },
  {
    icon: Zap,
    title: "Productivity Insights",
    description: "Track your progress with real-time analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Your data is always safe with us.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-10">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#102052] sm:text-3xl">
          Everything You Need for
          <br />
          Seamless Task Management
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-[12px] leading-5 text-[#78819f]">
          Powerful features designed to help you stay organized,
          <br />
          collaborate better, and achieve more.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5">
          {features.map((feature) => (
            <FeatureCard
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