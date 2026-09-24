import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: "md" | "sm";
  className?: string;
}) {
  return (
    <div
      className={cn(
        size === "md"
          ? "flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0efff] text-[#6456ed] shadow-sm"
          : "flex h-7 w-7 items-center justify-center rounded-full bg-[#eeedff] text-[#6456ed]",
        className
      )}
    >
      <Icon size={size === "md" ? 23 : 14} />
    </div>
  );
}