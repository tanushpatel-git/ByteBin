import { ArrowRight, Bot, GitBranch, GitPullRequest, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: GitBranch, title: "Connect a repo", description: "Find the repository you need and get oriented fast." },
  { icon: Bot, title: "Understand the code", description: "Ask ByteBin AI to explain, explore, or suggest a change." },
  { icon: GitPullRequest, title: "Make your move", description: "Review the diff, then push your changes with confidence." },
  { icon: Sparkles, title: "Keep growing", description: "Share what you learned and bring the next idea to life." },
];

export default function HowItWorks() {
  return (
    <section className="lm-workflow lm-shell" id="workflow">
      <Reveal className="lm-workflow-intro"><span className="lm-sticker">HOW IT WORKS</span><h2>FROM YOUR CODE<br/>TO BIGGER THINGS.</h2><p>One friendly flow from your first look to the final push.</p><a href="#features">Explore the toolkit <ArrowRight size={14}/></a></Reveal>
      <div className="lm-steps">{steps.map(({ icon: Icon, title, description }, index) => <Reveal className="lm-step-wrap" delay={index * 0.07} key={title}><article className="lm-step"><div className="lm-step-top"><span className="lm-step-num">0{index + 1}</span><span className="lm-step-icon"><Icon size={20}/></span></div><h3>{title}</h3><p>{description}</p><span className="lm-step-arrow"><ArrowRight size={15}/></span></article></Reveal>)}</div>
    </section>
  );
}
