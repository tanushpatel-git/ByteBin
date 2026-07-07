import { Sparkles } from "lucide-react";

const SUMMARY_POINTS = [
  "Client component with interactive resize handle for collapsible layout.",
  "Composes WorkspaceSwitcher, SidebarNav, and RepositoryTree as focused sub-components.",
  "Uses framer-motion AnimatePresence for smooth expand/collapse of file tree nodes.",
  "No unnecessary re-renders — state is colocated at the lowest possible level.",
];

export function AISummary() {
  return (
    <div className="bg-gradient-to-br from-[#F4ECFF] to-[#FDFCFB] border border-[#D3ACFF]/30 rounded-2xl p-4 shadow-sm shadow-black/[0.02]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg bg-[#D3ACFF]/30 flex items-center justify-center">
          <Sparkles size={13} className="text-[#7C3AED]" />
        </div>
        <h2 className="text-[13px] font-semibold text-[#171717]">AI Summary</h2>
        <span className="ml-auto text-[10px] font-semibold text-[#7C3AED] bg-[#D3ACFF]/20 px-1.5 py-0.5 rounded-md">
          Beta
        </span>
      </div>

      <ul className="space-y-2">
        {SUMMARY_POINTS.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#D3ACFF] mt-1.5 shrink-0" />
            <p className="text-[12px] text-[#4B4B4B] leading-relaxed">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
