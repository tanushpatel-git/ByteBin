export default function Page() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#101d4d]">
      <div className="relative">
        {/* Sky backdrop: sticks to the viewport while the hero is on screen,
            then scrolls away with the page once the hero ends. */}
        <div
          aria-hidden="true"
          className="pointer-events-none sticky top-0 z-0 h-screen w-full overflow-hidden"
          style={{
            backgroundImage: "url('/assets/backdropimage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            marginBottom: "-100vh",
          }}
        >
          <div className="absolute inset-0 bg-white/30" />
        </div>
        <div className="relative z-10"></div>
      </div>
    </div>
  );
}