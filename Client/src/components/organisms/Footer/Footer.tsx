import Logo from "@/components/atoms/Logo";
import NavLinks from "@/components/molecules/NavLinks";
import SocialLinks from "@/components/molecules/SocialLinks";

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

          <NavLinks links={footerLinks} variant="footer" />

          <SocialLinks links={socialLinks} />
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