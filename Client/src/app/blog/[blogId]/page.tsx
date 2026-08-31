"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  ArrowLeft, 
  Trash2, 
  Edit3, 
  MessageSquare, 
  Send, 
  Calendar, 
  Eye,
  Loader, 
  X, 
  Check,
  Share2,
  Bookmark,
  Sparkles,
  Plus,
  ArrowDown,
  Clock
} from "lucide-react";
import { 
  getBlog, 
  deleteBlog,
  getComments, 
  createComment, 
  updateComment, 
  deleteComment, 
  Blog, 
  Comment 
} from "@/lib/blogsApi";
import { useUser } from "@/lib/hooks/useAuth";
import BackgroundBlob from "../components/BackgroundBlob";

// Fallbacks matching page.tsx to support offline/empty-db experience
const FALLBACK_BLOGS: Blog[] = [
  {
    _id: "mock-1",
    title: "Defective Units: Volume One",
    content: "An exploration of glitches, physical imperfections, and artistic hardware modifications. Exploring how defects inspire digital and industrial design aesthetics.\n\nThe beauty of hardware lies in its failure modes. When we look at retro CRT screens or circuit-bent drum machines, the failures are what give them their warmth and character.\n\nIn modern software and interface engineering, we often chase sterility. Everything is aligned to sub-pixel grids, rendered with perfect anti-aliasing, and timed with bezier curves. But real human emotion is triggered by texture, warmth, and deliberate anomalies.\n\nThis volume examines the artistic value of defects in product design and how developers can inject soul into their systems.\n\n\"Perfection is sterile. Anomalies tell the story of creation.\"\n\nAs we advance into hyper-optimized generative interfaces, the human touch will increasingly be defined by our intentional imperfections.",
    coverImage: "linear-gradient(150deg, #18181B 0%, #2d1f3d 100%)",
    views: 1420,
    status: "published",
    author: { _id: "author-1", name: "Vedant Gupta", email: "vedant@bytebin.com" },
    createdAt: new Date("2024-03-10").toISOString(),
    updatedAt: new Date("2024-03-10").toISOString(),
  },
  {
    _id: "mock-2",
    title: "Edge Functions: A Global Playbook",
    content: "The architectural shift towards decentralized computing. How edge networks reduce latency to single-digit milliseconds by executing logic closer to the user.\n\nTraditionally, web applications were hosted in central data centers. If a user was in Tokyo and the server was in Virginia, every request faced a roundtrip delay.\n\nEdge functions solve this by distributing lightweight serverless workloads globally. We explore how to manage consistency, distributed cache invalidation, and replication on edge nodes with ByteBin infrastructure.\n\nBy executing logic within 50 miles of any human on earth, we eliminate network hops and unlock instant interactions.",
    coverImage: "linear-gradient(150deg, #0f172a 0%, #1e1b4b 100%)",
    views: 896,
    status: "published",
    author: { _id: "author-2", name: "Aarav Shah", email: "aarav@bytebin.com" },
    createdAt: new Date("2024-05-22").toISOString(),
    updatedAt: new Date("2024-05-22").toISOString(),
  },
  {
    _id: "mock-3",
    title: "Minimalism in Developer Interfaces",
    content: "Why software designed for engineers is shifting towards sleek typography, heavy use of whitespace, and quiet off-white palettes like ByteBin's design language.\n\nDevelopers appreciate clean paths and high SNR (Signal-to-Noise Ratio). By stripping away borders, heavy colors, and complex structures, we allow the code and dashboard data to shine.\n\nIn this piece, we dissect typography hierarchies, micro-interactions, and color temperature choices that reduce cognitive fatigue during 12-hour programming sprints.",
    coverImage: "linear-gradient(150deg, #0d0d0d 0%, #1a0a2e 100%)",
    views: 2314,
    status: "published",
    author: { _id: "author-3", name: "Priya Rajan", email: "priya@bytebin.com" },
    createdAt: new Date("2024-07-01").toISOString(),
    updatedAt: new Date("2024-07-01").toISOString(),
  },
  {
    _id: "mock-4",
    title: "The Legend of Phil Shao",
    content: "A digital reflection of skate culture, street style, and standard-def video loops that shaped the visual language of the late 90s web culture.\n\nPhil Shao was an incredible skater whose style transcended the sport. The street art and video format of the late 90s (captured on grainy VHS tapes and low-resolution digital cameras) inspired early internet design aesthetics.\n\nWe review the legacy and style of Shao and how 90s counterculture continually inspires contemporary web interfaces.",
    coverImage: "linear-gradient(150deg, #18181B 0%, #3b1d62 100%)",
    views: 1120,
    status: "published",
    author: { _id: "author-4", name: "Sam Cruz", email: "sam@bytebin.com" },
    createdAt: new Date("2024-09-14").toISOString(),
    updatedAt: new Date("2024-09-14").toISOString(),
  },
  {
    _id: "mock-5",
    title: "Rust in Production: Six Months Later",
    content: "What we learned shipping Rust to millions of requests per day at ByteBin.\n\nZero-cost abstractions, fearless concurrency, and memory safety without a garbage collector transformed our edge pipelines.\n\nHere is our retrospective on compiler battle stories, crate ecosystem maturity, build-time optimizations, and memory profiling under peak burst loads.",
    coverImage: "linear-gradient(150deg, #111827 0%, #1e1b4b 100%)",
    views: 3102,
    status: "published",
    author: { _id: "author-1", name: "Vedant Gupta", email: "vedant@bytebin.com" },
    createdAt: new Date("2024-11-03").toISOString(),
    updatedAt: new Date("2024-11-03").toISOString(),
  }
];

