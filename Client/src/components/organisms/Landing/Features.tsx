import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Artwork, { type ArtworkName } from "./Artwork";

const features: { artwork: ArtworkName; mascot: ArtworkName; title: string; description: string }[] = [
  { artwork: "bolt", mascot: "bot", title: "AI code automation", description: "Let AI read your code, suggest changes, and automate repetitive tasks." },
  { artwork: "github", mascot: "botLaptop", title: "GitHub integration", description: "Connect your repositories and make direct changes with natural language." },
  { artwork: "code", mascot: "botCode", title: "Code repository", description: "Store, manage, and organize your code securely in the cloud." },
  { artwork: "star", mascot: "botRocket", title: "Developer blogs", description: "Write, read, and share knowledge with the developer community." },
  { artwork: "books", mascot: "botHover", title: "Learning & community", description: "Explore tutorials, get inspired, and grow with other developers." },
  { artwork: "brain", mascot: "botLearn", title: "Smart search", description: "Find code, docs, and articles with AI assisted search." },
];

export default function Features() {
  return (
    <section className="lm-features lm-shell" id="features">
      <Reveal className="lm-section-heading"><div><span className="lm-sticker">WHY BYTEBIN?</span><h2>Everything you need<br/>as a developer.</h2><p>From managing your code to leveraging AI, everything is built to help you create more.</p><a className="lm-text-link" href="#ai-review">Explore all features <ArrowRight size={14}/></a></div></Reveal>
      <div className="lm-feature-grid">{features.map(({ artwork, mascot, title, description }, index) => <Reveal key={title} delay={index * 0.05}><article className="lm-feature-card"><span className={`lm-feature-icon lm-feature-icon-${index}`}><Artwork crop={artwork} label={`${title} icon`} /></span><Artwork crop={mascot} label="ByteBin robot mascot" className="lm-feature-mascot" /><ArrowRight className="lm-feature-arrow" size={15}/><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
    </section>
  );
}
