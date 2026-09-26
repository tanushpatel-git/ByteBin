import { Check, CheckCircle2, Code2, FileCode2, GitPullRequest, Sparkles } from "lucide-react";
import LandingButton from "./LandingButton";
import Reveal from "./Reveal";
import Artwork from "./Artwork";

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
      <Reveal className="lm-review-copy"><span className="lm-sticker lm-sticker-blue">BUILT FOR DEVELOPERS</span><h2>Your code.<br/>Supercharged with AI.</h2><p>Get more done with AI-powered code automation, GitHub integration, and a powerful development environment — all in one place.</p><ul><li><CheckCircle2 size={15}/> Read and understand your GitHub repositories</li><li><CheckCircle2 size={15}/> Make direct changes with AI</li><li><CheckCircle2 size={15}/> Get smart suggestions and error fixes</li><li><CheckCircle2 size={15}/> Manage multiple projects</li></ul><LandingButton href="#get-started" variant="dark">Try it now</LandingButton><Artwork crop="editor" label="Robot working in an AI coding environment" className="lm-review-mascot" /></Reveal>
      <Reveal className="lm-review-visual" delay={0.1}><div className="lm-review-app"><Artwork crop="dashboard" label="ByteBin code analytics panel" className="lm-review-dashboard" /><div className="lm-review-top"><span><FileCode2 size={14}/> Code review</span><span>main.py&nbsp; · &nbsp;Uncommitted changes</span><span>•••</span></div><div className="lm-review-body"><aside><span>FILES</span><b><FileCode2 size={13}/> src/</b><i>calculate.py</i><i>utils.py</i><i>tests.py</i><i>README.md</i></aside><div className="lm-diff"><div className="lm-diff-head"><span><Code2 size={13}/> calculate.py</span><span>+4&nbsp; −1</span></div><div className="lm-diff-code">{lines.map(([num, first, rest])=><p key={num}><span>{num}</span><code>{first}<em>{rest}</em></code></p>)}<p className="lm-diff-add"><span>19</span><code>  return round(total, 2)</code></p></div></div></div><div className="lm-suggestion"><div className="lm-suggestion-title"><span><Sparkles size={14}/> ByteBin suggestion</span><span className="lm-suggestion-close" aria-hidden="true">×</span></div><strong>Consider handling empty input</strong><p>This function returns zero for an empty list. Add a small guard to make the behavior explicit.</p><div className="lm-suggestion-code">if not items: return 0</div><span className="lm-suggestion-apply"><Check size={13}/> Apply suggestion</span></div><div className="lm-review-success"><CheckCircle2 size={14}/> Looks good — you’re in control of every change.</div><div className="lm-review-corner"><GitPullRequest size={15}/> Review first, then push</div></div></Reveal>
    </section>
  );
}
