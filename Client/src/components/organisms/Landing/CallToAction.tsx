import { Sparkles } from "lucide-react";
import LandingButton from "./LandingButton";
import Reveal from "./Reveal";

export default function CallToAction() {
  return (
    <Reveal className="lm-cta-wrap" delay={0.04}>
      <section className="lm-cta lm-shell" id="get-started"><div className="lm-cta-spark"><Sparkles size={38}/></div><div className="lm-cta-copy"><span>YOUR NEXT IDEA IS WAITING</span><h2>READY TO MAKE<br/>SOMETHING REAL?</h2><p>Build better, one little step at a time.</p></div><LandingButton href="mailto:hello@bytebin.dev" variant="dark">Get started with ByteBin</LandingButton><div className="lm-cta-doodle" aria-hidden="true">✳</div></section>
    </Reveal>
  );
}
