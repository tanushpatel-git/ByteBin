"use client";
import { FaGithub } from "react-icons/fa";
import RegisterForm from "./RegisterForm";

const RegisterCard = () => {
  return (
    <div className="relative w-full max-w-[480px]">

      {/* Ambient Glow */}

      <div className="absolute inset-0 rounded-[36px] bg-[#D3ACFF]/20 blur-3xl" />

      {/* Card */}

      <div className="relative rounded-[36px] border border-[#ECE3D9] bg-white/90 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

        {/* Decorative Dot */}

        <div className="absolute right-8 top-8 h-3 w-3 rounded-full bg-[#D3ACFF]" />

        {/* Header */}

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#9A93A3]">
            Welcome
          </p>

          <h2 className="mt-3 text-[34px] font-bold tracking-tight text-[#2D2932]">
            Create Account
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-[#756F7E]">
            Join ByteBin and organize your development workflow in one beautiful workspace.
          </p>

        </div>

        {/* Github */}

        <button className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-[#E8DFD5] bg-[#FBF8F4] font-semibold text-[#2D2932] transition-all duration-300 hover:-translate-y-1 hover:border-[#D3ACFF] hover:bg-white">

          <FaGithub size={20} />

          Continue with GitHub

        </button>

        {/* Divider */}

        <div className="my-8 flex items-center gap-4">

          <div className="h-px flex-1 bg-[#ECE4DA]" />

          <span className="text-sm text-[#8A8393]">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-[#ECE4DA]" />

        </div>

        {/* Form */}

        <RegisterForm />

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-[#857D8D]">

          Already have an account?

          <button className="ml-2 font-semibold text-[#A06BE8] transition hover:text-[#8A56D6]">

            Sign in

          </button>

        </p>

      </div>

    </div>
  );
};

export default RegisterCard;