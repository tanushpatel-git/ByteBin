import { ArrowUpRight, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="lm-footer lm-shell">
      <div className="lm-footer-columns">
        <div className="lm-footer-brand"><a className="lm-brand" href="#home"><span className="lm-brand-mark"><Code2 size={21}/></span>ByteBin</a><p>Build smarter. Code together.</p><div className="lm-social-links"><a href="https://github.com" aria-label="GitHub"><Code2 size={15}/></a><a href="https://linkedin.com" aria-label="LinkedIn"><span>in</span></a><a href="https://youtube.com" aria-label="YouTube"><span>▶</span></a></div></div>
        <div><strong>Product</strong><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#ai-review">Integrations</a><a href="#ai-review">Changelog</a></div>
        <div><strong>Resources</strong><a href="#blog">Blog</a><a href="#ai-review">Docs</a><a href="#blog">Tutorials</a><a href="#get-started">Community</a></div>
        <div><strong>Company</strong><a href="#home">About us</a><a href="mailto:hello@bytebin.dev">Careers</a><a href="mailto:hello@bytebin.dev">Contact</a><a href="#faq">Privacy</a></div>
        <div className="lm-footer-subscribe"><strong>Stay in the loop</strong><p>Get the latest updates, resources and tips.</p><a href="mailto:hello@bytebin.dev">Subscribe by email <ArrowUpRight size={13}/></a></div>
      </div>
      <div className="lm-footer-bottom"><span>© 2026 ByteBin. All rights reserved.</span><span>Made with ♥ for developers.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
