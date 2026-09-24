export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#654cff] to-[#7659f5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6555ff]/20 transition hover:scale-[1.02]">
      {children}
    </button>
  );
}