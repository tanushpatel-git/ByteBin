import React from "react";
import { Zap, ShieldCheck, Globe, GitBranch, Package, Users } from "lucide-react";

export function BentoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
            Engineered for scale
          </h2>
          <p className="text-[18px] text-[#6B7280]">
            The architecture you need to grow from side project to enterprise without changing platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Card 1: Global Edge (Large 2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-[#FBF5EE] rounded-[32px] p-8 md:p-12 flex flex-col justify-between border border-[#ECE3D8] overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D3ACFF]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#D3ACFF]/30 transition-colors" />
            <div className="relative z-10 max-w-sm">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <Globe size={24} className="text-[#18181B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#18181B] mb-3">Global Edge Network</h3>
              <p className="text-[#6B7280]">Deploy your frontend and serverless functions to 35+ regions automatically. Millisecond latency for every user on Earth.</p>
            </div>
            {/* Abstract illustration */}
            <div className="mt-8 relative h-48 w-full border border-[#ECE3D8] rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <div className="flex gap-4 items-center px-4">
                <div className="w-16 h-16 rounded-full bg-[#D3ACFF]/40 animate-pulse delay-75" />
                <div className="w-12 h-12 rounded-full bg-[#F5D7C8]/60 animate-pulse delay-150" />
                <div className="w-20 h-20 rounded-full bg-[#D3ACFF]/30 animate-pulse delay-300" />
                <div className="w-14 h-14 rounded-full bg-[#F5D7C8]/50 animate-pulse delay-700" />
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise Security (1x1) */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-[32px] p-8 border border-[#ECE3D8] flex flex-col justify-between group hover:border-[#D3ACFF]/50 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#F5D7C8]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} className="text-[#18181B]" />
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#18181B] mb-2">Enterprise Security</h3>
              <p className="text-[13px] text-[#6B7280]">SSO, SOC2 Type II, and Role-based Access Control out of the box.</p>
            </div>
          </div>

          {/* Card 3: Instant Deployments (1x1) */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-[32px] p-8 border border-[#ECE3D8] flex flex-col justify-between group hover:border-[#D3ACFF]/50 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#D3ACFF]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap size={20} className="text-[#18181B]" />
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#18181B] mb-2">Instant Deploy</h3>
              <p className="text-[13px] text-[#6B7280]">Push to git and get a live preview URL in under 5 seconds.</p>
            </div>
          </div>

          {/* Card 4: Git Integration (2x1) */}
          <div className="md:col-span-2 md:row-span-1 bg-[#18181B] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#D3ACFF]/10" />
            <div className="relative z-10 max-w-[200px] mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <GitBranch size={20} className="text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-2">Git Integration</h3>
              <p className="text-[13px] text-white/70">Seamless webhook sync with GitHub.</p>
            </div>
            <div className="relative z-10 flex-1 flex justify-end">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#18181B] bg-white flex items-center justify-center shadow-lg"><Package size={20} /></div>
                <div className="w-12 h-12 rounded-full border-2 border-[#18181B] bg-[#F5D7C8] flex items-center justify-center shadow-lg"><Users size={20} /></div>
                <div className="w-12 h-12 rounded-full border-2 border-[#18181B] bg-[#D3ACFF] flex items-center justify-center shadow-lg"><Zap size={20} /></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
