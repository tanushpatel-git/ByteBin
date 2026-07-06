import { FileText, Clock, User, Hash } from "lucide-react";

const META = [
  { icon: FileText, label: "File", value: "Sidebar.tsx" },
  { icon: Hash, label: "Lines", value: "312" },
  { icon: User, label: "Author", value: "Vedan S." },
  { icon: Clock, label: "Modified", value: "2 min ago" },
];

export function FileOverview() {
  return (
    <div className="bg-[#FDFCFB] border border-[#EAE2D9] rounded-2xl p-4 shadow-sm shadow-black/[0.02]">
      <h2 className="text-[13px] font-semibold text-[#171717] mb-3">File Overview</h2>

      <div className="space-y-2.5">
        {META.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#F3EEE8] flex items-center justify-center shrink-0">
              <Icon size={12} className="text-[#9CA3AF]" />
            </div>
            <span className="text-[11px] text-[#9CA3AF] w-14 shrink-0">{label}</span>
            <span className="text-[12px] text-[#171717] font-medium truncate">{value}</span>
          </div>
        ))}
      </div>

      {/* Size bar */}
      <div className="mt-4">
        <div className="flex justify-between mb-1">
          <span className="text-[11px] text-[#9CA3AF]">File size</span>
          <span className="text-[11px] font-medium text-[#171717]">8.4 KB</span>
        </div>
        <div className="h-1.5 bg-[#F3EEE8] rounded-full overflow-hidden">
          <div className="h-full w-[38%] bg-[#D3ACFF] rounded-full" />
        </div>
      </div>
    </div>
  );
}
