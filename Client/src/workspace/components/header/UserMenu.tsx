import { ChevronDown } from "lucide-react";

export function UserMenu() {
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1.5 hover:bg-[#F3EEE8] rounded-xl px-2 py-1.5 transition-colors"
        aria-label="User menu"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D3ACFF] to-[#7C3AED] flex items-center justify-center shadow-sm">
          <span className="text-white text-[11px] font-bold">VS</span>
        </div>
        <ChevronDown size={12} className="text-[#6B7280] transition-transform" />
      </button>
    </div>
  );
}
