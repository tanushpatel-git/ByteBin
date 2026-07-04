import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      username: "@sarahcodes",
      role: "Frontend Lead at Acme",
      content: "We migrated our entire 50-person engineering org to ByteBin in a weekend. Our deployment times dropped from 15 minutes to 45 seconds.",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=F4ECFF"
    },
    {
      name: "David Chen",
      username: "@dchen",
      role: "CTO at StartupX",
      content: "The branch preview URLs are a game changer. Product managers can review UI changes immediately without pulling the code locally.",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David&backgroundColor=F5D7C8"
    },
    {
      name: "Elena Rodriguez",
      username: "@elenar",
      role: "Senior Engineer",
      content: "I've used every platform out there, and ByteBin's edge functions are incredibly fast to provision. The developer experience is simply unmatched.",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena&backgroundColor=E0F2FE"
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#ECE3D8]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
            Loved by developers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#FBF5EE]/50 rounded-[24px] p-8 border border-[#ECE3D8] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full bg-white border border-[#ECE3D8]"
                />
                <div>
                  <h4 className="font-semibold text-[#18181B] text-[15px]">{review.name}</h4>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                    <FaGithub size={12} />
                    <span>{review.username}</span>
                  </div>
                </div>
              </div>
              <p className="text-[15px] text-[#18181B] leading-relaxed">
                &quot;{review.content}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
