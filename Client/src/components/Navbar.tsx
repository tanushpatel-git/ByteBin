import { Menu } from "lucide-react";
import Logo from "./Logo";

const navLinks = ["Home", "Features", "Pricing", "About", "Blog"];

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-[12px] font-medium ${index === 0 ? "text-[#5d50ed]" : "text-[#273463]"
                }`}
            >
              {item}
              {index === 0 && (
                <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[#6556f3]" />
              )}
            </a>
          ))}
        </nav>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}