export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-7 w-7">
        <span className="absolute left-0 top-2 h-4 w-4 rotate-45 rounded-[5px] bg-[#635BFF]" />
        <span className="absolute left-3.5 top-0 h-4 w-4 rotate-45 rounded-[5px] bg-[#635BFF]" />
        <span className="absolute bottom-0 left-3.5 h-4 w-4 rotate-45 rounded-[5px] bg-[#635BFF]" />
      </div>

      <span className="text-[16px] font-bold tracking-tight text-[#101d4d]">
        TaskGo
      </span>
    </div>
  );
}