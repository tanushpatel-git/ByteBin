import type {
  FileNode,
  Commit,
  TerminalLine,
  Workspace,
  Dependency,
  CodeLine,
} from "../types";

export const WORKSPACES: Workspace[] = [
  { id: "1", name: "bytebin-core", plan: "pro", initials: "BC" },
  { id: "2", name: "design-system", plan: "team", initials: "DS" },
  { id: "3", name: "api-gateway", plan: "free", initials: "AG" },
];

export const FILE_TREE: FileNode[] = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "app",
        name: "app",
        type: "folder",
        children: [
          { id: "layout", name: "layout.tsx", type: "file", language: "tsx" },
          { id: "page", name: "page.tsx", type: "file", language: "tsx", modified: true },
          { id: "globals", name: "globals.css", type: "file", language: "css" },
        ],
      },
      {
        id: "components",
        name: "components",
        type: "folder",
        children: [
          { id: "header", name: "Header.tsx", type: "file", language: "tsx" },
          { id: "sidebar", name: "Sidebar.tsx", type: "file", language: "tsx", modified: true },
          { id: "button", name: "Button.tsx", type: "file", language: "tsx" },
        ],
      },
      {
        id: "lib",
        name: "lib",
        type: "folder",
        children: [
          { id: "utils", name: "utils.ts", type: "file", language: "ts" },
          { id: "auth", name: "auth.ts", type: "file", language: "ts" },
        ],
      },
    ],
  },
  { id: "tsconfig", name: "tsconfig.json", type: "file", language: "json" },
  { id: "pkgjson", name: "package.json", type: "file", language: "json" },
  { id: "tailwind", name: "tailwind.config.ts", type: "file", language: "ts" },
];

export const COMMITS: Commit[] = [
  {
    id: "c1",
    hash: "a9f2b4c",
    message: "feat: add workspace switcher with plan badges",
    author: "Vedan S.",
    authorInitials: "VS",
    timestamp: "2m ago",
    status: "success",
    branch: "main",
  },
  {
    id: "c2",
    hash: "3e1d7f8",
    message: "fix: resolve hydration mismatch in Sidebar",
    author: "Maya R.",
    authorInitials: "MR",
    timestamp: "18m ago",
    status: "success",
    branch: "main",
  },
  {
    id: "c3",
    hash: "c04a291",
    message: "refactor: extract CodeEditor to dedicated component",
    author: "Leo K.",
    authorInitials: "LK",
    timestamp: "1h ago",
    status: "pending",
    branch: "feat/editor",
  },
  {
    id: "c4",
    hash: "78bb3e5",
    message: "chore: upgrade framer-motion to v12",
    author: "Vedan S.",
    authorInitials: "VS",
    timestamp: "3h ago",
    status: "success",
    branch: "main",
  },
];

export const TERMINAL_LINES: TerminalLine[] = [
  { id: "t0", type: "command", content: "$ bytebin deploy" },
  { id: "t1", type: "info", content: "" },
  { id: "t2", type: "success", content: "✔ Building project..." },
  { id: "t3", type: "success", content: "✔ Installing dependencies..." },
  { id: "t4", type: "success", content: "✔ Running lint..." },
  { id: "t5", type: "success", content: "✔ Type checking..." },
  { id: "t6", type: "success", content: "✔ Uploading assets..." },
  { id: "t7", type: "success", content: "✔ Deploying globally..." },
  { id: "t8", type: "info", content: "" },
  { id: "t9", type: "info", content: "Deployment successful." },
  { id: "t10", type: "info", content: "" },
  { id: "t11", type: "info", content: "Live:" },
  { id: "t12", type: "link", content: "https://bytebin.dev/project" },
];

export const DEPENDENCIES: Dependency[] = [
  { name: "next", version: "15.0.0", type: "runtime", status: "up-to-date" },
  { name: "react", version: "19.0.0", type: "runtime", status: "up-to-date" },
  { name: "framer-motion", version: "12.0.0", type: "runtime", status: "up-to-date" },
  { name: "tailwindcss", version: "4.0.0", type: "dev", status: "up-to-date" },
  { name: "typescript", version: "5.0.0", type: "dev", status: "outdated" },
  { name: "eslint", version: "8.57.0", type: "dev", status: "critical" },
];

