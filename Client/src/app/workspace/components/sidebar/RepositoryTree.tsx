import { ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import { cn } from "../utils";
import { FILE_TREE } from "../data/constants";
import type { FileNode } from "../types";

const LANG_COLORS: Record<string, string> = {
  tsx: "#3178C6",
  ts: "#3178C6",
  js: "#F7DF1E",
  css: "#8B5CF6",
  json: "#F59E0B",
};

function LangDot({ language }: { language?: string }) {
  if (!language) return <FileText size={13} className="text-[#9CA3AF] shrink-0" />;
  const color = LANG_COLORS[language] ?? "#9CA3AF";
  return (
    <span
      className="w-3 h-3 rounded-[3px] shrink-0 text-[7px] font-bold flex items-center justify-center text-white"
      style={{ backgroundColor: color }}
    >
      {language.slice(0, 1).toUpperCase()}
    </span>
  );
}

function TreeNode({
  node,
  depth = 0,
  activeId,
}: {
  node: FileNode;
  depth?: number;
  activeId: string;
}) {
  const isFolder = node.type === "folder";
  const isActive = node.id === activeId;
  const expanded = depth < 1; // statically expand root level for UI mockup

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-1.5 w-full text-left py-1 px-2 rounded-lg text-[12px] transition-colors select-none",
          isActive
            ? "bg-[var(--accent)]/10 text-[var(--text-main)]"
            : "text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"
        )}
        style={{ paddingLeft: `${8 + depth * 14}px` }}
      >
        {isFolder ? (
          <>
            <ChevronRight
              size={12}
              className={cn("shrink-0 transition-transform text-[#9CA3AF]", expanded && "rotate-90")}
            />
            {expanded
              ? <FolderOpen size={13} className="text-[#D3ACFF] shrink-0" />
              : <Folder size={13} className="text-[#D3ACFF] shrink-0" />
            }
          </>
        ) : (
          <>
            <span className="w-3 shrink-0" />
            <LangDot language={node.language} />
          </>
        )}
        <span className="truncate flex-1">{node.name}</span>
        {node.modified && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#D3ACFF] shrink-0" />
        )}
      </div>

      {isFolder && expanded && node.children && (
        <div className="overflow-hidden">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function RepositoryTree() {
  const activeId = "sidebar";

  return (
    <div className="space-y-0.5 px-5">
      {FILE_TREE.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          depth={0}
          activeId={activeId}
        />
      ))}
    </div>
  );
}
