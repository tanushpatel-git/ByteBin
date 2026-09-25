import { ArrowRight, Bot, BookOpen, GitBranch, Layers3, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const features: { icon: LucideIcon; title: string; description: string; theme: string }[] = [
  { icon: Bot, title: "AI code companion", description: "Get useful explanations and suggestions right when you need them.", theme: "lime" },
  { icon: GitBranch, title: "GitHub, made clear", description: "Explore repositories, branches, files, and commits in one calm place.", theme: "lavender" },
  { icon: Layers3, title: "Code, organized", description: "Understand project structure and keep changes easy to follow.", theme: "coral" },
  { icon: Workflow, title: "Small tasks, flowing", description: "Move from an idea to a reviewable code update without the busywork.", theme: "lavender" },
  { icon: BookOpen, title: "Learn as you build", description: "Read practical developer stories and take the next step with confidence.", theme: "lime" },
];

export default function Features() {
  return (
    <section className="lm-features lm-shell" id="features">
      <Reveal className="lm-section-heading"><div><span className="lm-sticker">YOUR EVERYDAY TOOLKIT</span><h2>GOOD TOOLS FOR<br/>THE WAY YOU BUILD.</h2></div><p>From repo explorer to code publisher, everything has a place.</p></Reveal>
      <div className="lm-feature-grid">{features.map(({ icon: Icon, title, description, theme }, index) => <Reveal key={title} delay={index * 0.05}><article className={`lm-feature-card lm-card-${theme}`}><span className="lm-feature-icon"><Icon size={21}/></span><h3>{title}</h3><p>{description}</p><a href="#get-started">Learn more <ArrowRight size={13}/></a></article></Reveal>)}</div>
    </section>
  );
}
