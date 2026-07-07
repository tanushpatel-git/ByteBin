export function LoadingSkeleton() {
  return (
    <div className="flex h-full animate-pulse" aria-label="Loading workspace" aria-busy="true">
      {/* Sidebar skeleton */}
      <div className="w-60 shrink-0 bg-[#FDFCFB] border-r border-[#EAE2D9] p-4 space-y-3">
        <div className="h-8 bg-[#EAE2D9] rounded-xl" />
        <div className="h-7 bg-[#F3EEE8] rounded-xl" />
        <div className="space-y-2 pt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-8 bg-[#F3EEE8] rounded-xl" style={{ opacity: 1 - i * 0.12 }} />
          ))}
        </div>
      </div>

      {/* Center skeleton */}
      <div className="flex-1 flex flex-col bg-[#F8F5F2]">
        {/* Header */}
        <div className="h-14 border-b border-[#EAE2D9] bg-[#FDFCFB] px-5 flex items-center gap-4">
          <div className="h-4 w-32 bg-[#EAE2D9] rounded-full" />
          <div className="h-7 w-52 bg-[#F3EEE8] rounded-xl mx-auto" />
          <div className="h-7 w-24 bg-[#EAE2D9] rounded-xl ml-auto" />
        </div>

        {/* Editor */}
        <div className="flex-1 p-5 space-y-2">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-[#EAE2D9] rounded"
              style={{ width: `${40 + Math.sin(i * 1.7) * 30 + 30}%`, opacity: 0.5 + Math.cos(i * 0.8) * 0.2 }}
            />
          ))}
        </div>

        {/* Terminal */}
        <div className="h-44 border-t border-[#EAE2D9] bg-[#F3EEE8] p-4 space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-3.5 bg-[#EAE2D9] rounded" style={{ width: `${20 + i * 12}%` }} />
          ))}
        </div>
      </div>

      {/* Right panel skeleton */}
      <div className="w-72 shrink-0 border-l border-[#EAE2D9] bg-[#FDFCFB] p-4 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-[#EAE2D9] p-4 space-y-2.5">
            <div className="h-4 w-24 bg-[#EAE2D9] rounded-full" />
            <div className="space-y-1.5">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="h-3 bg-[#F3EEE8] rounded" style={{ width: `${60 + j * 10}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
