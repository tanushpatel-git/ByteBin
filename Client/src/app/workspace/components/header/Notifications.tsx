import { Bell } from "lucide-react";

export function Notifications() {
  return (
    <div className="relative">
      <button
        className="relative flex items-center justify-center w-8 h-8 rounded-xl hover:bg-[#F3EEE8] transition-colors"
        aria-label="Notifications"
      >
        <Bell size={16} className="text-[#6B7280]" />
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D3ACFF] border-2 border-white" />
      </button>
    </div>
  );
}
