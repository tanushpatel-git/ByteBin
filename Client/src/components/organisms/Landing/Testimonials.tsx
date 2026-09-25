import Reveal from "./Reveal";

const quotes = [
  { initials: "01", name: "GET ORIENTED", role: "Repository explorer", quote: "Understand the shape of a project before getting lost in its files." },
  { initials: "02", name: "BUILD WITH AI", role: "Code companion", quote: "Ask a question. Get a suggestion. Stay in charge of what changes." },
  { initials: "03", name: "SHIP A CHANGE", role: "Code updates", quote: "Keep the steps from first edit to finished push feeling manageable." },
];

export default function Testimonials() {
  return (
    <section className="lm-testimonials lm-shell" id="stories">
      <Reveal className="lm-testimonial-heading"><div><span className="lm-sticker">A TOOLKIT FOR MAKERS</span><h2>MADE FOR THE<br/>WAY YOU WORK.</h2><p>Small tools for clear daily progress, from first look to finished change.</p></div></Reveal>
      <div className="lm-quote-grid">{quotes.map((quote,index)=><Reveal delay={index*.07} key={quote.name}><figure className="lm-quote-card"><div className="lm-quote-symbol" aria-hidden="true">“</div><blockquote>{quote.quote}</blockquote><figcaption><span className={`lm-person lm-person-${index}`}>{quote.initials}</span><span><strong>{quote.name}</strong><small>{quote.role}</small></span></figcaption></figure></Reveal>)}</div>
    </section>
  );
}
