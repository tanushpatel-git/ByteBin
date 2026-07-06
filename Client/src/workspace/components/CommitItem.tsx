import { GitCommit, CheckCircle2, Clock, XCircle } from "lucide-react";
import type { Commit } from "./types";
import { cn } from "./utils";

interface CommitItemProps {
  commit: Commit;
  isLast: boolean;
}

const StatusIcon = ({ status }: { status: Commit["status"] }) => {
  switch (status) {
    case "success":
      return <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />;
    case "pending":
      return <Clock size={13} className="text-amber-500 shrink-0" />;
    case "failed":
      return <XCircle size={13} className="text-red-500 shrink-0" />;
  }
};

export function CommitItem({ commit, isLast }: CommitItemProps) {
  return (
    <div className="flex gap-3">
      {/* Timeline column */}
      <div className="flex flex-col items-center pt-0.5">
        <div className="w-5 h-5 rounded-full bg-[#F3EEE8] border border-[#EAE2D9] flex items-center justify-center shrink-0">
          <GitCommit size={11} className="text-[#D3ACFF]" />
        </div>
        {!isLast && <div className="w-px flex-1 bg-[#EAE2D9] mt-1.5" />}
      </div>

      {/* Content */}
      <div className={cn("pb-4 flex-1 min-w-0", isLast && "pb-0")}>
        <div className="flex items-start gap-2">
          {/* Avatar */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D3ACFF] to-[#7C3AED] flex items-center justify-center text-white text-[8px] font-bold shrink-0">
            {commit.authorInitials}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[12px] text-[#171717] font-medium leading-snug truncate">
              {commit.message}
            </p>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-[10px] text-[#9CA3AF]">{commit.author}</span>
              <span className="text-[10px] text-[#D1D5DB]">·</span>
              <code className="text-[10px] font-mono text-[#D3ACFF] bg-[#F4ECFF] px-1.5 py-0.5 rounded-md">
                {commit.hash}
              </code>
              <span className="text-[10px] text-[#D1D5DB]">·</span>
              <span className="text-[10px] text-[#9CA3AF]">{commit.timestamp}</span>
              <StatusIcon status={commit.status} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
