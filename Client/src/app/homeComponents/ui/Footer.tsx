"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { m, Variants } from "framer-motion";
import { Reveal } from "../motion/Reveal";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

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

  const socialIcons = [
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaGithub, href: "#", label: "GitHub" },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <Reveal>
      <footer className="bg-white pt-24 pb-12 border-t border-[#ECE3D8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <m.div
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-8 h-8 rounded-xl bg-linear-to-br from-[#D3ACFF] to-[#a78bfa] flex items-center justify-center text-white font-bold text-[14px]"
                >
                  B
                </m.div>
                <span className="font-bold text-[18px] text-[#18181B] tracking-tight">
                  ByteBin
                </span>
              </Link>
              <p className="text-[14px] text-[#6B7280] mb-6">
                The premium developer platform for building, deploying, and scaling modern applications.
              </p>
              <div className="flex gap-4">
                {socialIcons.map(({ Icon, href, label }) => (
                  <m.div key={label} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    <Link href={href} aria-label={label} className="text-[#6B7280] hover:text-[#18181B] transition-colors">
                      <Icon size={20} />
                    </Link>
                  </m.div>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <m.div
                key={category}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-4"
              >
                <h4 className="font-semibold text-[#18181B] text-[14px]">{category}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link, i) => (
                    <m.li key={i} variants={linkItem}>
                      <Link href={link.href} className="group relative text-[14px] text-[#6B7280] hover:text-[#18181B] transition-colors inline-block">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#D3ACFF] transition-all duration-300 ease-out group-hover:w-full"></span>
                      </Link>
                    </m.li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-[#ECE3D8] flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-[13px] text-[#6B7280]">
              © {new Date().getFullYear()} ByteBin Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <m.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
              <span className="text-[13px] text-[#6B7280] font-medium">All systems operational</span>
            </div>
          </m.div>
        </div>
      </footer>
    </Reveal>
  );
}
