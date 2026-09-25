import { ArrowRight, Clock3 } from "lucide-react";
import Reveal from "./Reveal";

const articles = [
  { category: "BUILD NOTES", title: "A friendlier way to understand an unfamiliar codebase", author: "Alex Carter", date: "Sep 18, 2026", time: "6 min read", theme: "article-code", art: "{ }" },
  { category: "AI & TOOLS", title: "What a useful AI code review should actually do", author: "Mina Patel", date: "Sep 11, 2026", time: "8 min read", theme: "article-ai", art: "✳" },
  { category: "GOOD PRACTICE", title: "Small commits, calmer launches, better weekends", author: "Jordan Lee", date: "Sep 04, 2026", time: "5 min read", theme: "article-ship", art: "↗" },
];

export default function Blog() {
  return (
    <section className="lm-blog lm-shell" id="blog">
      <Reveal className="lm-section-heading"><div><span className="lm-sticker">LEARN & GROW</span><h2>NOTES FROM THE<br/>MAKING OF THINGS.</h2></div><a className="lm-text-link" href="#blog-list">Visit the ByteBin blog <ArrowRight size={15}/></a></Reveal>
      <div className="lm-article-grid" id="blog-list">{articles.map((article, index)=><Reveal delay={index * 0.08} key={article.title}><article className="lm-article-card"><div className={`lm-article-art ${article.theme}`}><span>{article.art}</span><i>{article.category}</i></div><div className="lm-article-content"><span className="lm-article-category">{article.category}</span><h3>{article.title}</h3><div className="lm-article-meta"><span>{article.author} · {article.date}</span><span><Clock3 size={12}/>{article.time}</span></div><div className="lm-article-actions"><span className="lm-article-read-time"><Clock3 size={12}/>{article.time}</span><span className="lm-article-arrow"><ArrowRight size={14}/></span></div></div></article></Reveal>)}</div>
    </section>
  );
}
