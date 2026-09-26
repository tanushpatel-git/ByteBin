import LandingButton from "./LandingButton";
import Reveal from "./Reveal";
import Artwork from "./Artwork";

export default function CallToAction() {
  return (
    <Reveal className="lm-cta-wrap" delay={0.04}>
      <section className="lm-cta lm-shell" id="get-started"><div className="lm-cta-spark"><Artwork crop="mascot" label="ByteBin robot ready to build" /></div><div className="lm-cta-copy"><span>BUILT FOR DEVELOPERS</span><h2>Join the ByteBin community</h2><p>Share projects, read awesome blogs, get help, and grow with other developers.</p></div><LandingButton href="/register" variant="dark">Join community</LandingButton><Artwork crop="globe" className="lm-cta-globe" /><div className="lm-cta-doodle" aria-hidden="true">✳</div></section>
    </Reveal>
  );
}
