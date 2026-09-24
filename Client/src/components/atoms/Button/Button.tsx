import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-gradient-to-r from-[#654cff] to-[#7659f5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6555ff]/20 hover:scale-[1.02]",
  outline:
    "border border-[#d9d9f5] bg-white px-6 py-3 text-sm font-semibold text-[#26336a] hover:border-[#bdb8ff]",
  light: "bg-white px-7 py-3 text-[10px] font-bold text-[#5c4ee7]",
  compact:
    "bg-gradient-to-r from-[#6252ef] to-[#7658f6] px-5 py-3 text-[10px] font-bold text-white shadow-lg shadow-[#6252ef]/20",
};

export default function Button({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-full transition",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}