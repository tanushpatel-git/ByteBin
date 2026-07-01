"use client";
import { motion } from "framer-motion";

const LoginPage = () => {
  const repos = [
    {
      name: "bytebin-core",
      tech: "Next.js",
      size: "1.2 MB",
    },
    {
      name: "bytebin-api",
      tech: "TypeScript",
      size: "650 KB",
    },
    {
      name: "bytebin-ui",
      tech: "React",
      size: "840 KB",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F7FB] p-5">

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10">

        <div className="absolute left-[10%] top-[8%] h-[320px] w-[320px] rounded-full bg-[#635BFF]/10 blur-[120px]" />

        <div className="absolute right-[8%] top-[15%] h-[280px] w-[280px] rounded-full bg-cyan-300/10 blur-[120px]" />

        <div className="absolute bottom-[0%] left-[40%] h-[400px] w-[400px] rounded-full bg-violet-300/10 blur-[140px]" />

      </div>

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-[40px] border border-[#ECECF2] bg-white shadow-[0_20px_80px_rgba(0,0,0,.04)]">

        {/* Side Gradient */}
        <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-b from-cyan-300 via-[#635BFF] to-violet-400" />

        <div className="grid min-h-[95vh] lg:grid-cols-[1.1fr_.9fr]">

          {/* ===================================================== */}
          {/* LEFT SECTION */}
          {/* ===================================================== */}

          <motion.section
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden overflow-hidden p-10 lg:block"
          >

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#635BFF] text-lg font-semibold text-white shadow-[0_20px_40px_rgba(99,91,255,.25)]">
                B
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  ByteBin
                </h3>

                <p className="text-sm text-slate-400">
                  Developer Cloud
                </p>
              </div>

            </div>

            {/* Hero Text */}
            <div className="mt-20">

              <h1 className="max-w-[600px] text-[72px] font-semibold leading-[0.95] tracking-[-0.06em] text-slate-900">

                Your code.

                <br />

                Deployed

                <br />

                <span className="text-[#635BFF]">
                  everywhere.
                </span>

              </h1>

              <p className="mt-7 max-w-[480px] text-[17px] leading-8 text-slate-500">
                ByteBin helps you build, ship and scale modern applications
                with instant deployments and global infrastructure.
              </p>

            </div>

            {/* ===================================================== */}
            {/* Deploy Card */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .15 }}
              className="absolute right-16 top-14 w-[220px] rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,.06)]"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Deployments
                </span>

                <div className="h-2 w-2 rounded-full bg-emerald-500" />

              </div>

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                api.bytebin.com
              </h4>

              <div className="mt-5 flex items-center justify-between">

                <span className="rounded-full bg-[#635BFF]/10 px-4 py-2 text-sm font-medium text-[#635BFF]">
                  Free
                </span>

                <span className="text-sm text-slate-400">
                  Active
                </span>

              </div>

            </motion.div>

            {/* ===================================================== */}
            {/* Repository Card */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="absolute left-10 bottom-16 w-[500px] rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_25px_70px_rgba(0,0,0,.06)]"
            >

              <div className="flex items-center justify-between">

                <h4 className="font-semibold text-slate-900">
                  Repositories
                </h4>

                <button className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-500">
                  View All
                </button>

              </div>

              {/* Table Header */}
              <div className="mt-8 grid grid-cols-3 text-sm text-slate-400">

                <span>Repo</span>

                <span>Tech</span>

                <span>Size</span>

              </div>

              {/* Repo Rows */}
              <div className="mt-5 space-y-5">

                {repos.map((repo) => (
                  <div
                    key={repo.name}
                    className="grid grid-cols-3 items-center"
                  >

                    <div className="flex items-center gap-3">

                      <div className="h-3 w-3 rounded-full bg-[#635BFF]" />

                      <span className="font-medium text-slate-800">
                        {repo.name}
                      </span>

                    </div>

                    <span className="text-slate-500">
                      {repo.tech}
                    </span>

                    <span className="text-slate-500">
                      {repo.size}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>

            {/* CONTINUE IN PART 2 */}
                        {/* ===================================================== */}
            {/* Commit Graph Card */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .45 }}
              className="absolute right-10 bottom-32 w-[240px] rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,.06)]"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Commit activity
                  </p>

                  <h4 className="mt-1 text-2xl font-semibold text-slate-900">
                    +47%
                  </h4>

                </div>

                <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-600">
                  ↑
                </div>

              </div>

              {/* Bars */}

              <div className="mt-8 flex items-end gap-3">

                <div className="h-12 w-5 rounded-full bg-slate-200" />

                <div className="h-20 w-5 rounded-full bg-slate-200" />

                <div className="h-16 w-5 rounded-full bg-slate-200" />

                <div className="h-28 w-5 rounded-full bg-[#635BFF]" />

                <div className="h-20 w-5 rounded-full bg-[#8B83FF]" />

                <div className="h-12 w-5 rounded-full bg-slate-200" />

                <div className="h-24 w-5 rounded-full bg-[#635BFF]" />

              </div>

            </motion.div>

            {/* ===================================================== */}
            {/* Recent Activity Card */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .6 }}
              className="absolute left-[180px] top-[470px] w-[260px] rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,.06)]"
            >

              <div className="flex items-center justify-between">

                <h4 className="font-semibold text-slate-900">
                  Recent activity
                </h4>

                <div className="h-2 w-2 rounded-full bg-emerald-500" />

              </div>

              <div className="mt-6 space-y-5">

                <div className="flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-[#635BFF]" />

                  <span className="text-sm text-slate-500">
                    Deployed to production
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="text-sm text-slate-500">
                    Preview build generated
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-emerald-500" />

                  <span className="text-sm text-slate-500">
                    Edge cache refreshed
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-violet-400" />

                  <span className="text-sm text-slate-500">
                    New commit detected
                  </span>

                </div>

              </div>

            </motion.div>

            {/* ===================================================== */}
            {/* Floating Terminal */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .75 }}
              className="absolute right-20 top-[340px] w-[320px] overflow-hidden rounded-[30px] bg-[#0B1020] shadow-[0_30px_80px_rgba(0,0,0,.15)]"
            >

              {/* Top Bar */}

              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <div className="h-3 w-3 rounded-full bg-red-400" />

                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                <div className="h-3 w-3 rounded-full bg-emerald-400" />

              </div>

              {/* Body */}

              <div className="space-y-3 p-6 font-mono text-sm text-white/80">

                <p>$ pnpm create bytebin@latest</p>

                <p className="text-emerald-400">
                  ✓ Installing dependencies
                </p>

                <p className="text-emerald-400">
                  ✓ Starting edge runtime
                </p>

                <p className="text-emerald-400">
                  ✓ Deploying globally
                </p>

                <p className="text-[#8B83FF]">
                  https://app.bytebin.dev
                </p>

              </div>

            </motion.div>

            {/* ===================================================== */}
            {/* Explore Button */}
            {/* ===================================================== */}

            <motion.button
              whileHover={{
                y: -3,
              }}
              className="absolute bottom-8 right-10 rounded-full bg-[#635BFF] px-7 py-4 text-sm font-medium text-white shadow-[0_20px_50px_rgba(99,91,255,.3)]"
            >
              Explore Platform
            </motion.button>

          </motion.section>

          {/* ===================================================== */}
          {/* RIGHT SECTION STARTS HERE */}
          {/* ===================================================== */}
                    {/* ===================================================== */}
          {/* RIGHT SECTION */}
          {/* ===================================================== */}

          <motion.section
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex items-center justify-center px-10 py-10"
          >

            <div className="w-full max-w-[420px]">

              {/* Welcome */}
              <div>

                <div className="inline-flex items-center rounded-full border border-[#E8E8F0] bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
                  👋 Welcome back
                </div>

                <h2 className="mt-7 text-[46px] font-semibold tracking-[-0.05em] text-slate-900">
                  Sign in
                </h2>

                <p className="mt-3 text-[16px] leading-7 text-slate-500">
                  Access your deployments, repositories and developer tools.
                </p>

              </div>

              {/* ===================================================== */}
              {/* Github Button */}
              {/* ===================================================== */}

              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: .98,
                }}
                className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-[#ECECF2] bg-white text-[15px] font-medium text-slate-700 shadow-sm transition"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                  GH
                </div>

                Continue with GitHub

              </motion.button>

              {/* ===================================================== */}
              {/* Divider */}
              {/* ===================================================== */}

              <div className="my-8 flex items-center gap-4">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-sm text-slate-400">
                  or continue with email
                </span>

                <div className="h-px flex-1 bg-slate-200" />

              </div>

              {/* ===================================================== */}
              {/* Email */}
              {/* ===================================================== */}

              <div>

                <label className="mb-3 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="name@example.com"
                  className="h-14 w-full rounded-2xl border border-[#ECECF2] bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10"
                />

              </div>

              {/* ===================================================== */}
              {/* Password */}
              {/* ===================================================== */}

              <div className="mt-6">

                <div className="mb-3 flex items-center justify-between">

                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button className="text-sm text-[#635BFF] transition hover:text-[#4f47ef]">
                    Forgot password?
                  </button>

                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 w-full rounded-2xl border border-[#ECECF2] bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10"
                />

              </div>

              {/* ===================================================== */}
              {/* Remember Me */}
              {/* ===================================================== */}

              <div className="mt-6 flex items-center justify-between">

                <label className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-[#635BFF]"
                  />

                  <span className="text-sm text-slate-500">
                    Remember me
                  </span>

                </label>

                <span className="text-sm text-slate-400">
                  Secure session
                </span>

              </div>

              {/* ===================================================== */}
              {/* Sign In Button */}
              {/* ===================================================== */}

              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: .99,
                }}
                className="mt-8 h-14 w-full rounded-2xl bg-[#635BFF] text-[15px] font-medium text-white shadow-[0_20px_50px_rgba(99,91,255,.25)] transition"
              >
                Sign In
              </motion.button>

              {/* ===================================================== */}
              {/* Footer */}
              {/* ===================================================== */}

              <div className="mt-10 text-center">

                <p className="text-sm text-slate-500">

                  Don't have an account?

                  <button className="ml-2 font-medium text-[#635BFF] transition hover:text-[#4f47ef]">
                    Create one
                  </button>

                </p>

                <p className="mt-8 text-xs leading-6 text-slate-400">
                  By continuing, you agree to our Terms of Service and
                  Privacy Policy.
                </p>

              </div>

            </div>

          </motion.section>

        </div>

      </div>

    </main>
  );
};

export default LoginPage;