const GENERATE_MOCK_COMMENTS = (blogId: string): Comment[] => {
  return Array.from({ length: 25 }).map((_, i) => ({
    _id: `mock-comment-${i + 1}`,
    blog: blogId,
    author: {
      _id: `user-${(i % 5) + 1}`,
      name: ["Alex Chen", "Vedant Gupta", "Elena Rostova", "Marcus Vance", "Sarah Jenkins"][i % 5]
    },
    content: [
      "The typography and easing on this lookback archive are incredible.",
      "Completely agree regarding failure modes in hardware. CRT phosphor decay has a soul that pixels cannot replicate.",
      "Edge computing combined with rust is definitely the future of low-latency systems.",
      "The transition from card to article detail is so silky smooth.",
      "Great write-up. Looking forward to Volume Two!",
      "Subtle micro-animations elevate the developer experience tremendously.",
      "Would love to see a deep dive into your distributed cache invalidation strategies.",
      "This aesthetic feels like an architectural magazine mixed with a terminal.",
      "Loved the retrospective on compiler battle stories.",
      "Remarkable performance. The infinite scroll feels completely seamless.",
      "Clean minimalist layout with high SNR.",
      "Bookmarked this for our design team's next sprint inspiration."
    ][i % 12],
    createdAt: new Date(Date.now() - i * 3600 * 1000 * 4).toISOString(),
    updatedAt: new Date(Date.now() - i * 3600 * 1000 * 4).toISOString(),
  }));
};

