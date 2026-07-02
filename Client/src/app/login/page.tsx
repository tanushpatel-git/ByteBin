"use client"
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";

const cardStyle =
  "border border-[#F3E8DD] bg-[#FFFDFB] shadow-[0_20px_80px_rgba(215,180,140,.08)]";

const LoginPage = () => {

  return (
    <main className="min-h-screen bg-[#FFF9F2] p-4 overflow-auto lg:overflow-hidden">
      {/* OUTER CONTAINER */}
      <div className="relative max-h-[calc(100vh-1rem)] lg:h-full overflow-hidden rounded-[32px] border border-[#F3E8DD] bg-[#FFFDF9] shadow-[0_20px_100px_rgba(215,180,140,.06)]">
        {/* BACKGROUND BLOBS */}
        <div className="absolute left-[-120px] top-[420px] h-[280px] w-[280px] rounded-full bg-[#FFD9B0]/35 blur-[60px]" />
        <div className="absolute right-[-120px] top-[380px] h-[320px] w-[320px] rounded-full bg-[#FFC8D6]/30 blur-[70px]" />
        <div className="absolute bottom-[-80px] left-[60%] h-[300px] w-[300px] rounded-full bg-[#D7C8FF]/28 blur-[65px]" />
        <div className="absolute top-[-60px] left-[44%] h-[240px] w-[240px] rounded-full bg-[#FFE9CC]/40 blur-[50px]" />
        <div className="absolute left-[30%] top-[60%] h-[200px] w-[200px] rounded-full bg-[#FFE9CC]/30 blur-[55px]" />
        <div className="absolute right-[20%] top-[15%] h-[180px] w-[180px] rounded-full bg-[#FFD9B0]/25 blur-[45px]" />

        {/* GRID */}
        <div className="grid min-h-full lg:grid-cols-[1.38fr_.82fr]">
          {/* LEFT SIDE */}
          <section className="hidden lg:block relative px-12 pt-8 overflow-hidden">
            {/* SCALING GRAPHICS CLUSTER */}
            <div className="absolute right-0 top-0 bottom-0 w-[950px] h-[880px] origin-top-right xl:scale-[0.8] 2xl:scale-[0.95] min-[1600px]:scale-100">

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
                  Your code.
                  <br />
                  Deployed
                  <br />
                  <span className="text-[#D3ACFF]">
                    everywhere.
                  </span>
                </h1>
                <p className="mt-8 max-w-[360px] text-[16px] leading-8 text-slate-500">
                  ByteBin helps you build, ship and scale modern applications on the edge.
                </p>
              </motion.div>

              {/* DECORATIVE DOTS */}
              <div className="absolute left-[36%] top-[56px] grid grid-cols-3 gap-3 opacity-40">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[4px] w-[4px] rounded-full bg-[#D3ACFF]"
                  />
                ))}
              </div>

              {/* SMALL ROUNDED OUTLINE RECTANGLE */}
              <div className="absolute left-[430px] top-[42px] h-[170px] w-[92px] rounded-[32px] border border-[#F3E8DD]" />

              {/* FLOATING CREAM BLOBS */}
              <div className="absolute left-[200px] top-[200px] h-[140px] w-[140px] rounded-full bg-[#FFE9CC]/50 blur-[40px]" />
              <div className="absolute left-[600px] top-[350px] h-[160px] w-[160px] rounded-full bg-[#FFD9B0]/40 blur-[45px]" />
              <div className="absolute left-[150px] top-[700px] h-[120px] w-[120px] rounded-full bg-[#FFC8D6]/35 blur-[35px]" />

              {/* DEPLOYMENTS CARD */}
              <div className="absolute left-[400px] top-[95px] h-[220px] w-[340px] rounded-[28px] bg-[radial-gradient(ellipse_at_top,rgba(255,217,176,0.18),transparent_70%)]" />
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
                  delay: 0.2,
                }}
                className={`absolute left-[420px] top-[115px] w-[300px] rounded-[28px] p-6 ${cardStyle}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-[#111827]">Deployments</h4>
                  <div className="rounded-full bg-[#E8FFF7] px-4 py-2 text-sm font-medium text-[#1ABC7C]">
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

              {/* WARM BLOB */}
              <div className="absolute right-[150px] top-[220px] h-[220px] w-[220px] rounded-full bg-[#FFE9CC]/40 blur-[30px]" />

              {/* REPOSITORIES CARD */}
              <div className="absolute left-[400px] top-[250px] h-[340px] w-[500px] rounded-[30px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,200,214,0.15),transparent_70%)]" />
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
                  delay: 0.35,
                }}
                className={`absolute left-[420px] top-[270px] w-[460px] rounded-[30px] p-6 ${cardStyle}`}
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
                      className="flex items-center justify-between border-b border-[#F3E8DD] py-4 last:border-none"
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
              <div className="absolute left-[50px] top-[410px] h-[200px] w-[290px] rounded-[30px] bg-[radial-gradient(ellipse_at_top,rgba(215,200,255,0.2),transparent_70%)]" />
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
                  delay: 0.45,
                }}
                className={`absolute left-[70px] top-[430px] w-[250px] rounded-[30px] p-6 ${cardStyle}`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-slate-900">Commit Activity</h4>
                  <div>
                    <div className="rounded-full bg-[#DDFCEF] px-4 py-2 text-sm font-semibold text-[#1ABC7C]">
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
              <div className="absolute left-[70px] top-[590px] h-[280px] w-[430px] rounded-[30px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,217,176,0.16),transparent_70%)]" />
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
                className={`absolute left-[90px] top-[610px] w-[390px] rounded-[30px] p-7 ${cardStyle}`}
              >
                <h4 className="font-medium text-slate-900">Recent Activity</h4>
                <div className="mt-7 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FFF7] text-[#1ABC7C]">
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
                        <p className="mt-1 text-sm text-slate-500">feat: add edge middleware</p>
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
                        <p className="mt-1 text-sm text-slate-500">by github-actions</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400">1h ago</span>
                  </div>
                </div>
              </motion.div>

              {/* CONNECTOR CURVES */}
              <svg
                className="absolute left-[330px] top-[480px]"
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

              {/* TERMINAL GLOW */}
              <div className="absolute left-[480px] top-[580px] h-[200px] w-[360px] rounded-[40px] bg-[#D3ACFF]/15 blur-[60px]" />

              {/* TERMINAL CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -4,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  rotate: -4,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="absolute left-[510px] top-[600px] w-[300px] rounded-[30px] bg-[#0B1020] p-7 shadow-[0_40px_100px_rgba(0,0,0,.25)]"
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
                <div className="mt-8 space-y-4 font-mono text-[18px]">
                  <p className="text-[#D3ACFF]">$ npx create-bytebin@latest</p>
                  <p className="text-[#71FF9F]">✓ Initializing project...</p>
                  <p className="text-[#71FF9F]">✓ Setting up Edge Functions...</p>
                  <p className="text-[#71FF9F]">✓ Installing dependencies...</p>
                  <p className="text-[#71FF9F]">✓ Deploying to global network...</p>
                  <div className="pt-8">
                    <p className="text-[#E7E7E7]">Your app is live at:</p>
                    <p className="mt-3 text-[#D3ACFF]">https://amazing-app.bytebin.app 🎉</p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING LIGHTNING CUBE */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className={`absolute left-[810px] top-[680px] flex h-[110px] w-[110px] items-center justify-center rounded-[30px] ${cardStyle}`}
              >
                <div className="text-[54px] text-[#D3ACFF]">⚡</div>
              </motion.div>

              {/* BOTTOM LEFT HANDWRITING */}
              <div className="absolute left-[60px] top-[870px]">
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
              <div className="absolute left-[310px] top-[860px] text-[#D3ACFF] text-[40px] rotate-[20deg]">
                ↖
              </div>

              {/* DOT GRID */}
              <div className="absolute left-[380px] top-[880px] grid grid-cols-4 gap-3 opacity-40">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[4px] w-[4px] rounded-full bg-[#D3ACFF]"
                  />
                ))}
              </div>

              {/* BOTTOM WARM SPHERE */}
              <div className="absolute bottom-[-120px] right-[230px] h-[260px] w-[260px] rounded-full bg-[#D7C8FF]/35 blur-[30px]" />
            </div>
          </section>

          {/* RIGHT SIDE */}
          <section className="relative flex items-start justify-center px-4 py-6 sm:py-8 sm:px-8">
            {/* Login Card */}
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
              className="relative w-full max-w-[430px] rounded-[38px] border border-[#F1E7DC] bg-[rgba(255,253,251,0.82)] px-6 py-6 sm:px-10 sm:py-8 shadow-[0_30px_100px_rgba(0,0,0,.06)] backdrop-blur-xl"
            >
              {/* Warm Glow */}
              <div className="absolute right-[-70px] top-[300px] h-[220px] w-[220px] rounded-full bg-[#FFC8D6]/25 blur-[50px]" />

              {/* Logo */}
              <div className="flex justify-center">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[28px] border border-[#F3E8DD] bg-[#FFFDFB] shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D3ACFF] text-white shadow-[0_10px_25px_rgba(211,172,255,.25)]">
                    <Globe size={28} />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="mt-6 text-center sm:mt-8">
                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#0F172A] sm:text-[36px]">
                  Welcome back 👋
                </h2>
                <p className="mt-2 text-sm text-slate-500 sm:mt-4 sm:text-[16px]">
                  Sign in to your ByteBin account
                </p>
              </div>

              {/* Github */}
              <button
                type="button"
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-4 rounded-[20px] bg-[#081021] text-base font-medium text-white shadow-[0_15px_40px_rgba(8,16,33,.2)] transition-all hover:opacity-95 sm:mt-6 sm:text-[18px]"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.6.5.5 5.7.5 12.1c0 5.2 3.4 9.7 8.1 11.3.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1.1-.4 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.3-1.7 3.4-1.3 3.4-1.3.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.3C23.5 5.7 18.4.5 12 .5z" />
                </svg>
                Continue with GitHub
              </button>

              {/* Divider */}
              <div className="my-5 flex items-center gap-6 sm:my-6">
                <div className="h-px flex-1 bg-[#F3E8DD]" />
                <span className="text-base text-slate-400 sm:text-lg">or</span>
                <div className="h-px flex-1 bg-[#F3E8DD]" />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-base font-medium text-slate-700 sm:text-lg">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-[50px] w-full rounded-[20px] border border-[#F3E8DD] bg-[#FFFDFB] px-5 text-base outline-none focus:border-[#D3ACFF] sm:px-7 sm:text-lg"
                />
              </div>

              {/* Password */}
              <div className="mt-5 sm:mt-6">
                <label className="mb-2 block text-base font-medium text-slate-700 sm:text-lg">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="h-[50px] w-full rounded-[20px] border border-[#F3E8DD] bg-[#FFFDFB] px-5 text-base outline-none focus:border-[#D3ACFF] sm:px-7 sm:text-lg"
                  />
                </div>
              </div>

              {/* Sign In */}
              <button
                className="mt-5 h-[52px] w-full rounded-[20px] bg-[#D3ACFF] text-base font-medium text-white shadow-[0_20px_50px_rgba(211,172,255,.25)] transition-all hover:bg-[#B888E6] sm:mt-6 sm:text-[18px]">
                Sign in
              </button>

              {/* Footer */}
              <p className="mt-5 text-center text-sm text-slate-500 sm:mt-6 sm:text-base">
                Don't have an account?
                <Link 
                href="/register"
                className="ml-2 font-semibold text-[#D3ACFF] hover:underline cursor-pointer">
                  Create one
                </Link>
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
