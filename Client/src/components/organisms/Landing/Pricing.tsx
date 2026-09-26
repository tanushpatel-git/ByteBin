"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import LandingButton from "./LandingButton";
import Reveal from "./Reveal";
import Artwork from "./Artwork";

const plans = [
  { name: "Free", caption: "A good place to start", monthly: 0, yearly: 0, features: ["1 GitHub repo", "Basic AI help", "Community access"] },
  { name: "Pro", caption: "For your next big idea", monthly: 19, yearly: 15, features: ["Unlimited repos", "Advanced AI assistant", "Code review tools", "Early access"], popular: true },
  { name: "Team", caption: "For building together", monthly: 49, yearly: 39, features: ["Everything in Pro", "Shared workspaces", "Team controls", "Priority support"] },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="lm-pricing lm-shell" id="pricing">
      <Reveal className="lm-pricing-intro"><span className="lm-sticker">SIMPLE & TRANSPARENT PRICING</span><h2>Flexible plans for<br/>every developer.</h2><p>Choose the plan that fits your workflow — from solo developers to growing teams.</p><div className="lm-billing" role="group" aria-label="Billing period"><button type="button" aria-pressed={!yearly} className={!yearly ? "is-selected" : ""} onClick={() => setYearly(false)}>Monthly</button><button type="button" aria-pressed={yearly} className={yearly ? "is-selected" : ""} onClick={() => setYearly(true)}>Yearly <span>Save 20%</span></button></div></Reveal>
      <div className="lm-plan-grid">{plans.map((plan,index)=><Reveal key={plan.name} delay={index*.06}><article className={`lm-plan-card${plan.popular ? " lm-plan-popular" : ""}`}>
        {plan.popular && <span className="lm-popular-tag">MAKER FAVORITE <span>✦</span></span>}
        <h3>{plan.name}</h3><p>{plan.caption}</p><div className="lm-price"><strong>${yearly ? plan.yearly : plan.monthly}</strong><span>/ month</span></div>{yearly && plan.monthly > 0 && <small className="lm-billed-yearly">Billed yearly</small>}
        <ul>{plan.features.map((feature)=><li key={feature}><Check size={14}/>{feature}</li>)}</ul>
        <Artwork crop={plan.name === "Free" ? "bot" : plan.name === "Pro" ? "botLaptop" : "botCode"} className="lm-plan-art" />
        <LandingButton href={plan.name === "Team" ? "mailto:hello@bytebin.dev?subject=ByteBin%20Team%20plan" : "/register"} variant={plan.popular ? "lime" : "outline"}>{plan.name === "Team" ? "Talk to us" : "Choose " + plan.name}</LandingButton>
      </article></Reveal>)}</div>
    </section>
  );
}
