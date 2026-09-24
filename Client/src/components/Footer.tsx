import Logo from "./Logo";

const socialLinks = [
  { label: "in", ariaLabel: "LinkedIn" },
  { label: "𝕏", ariaLabel: "Twitter" },
  { label: "◎", ariaLabel: "Instagram" },
  { label: "▶", ariaLabel: "YouTube" },
];

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

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.ariaLabel}
                href="#"
                aria-label={social.ariaLabel}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e3e5ef] text-[8px] font-bold text-[#65708f] transition hover:border-[#6657ee] hover:text-[#6657ee]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-4 text-[8px] text-[#8a91aa] md:flex-row">
          <p>© 2025 TaskGo. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}