export const CODE_LINES: CodeLine[] = [
  { n: 1, tokens: [{ t: '"use client";', c: "#9CA3AF" }] },
  { n: 2, tokens: [] },
  { n: 3, tokens: [{ t: "import", c: "#7C3AED" }, { t: " { useState } ", c: "#171717" }, { t: "from", c: "#7C3AED" }, { t: ' "react";', c: "#059669" }] },
  { n: 4, tokens: [{ t: "import", c: "#7C3AED" }, { t: " { motion, AnimatePresence } ", c: "#171717" }, { t: "from", c: "#7C3AED" }, { t: ' "framer-motion";', c: "#059669" }] },
  { n: 5, tokens: [{ t: "import", c: "#7C3AED" }, { t: " { ChevronRight, Folder } ", c: "#171717" }, { t: "from", c: "#7C3AED" }, { t: ' "lucide-react";', c: "#059669" }] },
  { n: 6, tokens: [] },
  { n: 7, tokens: [{ t: "interface", c: "#7C3AED" }, { t: " SidebarProps {", c: "#171717" }] },
  { n: 8, tokens: [{ t: "  collapsed", c: "#D3ACFF" }, { t: ":", c: "#171717" }, { t: " boolean", c: "#3178C6" }, { t: ";", c: "#171717" }] },
  { n: 9, tokens: [{ t: "  onToggle", c: "#D3ACFF" }, { t: ":", c: "#171717" }, { t: " () => void", c: "#3178C6" }, { t: ";", c: "#171717" }] },
  { n: 10, tokens: [{ t: "}", c: "#171717" }] },
  { n: 11, tokens: [] },
  { n: 12, tokens: [{ t: "export function", c: "#7C3AED" }, { t: " Sidebar", c: "#059669" }, { t: "({ collapsed, onToggle }: ", c: "#171717" }, { t: "SidebarProps", c: "#3178C6" }, { t: ") {", c: "#171717" }] },
  { n: 13, tokens: [{ t: "  const", c: "#7C3AED" }, { t: " [width, setWidth] = ", c: "#171717" }, { t: "useState", c: "#059669" }, { t: "(", c: "#171717" }, { t: "240", c: "#D3ACFF" }, { t: ");", c: "#171717" }] },
  { n: 14, tokens: [] },
  { n: 15, tokens: [{ t: "  const", c: "#7C3AED" }, { t: " handleResize = (", c: "#171717" }, { t: "delta", c: "#D3ACFF" }, { t: ":", c: "#171717" }, { t: " number", c: "#3178C6" }, { t: ") => {", c: "#171717" }] },
  { n: 16, tokens: [{ t: "    setWidth", c: "#059669" }, { t: "((prev) => Math.clamp(prev + delta, ", c: "#171717" }, { t: "180", c: "#D3ACFF" }, { t: ", ", c: "#171717" }, { t: "400", c: "#D3ACFF" }, { t: "));", c: "#171717" }] },
  { n: 17, tokens: [{ t: "  };", c: "#171717" }] },
  { n: 18, tokens: [] },
  { n: 19, tokens: [{ t: "  return", c: "#7C3AED" }, { t: " (", c: "#171717" }] },
  { n: 20, tokens: [{ t: "    <", c: "#6B7280" }, { t: "aside", c: "#EF4444" }, { t: " style={{ width }}", c: "#171717" }, { t: ">", c: "#6B7280" }] },
  { n: 21, tokens: [{ t: "      <", c: "#6B7280" }, { t: "motion.div", c: "#EF4444" }] },
  { n: 22, tokens: [{ t: "        animate={{ x:", c: "#171717" }, { t: " collapsed", c: "#7C3AED" }, { t: " ? -width : ", c: "#171717" }, { t: "0", c: "#D3ACFF" }, { t: " }}", c: "#171717" }] },
  { n: 23, tokens: [{ t: "        transition={{ type:", c: "#171717" }, { t: ' "spring"', c: "#059669" }, { t: ", stiffness:", c: "#171717" }, { t: " 300", c: "#D3ACFF" }, { t: " }}", c: "#171717" }] },
  { n: 24, tokens: [{ t: "      >", c: "#6B7280" }] },
  { n: 25, tokens: [{ t: "        <", c: "#6B7280" }, { t: "WorkspaceSwitcher", c: "#EF4444" }, { t: " />", c: "#6B7280" }] },
  { n: 26, tokens: [{ t: "        <", c: "#6B7280" }, { t: "RepositoryTree", c: "#EF4444" }, { t: " />", c: "#6B7280" }] },
  { n: 27, tokens: [{ t: "      </", c: "#6B7280" }, { t: "motion.div", c: "#EF4444" }, { t: ">", c: "#6B7280" }] },
  { n: 28, tokens: [{ t: "    </", c: "#6B7280" }, { t: "aside", c: "#EF4444" }, { t: ">", c: "#6B7280" }] },
  { n: 29, tokens: [{ t: "  );", c: "#171717" }] },
  { n: 30, tokens: [{ t: "}", c: "#171717" }] },
];
