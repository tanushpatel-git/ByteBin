import type { LucideIcon } from "lucide-react";
import IconBadge from "@/components/atoms/IconBadge";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div>
      <IconBadge icon={icon} className="mx-auto" />

      <h3 className="mt-3 text-[12px] font-bold text-[#142052]">{title}</h3>

      <p className="mx-auto mt-2 max-w-[150px] text-[10px] leading-4 text-[#7e87a5]">
        {description}
      </p>
    </div>
  );
}