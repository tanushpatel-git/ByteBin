"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Folder,
  FolderOpen,
} from "lucide-react";
import { cn } from "./utils";
import { FILE_TREE } from "./constants";
import type { FileNode } from "./types";

const LANG_COLORS: Record<string, string> = {
  tsx: "#3178C6",
  ts: "#3178C6",
  js: "#F7DF1E",
  css: "#8B5CF6",
  json: "#F59E0B",
  md: "#6B7280",
};

function FileIcon({ language }: { language?: string }) {
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

function TreeNode({ node, depth = 0, activeId, onSelect }: {
  node: FileNode;
  depth?: number;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 1);
  const isFolder = node.type === "folder";
  const isActive = node.id === activeId;

  const handleClick = () => {
    if (isFolder) setExpanded((v) => !v);
    else onSelect(node.id);
  };

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={cn(
          "flex items-center gap-1.5 w-full text-left py-1 px-2 rounded-lg text-[12px] transition-colors select-none group",
          isActive
            ? "bg-[#EDE9FF] text-[#171717]"
            : "text-[#6B7280] hover:text-[#171717] hover:bg-[#F3EEE8]"
        )}
        style={{ paddingLeft: `${8 + depth * 14}px` }}
        aria-expanded={isFolder ? expanded : undefined}
      >
        {isFolder ? (
          <>
            <ChevronRight
              size={12}
              className={cn("shrink-0 transition-transform", expanded && "rotate-90")}
            />
            {expanded
              ? <FolderOpen size={13} className="text-[#D3ACFF] shrink-0" />
              : <Folder size={13} className="text-[#D3ACFF] shrink-0" />
            }
          </>
        ) : (
          <>
            <span className="w-3 shrink-0" />
            <FileIcon language={node.language} />
          </>
        )}
        <span className="truncate">{node.name}</span>
        {node.modified && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#D3ACFF] ml-auto shrink-0" />
        )}
      </motion.button>

      <AnimatePresence initial={false}>
        {isFolder && expanded && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                depth={depth + 1}
                activeId={activeId}
                onSelect={onSelect}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function RepositoryTree() {
  const [activeId, setActiveId] = useState("sidebar");

  return (
    <div className="space-y-0.5 px-2">
      {FILE_TREE.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          depth={0}
          activeId={activeId}
          onSelect={setActiveId}
        />
      ))}
    </div>
  );
}
