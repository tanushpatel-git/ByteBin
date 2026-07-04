"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, GitBranch, GitCommit, GitPullRequest } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#FBF5EE]">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#F5D7C8]/40 blur-[120px] mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#D3ACFF]/30 blur-[150px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ECE3D8] text-[12px] font-medium text-[#6B7280] mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#D3ACFF]"></span>
              ByteBin 2.0 is now live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#18181B] tracking-tight leading-[1.1] mb-6"
            >
              Build software. <br />
              Deploy anywhere. <br />
              <span className="text-[#D3ACFF]">Scale without limits.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] md:text-[20px] text-[#6B7280] leading-relaxed mb-10 max-w-xl"
            >
              The ultimate developer platform for managing repositories, automating CI/CD pipelines, and collaborating on deployments seamlessly from edge to cloud.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/register"
                className="group flex items-center gap-2 bg-[#18181B] text-white px-7 py-3.5 rounded-full font-medium hover:bg-black/80 transition-all shadow-[0_0_20px_rgba(211,172,255,0.4)] hover:shadow-[0_0_30px_rgba(211,172,255,0.6)]"
              >
                Start Building
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#18181B] border border-[#ECE3D8] px-7 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
              >
                <FaGithub size={20} />
                Continue with GitHub
              </Link>
            </motion.div>
          </div>

          {/* Right Floating Product Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end perspective-1000"
          >
            <div className="relative w-full max-w-[500px] h-full flex flex-col items-center justify-center">
              
              {/* Terminal Window */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute z-30 top-10 right-0 w-[320px] bg-[#18181B] rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-md"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="mx-auto flex items-center gap-1.5 text-white/50 text-[10px] font-medium">
                    <Terminal size={12} />
                    bash
                  </div>
                </div>
                <div className="p-4 font-mono text-[12px] leading-relaxed">
                  <div className="text-[#D3ACFF]">$ bytebin deploy --prod</div>
                  <div className="text-white/70 mt-1">Building project...</div>
                  <div className="text-white/70">Bundling assets...</div>
                  <div className="text-[#27C93F] mt-2">✓ Deployed to edge in 420ms</div>
                  <div className="text-white/50 mt-2">https://bytebin-app.vercel.app</div>
                </div>
              </motion.div>

              {/* Repository Card */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute z-20 top-[40%] -left-4 md:-left-12 w-[340px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#ECE3D8] p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5D7C8]/30 flex items-center justify-center text-[#F5D7C8]">
                      <GitBranch size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-[#18181B] font-semibold text-[14px]">frontend-monorepo</h3>
                      <p className="text-[#6B7280] text-[12px]">Updated 2 mins ago</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Public</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
                    <GitCommit size={14} />
                    <span className="font-mono text-[#18181B]">a9f2b4c</span>
                    <span>fix: hydration mismatch</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
                    <GitPullRequest size={14} />
                    <span>PR #42 opened by</span>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </motion.div>

              {/* Deployment Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
                className="absolute z-10 bottom-10 right-4 w-[280px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#ECE3D8] p-5"
              >
                <h3 className="text-[#6B7280] font-medium text-[12px] mb-3 uppercase tracking-wider">Latest Deployment</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex items-center justify-center w-3 h-3">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                    <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[#18181B] font-medium text-[14px]">Ready</span>
                  <span className="text-[#6B7280] text-[12px] ml-auto">12s</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[100%] h-full bg-[#D3ACFF]"></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-[#6B7280] font-medium">
                  <span>Build</span>
                  <span>Checks</span>
                  <span>Assign Domains</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
