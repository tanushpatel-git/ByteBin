import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="px-6 pb-6 pt-5">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center justify-between gap-5 border-b border-[#eceef5] pb-5 md:flex-row">
          <Logo />
        </div>
      </div>
    </footer>
  );
}