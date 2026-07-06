import { Rocket } from "lucide-react";

export function DeployButton() {
  return (
    <button
      className="relative flex items-center gap-2 h-8 px-4 rounded-xl text-white text-[13px] font-semibold overflow-hidden transition-colors bg-[#171717] hover:bg-[#0F0F0F]"
      aria-label="Deploy project"
    >
      <span
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] pointer-events-none"
        aria-hidden="true"
      />
      <Rocket size={13} />
      Deploy
    </button>
  );
}
