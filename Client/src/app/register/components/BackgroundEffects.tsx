const BackgroundEffects = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#FBF5EE]" />

      {/* Top Left Peach Glow */}
      <div className="absolute -left-44 -top-44 -z-20 h-[520px] w-[520px] rounded-full bg-[#F5D7C8]/60 blur-[170px]" />

      {/* Bottom Right Lavender Glow */}
      <div className="absolute -bottom-40 -right-40 -z-20 h-[520px] w-[520px] rounded-full bg-[#D3ACFF]/40 blur-[180px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -z-20 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[120px]" />

      {/* Decorative Grid */}
      <div className="absolute left-1/2 top-16 hidden -translate-x-1/2 lg:grid grid-cols-4 gap-3">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#D3ACFF]/60"
          />
        ))}
      </div>

      {/* Left Vertical Line */}
      <div className="absolute left-24 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#E8DED5] to-transparent lg:block" />

      {/* Right Vertical Line */}
      <div className="absolute right-24 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#E8DED5] to-transparent lg:block" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#FBF5EE] to-transparent" />
    </>
  );
};

export default BackgroundEffects;