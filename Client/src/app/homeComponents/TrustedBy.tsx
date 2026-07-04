import React from "react";
import { Command, Triangle, Hexagon, Circle, Square, Infinity } from "lucide-react";

export function TrustedBy() {
  const companies = [
    { name: "Acme Corp", icon: Command },
    { name: "Global Tech", icon: Triangle },
    { name: "NextGen", icon: Hexagon },
    { name: "Innovate", icon: Circle },
    { name: "Synergy", icon: Square },
    { name: "Infinity", icon: Infinity },
  ];

  return (
    <section className="py-12 border-y border-[#ECE3D8]/60 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-[12px] font-medium text-[#6B7280] uppercase tracking-widest mb-8">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-[#18181B] hover:text-[#D3ACFF] transition-colors cursor-pointer">
                <Icon size={24} strokeWidth={2.5} />
                <span className="font-bold text-[18px] tracking-tight">{company.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
