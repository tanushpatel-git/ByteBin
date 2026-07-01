"use client";

import { useState } from "react";
import {
  Globe,
  User,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowUpRight,
  Star,
  Plus,
} from "lucide-react";
import {FaGithub } from 'react-icons/fa';

const repositories = [
  { name: "bytebin/core", lang: "Next.js", stars: "1.2k" },
  { name: "bytebin/cli", lang: "TypeScript", stars: "856" },
  { name: "bytebin/ui", lang: "React", stars: "642" },
  { name: "bytebin/docs", lang: "MDX", stars: "313" },
];

const commitBars = [30, 55, 40, 78, 50, 92, 62, 100, 70];

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-y-auto bg-[#FBF5EE] lg:h-screen lg:overflow-hidden">
      {/* Ambient background blobs */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-[620px] w-[620px] rounded-full blur-[110px]"
        style={{ backgroundColor: "#F5D7C8", opacity: 0.55 }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-24 h-[640px] w-[640px] rounded-full blur-[110px]"
        style={{ backgroundColor: "#D3ACFF", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[10%] hidden h-[280px] w-[280px] rounded-full blur-[90px] xl:block"
        style={{ backgroundColor: "#F5D7C8", opacity: 0.3 }}
      />

      {/* Dot grids */}
      <div className="pointer-events-none absolute left-[300px] top-[52px] hidden grid-cols-3 gap-2.5 xl:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#C9A7EF]" />
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-10 right-10 hidden grid-cols-4 gap-2 xl:grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#C9A7EF]/70" />
        ))}
      </div>

      {/* Curved connector line */}
      <svg
        className="pointer-events-none absolute bottom-[150px] left-[60px] hidden h-[130px] w-[520px] xl:block"
        viewBox="0 0 520 130"
        fill="none"
      >
        <path
          d="M0 90 C 150 130, 260 10, 520 60"
          stroke="#EBAF8F"
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
      </svg>

      <div className="relative mx-auto flex w-full max-w-[1560px] flex-col gap-10 px-6 py-10 sm:px-10 lg:h-screen lg:w-fit lg:grid lg:grid-cols-[minmax(520px,600px)_1px_minmax(360px,400px)] lg:items-center lg:justify-center lg:gap-8 lg:overflow-hidden lg:px-14 lg:py-0 xl:grid-cols-[minmax(520px,600px)_1px_minmax(380px,440px)_1px_minmax(360px,400px)] xl:gap-8">
        {/* LEFT — HERO */}
        <section className="flex flex-col justify-center py-6 lg:h-full lg:w-[600px] lg:py-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D3ACFF]">
              <Globe className="h-5 w-5 text-white" strokeWidth={2.25} />
            </div>
            <p className="text-[18px] font-bold tracking-tight text-[#232228]">
              ByteBin
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-[48px] font-black leading-[0.98] tracking-[-0.02em] text-[#232228] xl:text-[62px]">
            Your code,
            <br />
            Deployed
            <br />
            <span className="text-[#B8A0E8]">everywhere</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-5 max-w-[480px] text-[17px] leading-[27px] text-[#6F6878]">
            ByteBin helps you build, ship and scale modern applications on
            the edge.
          </p>

          {/* Stats row */}
          <div className="mt-8 flex items-center gap-10">
            <div>
              <p className="text-[26px] font-black tracking-tight text-[#232228]">
                20K+
              </p>
              <p className="text-[13px] text-[#716B78]">Developers</p>
            </div>
            <span className="h-9 w-px bg-[#E9E1D8]" />
            <div>
              <p className="text-[26px] font-black tracking-tight text-[#232228]">
                150K+
              </p>
              <p className="text-[13px] text-[#716B78]">Projects</p>
            </div>
            <span className="h-9 w-px bg-[#E9E1D8]" />
            <div>
              <p className="text-[26px] font-black tracking-tight text-[#232228]">
                99.9%
              </p>
              <p className="text-[13px] text-[#716B78]">Uptime</p>
            </div>
          </div>

          {/* Commit activity card */}
          <div className="relative mt-9 hidden w-[280px] -rotate-2 rounded-[24px] border border-[#E9E1D8] bg-white p-5 shadow-[0_18px_40px_-18px_rgba(35,34,40,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(35,34,40,0.22)] sm:block">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-[#232228]">
                Commit Activity
              </p>
              <span className="rounded-full bg-[#FBE7DA] px-2 py-0.5 text-[11px] font-semibold text-[#D08A5C]">
                +42%
              </span>
            </div>
            <p className="mt-0.5 text-[11px] text-[#A9A2AC]">vs last week</p>
            <div className="mt-4 flex h-14 items-end gap-1.5">
              {commitBars.map((h, i) => (
                <div
                  key={i}
                  className={`w-2.5 rounded-full ${
                    i % 3 === 0 ? "bg-[#F0BFA0]" : "bg-[#D3ACFF]"
                  }`}
                  style={{ height: `${h}%`, opacity: 0.55 + (h / 100) * 0.45 }}
                />
              ))}
            </div>
          </div>

          {/* Trust line */}
          <div className="mt-7 flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-[#A9A2AC]" strokeWidth={2} />
            <p className="text-[13px] text-[#716B78]">
              Trusted by developers worldwide
            </p>
          </div>
        </section>

        {/* DIVIDER 1 */}
        <div className="hidden h-[62%] w-px justify-self-center self-center bg-[#E9E1D8]/70 lg:block" />

        {/* MIDDLE — FLOATING DASHBOARD */}
        <section className="hidden h-full w-[440px] flex-col justify-center gap-5 xl:flex">
          {/* Deployments card */}
          <div className="w-full rounded-[28px] border border-[#E9E1D8] bg-white p-6 shadow-[0_18px_40px_-18px_rgba(35,34,40,0.15)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(35,34,40,0.2)]">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-semibold text-[#232228]">
                Deployments
              </p>
              <span className="flex items-center gap-1.5 rounded-full bg-[#EAF7EE] px-3 py-1 text-[12px] font-semibold text-[#3FA66A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3FA66A]" />
                Live
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#FCFAF7] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E4FB]">
                <Globe className="h-[18px] w-[18px] text-[#B27FEF]" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#232228]">
                  api.bytebin.com
                </p>
                <p className="text-[12px] text-[#716B78]">Production</p>
              </div>
              <span className="text-[12px] text-[#A9A2AC]">2m ago</span>
              <ArrowUpRight className="h-4 w-4 text-[#A9A2AC]" />
            </div>
          </div>

          {/* Repositories card */}
          <div className="w-full rounded-[28px] border border-[#E9E1D8] bg-white p-6 shadow-[0_20px_46px_-18px_rgba(35,34,40,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#D3ACFF] hover:shadow-[0_26px_54px_-16px_rgba(35,34,40,0.24)]">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-semibold text-[#232228]">
                Repositories
              </p>
              <button className="flex items-center gap-1.5 rounded-full bg-[#D3ACFF] px-3.5 py-2 text-[12px] font-semibold text-white transition duration-300 ease-out hover:scale-[1.02]">
                <Plus className="h-3.5 w-3.5" />
                New Repository
              </button>
            </div>

            <div className="mt-4 flex flex-col divide-y divide-[#F1ECE4]">
              {repositories.map((repo) => (
                <div
                  key={repo.name}
                  className="flex items-center justify-between py-3 transition duration-300 ease-out hover:bg-[#FCFAF7]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D3ACFF] text-[11px] font-bold text-white">
                      BB
                    </div>
                    <p className="text-[14px] font-semibold text-[#232228]">
                      {repo.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-[13px] text-[#716B78]">
                    <span>{repo.lang}</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stars}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER 2 */}
        <div className="hidden h-[62%] w-px justify-self-center self-center bg-[#E9E1D8]/70 xl:block" />

        {/* RIGHT — REGISTER CARD */}
        <section className="flex w-full items-center justify-center py-6 lg:h-full lg:w-[400px]">
          <div className="relative w-full max-w-[400px] rounded-[32px] border border-[#E9E1D8] bg-white p-6 shadow-[0_30px_70px_-25px_rgba(35,34,40,0.25)] sm:p-7">
            <span className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-[#D3ACFF]" />

            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#B27FEF]">
              WELCOME
            </p>
            <h2 className="mt-1 text-[24px] font-black tracking-[-0.02em] text-[#232228]">
              Create Account
            </h2>
            <p className="mt-1.5 text-[13px] leading-[19px] text-[#716B78]">
              Join ByteBin and organize your development workflow in one
              beautiful workspace.
            </p>

            {/* GitHub button */}
            <button
              type="button"
              className="mt-4 flex h-[44px] w-full items-center justify-center gap-2.5 rounded-2xl border border-[#E9E1D8] bg-white text-[14px] font-semibold text-[#232228] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#D3ACFF] hover:shadow-[0_10px_25px_-10px_rgba(35,34,40,0.2)]"
            >
              <FaGithub className="h-4 w-4" />
              Continue with GitHub
            </button>

            {/* Divider */}
            <div className="my-3.5 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#E9E1D8]" />
              <span className="text-[12px] text-[#716B78]">
                or continue with email
              </span>
              <span className="h-px flex-1 bg-[#E9E1D8]" />
            </div>

            {/* Form */}
            <form className="flex flex-col gap-3">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-[13px] font-semibold text-[#232228]"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className="h-[44px] w-full rounded-2xl border border-[#E8E1D8] bg-[#FCFAF7] pl-4 pr-11 text-[14px] text-[#232228] outline-none transition duration-300 ease-out placeholder:text-[#A9A2AC] focus:border-[#D3ACFF] focus:bg-white"
                  />
                  <User className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A9A2AC]" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[13px] font-semibold text-[#232228]"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-[44px] w-full rounded-2xl border border-[#E8E1D8] bg-[#FCFAF7] pl-4 pr-11 text-[14px] text-[#232228] outline-none transition duration-300 ease-out placeholder:text-[#A9A2AC] focus:border-[#D3ACFF] focus:bg-white"
                  />
                  <Mail className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A9A2AC]" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-[13px] font-semibold text-[#232228]"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="h-[44px] w-full rounded-2xl border border-[#E8E1D8] bg-[#FCFAF7] pl-4 pr-11 text-[14px] text-[#232228] outline-none transition duration-300 ease-out placeholder:text-[#A9A2AC] focus:border-[#D3ACFF] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A9A2AC] transition duration-300 ease-out hover:text-[#232228]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Password strength */}
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#F1ECE4]">
                    <div className="h-full w-[85%] rounded-full bg-[#D3ACFF]" />
                  </div>
                  <span className="text-[12px] font-medium text-[#B27FEF]">
                    Strong
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed((prev) => !prev)}
                  className="mt-0.5 h-4 w-4 accent-[#D3ACFF]"
                />
                <span className="text-[13px] leading-[18px] text-[#716B78]">
                  I agree to the{" "}
                  <span className="font-semibold text-[#232228]">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#232228]">
                    Privacy Policy
                  </span>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 flex h-[46px] w-full items-center justify-center rounded-[20px] bg-[#D3ACFF] text-[14px] font-semibold text-white transition duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_15px_35px_-10px_rgba(211,172,255,0.6)]"
              >
                Create account
              </button>
            </form>

            <p className="mt-4 text-center text-[13px] text-[#716B78]">
              Already have an account?{" "}
              <a href="#" className="font-semibold text-[#B27FEF]">
                Sign in
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;