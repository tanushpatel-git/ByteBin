import { GitBranch, AlertCircle, CheckCircle2, Wifi } from "lucide-react";

const STATUS_ITEMS = [
  { id: "branch", icon: GitBranch, label: "main", color: "text-[#6B7280]" },
  { id: "errors", icon: AlertCircle, label: "0 errors", color: "text-emerald-600" },
  { id: "warnings", icon: CheckCircle2, label: "2 warnings", color: "text-amber-500" },
  { id: "ln", label: "Ln 42, Col 18", color: "text-[#9CA3AF]" },
  { id: "enc", label: "UTF-8", color: "text-[#9CA3AF]" },
  { id: "indent", label: "Spaces: 2", color: "text-[#9CA3AF]" },
];

export function StatusBar() {
  return (
    <div className="flex items-center justify-between gap-4 h-6 px-4 bg-[#F3EEE8] border-t border-[#EAE2D9] shrink-0">
      <div className="flex items-center gap-4">
        {STATUS_ITEMS.map(({ id, icon: Icon, label, color }) => (
          <span key={id} className={`flex items-center gap-1 text-[11px] font-medium ${color}`}>
            {Icon && <Icon size={11} />}
            {label}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1 text-[11px] text-[#9CA3AF]">
        <Wifi size={11} className="text-emerald-500" />
        <span>Synced</span>
      </div>
    </div>
  );
}
