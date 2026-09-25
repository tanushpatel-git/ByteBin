import { ArrowUpRight, Code2 } from "lucide-react";

const links = [["Home", "#home"], ["Features", "#features"], ["Workflow", "#workflow"], ["Blog", "#blog"], ["Pricing", "#pricing"], ["FAQ", "#faq"]];

export default function Footer() {
  return (
    <footer className="lm-footer lm-shell"><div className="lm-footer-main"><a className="lm-brand" href="#home"><span className="lm-brand-mark"><Code2 size={21}/></span>ByteBin</a><p>Good tools for people who build things.</p><a className="lm-footer-contact" href="mailto:hello@bytebin.dev">Say hello <ArrowUpRight size={14}/></a></div><nav aria-label="Footer navigation">{links.map(([name,href])=><a href={href} key={href}>{name}</a>)}</nav><div className="lm-footer-bottom"><span>© 2026 ByteBin. Made for the makers.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div><a href="#home">Back to top ↑</a></div></footer>
  );
}