const ease = [0.19, 1, 0.22, 1] as const;

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = (params?.blogId || params?.slug || params?.id || "") as string;
  const router = useRouter();
  const { data: currentUser } = useUser();

  // Scroll Progress Bar for vertical reading
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  // Mock comments pool for offline infinite scrolling demo
  const mockCommentsPool = useRef<Comment[]>([]);

  // Comments Input States
  const [newCommentContent, setNewCommentContent] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  // Comments Editing States
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  // Blog Deletion State
  const [deletingBlog, setDeletingBlog] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Infinite Scroll Sentinel Ref
  const sentinelRef = useRef<HTMLDivElement>(null);
  const commentsSectionRef = useRef<HTMLElement>(null);

  // Fetch Blog detail
  useEffect(() => {
    async function loadBlog() {
      try {
        if (blogId.startsWith("mock-")) {
          const fallback = FALLBACK_BLOGS.find(b => b._id === blogId);
          if (fallback) {
            setBlog(fallback);
          } else {
            router.push("/blog");
          }
        } else {
          const res = await getBlog(blogId);
          if (res.success && res.blog) {
            setBlog(res.blog);
          } else {
            const fallback = FALLBACK_BLOGS.find(b => b._id === blogId);
            if (fallback) setBlog(fallback);
            else router.push("/blog");
          }
        }
      } catch (err) {
        console.error("Failed to load blog post", err);
        const fallback = FALLBACK_BLOGS.find(b => b._id === blogId);
        if (fallback) setBlog(fallback);
        else router.push("/blog");
      } finally {
        setBlogLoading(false);
      }
    }

    if (blogId) {
      loadBlog();
    }
  }, [blogId, router]);

  // Initial Comments Load (10 at a time)
  useEffect(() => {
    async function loadInitialComments() {
      if (!blogId) return;
      setCommentsLoading(true);

      if (blogId.startsWith("mock-")) {
        const fullPool = GENERATE_MOCK_COMMENTS(blogId);
        mockCommentsPool.current = fullPool;
        setComments(fullPool.slice(0, 10));
        setHasMore(fullPool.length > 10);
        setCursor("mock-page-2");
        setCommentsLoading(false);
        return;
      }

      try {
        const res = await getComments(blogId);
        if (res.success) {
          setComments(res.comments || []);
          setCursor(res.nextCursor || null);
          setHasMore(res.hasMore || false);
        }
      } catch (err) {
        console.error("Failed to load comments", err);
      } finally {
        setCommentsLoading(false);
      }
    }

    if (blog) {
      loadInitialComments();
    }
  }, [blog, blogId]);

  // Load More Comments (Next 10 comments batch)
  const handleLoadMore = useCallback(async () => {
    if (!cursor || commentsLoading || !hasMore) return;
    setCommentsLoading(true);

    if (blogId.startsWith("mock-")) {
      setTimeout(() => {
        const currentCount = comments.length;
        const nextBatch = mockCommentsPool.current.slice(currentCount, currentCount + 10);
        setComments(prev => [...prev, ...nextBatch]);
        const moreRemaining = currentCount + 10 < mockCommentsPool.current.length;
        setHasMore(moreRemaining);
        setCursor(moreRemaining ? `mock-page-${Math.floor(currentCount / 10) + 2}` : null);
        setCommentsLoading(false);
      }, 500);
      return;
    }

    try {
      const res = await getComments(blogId, cursor);
      if (res.success) {
        setComments(prev => [...prev, ...(res.comments || [])]);
        setCursor(res.nextCursor || null);
        setHasMore(res.hasMore || false);
      }
    } catch (err) {
      console.error("Failed to load more comments", err);
    } finally {
      setCommentsLoading(false);
    }
  }, [blogId, cursor, commentsLoading, hasMore, comments.length]);

  // Automated Infinite Scroll Observer
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore || commentsLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !commentsLoading && cursor) {
          handleLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, commentsLoading, cursor, handleLoadMore]);

  // Submit new comment
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentContent.trim() || submitLoading) return;
    setSubmitLoading(true);
    try {
      if (blogId.startsWith("mock-")) {
        const mockComment: Comment = {
          _id: `mock-comm-${Date.now()}`,
          blog: blogId,
          author: {
            _id: currentUser?.id || currentUser?._id || "local-user",
            name: currentUser?.name || "You"
          },
          content: newCommentContent.trim(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setComments(prev => [mockComment, ...prev]);
        setNewCommentContent("");
      } else {
        const res = await createComment(blogId, newCommentContent.trim());
        if (res.success && res.comment) {
          setComments(prev => [res.comment, ...prev]);
          setNewCommentContent("");
        }
      }
    } catch (err) {
      console.error("Error creating comment", err);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Update Comment
  const handleSaveEdit = async (commentId: string) => {
    if (!editContent.trim() || editLoading) return;
    setEditLoading(true);
    try {
      if (commentId.startsWith("mock-")) {
        setComments(prev => 
          prev.map(c => (c._id === commentId ? { ...c, content: editContent.trim(), updatedAt: new Date().toISOString() } : c))
        );
        setEditingCommentId(null);
        setEditContent("");
      } else {
        const res = await updateComment(commentId, editContent.trim());
        if (res.success && res.comment) {
          setComments(prev => 
            prev.map(c => (c._id === commentId ? { ...c, content: res.comment.content, updatedAt: res.comment.updatedAt } : c))
          );
          setEditingCommentId(null);
          setEditContent("");
        }
      }
    } catch (err) {
      console.error("Error updating comment", err);
    } finally {
      setEditLoading(false);
    }
  };

  // Delete Comment
  const handleDeleteComment = async (commentId: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    try {
      if (commentId.startsWith("mock-")) {
        setComments(prev => prev.filter(c => c._id !== commentId));
      } else {
        const res = await deleteComment(commentId);
        if (res.success) {
          setComments(prev => prev.filter(c => c._id !== commentId));
        }
      }
    } catch (err) {
      console.error("Error deleting comment", err);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async () => {
    setDeletingBlog(true);
    try {
      if (!blogId.startsWith("mock-")) {
        await deleteBlog(blogId);
      }
      router.push("/blog");
    } catch (err) {
      console.error("Error deleting blog", err);
      setDeletingBlog(false);
      setShowDeleteModal(false);
    }
  };

  const scrollToComments = () => {
    commentsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (blogLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center">
        <Loader className="animate-spin text-[#A855F7]" size={36} />
        <p className="mt-4 text-slate-400 font-mono text-[11px] uppercase tracking-[0.2em]">
          Accessing ByteBin Archive...
        </p>
      </div>
    );
  }

  if (!blog) return null;

  const isAuthorOfBlog =
    blog._id.startsWith("mock-") ||
    Boolean(
      currentUser &&
      blog.author &&
      ((typeof blog.author === "object" && (blog.author._id === currentUser.id || blog.author._id === currentUser._id)) ||
        blog.author === currentUser.id ||
        blog.author === currentUser._id)
    );

  const authorName = (blog.author && typeof blog.author === "object" && blog.author.name) 
    ? blog.author.name 
    : (typeof blog.author === "string" ? blog.author : "ByteBin Team");

  const dateFormatted = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    : "";

  const wordsCount = blog.content ? blog.content.split(/\s+/).length : 0;
  const readTimeMin = Math.max(1, Math.ceil(wordsCount / 200));

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#18181B] font-sans selection:bg-[#D3ACFF]/30 overflow-x-hidden relative">
      <BackgroundBlob />

      {/* ─── VERTICAL READING PROGRESS BAR (TOP) ────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D3ACFF] via-[#A855F7] to-[#7C3AED] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* ─── FIXED NAV HEADER ────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5 md:px-10 flex items-center justify-between bg-[#FAFAF8]/85 backdrop-blur-md border-b border-slate-200/60">
        <Link 
          href="/blog" 
          className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors duration-300"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="group-hover:-translate-x-1 transition-transform duration-300">
            <path d="M0 5H15M0 5L4.5 1M0 5L4.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span>The Lookback</span>
        </Link>

        {/* Center Badge */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
          <span>Editorial Archive</span>
          <span>/</span>
          <span className="text-[#A855F7]">#{blog._id.slice(-4)}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Link
              href={`/blog/${blog._id}/edit`}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 shadow-sm transition-all"
            >
              <Edit3 size={11} className="text-[#A855F7]" />
              <span>Edit</span>
            </Link>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full border border-red-200/60 shadow-sm transition-all"
            >
              <Trash2 size={11} />
              <span>Delete</span>
            </button>
          </div>

          <button
            onClick={scrollToComments}
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600 hover:text-slate-900 bg-white/70 hover:bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm transition-all"
          >
            <MessageSquare size={11} className="text-[#A855F7]" />
            <span>Discussion ({comments.length})</span>
          </button>

          <Link
            href="/blog/create"
            className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white bg-[#18181B] hover:bg-black px-3.5 py-1.5 rounded-full shadow-sm transition-all"
          >
            <Plus size={11} />
            <span>Write</span>
          </Link>
        </div>
      </header>

      {/* ─── MAIN ARTICLE HERO & BODY ─────────────────────────────────── */}
      <main className="max-w-4xl mx-auto pt-28 md:pt-36 pb-24 px-6 md:px-8 relative z-10">
        
        {/* Editorial Subheader Meta */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-center gap-y-2 gap-x-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-4"
        >
          <span className="text-[#A855F7] font-semibold">{authorName}</span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-slate-400" />
            {dateFormatted}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-slate-400" />
            {readTimeMin} Min Read
          </span>
          {blog.views > 0 && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Eye size={12} className="text-slate-400" />
                {blog.views} views
              </span>
            </>
          )}
          {blog.status === "draft" && (
            <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[9px] font-bold">
              Draft
            </span>
          )}
        </motion.div>

        {/* Title with vertical reveal */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-slate-900 mb-10"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          {blog.title}
        </motion.h1>

        {/* ─── EXPANDING COVER MEDIA WITH PARALLAX EASING ──────────────── */}
        <motion.div 
          layoutId={`blog-cover-${blog._id}`}
          className="w-full rounded-lg overflow-hidden border border-slate-200 shadow-xl mb-14 relative"
          style={{
            aspectRatio: "16 / 9",
            background: blog.coverImage && blog.coverImage.startsWith("linear-gradient")
              ? blog.coverImage 
              : "linear-gradient(150deg, #18181B 0%, #2d1f3d 100%)",
          }}
          transition={{ duration: 0.85, ease }}
        >
          {blog.coverImage && !blog.coverImage.startsWith("linear-gradient") ? (
            <img 
              src={blog.coverImage} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(211,172,255,0.6) 0%, transparent 55%),
                                    radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.4) 0%, transparent 50%)`,
                }}
              />
              <p className="relative z-10 font-mono text-xs uppercase tracking-[0.2em] text-[#D3ACFF] opacity-75 mb-3">
                ByteBin Article Archive
              </p>
              <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight opacity-90 max-w-xl leading-tight">
                {blog.title}
              </h2>
            </div>
          )}
        </motion.div>

        {/* ─── ARTICLE BODY WITH VERTICAL SCROLL REVEALS ───────────────── */}
        <article className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base md:text-lg mb-16">
          {blog.content.split("\n\n").map((para, i) => {
            const isQuote = para.startsWith('"') && para.endsWith('"');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease }}
                className="mb-8"
              >
                {isQuote ? (
                  <blockquote className="border-l-2 border-[#A855F7] pl-6 py-2 my-8 italic text-xl md:text-2xl font-serif text-slate-900 bg-purple-50/40 rounded-r-xl">
                    {para}
                  </blockquote>
                ) : (
                  <p className={`${i === 0 ? "text-lg md:text-xl font-normal leading-relaxed text-slate-900 first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-slate-900 first-letter:leading-none" : "text-slate-700 leading-relaxed"}`}>
                    {para}
                  </p>
                )}
              </motion.div>
            );
          })}
        </article>

        {/* ─── AUTHOR SIGN OFF BAR ────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#F4ECFF] text-[#A855F7] border border-[#D3ACFF]/30 flex items-center justify-center font-bold text-sm">
              {authorName.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Written By</p>
              <h4 className="font-bold text-slate-900 text-sm">{authorName}</h4>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/blog/${blog._id}/edit`}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 transition-all"
            >
              <Edit3 size={11} className="text-[#A855F7]" />
              <span>Edit Article</span>
            </Link>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full border border-red-200/60 transition-all"
            >
              <Trash2 size={11} />
              <span>Delete Article</span>
            </button>
            <button 
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article link copied to clipboard!");
                }
              }}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 transition-all"
            >
              <Share2 size={11} />
              <span>Share</span>
            </button>
          </div>
        </motion.div>

        <hr className="border-slate-200 mb-14" />

        {/* ─── COMMENTS & INFINITE SCROLL DISCUSSION SECTION ──────────── */}
        <section ref={commentsSectionRef} className="comments-section">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <MessageSquare size={18} className="text-[#A855F7]" />
              <h3 className="text-base font-bold font-mono uppercase tracking-[0.18em] text-slate-900">
                Discussion ({comments.length})
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              10 comments / page • Infinite Scroll
            </span>
          </div>

          {/* Comment input */}
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/90 shadow-sm mb-8">
            {currentUser ? (
              <form onSubmit={handleAddComment}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F4ECFF] text-[#A855F7] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {currentUser.name ? currentUser.name.substring(0, 2).toUpperCase() : "ME"}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="comment-textarea" className="sr-only">Add to the discussion</label>
                    <textarea
                      id="comment-textarea"
                      placeholder="Share your perspective or questions..."
                      value={newCommentContent}
                      onChange={(e) => setNewCommentContent(e.target.value)}
                      rows={3}
                      className="w-full bg-transparent outline-none resize-none border-b border-slate-200 focus:border-[#A855F7] pb-2 text-sm text-slate-800 placeholder:text-slate-400 transition-colors"
                    />
                    <div className="flex justify-end mt-3">
                      <button
                        type="submit"
                        disabled={!newCommentContent.trim() || submitLoading}
                        className="bg-[#18181B] text-white hover:bg-black px-4 py-2 rounded-xl text-[11px] font-mono uppercase tracking-widest flex items-center gap-1.5 transition-all disabled:opacity-50 shadow-sm"
                      >
                        {submitLoading ? (
                          <Loader className="animate-spin" size={12} />
                        ) : (
                          <Send size={12} />
                        )}
                        <span>Post Comment</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-5">
                <p className="text-sm text-slate-500 font-medium mb-3">
                  Sign in to participate in this discussion thread.
                </p>
                <Link
                  href={`/login?redirect=/blog/${blogId}`}
                  className="inline-flex items-center gap-2 bg-[#18181B] text-white hover:bg-black px-5 py-2.5 rounded-full text-[11px] font-mono uppercase tracking-widest transition-all shadow-sm"
                >
                  <span>Sign In to Comment</span>
                </Link>
              </div>
            )}
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {comments.map((comment, index) => {
                const isAuthorOfComment = 
                  Boolean(
                    comment._id.startsWith("mock-comm-") ||
                    (currentUser && 
                      comment.author && 
                      (comment.author._id === currentUser.id || 
                       comment.author._id === currentUser._id || 
                       comment.author._id === "local-user")) ||
                    (comment.author?.name === "You" || (currentUser && comment.author?.name === currentUser.name))
                  );

                const isEditing = editingCommentId === comment._id;
                const formattedCommentDate = comment.createdAt ? new Date(comment.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                }) : "";

                return (
                  <motion.div
                    key={comment._id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3), ease }}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm relative group"
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
                        {comment.author?.name ? comment.author.name.substring(0, 2).toUpperCase() : "U"}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-xs md:text-sm text-slate-800 line-clamp-1">
                            {comment.author?.name || "Anonymous Member"}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {formattedCommentDate}
                          </span>
                        </div>

                        {isEditing ? (
                          <div className="mt-2">
                            <textarea
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              rows={2}
                              className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#A855F7] outline-none text-sm text-slate-800"
                            />
                            <div className="flex gap-2 justify-end mt-2">
                              <button
                                onClick={() => {
                                  setEditingCommentId(null);
                                  setEditContent("");
                                }}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                              >
                                <X size={15} />
                              </button>
                              <button
                                onClick={() => handleSaveEdit(comment._id)}
                                disabled={!editContent.trim() || editLoading}
                                className="p-1.5 rounded-lg text-[#22C55E] hover:bg-[#22C55E]/10 transition-all disabled:opacity-50"
                              >
                                {editLoading ? (
                                  <Loader className="animate-spin" size={15} />
                                ) : (
                                  <Check size={15} />
                                )}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                            {comment.content}
                          </p>
                        )}

                        {/* Comment actions */}
                        {!isEditing && (
                          <div className="flex items-center gap-3 mt-3 pt-2 border-t border-slate-100">
                            <button
                              onClick={() => {
                                setEditingCommentId(comment._id);
                                setEditContent(comment.content);
                              }}
                              className="text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
                            >
                              <Edit3 size={11} />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteComment(comment._id)}
                              className="text-[10px] font-mono uppercase tracking-wider text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                            >
                              <Trash2 size={11} />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {comments.length === 0 && !commentsLoading && (
              <div className="text-center py-10 border border-dashed border-slate-200 rounded-2xl">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  No comments yet • Be the first to add to the lookback
                </p>
              </div>
            )}

            {/* ─── INFINITE SCROLL SENTINEL & LOADER ──────────────────── */}
            <div ref={sentinelRef} className="py-6 flex flex-col items-center justify-center">
              {commentsLoading && (
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
                  <Loader className="animate-spin" size={14} />
                  <span>Loading older comments...</span>
                </div>
              )}
              {!hasMore && comments.length > 0 && (
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  End of discussion thread ({comments.length} comments)
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ─── DELETE BLOG CONFIRMATION MODAL ──────────────────────────── */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-2xl"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Delete this article?</h3>
              <p className="text-sm text-slate-500 mb-6">
                Are you sure you want to permanently delete <strong className="text-slate-800 font-semibold">{blog.title}</strong>? This action cannot be undone.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  disabled={deletingBlog}
                  className="px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-600 hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteBlog}
                  disabled={deletingBlog}
                  className="px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition-all disabled:opacity-50"
                >
                  {deletingBlog ? <Loader className="animate-spin" size={13} /> : <Trash2 size={13} />}
                  <span>Confirm Delete</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
