import { EditorToolbar } from "./EditorToolbar";
import { StatusBar } from "./StatusBar";

// Realistic TypeScript code for the Sidebar component
const CODE_LINES = [
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
  { n: 16, tokens: [{ t: "    setWidth", c: "#059669" }, { t: "((prev) => ", c: "#171717" }, { t: "Math", c: "#3178C6" }, { t: ".clamp(prev + delta, ", c: "#171717" }, { t: "180", c: "#D3ACFF" }, { t: ", ", c: "#171717" }, { t: "400", c: "#D3ACFF" }, { t: "));", c: "#171717" }] },
  { n: 17, tokens: [{ t: "  };", c: "#171717" }] },
  { n: 18, tokens: [] },
  { n: 19, tokens: [{ t: "  return", c: "#7C3AED" }, { t: " (", c: "#171717" }] },
  { n: 20, tokens: [{ t: "    <", c: "#6B7280" }, { t: "aside", c: "#EF4444" }, { t: " style={{ width }}", c: "#171717" }, { t: ">", c: "#6B7280" }] },
  { n: 21, tokens: [{ t: "      <", c: "#6B7280" }, { t: "motion.div", c: "#EF4444" }] },
  { n: 22, tokens: [{ t: "        animate={{ x:", c: "#171717" }, { t: " collapsed ", c: "#7C3AED" }, { t: "? ", c: "#171717" }, { t: "-width ", c: "#D3ACFF" }, { t: ": ", c: "#171717" }, { t: "0 }}", c: "#171717" }] },
  { n: 23, tokens: [{ t: "        transition={{ type:", c: "#171717" }, { t: ' "spring"', c: "#059669" }, { t: ", stiffness:", c: "#171717" }, { t: " 300 }}", c: "#D3ACFF" }] },
  { n: 24, tokens: [{ t: "      >", c: "#6B7280" }] },
  { n: 25, tokens: [{ t: "        <", c: "#6B7280" }, { t: "WorkspaceSwitcher", c: "#EF4444" }, { t: " />", c: "#6B7280" }] },
  { n: 26, tokens: [{ t: "        <", c: "#6B7280" }, { t: "RepositoryTree", c: "#EF4444" }, { t: " />", c: "#6B7280" }] },
  { n: 27, tokens: [{ t: "      </", c: "#6B7280" }, { t: "motion.div", c: "#EF4444" }, { t: ">", c: "#6B7280" }] },
  { n: 28, tokens: [{ t: "    </", c: "#6B7280" }, { t: "aside", c: "#EF4444" }, { t: ">", c: "#6B7280" }] },
  { n: 29, tokens: [{ t: "  );", c: "#171717" }] },
  { n: 30, tokens: [{ t: "}", c: "#171717" }] },
];

export function CodeEditor() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <EditorToolbar />

      <div className="flex-1 overflow-auto bg-[#FDFCFB]">
        <div className="flex min-h-full">
          {/* Line numbers */}
          <div
            className="sticky left-0 bg-[#F8F5F2] border-r border-[#EAE2D9] px-4 py-4 select-none shrink-0"
            aria-hidden="true"
          >
            {CODE_LINES.map((line) => (
              <div
                key={line.n}
                className="text-[12px] font-mono text-[#C9B8A8] leading-6 text-right min-w-[28px]"
              >
                {line.n}
              </div>
            ))}
          </div>

          {/* Code */}
          <div className="py-4 px-5 flex-1 overflow-x-auto">
            {CODE_LINES.map((line) => (
              <div
                key={line.n}
                className="text-[12px] font-mono leading-6 whitespace-pre hover:bg-[#F3EEE8]/60 rounded px-1 -mx-1 transition-colors"
              >
                {line.tokens.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.tokens.map((token, i) => (
                    <span key={i} style={{ color: token.c }}>
                      {token.t}
                    </span>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <StatusBar />
    </div>
  );
}
