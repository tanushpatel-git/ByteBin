import { Check } from "lucide-react";
import LandingButton from "./LandingButton";
import Reveal from "./Reveal";

const plans = [
  { name: "Free", caption: "A good place to start", monthly: 0, yearly: 0, features: ["1 GitHub repo", "Basic AI help", "Community access"] },
  { name: "Pro", caption: "For your next big idea", monthly: 19, yearly: 15, features: ["Unlimited repos", "Advanced AI assistant", "Code review tools", "Early access"], popular: true },
  { name: "Team", caption: "For building together", monthly: 49, yearly: 39, features: ["Everything in Pro", "Shared workspaces", "Team controls", "Priority support"] },
];

export default function Pricing() {
  return (
    <section className="lm-pricing lm-shell" id="pricing">
      <Reveal className="lm-pricing-intro"><span className="lm-sticker">SIMPLE, CLEAR PRICING</span><h2>ROOM TO GROW.<br/>NO SURPRISES.</h2><p>Start free. Find your rhythm. Upgrade when it helps.</p></Reveal>
      <div className="lm-plan-grid">{plans.map((plan,index)=><Reveal key={plan.name} delay={index*.06}><article className={`lm-plan-card${plan.popular ? " lm-plan-popular" : ""}`}>
        {plan.popular && <span className="lm-popular-tag">MAKER FAVORITE <span>✦</span></span>}
        <h3>{plan.name}</h3><p>{plan.caption}</p><div className="lm-price"><strong>${plan.monthly}</strong><span>/ month</span></div>
        <ul>{plan.features.map((feature)=><li key={feature}><Check size={14}/>{feature}</li>)}</ul>
        <LandingButton href="#get-started" variant={plan.popular ? "lime" : "outline"}>{plan.name === "Team" ? "Talk to us" : "Choose " + plan.name}</LandingButton>
      </article></Reveal>)}</div>
    </section>
  );
}
