import { Search } from "lucide-react";
import { cn } from "../utils";

export function SearchBar() {
  return (
    <div className="relative w-[220px]">
      <div className="flex items-center gap-2 h-8 px-3 rounded-xl border bg-[#F3EEE8] border-[#EAE2D9]">
        <Search size={13} className="text-[#9CA3AF] shrink-0" />
        <input
          type="text"
          placeholder="Search files, commands…"
          className="flex-1 text-[13px] text-[#171717] placeholder:text-[#9CA3AF] bg-transparent outline-none min-w-0"
          aria-label="Search workspace"
        />
        <kbd className="hidden sm:flex items-center px-1.5 py-0.5 rounded-md bg-[#EAE2D9] text-[10px] font-medium text-[#9CA3AF] shrink-0">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
