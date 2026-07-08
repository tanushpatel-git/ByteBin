import {
  Sidebar,
  Header,
  CodeEditor,
  Terminal,
  FileOverview,
  AISummary,
  DependencyGraph,
  CommitHistory,
} from "./components";

export default function WorkspacePage() {
  return (
    <div className="flex h-screen bg-[#F8F5F2] overflow-hidden text-[#171717]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Center Editor & Terminal */}
          <div className="flex flex-col flex-1 min-w-0">
            <CodeEditor />
            <Terminal />
          </div>

          {/* Right Panel */}
          <div className="w-80 bg-[#FDFCFB] border-l border-[#EAE2D9] overflow-y-auto scrollbar-hide shrink-0 p-4 space-y-4">
            <FileOverview />
            <AISummary />
            <DependencyGraph />
            <CommitHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
