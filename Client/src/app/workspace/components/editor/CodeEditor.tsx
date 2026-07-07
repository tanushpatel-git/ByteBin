import { EditorToolbar } from "./EditorToolbar";
import { StatusBar } from "./StatusBar";
import { CODE_LINES } from "../data/constants";
import type { CodeToken } from "../types";

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
                  line.tokens.map((token: CodeToken, i: number) => (
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
