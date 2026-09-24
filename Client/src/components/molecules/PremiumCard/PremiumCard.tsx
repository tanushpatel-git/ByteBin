import type { LucideIcon } from "lucide-react";
import IconBadge from "@/components/atoms/IconBadge";

export default function PremiumCard({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-white bg-white p-4 shadow-sm">
      <IconBadge icon={icon} size="sm" className="mb-2" />

      <h3 className="text-[10px] font-bold text-[#182557]">{title}</h3>

      <p className="mt-1 text-[8px] leading-4 text-[#8991ac]">{description}</p>
    </div>
  );
}