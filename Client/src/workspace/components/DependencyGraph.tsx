import { Network } from "lucide-react";
import { DEPENDENCIES } from "./constants";
import { getDependencyStatusColor } from "./utils";

export function DependencyGraph() {
  const counts = {
    upToDate: DEPENDENCIES.filter((d) => d.status === "up-to-date").length,
    outdated: DEPENDENCIES.filter((d) => d.status === "outdated").length,
    critical: DEPENDENCIES.filter((d) => d.status === "critical").length,
  };

  return (
    <div className="bg-[#FDFCFB] border border-[#EAE2D9] rounded-2xl p-4 shadow-sm shadow-black/[0.02]">
      <div className="flex items-center gap-2 mb-3">
        <Network size={14} className="text-[#D3ACFF]" />
        <h2 className="text-[13px] font-semibold text-[#171717]">Dependencies</h2>
      </div>

      {/* Summary chips */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
          {counts.upToDate} current
        </span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
          {counts.outdated} outdated
        </span>
        {counts.critical > 0 && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700">
            {counts.critical} critical
          </span>
        )}
      </div>

      <div className="space-y-2">
        {DEPENDENCIES.map((dep) => (
          <div key={dep.name} className="flex items-center gap-2">
            <span className="text-[12px] font-mono text-[#171717] flex-1 truncate">
              {dep.name}
            </span>
            <span className="text-[10px] font-mono text-[#9CA3AF]">{dep.version}</span>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${getDependencyStatusColor(dep.status)}`}>
              {dep.status === "up-to-date" ? "✓" : dep.status === "outdated" ? "↑" : "!"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
