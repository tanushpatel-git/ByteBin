"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Code2, GitBranch, Play, Sparkles, Terminal } from "lucide-react";
import LandingButton from "./LandingButton";

const stats = [["04", "Core tools"], ["GitHub", "Repo workflow"], ["AI", "When you need it"], ["1", "Calm workspace"]];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="lm-hero lm-shell" id="home">
      <motion.div className="lm-hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <span className="lm-sticker"><Sparkles size={13} /> YOUR CODE, YOUR WAY</span>
        <h1>MAKE CODE<br />MOVE <span>FASTER.</span></h1>
        <p>From finding your way around a repo to shipping your next big idea, ByteBin gives developers a clearer path from code to done.</p>
        <div className="lm-hero-actions"><LandingButton href="#get-started">Start building free</LandingButton><a className="lm-watch-link" href="#workflow"><span><Play size={13} fill="currentColor" /></span> See how it works</a></div>
        <div className="lm-hero-proof"><div className="lm-proof-dots"><span>TB</span><span>AK</span><span>JR</span><span>+</span></div><p>Made for the people who make things.</p></div>
      </motion.div>

      <motion.div className="lm-hero-art" initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
        <div className="lm-hero-blob" />
        <div className="lm-float-note lm-note-top"><Sparkles size={14} /> a better way to build</div>
        <div className="lm-editor">
          <div className="lm-editor-top"><div className="lm-window-dots"><i /><i /><i /></div><span><Code2 size={13} /> bytebin / tiny-weather-app</span><span className="lm-editor-live"><i /> synced</span></div>
          <div className="lm-editor-body">
            <aside className="lm-editor-sidebar"><div className="lm-sidebar-label">WORKSPACE</div><span className="is-active"><Code2 size={13} /> Overview</span><span><GitBranch size={13} /> Repositories</span><span><Terminal size={13} /> Code updates</span><span><Sparkles size={13} /> AI assistant</span></aside>
            <div className="lm-editor-main">
              <div className="lm-editor-title"><div><small>GOOD AFTERNOON, MAKER</small><strong>Let’s make something useful.</strong></div><span className="lm-avatar">T</span></div>
              <div className="lm-repo-row"><div className="lm-repo-icon"><GitBranch size={15} /></div><div><strong>tiny-weather-app</strong><small>main · updated a moment ago</small></div><span className="lm-branch-pill">● READY</span></div>
              <div className="lm-code-window"><div className="lm-code-title"><span><Code2 size={12} /> forecast.ts</span><span>TypeScript&nbsp;&nbsp; · · ·</span></div><pre><code><span className="lm-ln">01</span> <b>const</b> forecast = <em>await</em> getWeather(city);<br/><span className="lm-ln">02</span> <b>if</b> (forecast.isSunny) &#123;<br/><span className="lm-ln">03</span>   showBanner(<i>&quot;Good day to ship.&quot;</i>);<br/><span className="lm-ln">04</span> &#125;<br/><span className="lm-ln">05</span> <label>{"// little changes add up"}</label></code></pre></div>
              <div className="lm-editor-status"><span><Check size={12} /> All changes saved</span><span>main ↗</span></div>
            </div>
          </div>
              <div className="lm-ai-card"><div className="lm-ai-heading"><span className="lm-ai-icon"><Sparkles size={13} /></span><strong>ByteBin AI</strong><span>✦</span></div><p>Found a simpler way to handle this condition.</p><div className="lm-ai-check"><Check size={12} /> Ready to review</div><span className="lm-ai-apply">Review suggestion <ArrowRight size={13} /></span></div>
        </div>
        <div className="lm-float-note lm-note-bottom">LESS SETUP<br/><b>MORE MAKING</b></div>
      </motion.div>

      <div className="lm-stats">{stats.map(([value, label]) => <div className="lm-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}<a className="lm-scroll-cue" href="#workflow"><ArrowDown size={15} /> Scroll to explore</a></div>
    </section>
  );
}
