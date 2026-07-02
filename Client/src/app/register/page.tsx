"use client"
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, User, Mail, Eye } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setName, setEmail, setPassword } from "@/lib/redux/slices/auth/registerSlice";
import Link from "next/link";
import { useRegisterMutation } from "@/lib/hooks/useAuth";
import { FormEvent } from "react";

const cardStyle =
  "border border-[#F3E8DE] bg-[#FFFDFB] shadow-[0_20px_80px_rgba(230,190,160,.08)]";

const inputStyle =
  "h-[46px] w-full rounded-[16px] border border-[#F2E7DD] bg-[#FFFDFB] px-4 pr-12 text-sm font-medium outline-none transition-all text-slate-800 focus:border-[#D3ACFF] focus:shadow-[0_0_0_3px_rgba(211,172,255,0.15)]";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector((state) => state.register);
  const registerMutation = useRegisterMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerMutation.mutate({ name, email, password });
  };

  return (
    <main className="min-h-screen bg-[#FFF9F3] p-4 overflow-auto lg:overflow-hidden text-slate-900">
      {/* OUTER CONTAINER */}
      <div className="relative min-h-[calc(100vh-2rem)] lg:h-full overflow-hidden rounded-[32px] border border-[#F3E8DE] bg-[#FFFDF8] shadow-[0_20px_100px_rgba(230,190,160,.06)]">

        {/* Top-Middle 3D Sphere */}
        <div className="absolute left-[50%] -translate-x-1/2 top-[-70px] w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFEDD5,#FFC8D7_65%,#FFD9C3)] shadow-[inset_0_-10px_20px_rgba(211,172,255,0.15),0_20px_40px_rgba(211,172,255,0.12)] opacity-60 pointer-events-none" />

        {/* Bottom-Left 3D Sphere */}
        <div className="absolute left-[-40px] bottom-[-60px] w-[160px] h-[160px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFEDD5,#FFC8D7_65%,#FFD9C3)] shadow-[inset_0_-10px_20px_rgba(211,172,255,0.15),0_20px_40px_rgba(211,172,255,0.12)] opacity-55 pointer-events-none" />

        {/* Bottom-Right 3D Sphere */}
        <div className="absolute right-[-40px] bottom-[-60px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFEDD5,#FFC8D7_65%,#FFD9C3)] shadow-[inset_0_-10px_20px_rgba(211,172,255,0.15),0_20px_40px_rgba(211,172,255,0.12)] opacity-55 pointer-events-none" />

        {/* Organic Background Blobs */}
        <div className="absolute left-[-100px] top-[200px] h-[320px] w-[320px] rounded-full bg-[#FFD9C3]/18 blur-[70px] pointer-events-none" />
        <div className="absolute right-[-80px] top-[300px] h-[280px] w-[280px] rounded-full bg-[#FFC8D7]/15 blur-[65px] pointer-events-none" />
        <div className="absolute left-[40%] bottom-[100px] h-[300px] w-[300px] rounded-full bg-[#FFEDD5]/14 blur-[75px] pointer-events-none" />
        <div className="absolute left-[450px] top-[260px] h-[300px] w-[300px] rounded-full bg-[#FFD7A8]/16 blur-[60px] pointer-events-none" />

        {/* GRID */}
        <div className="grid min-h-full lg:grid-cols-[1.38fr_.82fr]">
          {/* LEFT SIDE */}
          <section className="hidden lg:block relative px-12 pt-8 overflow-hidden">
            {/* SCALING GRAPHICS CLUSTER */}
            <div className="absolute right-0 top-0 bottom-0 w-[950px] h-[920px] origin-top-right scale-[0.62] xl:scale-[0.8] 2xl:scale-[0.95] min-[1600px]:scale-100">

              {/* TOP LOGO */}
              <div className="absolute left-[48px] top-[32px] flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D3ACFF] text-white shadow-[0_15px_40px_rgba(211,172,255,.25)]">
                  <Globe size={22} />
                </div>
                <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">
                  ByteBin
                </h2>
              </div>

              {/* BIG HERO */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="absolute left-[48px] top-[120px]"
              >
                <h1 className="text-[60px] font-semibold leading-[0.95] tracking-[-0.07em] text-[#0F172A]">
                  Build today.
                  <br />
                  Deploy
                  <br />
                  <span className="text-[#D3ACFF]">
                    anywhere.
                  </span>
                </h1>
                <p className="mt-8 max-w-[360px] text-[16px] leading-8 text-slate-500">
                  The developer platform to ship modern apps at global scale.
                </p>
              </motion.div>

              {/* DECORATIVE DOTS (TOP) */}
              <div className="absolute left-[270px] top-[180px] grid grid-cols-4 gap-3 opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[4px] w-[4px] rounded-full bg-[#D3ACFF]"
                  />
                ))}
              </div>

              {/* TINY STARS */}
              <div className="absolute left-[200px] top-[140px] text-[#D3ACFF] text-sm opacity-70">✦</div>
              <div className="absolute left-[520px] top-[90px] text-[#D3ACFF] text-xs opacity-60">✦</div>
              <div className="absolute left-[750px] top-[320px] text-[#D3ACFF] text-base opacity-50">✦</div>
              <div className="absolute left-[120px] top-[750px] text-[#D3ACFF] text-xs opacity-55">✦</div>

              {/* SMALL ROUNDED OUTLINE RECTANGLE */}
              <div className="absolute left-[430px] top-[42px] h-[170px] w-[92px] rounded-[32px] border border-[#F3E8DE]" />

              {/* TOP-LEFT CURLY ARROW */}
              <svg className="absolute left-[240px] top-[60px] opacity-40 text-[#D3ACFF]" width="80" height="60" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 50 C 10 20, 40 10, 50 30 C 60 50, 40 55, 30 40 C 20 25, 45 15, 65 25" />
                <path d="M53 23 L 65 25 L 61 14" />
              </svg>

              {/* HAND-DRAWN SQUIGGLE */}
              <svg className="absolute left-[160px] top-[340px] text-[#D3ACFF] opacity-50" width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 25 C 15 5, 35 5, 45 25 C 55 45, 65 35, 65 20" />
              </svg>

              {/* MIDDLE WARM WAVE */}
              <svg className="absolute left-[450px] top-[390px] text-[#D3ACFF] opacity-80" width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M10 20 C 20 10, 30 30, 40 15 C 50 5, 55 10, 60 15" />
              </svg>

              {/* TERMINAL GLOW */}
              <div className="absolute left-[310px] top-[100px] h-[200px] w-[400px] rounded-[40px] bg-[rgba(211,172,255,0.15)] blur-[60px] pointer-events-none" />

              {/* TERMINAL CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -2,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  rotate: -2,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="absolute left-[340px] top-[120px] w-[340px] rounded-[30px] bg-[#141625] p-7 shadow-[0_40px_80px_rgba(20,22,37,.28)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="h-4 w-4 rounded-full bg-[#FF5F57]" />
                    <div className="h-4 w-4 rounded-full bg-[#FEBC2E]" />
                    <div className="h-4 w-4 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="rounded-full bg-white/10 px-4 py-1 text-xs text-white/70">
                    bash
                  </div>
                </div>
                <div className="mt-8 space-y-4 font-mono text-[16px] text-slate-100">
                  <p className="text-[#B9BEE6]">$ npx create-bytebin@latest</p>
                  <p className="text-[#85F0B9]">✓ Initializing project...</p>
                  <p className="text-[#85F0B9]">✓ Setting up Edge Functions...</p>
                  <p className="text-[#85F0B9]">✓ Installing dependencies...</p>
                  <p className="text-[#85F0B9]">✓ Deploying to global network...</p>
                  <div className="pt-8">
                    <p className="text-[#D1D8FF]">Your app is live at:</p>
                    <p className="mt-3 text-[#BBADFF] text-[15px]">
                      https://amazing-app.bytebin.app 🎉
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING LIGHTNING CUBE */}
              <div className="absolute left-[690px] top-[240px]">
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    rotate: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`flex h-[90px] w-[90px] items-center justify-center rounded-[24px] ${cardStyle}`}
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D3ACFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="fill-[#D3ACFF]/30">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </motion.div>
              </div>

              {/* DEPLOYMENTS CARD */}
              <div className="absolute left-[250px] top-[410px] h-[200px] w-[330px] rounded-[28px] bg-[radial-gradient(ellipse_at_top,rgba(255,217,195,0.18),transparent_70%)] pointer-events-none" />
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: -3,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: -3,
                }}
                transition={{
                  delay: 0.3,
                }}
                className={`absolute left-[270px] top-[430px] w-[290px] rounded-[28px] p-6 z-10 ${cardStyle}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-[#111827]">Deployments</h4>
                  <div className="rounded-full bg-[#E8FFF7] px-4 py-2 text-sm font-medium text-[#4FD1A5]">
                    ● Live
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F0] text-[#D3ACFF]">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">api.bytebin.com</h5>
                      <p className="mt-1 text-sm text-slate-400">Production</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-sm text-slate-400">2m ago</span>
                    <ArrowUpRight className="text-slate-500" size={18} />
                  </div>
                </div>
              </motion.div>

              {/* REPOSITORIES CARD */}
              <div className="absolute left-[400px] top-[460px] h-[340px] w-[500px] rounded-[30px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,200,215,0.14),transparent_70%)] pointer-events-none" />
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className={`absolute left-[420px] top-[480px] w-[460px] rounded-[30px] p-6 ${cardStyle}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-900">Repositories</h4>
                  <button className="rounded-2xl bg-[#D3ACFF] px-5 py-3 text-sm font-medium text-white shadow-lg">
                    New Repository
                  </button>
                </div>
                <div className="mt-5">
                  {[
                    {
                      repo: "bytebin/core",
                      tech: "Next.js",
                      stars: "1.2k",
                      time: "2m ago",
                    },
                    {
                      repo: "bytebin/cli",
                      tech: "TypeScript",
                      stars: "856",
                      time: "1h ago",
                    },
                    {
                      repo: "bytebin/ui",
                      tech: "React",
                      stars: "642",
                      time: "3h ago",
                    },
                    {
                      repo: "bytebin/docs",
                      tech: "MDX",
                      stars: "313",
                      time: "1d ago",
                    },
                  ].map((repo) => (
                    <div
                      key={repo.repo}
                      className="flex items-center justify-between border-b border-[#F3E8DE] py-4 last:border-none"
                    >
                      <div className="flex items-center gap-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F172A] text-xs font-semibold text-white">
                          BB
                        </div>
                        <h5 className="font-medium text-slate-900">{repo.repo}</h5>
                      </div>
                      <span className="text-sm text-slate-500">{repo.tech}</span>
                      <span className="text-sm text-slate-500">☆ {repo.stars}</span>
                      <span className="text-sm text-slate-400">{repo.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* COMMIT CARD */}
              <div className="absolute left-[30px] top-[410px] h-[200px] w-[290px] rounded-[30px] bg-[radial-gradient(ellipse_at_top,rgba(215,200,255,0.18),transparent_70%)] pointer-events-none" />
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  rotate: -8,
                }}
                transition={{
                  delay: 0.5,
                }}
                className={`absolute left-[50px] top-[430px] w-[250px] rounded-[30px] p-6 ${cardStyle}`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-slate-900">Commit Activity</h4>
                  <div>
                    <div className="rounded-full bg-[#E8FFF7] px-4 py-2 text-sm font-semibold text-[#4FD1A5]">
                      +42%
                    </div>
                    <p className="mt-2 text-xs text-slate-400">vs last week</p>
                  </div>
                </div>
                <div className="mt-10 flex items-end gap-3">
                  <div className="h-10 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-14 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-8 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-20 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-12 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-18 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-10 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-15 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-18 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-11 w-3 rounded-full bg-[#D3ACFF]" />
                  <div className="h-20 w-3 rounded-full bg-[#D3ACFF]" />
                </div>
              </motion.div>

              {/* RECENT ACTIVITY */}
              <div className="absolute left-[40px] top-[590px] h-[280px] w-[380px] rounded-[30px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,217,168,0.14),transparent_70%)] pointer-events-none" />
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                className={`absolute left-[60px] top-[610px] w-[340px] rounded-[30px] p-7 z-10 ${cardStyle}`}
              >
                <h4 className="font-medium text-slate-900">Recent Activity</h4>
                <div className="mt-7 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FFF7] text-[#4FD1A5]">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Deployed to Production</h5>
                        <p className="mt-1 text-sm text-slate-500">by vercel-bot</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400">2m ago</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF5F0] text-[#D3ACFF]">
                        ↻
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">New Commit</h5>
                        <p className="mt-1 text-sm text-slate-500">feat: add analytics</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400">15m ago</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E0] text-[#D3ACFF]">
                        ⬢
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Preview Deployment</h5>
                        <p className="mt-1 text-sm text-slate-500">#128 opened</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400">1h ago</span>
                  </div>
                </div>
              </motion.div>

              {/* CONNECTOR CURVES */}
              <svg
                className="absolute left-[330px] top-[490px]"
                width="650"
                height="280"
                fill="none"
              >
                <path
                  d="M0 100 C 100 0, 220 0, 320 100"
                  stroke="#D3ACFF"
                  strokeWidth="2"
                />
                <path
                  d="M320 100 C 430 200, 520 200, 600 120"
                  stroke="#D3ACFF"
                  strokeWidth="2"
                />
              </svg>

              {/* GLOBAL EDGE NETWORK (EARTH GLOBE) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute left-[340px] top-[790px] w-[180px] h-[180px] flex items-center justify-center"
              >
                {/* Orbital Ring */}
                <div className="border border-[#FFD7A8]/60 rounded-full w-[240px] h-[80px] absolute rotate-[15deg] pointer-events-none opacity-50" />

                {/* 3D Planet Sphere */}
                <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#FFEDD5] via-[#FFC8D7] to-[#FFD7A8] relative overflow-hidden shadow-[0_20px_50px_rgba(211,172,255,0.15)] flex items-center justify-center">
                  <div className="absolute inset-0 border border-white/20 rounded-full scale-90" />
                  <div className="absolute inset-0 border border-white/10 rounded-full scale-75" />
                  <svg className="w-full h-full text-white/25 absolute" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                    <ellipse cx="50" cy="50" rx="30" ry="40" stroke="currentColor" strokeWidth="1" fill="none" />
                    <ellipse cx="50" cy="50" rx="15" ry="40" stroke="currentColor" strokeWidth="1" fill="none" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                    <line x1="16" y1="30" x2="84" y2="30" stroke="currentColor" strokeWidth="1" />
                    <line x1="16" y1="70" x2="84" y2="70" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Badge */}
                <div className={`absolute bottom-[-10px] whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5 ${cardStyle}`}>
                  <span className="text-[#4FD1A5] text-[10px]">●</span> Global Edge Network
                  <span className="text-slate-400">|</span> <span className="text-slate-500 font-medium">15 Regions</span>
                </div>
              </motion.div>

              {/* 3D ROUNDED TRIANGLE (Bottom Left) */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-[38px] top-[800px]"
              >
                <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
                  <defs>
                    <linearGradient id="coneGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFEDD5" />
                      <stop offset="100%" stopColor="#FFC8D7" />
                    </linearGradient>
                    <linearGradient id="coneGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD7A8" />
                      <stop offset="100%" stopColor="#FF8BC1" />
                    </linearGradient>
                  </defs>
                  <path d="M30 10 L 5 55 A 25 10 0 0 0 30 62 Z" fill="url(#coneGradLeft)" />
                  <path d="M30 10 L 55 55 A 25 10 0 0 1 30 62 Z" fill="url(#coneGradRight)" />
                </svg>
              </motion.div>

              {/* FLOATING CUBE */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute left-[680px] top-[780px] flex h-[70px] w-[70px] items-center justify-center rounded-[20px] ${cardStyle}`}
              >
                <div className="h-8 w-8 rounded-lg bg-[#D3ACFF]/40 shadow-[0_8px_20px_rgba(211,172,255,0.2)]" />
              </motion.div>

              {/* BOTTOM LEFT HANDWRITING */}
              <div className="absolute left-[48px] top-[870px]">
                <p className="font-serif text-[28px] italic text-[#D3ACFF]">
                  Fast. Secure. Global.
                </p>
                <svg width="190" height="25" fill="none" className="mt-1">
                  <path
                    d="M2 18 C 40 8, 90 8, 160 18"
                    stroke="#D3ACFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* SMALL ARROW ICON */}
              <div className="absolute left-[290px] top-[860px] text-[#D3ACFF] text-[40px] rotate-[20deg]">
                ↖
              </div>

              {/* DOT GRID */}
              <div className="absolute left-[210px] top-[890px] grid grid-cols-4 gap-3 opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[4px] w-[4px] rounded-full bg-[#D3ACFF]"
                  />
                ))}
              </div>

            </div>
          </section>

          {/* RIGHT SIDE */}
          <section className="relative flex h-full items-center justify-center px-4 py-8 sm:py-10 sm:px-8">

            {/* DOT GRID (RIGHT OF CARD) */}
            <div className="absolute right-4 top-[240px] grid grid-cols-2 gap-3 opacity-25 pointer-events-none hidden xl:grid">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-[4px] w-[4px] rounded-full bg-[#D3ACFF]" />
              ))}
            </div>

            {/* TINY STARS (RIGHT SIDE) */}
            <div className="absolute right-12 top-[180px] text-[#D3ACFF] text-sm opacity-50 pointer-events-none hidden sm:block">✦</div>
            <div className="absolute right-20 top-[420px] text-[#D3ACFF] text-xs opacity-40 pointer-events-none hidden sm:block">✦</div>

            {/* Register Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="relative w-full max-w-[430px] rounded-[38px] border border-[#F3E8DE] bg-[rgba(255,253,250,0.85)] px-6 py-6 sm:px-10 sm:py-8 shadow-[0_30px_100px_rgba(0,0,0,.06)] backdrop-blur-[20px] mt-6 lg:mt-0"
            >
              {/* Floating Smiley 3D Cube */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-[-20px] top-[-60px] w-[80px] h-[80px] rounded-[24px] bg-[#D3ACFF] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(211,172,255,0.25)] border border-white/30"
              >
                {/* Smiley Cube Sparks */}
                <svg className="absolute right-[-10px] top-[-10px] text-[#D3ACFF] opacity-80" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="3" x2="12" y2="7" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="7" y2="12" />
                  <line x1="17" y1="12" x2="21" y2="12" />
                </svg>

                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </motion.div>

              {/* Warm Glow */}
              <div className="absolute right-[-70px] top-[300px] h-[220px] w-[220px] rounded-full bg-[#FFC8D7]/20 blur-[50px] pointer-events-none" />

              {/* Squiggle Vector */}
              <svg className="absolute right-[-30px] top-[-30px] text-[#D3ACFF] opacity-70 pointer-events-none hidden sm:block" width="90" height="70" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 20 L 30 40 L 50 20 L 70 40 L 90 20" />
              </svg>

              {/* Heading */}
              <div className="text-center mt-2 sm:mt-4">
                <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.04em] text-[#0F172A]">
                  Create your account 👋
                </h2>
                <p className="mt-2 text-sm text-slate-500 sm:mt-3 sm:text-[15px]">
                  Join thousands of developers building the future.
                </p>
              </div>

              {/* Github */}
              <button className="mt-6 flex h-[48px] w-full items-center justify-center gap-4 rounded-[16px] bg-[#081021] text-base font-medium text-white shadow-[0_12px_30px_rgba(8,16,33,.15)] transition-all hover:opacity-95">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.6.5.5 5.7.5 12.1c0 5.2 3.4 9.7 8.1 11.3.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1.1-.4 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.3-1.7 3.4-1.3 3.4-1.3.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.3C23.5 5.7 18.4.5 12 .5z" />
                </svg>
                Continue with GitHub
              </button>

              {/* Divider */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#F3E8DE]" />
                <span className="text-sm text-slate-400">or</span>
                <div className="h-px flex-1 bg-[#F3E8DE]" />
              </div>

              <form onSubmit={handleSubmit}>
              {/* Form inputs */}
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-600">
                    Full name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={inputStyle}
                      value={name}
                      onChange={(e) => dispatch(setName(e.target.value))}
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>

                {/* Email address */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-600">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className={inputStyle}
                      value={email}
                      onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-600">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className={inputStyle}
                      value={password}
                      onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <Eye size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Password checklist */}
              <div className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#E8FFF7] text-[#4FD1A5] flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="text-[13px] font-medium text-slate-500">At least 8 characters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#E8FFF7] text-[#4FD1A5] flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="text-[13px] font-medium text-slate-500">One uppercase letter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#E8FFF7] text-[#4FD1A5] flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="text-[13px] font-medium text-slate-500">One lowercase letter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3.5 w-3.5 rounded-full border border-[#FF8BC1]" />
                  <span className="text-[13px] font-medium text-slate-500">One number or symbol</span>
                </div>
              </div>

              {/* Create account button */}
              <button
                type="submit"
                disabled={registerMutation.isPending}
                className="mt-4 h-[52px] w-full rounded-[18px] bg-[#D3ACFF] text-base font-semibold text-white shadow-[0_20px_40px_rgba(211,172,255,.25)] transition-all hover:bg-[#B888E6] disabled:opacity-60"
              >
                {registerMutation.isPending ? "Creating account..." : "Create account"}
              </button>
              </form>

              <p className="mt-4 text-center text-[13px] text-[#716B78]">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-[#B27FEF]">
                  Sign in
                </Link>
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
