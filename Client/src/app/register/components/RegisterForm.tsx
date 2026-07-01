"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">

      {/* ==========================================================
          Full Name
      ========================================================== */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-[#57515F]">
          Full Name
        </label>

        <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#E9E1D8] bg-[#FCFAF7] px-5 transition-all duration-300 focus-within:border-[#D3ACFF] focus-within:bg-white">

          <User
            size={18}
            className="text-[#A19AA8]"
          />

          <input
            type="text"
            placeholder="John Doe"
            className="h-full w-full bg-transparent text-[15px] outline-none placeholder:text-[#B2ABB8]"
          />

        </div>

      </div>

      {/* ==========================================================
          Email
      ========================================================== */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-[#57515F]">
          Email Address
        </label>

        <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#E9E1D8] bg-[#FCFAF7] px-5 transition-all duration-300 focus-within:border-[#D3ACFF] focus-within:bg-white">

          <Mail
            size={18}
            className="text-[#A19AA8]"
          />

          <input
            type="email"
            placeholder="you@example.com"
            className="h-full w-full bg-transparent text-[15px] outline-none placeholder:text-[#B2ABB8]"
          />

        </div>

      </div>

      {/* ==========================================================
          Password
      ========================================================== */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-[#57515F]">
          Password
        </label>

        <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#E9E1D8] bg-[#FCFAF7] px-5 transition-all duration-300 focus-within:border-[#D3ACFF] focus-within:bg-white">

          <Lock
            size={18}
            className="text-[#A19AA8]"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a secure password"
            className="h-full w-full bg-transparent text-[15px] outline-none placeholder:text-[#B2ABB8]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#8F8898] transition hover:text-[#6F6878]"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      {/* ==========================================================
          Password Strength
      ========================================================== */}

      <div>

        <div className="flex items-center justify-between">

          <span className="text-xs text-[#8E8796]">
            Password Strength
          </span>

          <span className="text-xs font-medium text-[#8A56D6]">
            Strong
          </span>

        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EEE6DD]">

          <div className="h-full w-[80%] rounded-full bg-[#D3ACFF]" />

        </div>

      </div>

      {/* ==========================================================
          Terms
      ========================================================== */}

      <label className="flex items-start gap-3">

        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-[#D3ACFF] accent-[#D3ACFF]"
        />

        <span className="text-sm leading-6 text-[#7D7686]">
          I agree to the
          <span className="mx-1 font-medium text-[#8A56D6]">
            Terms of Service
          </span>
          and
          <span className="ml-1 font-medium text-[#8A56D6]">
            Privacy Policy
          </span>
        </span>

      </label>

      {/* ==========================================================
          Submit
      ========================================================== */}

      <button
        type="submit"
        className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#D3ACFF] text-[15px] font-semibold text-white shadow-[0_20px_50px_rgba(211,172,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C79AFB]"
      >
        Create Account
      </button>

    </form>
  );
};

export default RegisterForm;