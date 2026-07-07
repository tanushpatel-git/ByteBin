import { GitCommit } from "lucide-react";
import { CommitItem } from "./CommitItem";
import { COMMITS } from "../data/constants";

export function CommitHistory() {
  return (
    <div className="bg-[#FDFCFB] border border-[#EAE2D9] rounded-2xl p-4 shadow-sm shadow-black/[0.02]">
      <div className="flex items-center gap-2 mb-4">
        <GitCommit size={14} className="text-[#D3ACFF]" />
        <h2 className="text-[13px] font-semibold text-[#171717]">Recent Commits</h2>
        <span className="ml-auto text-[11px] text-[#9CA3AF] font-medium">main</span>
      </div>

      <div>
        {COMMITS.map((commit, i) => (
          <CommitItem
            key={commit.id}
            commit={commit}
            isLast={i === COMMITS.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
