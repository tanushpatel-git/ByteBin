import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[40px] md:rounded-[60px] bg-[#18181B] overflow-hidden flex flex-col items-center text-center px-6 py-24 md:py-32 z-10 border border-[#ECE3D8]">
          {/* Abstract background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#D3ACFF]/20 blur-[120px] mix-blend-screen animate-blob" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F5D7C8]/20 blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 max-w-3xl">
            Ready to ship your next project?
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/70 mb-12 max-w-2xl">
            Join thousands of developers building, deploying, and scaling on ByteBin. Start for free today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/register"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#18181B] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(211,172,255,0.3)] hover:shadow-[0_0_30px_rgba(211,172,255,0.5)]"
            >
              Start Building
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
            >
              <BookOpen size={20} />
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
