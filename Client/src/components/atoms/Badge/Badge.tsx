import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <div
      className={cn(
        variant === "primary"
          ? "flex w-fit items-center gap-2 rounded-full bg-[#f0efff] px-4 py-2 text-[11px] font-semibold text-[#6254eb]"
          : "inline-flex rounded-full bg-[#e8e6ff] px-3 py-1 text-[9px] font-semibold text-[#6456ed]",
        className
      )}
    >
      {children}
    </div>
  );
}