"use client";

import { useState } from "react";
import { ArrowRight, Code2, Menu, Search, X } from "lucide-react";

const links = [
  ["Home", "#home"], ["Workflow", "#workflow"], ["Features", "#features"],
  ["Blog", "#blog"], ["Pricing", "#pricing"], ["FAQ", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lm-header">
      <div className="lm-header-inner">
        <a className="lm-brand" href="#home" aria-label="ByteBin home"><span className="lm-brand-mark"><Code2 size={21} /></span>ByteBin</a>
        <nav className={`lm-nav${open ? " lm-nav-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="lm-nav-mobile-cta" href="#get-started" onClick={() => setOpen(false)}>Get started <ArrowRight size={14} /></a>
        </nav>
        <div className="lm-header-actions">
          <a className="lm-search" href="#features" aria-label="Explore tools"><span className="sr-only">Explore tools</span><Search size={17} /></a>
          <a className="lm-login" href="#get-started">Log in</a>
          <a className="lm-header-cta" href="#get-started">Get started <ArrowRight size={14} /></a>
        </div>
        <button className="lm-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
