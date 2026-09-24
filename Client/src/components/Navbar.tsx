import { Menu } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}