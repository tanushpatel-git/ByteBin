"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Sparkles, 
  Send, 
  Eye, 
  FileText, 
  Image as ImageIcon,
  Loader, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { createBlog } from "@/lib/blogsApi";
import { useUser } from "@/lib/hooks/useAuth";
import BackgroundBlob from "../components/BackgroundBlob";

const GRADIENT_PRESETS = [
  { name: "Obsidian Purple", value: "linear-gradient(150deg, #18181B 0%, #2d1f3d 100%)" },
  { name: "Deep Navy", value: "linear-gradient(150deg, #0f172a 0%, #1e1b4b 100%)" },
  { name: "Cyber Violet", value: "linear-gradient(150deg, #0d0d0d 0%, #1a0a2e 100%)" },
  { name: "Neon Amethyst", value: "linear-gradient(150deg, #18181B 0%, #3b1d62 100%)" },
  { name: "Midnight Teal", value: "linear-gradient(150deg, #111827 0%, #1e1b4b 100%)" },
  { name: "Emerald Pulse", value: "linear-gradient(150deg, #064e3b 0%, #022c22 100%)" },
];

const ease = [0.19, 1, 0.22, 1] as const;

export default function CreateBlogPage() {
  const router = useRouter();
  const { data: user, isLoading: userLoading } = useUser();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(GRADIENT_PRESETS[0].value);
  const [customImageUrl, setCustomImageUrl] = useState("");
  const [useCustomImage, setUseCustomImage] = useState(false);
  const [status, setStatus] = useState<"published" | "draft">("published");
  
  const [previewMode, setPreviewMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));

  const effectiveCover = useCustomImage && customImageUrl.trim() ? customImageUrl.trim() : coverImage;

  const handleSubmit = async (submitStatus: "published" | "draft") => {
    if (!title.trim()) {
      setError("Please provide a title for your article.");
      return;
    }
    if (!content.trim()) {
      setError("Please write some content for your article.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const res = await createBlog({
        title: title.trim(),
        content: content.trim(),
        coverImage: effectiveCover,
        status: submitStatus,
      });

      if (res.success && res.blog) {
        router.push(`/blog/${res.blog._id}`);
      } else {
        setError(res.message || "Failed to create article. Please check your inputs.");
      }
    } catch (err: any) {
      console.error("Create blog error", err);
      setError(err?.response?.data?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#18181B] font-sans selection:bg-[#D3ACFF]/30 overflow-x-hidden relative">
      <BackgroundBlob />

      {/* ─── FIXED NAV ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-10 flex items-center justify-between bg-[#FAFAF8]/85 backdrop-blur-md border-b border-slate-200/60">
        <Link 
          href="/blog" 
          className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors duration-300"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="group-hover:-translate-x-1 transition-transform duration-300">
            <path d="M0 5H15M0 5L4.5 1M0 5L4.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span>Cancel &amp; Return</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-700 bg-white hover:bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm transition-all"
          >
            {previewMode ? <FileText size={12} /> : <Eye size={12} />}
            <span>{previewMode ? "Editor" : "Preview"}</span>
          </button>

          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            disabled={submitting}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600 hover:text-slate-900 bg-transparent px-3.5 py-1.5 rounded-full transition-all disabled:opacity-50"
          >
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            onClick={() => handleSubmit("published")}
            disabled={submitting}
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white bg-[#18181B] hover:bg-black px-4 py-2 rounded-full shadow-sm transition-all disabled:opacity-50"
          >
            {submitting ? (
              <Loader className="animate-spin" size={12} />
            ) : (
              <Send size={12} />
            )}
            <span>Publish</span>
          </button>
        </div>
      </header>

      {/* ─── MAIN EDITOR AREA ────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto pt-28 md:pt-36 pb-28 px-6 md:px-8 relative z-10">
        
        {!user && !userLoading && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={15} className="text-amber-600" />
              <span>You are currently not signed in. Please log in before publishing.</span>
            </div>
            <Link href="/login?redirect=/blog/create" className="underline font-bold hover:text-amber-950">
              Sign In →
            </Link>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-8 flex items-center gap-2">
            <AlertCircle size={15} />
            <span>{error}</span>
          </div>
        )}

        {!previewMode ? (
          <div className="space-y-8">
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <span className="text-[#A855F7]">New Entry</span>
              <span>•</span>
              <span>{wordCount} Words</span>
              <span>•</span>
              <span>{readTimeMin} Min Read</span>
            </div>

            {/* Title Input */}
            <div>
              <label htmlFor="blog-title-input" className="sr-only">Article Title</label>
              <textarea
                id="blog-title-input"
                rows={2}
                placeholder="ARTICLE TITLE..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-slate-900 placeholder:text-slate-300 outline-none resize-none leading-[0.95]"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
              />
            </div>

            {/* Cover Selector */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ImageIcon size={16} className="text-[#A855F7]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
                    Cover Aesthetic
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setUseCustomImage(!useCustomImage)}
                  className="font-mono text-[10px] uppercase tracking-wider text-slate-500 hover:text-slate-800 underline"
                >
                  {useCustomImage ? "Use Gradient Palette" : "Use Custom Image URL"}
                </button>
              </div>

              {useCustomImage ? (
                <div>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-..."
                    value={customImageUrl}
                    onChange={(e) => setCustomImageUrl(e.target.value)}
                    className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 outline-none focus:border-[#A855F7]"
                  />
                  {customImageUrl && (
                    <div className="mt-3 aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 max-h-48">
                      <img src={customImageUrl} alt="Cover Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <p className="text-xs text-slate-500 mb-3">Choose a signature ByteBin cyber gradient:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                    {GRADIENT_PRESETS.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCoverImage(preset.value)}
                        className={`group relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                          coverImage === preset.value ? "border-[#A855F7] scale-105 shadow-md" : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                        style={{ background: preset.value }}
                      >
                        {coverImage === preset.value && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                            <CheckCircle2 size={16} />
                          </div>
                        )}
                        <span className="sr-only">{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Content Textarea */}
            <div>
              <label htmlFor="blog-content-input" className="sr-only">Article Content</label>
              <textarea
                id="blog-content-input"
                rows={16}
                placeholder="Write your article narrative here... Markdown formatted paragraphs, headings, bullet lists, and code blocks are fully supported."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm text-base md:text-lg text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#A855F7] resize-y leading-relaxed"
              />
            </div>
          </div>
        ) : (
          /* ─── LIVE PREVIEW MODE ─────────────────────────────────────── */
          <div className="space-y-8">
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs font-mono uppercase tracking-widest text-purple-700 flex items-center justify-center gap-2">
              <Eye size={13} />
              <span>Live Article Preview</span>
            </div>

            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <span className="text-[#A855F7]">{user?.name || "Author"}</span>
              <span> • </span>
              <span>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span> • </span>
              <span>{readTimeMin} Min Read</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-slate-900 leading-[0.95]">
              {title || "Untitled Lookback Entry"}
            </h1>

            {/* Cover Preview */}
            <div 
              className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 shadow-lg relative"
              style={{ background: effectiveCover }}
            >
              {useCustomImage && customImageUrl ? (
                <img src={customImageUrl} alt="Cover" className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D3ACFF] opacity-75 mb-3">
                    ByteBin Article Archive
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight opacity-90 max-w-xl">
                    {title || "Article Title Preview"}
                  </h2>
                </div>
              )}
            </div>

            <article className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base md:text-lg">
              {content ? (
                content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-6 text-slate-700 leading-relaxed">
                    {para}
                  </p>
                ))
              ) : (
                <p className="text-slate-400 italic font-mono text-sm">
                  Content preview will appear here as you write.
                </p>
              )}
            </article>
          </div>
        )}
      </main>
    </div>
  );
}
