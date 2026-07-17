"use client";

import Image from "next/image";
import { m, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "../motion/Reveal";

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
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight mb-6">
              Loved by developers
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TestimonialCard review={review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Review {
  name: string;
  username: string;
  role: string;
  content: string;
  avatar: string;
}

function TestimonialCard({ review }: { review: Review }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left - width / 2) / width);
    mouseY.set((e.clientY - top - height / 2) / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <m.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-[#FBF5EE]/50 rounded-[24px] p-8 border border-[#ECE3D8] cursor-default"
    >
      <div className="flex items-center gap-4 mb-6">
        <m.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
          <Image
            src={review.avatar}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full bg-white border border-[#ECE3D8]"
          />
        </m.div>
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
    </m.div>
  );
}
