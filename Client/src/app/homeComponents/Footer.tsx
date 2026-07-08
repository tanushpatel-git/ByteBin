import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Docs", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
    Resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Status", href: "#" },
      { name: "Open Source", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#ECE3D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D3ACFF] to-[#a78bfa] flex items-center justify-center text-white font-bold text-[14px]">
                B
              </div>
              <span className="font-bold text-[18px] text-[#18181B] tracking-tight">
                ByteBin
              </span>
            </Link>
            <p className="text-[14px] text-[#6B7280] mb-6">
              The premium developer platform for building, deploying, and scaling modern applications.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-[#6B7280] hover:text-[#18181B] transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-[#6B7280] hover:text-[#18181B] transition-colors">
                <FaGithub size={20} />
              </Link>
              <Link href="#" className="text-[#6B7280] hover:text-[#18181B] transition-colors">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="font-semibold text-[#18181B] text-[14px]">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-[14px] text-[#6B7280] hover:text-[#D3ACFF] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#ECE3D8] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#6B7280]">
            © {new Date().getFullYear()} ByteBin Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[13px] text-[#6B7280] font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
