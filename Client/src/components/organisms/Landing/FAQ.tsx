import { ArrowRight, Plus } from "lucide-react";
import Reveal from "./Reveal";

const questions = [
  ["What is ByteBin?", "ByteBin is a friendly workspace for exploring GitHub repositories, understanding code, and making small code updates."],
  ["Do I need to connect GitHub?", "You can explore the public experience first. Connecting GitHub lets ByteBin work with your repositories and changes."],
  ["Does ByteBin change my code automatically?", "No. AI suggestions are there to review. You stay in control and choose what to apply or publish."],
  ["Can I use ByteBin with a team?", "ByteBin is being built around individual makers and teams. Team tools can be enabled from the Team plan."],
  ["Can I start for free?", "Yes. The Free plan gives you a place to begin, with no payment details required to explore the basics."],
];

export default function FAQ() {
  return (
    <section className="lm-faq lm-shell" id="faq">
      <Reveal className="lm-faq-intro"><span className="lm-sticker lm-sticker-blue">GOOD QUESTIONS</span><h2>THE SHORT<br/>ANSWERS.</h2><p>Still curious? We’re happy to help you find your way.</p><a href="mailto:hello@bytebin.dev">Talk to a human <ArrowRight size={14}/></a></Reveal>
      <div className="lm-faq-list">{questions.map(([question,answer],index)=><Reveal delay={index*.035} key={question}><details className="lm-faq-item"><summary><span><i>0{index+1}</i>{question}</span><Plus size={17}/></summary><p>{answer}</p></details></Reveal>)}</div>
      <aside className="lm-faq-aside"><strong>Still have a question?</strong><br/>We’re around to help you get started.<a href="mailto:hello@bytebin.dev">Contact support <ArrowRight size={13}/></a></aside>
    </section>
  );
}
