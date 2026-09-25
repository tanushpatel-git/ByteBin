"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const quotes = [
  { initials: "01", name: "GET ORIENTED", role: "Repository explorer", quote: "Understand the shape of a project before getting lost in its files." },
  { initials: "02", name: "BUILD WITH AI", role: "Code companion", quote: "Ask a question. Get a suggestion. Stay in charge of what changes." },
  { initials: "03", name: "SHIP A CHANGE", role: "Code updates", quote: "Keep the steps from first edit to finished push feeling manageable." },
];

export default function Testimonials() {
  const quotesRef = useRef<HTMLDivElement>(null);

  const scrollQuotes = (direction: -1 | 1) => {
    quotesRef.current?.scrollBy({ left: direction * 350, behavior: "smooth" });
  };

  return (
    <section className="lm-testimonials lm-shell" id="stories">
      <Reveal className="lm-testimonial-heading"><div><span className="lm-sticker">A TOOLKIT FOR MAKERS</span><h2>MADE FOR THE<br/>WAY YOU WORK.</h2><p>Small tools for clear daily progress, from first look to finished change.</p><div className="lm-review-controls"><button type="button" aria-label="Previous highlight" onClick={() => scrollQuotes(-1)}><ArrowLeft size={16}/></button><button type="button" aria-label="Next highlight" onClick={() => scrollQuotes(1)}><ArrowRight size={16}/></button></div></div></Reveal>
      <div className="lm-quote-grid" ref={quotesRef}>{quotes.map((quote,index)=><Reveal delay={index*.07} key={quote.name}><figure className="lm-quote-card"><div className="lm-quote-symbol" aria-hidden="true">“</div><blockquote>{quote.quote}</blockquote><figcaption><span className={`lm-person lm-person-${index}`}>{quote.initials}</span><span><strong>{quote.name}</strong><small>{quote.role}</small></span></figcaption></figure></Reveal>)}</div>
    </section>
  );
}
