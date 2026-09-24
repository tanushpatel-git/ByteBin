export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${variant === "primary"
        ? "bg-gradient-to-r from-[#654cff] to-[#7659f5] text-white shadow-lg shadow-[#6555ff]/20 hover:scale-[1.02]"
        : "border border-[#d9d9f5] bg-white text-[#26336a] hover:border-[#bdb8ff]"
        }`}
    >
      {children}
    </button>
  );
}