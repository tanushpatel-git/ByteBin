"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Folder, File, GitCommit, PlayCircle, GitPullRequest, TerminalSquare, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "../motion/Reveal";

export function InteractivePreview() {
  const [activeTab, setActiveTab] = useState("repo");

  return (
    <section className="py-24 bg-[#FBF5EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
              Everything you need. <br /> In one place.
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              Experience a seamlessly integrated workflow from code to production.
            </p>
          </div>
        </Reveal>

        {/* Interactive UI Container */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-5xl min-h-[500px] md:h-[600px] bg-white rounded-[24px] md:rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-[#ECE3D8] overflow-hidden flex flex-col">
            {/* Top Bar */}
            <div className="h-14 border-b border-[#ECE3D8] flex items-center px-4 justify-between bg-white/50 backdrop-blur-sm z-10 gap-2">
              <div className="flex gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ECE3D8]" />
                <div className="w-3 h-3 rounded-full bg-[#ECE3D8]" />
                <div className="w-3 h-3 rounded-full bg-[#ECE3D8]" />
              </div>
              <div className="flex items-center gap-2 sm:gap-4 bg-[#FBF5EE] px-3 sm:px-4 py-1.5 rounded-full border border-[#ECE3D8] max-w-xs truncate">
                <Search size={14} className="text-[#6B7280] shrink-0" />
                <span className="text-[11px] sm:text-[12px] font-medium text-[#6B7280] truncate">bytebin / nextjs-commerce</span>
              </div>
              <div className="w-4 sm:w-16 shrink-0" />
            </div>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#ECE3D8] bg-[#FBF5EE]/50 p-3 md:p-4 flex md:flex-col gap-1.5 md:gap-2 overflow-x-auto md:overflow-visible shrink-0 no-scrollbar">
                {[
                  { id: "repo", icon: Folder, label: "Repository Tree" },
                  { id: "commits", icon: GitCommit, label: "Commit History" },
                  { id: "deployments", icon: PlayCircle, label: "CI/CD Pipeline" },
                  { id: "prs", icon: GitPullRequest, label: "Pull Requests" },
                  { id: "terminal", icon: TerminalSquare, label: "Edge Terminal" },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <m.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        "flex items-center gap-2 md:gap-3 px-3 py-2 rounded-xl text-[12px] md:text-[13px] font-medium transition-all text-left whitespace-nowrap shrink-0 md:shrink",
                        isActive
                          ? "bg-white shadow-sm border border-[#ECE3D8] text-[#18181B]"
                          : "text-[#6B7280] hover:text-[#18181B] hover:bg-white/50"
                      )}
                    >
                      <Icon size={16} className={isActive ? "text-[#D3ACFF]" : ""} />
                      {tab.label}
                    </m.button>
                  );
                })}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-white p-8 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "repo" && (
                    <m.div
                      key="repo"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-[#ECE3D8] pb-4">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-[#18181B]">nextjs-commerce</h3>
                          <p className="text-[12px] text-[#6B7280]">Public • Updated 2 hours ago</p>
                        </div>
                        <div className="px-3 py-1 bg-[#18181B] text-white text-[12px] font-medium rounded-lg">Clone</div>
                      </div>
                      <div className="space-y-1">
                        {[
                          { type: "folder", name: "app" },
                          { type: "folder", name: "components" },
                          { type: "folder", name: "lib" },
                          { type: "file", name: "package.json" },
                          { type: "file", name: "next.config.js" },
                        ].map((item, i) => (
                          <m.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                            whileHover={{ x: 4, backgroundColor: "rgba(251,245,238,1)" }}
                            className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors group"
                          >
                            {item.type === "folder" ? (
                              <Folder size={16} className="text-[#D3ACFF]" fill="currentColor" opacity={0.3} />
                            ) : (
                              <File size={16} className="text-[#6B7280]" />
                            )}
                            <span className="text-[13px] font-medium text-[#18181B]">{item.name}</span>
                            <span className="ml-auto text-[11px] text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity">
                              Update {item.name}
                            </span>
                          </m.div>
                        ))}
                      </div>
                    </m.div>
                  )}

                  {activeTab === "deployments" && (
                    <m.div
                      key="deployments"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col gap-4">
                        {[
                          { status: "success", env: "Production", commit: "a9f2b4c", time: "2m ago" },
                          { status: "success", env: "Preview", commit: "b8c3d5e", time: "1h ago" },
                          { status: "failed", env: "Preview", commit: "f1a2b3c", time: "4h ago" },
                        ].map((dep, i) => (
                          <m.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.3 }}
                            whileHover={{ y: -2, borderColor: "rgba(211,172,255,0.5)" }}
                            className="flex flex-col p-4 border border-[#ECE3D8] rounded-xl cursor-pointer group"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className={cn("w-2 h-2 rounded-full", dep.status === "success" ? "bg-green-500" : "bg-red-500")} />
                                <span className="font-semibold text-[14px] text-[#18181B]">{dep.env} Deployment</span>
                              </div>
                              <span className="text-[12px] text-[#6B7280]">{dep.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
                              <GitCommit size={14} />
                              <span className="font-mono text-[#18181B]">{dep.commit}</span>
                              <span>- Update dependency to latest</span>
                            </div>
                            <div className="mt-4 flex gap-1 items-center">
                              <div className="h-1 flex-1 bg-green-500 rounded-l-full" />
                              <div className="h-1 flex-1 bg-green-500" />
                              <div className={cn("h-1 flex-1 rounded-r-full", dep.status === "success" ? "bg-green-500" : "bg-red-500")} />
                            </div>
                            <div className="flex justify-between mt-1 text-[10px] text-[#6B7280]">
                              <span>Build</span><span>Checks</span><span>Deploy</span>
                            </div>
                          </m.div>
                        ))}
                      </div>
                    </m.div>
                  )}

                  {activeTab === "terminal" && (
                    <m.div
                      key="terminal"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      <div className="w-full h-full bg-[#18181B] rounded-xl p-5 font-mono text-[13px] leading-relaxed shadow-inner">
                        <div className="text-[#D3ACFF] mb-2">➜  ~ bytebin login</div>
                        <div className="text-white/70 mb-4">Authenticating... Success! Logged in as vedant@bytebin.com</div>
                        <div className="text-[#D3ACFF] mb-2">➜  ~ bytebin link</div>
                        <div className="text-white/70 mb-4">Linked to project &quot;nextjs-commerce&quot;</div>
                        <div className="text-[#D3ACFF] mb-2">➜  ~ bytebin deploy --prod</div>
                        <div className="text-white/70">✔ Building...</div>
                        <div className="text-white/70">✔ Uploading assets (14.2 MB)...</div>
                        <div className="text-white/70">✔ Provisioning edge functions...</div>
                        <div className="text-[#27C93F] mt-2 font-bold">Deployed! (4.2s)</div>
                        <div className="text-white/50 mt-1">https://bytebin.app/deploy/prod</div>
                        <m.div
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="text-[#D3ACFF] mt-4"
                        >
                          _
                        </m.div>
                      </div>
                    </m.div>
                  )}

                  {["commits", "prs"].includes(activeTab) && (
                    <m.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center justify-center h-full text-[#6B7280]"
                    >
                      <Search size={48} className="mb-4 opacity-20" />
                      <p>Explore {activeTab} in real-time</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
