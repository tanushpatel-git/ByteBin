import Logo from "./Logo";

const footerLinks = ["Home", "Features", "Pricing", "About", "Blog"];

export default function Footer() {
  return (
    <footer className="px-6 pb-6 pt-5">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center justify-between gap-5 border-b border-[#eceef5] pb-5 md:flex-row">
          <Logo />

          <nav className="flex gap-7 text-[9px] text-[#65708f]">
            {footerLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}