"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/blogsApi";

interface Props {
  blog: Blog;
  index: number;
  isDragging: boolean;
}

const CARD_GRADIENTS = [
  "linear-gradient(150deg, #18181B 0%, #2d1f3d 100%)",
  "linear-gradient(150deg, #0f172a 0%, #1e1b4b 100%)",
  "linear-gradient(150deg, #0d0d0d 0%, #1a0a2e 100%)",
  "linear-gradient(150deg, #18181B 0%, #3b1d62 100%)",
  "linear-gradient(150deg, #111827 0%, #1e1b4b 100%)",
];

// Varying aspect ratios — each card has a different height, exactly like the reference
const CARD_ASPECTS = [
  "2 / 3",   // tall portrait
  "3 / 5",   // extra tall
  "3 / 4",   // standard portrait
  "4 / 7",   // very tall
  "5 / 7",   // medium-tall
  "2 / 3",   // tall portrait (repeats)
];

const ease = [0.19, 1, 0.22, 1] as const;

export default function BlogCard({ blog, index, isDragging }: Props) {
  const router = useRouter();
  const gradient = CARD_GRADIENTS[(index - 1) % CARD_GRADIENTS.length];
  const aspectRatio = CARD_ASPECTS[(index - 1) % CARD_ASPECTS.length];
  const formattedIndex = String(index).padStart(2, "0");

  const month = blog.createdAt ? new Date(blog.createdAt).toLocaleString("default", { month: "long" }) : "Archive";
  const year = blog.createdAt ? new Date(blog.createdAt).getFullYear() : "";
  const authorName = (blog.author && typeof blog.author === "object" && blog.author.name)
    ? blog.author.name
    : (typeof blog.author === "string" ? blog.author : "ByteBin");

  function handleClick() {
    if (!isDragging) router.push(`/blog/${blog._id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="blog-card group relative flex-shrink-0 self-end"
      style={{
        // All cards same width, varying height via aspect ratio
        width: "clamp(200px, 20vw, 320px)",
        marginRight: "clamp(16px, 2vw, 40px)",
        cursor: "pointer",
      }}
    >
      {/* Index number — slides UP from below on hover */}
      <div
        className="absolute bottom-full left-0 mb-4 overflow-hidden pointer-events-none"
        style={{ height: "1.3em" }}
      >
        <span
          className="blog-card__index font-mono text-[10px] tracking-[0.2em] uppercase block"
          style={{ color: "#9CA3AF" }}
        >
          {formattedIndex}
        </span>
      </div>

      {/* Card face — variable aspect ratio */}
      <motion.div
        layoutId={`blog-cover-${blog._id}`}
        className="relative overflow-hidden"
        style={{
          aspectRatio,
          background: (blog.coverImage && blog.coverImage.startsWith("linear-gradient")) ? blog.coverImage : gradient,
          borderRadius: "3px",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.7, ease }}
      >
        {/* If custom image url */}
        {blog.coverImage && !blog.coverImage.startsWith("linear-gradient") ? (
          <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover absolute inset-0" />
        ) : (
          /* Ambient glow */
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(211,172,255,0.5) 0%, transparent 55%),
                                radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.35) 0%, transparent 50%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#D3ACFF] opacity-80 mb-2">
            {month} {year}
          </p>
          <h3
            className="text-white font-bold leading-snug line-clamp-2"
            style={{ fontSize: "clamp(12px, 1.2vw, 17px)" }}
          >
            {blog.title}
          </h3>
        </div>

        {/* Hover dim */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.35 }}
        />
      </motion.div>

      {/* Author label — slides DOWN from above on hover */}
      <div
        className="absolute top-full left-0 mt-4 overflow-hidden pointer-events-none"
        style={{ height: "1.3em" }}
      >
        <span
          className="blog-card__author font-mono text-[10px] tracking-[0.12em] uppercase whitespace-nowrap block"
          style={{ color: "#9CA3AF" }}
        >
          {authorName} {month ? `(${month})` : ""}
        </span>
      </div>
    </div>
  );
}
