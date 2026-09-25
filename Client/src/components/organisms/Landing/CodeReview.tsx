import { Check, CheckCircle2, Code2, FileCode2, GitPullRequest, Sparkles } from "lucide-react";
import LandingButton from "./LandingButton";
import Reveal from "./Reveal";

const lines = [
  ["14", "export async function", " calculateTotal(items) {"],
  ["15", "  const subtotal =", " items.reduce(sumItems, 0);"],
  ["16", "  const discount =", " await getDiscount(items);"],
  ["17", "  return subtotal - discount;", ""],
  ["18", "}", ""],
];

export default function CodeReview() {
  return (
    <section className="lm-review lm-shell" id="ai-review">
      <Reveal className="lm-review-copy"><span className="lm-sticker lm-sticker-blue">AI CODE REVIEW</span><h2>SMARTER CODE.<br/>FEWER GUESSWORKS.</h2><p>Get a second set of eyes on your code. Understand the change before it ships.</p><ul><li><CheckCircle2 size={15}/> Spot bugs and edge cases</li><li><CheckCircle2 size={15}/> Get plain-language explanations</li><li><CheckCircle2 size={15}/> Review every suggestion yourself</li><li><CheckCircle2 size={15}/> Push changes when you’re ready</li></ul><LandingButton href="#get-started" variant="dark">Try it with a repo</LandingButton></Reveal>
      <Reveal className="lm-review-visual" delay={0.1}><div className="lm-review-app"><div className="lm-review-top"><span><FileCode2 size={14}/> Code review</span><span>main.py&nbsp; · &nbsp;Uncommitted changes</span><span>•••</span></div><div className="lm-review-body"><aside><span>FILES</span><b><FileCode2 size={13}/> src/</b><i>calculate.py</i><i>utils.py</i><i>tests.py</i><i>README.md</i></aside><div className="lm-diff"><div className="lm-diff-head"><span><Code2 size={13}/> calculate.py</span><span>+4&nbsp; −1</span></div><div className="lm-diff-code">{lines.map(([num, first, rest])=><p key={num}><span>{num}</span><code>{first}<em>{rest}</em></code></p>)}<p className="lm-diff-add"><span>19</span><code>  return round(total, 2)</code></p></div></div></div><div className="lm-suggestion"><div className="lm-suggestion-title"><span><Sparkles size={14}/> ByteBin suggestion</span><span className="lm-suggestion-close" aria-hidden="true">×</span></div><strong>Consider handling empty input</strong><p>This function returns zero for an empty list. Add a small guard to make the behavior explicit.</p><div className="lm-suggestion-code">if not items: return 0</div><span className="lm-suggestion-apply"><Check size={13}/> Apply suggestion</span></div><div className="lm-review-success"><CheckCircle2 size={14}/> Looks good — you’re in control of every change.</div><div className="lm-review-corner"><GitPullRequest size={15}/> Review first, then push</div></div></Reveal>
    </section>
  );
}
