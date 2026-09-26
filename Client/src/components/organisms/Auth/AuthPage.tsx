"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, Code2, Eye, EyeOff, GitBranch, Mail, UserRound } from "lucide-react";

type AuthMode = "login" | "register";

export default function AuthPage({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const isRegister = mode === "register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      const response = await fetch(isRegister ? "/api/createMe" : "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isRegister ? { name, email, password } : { email, password }),
      });
      const result = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || (isRegister ? "We couldn’t create your account. Please try again." : "Email or password is incorrect."));
      }

      const requestedPath = new URLSearchParams(window.location.search).get("redirect");
      const safePath = requestedPath?.startsWith("/") && !requestedPath.startsWith("//") ? requestedPath : "/dashboard";
      router.replace(safePath);
      router.refresh();
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="auth-page">
      <header className="auth-header">
        <Link className="auth-brand" href="/" aria-label="ByteBin home"><span><Code2 size={19} /></span>ByteBin</Link>
        <Link className="auth-back-link" href="/">Back to website <ArrowRight size={14} /></Link>
      </header>

      <div className="auth-layout">
        <section className="auth-story" aria-label="About ByteBin">
          <span className="auth-eyebrow"><span /> YOUR CODE. YOUR FLOW.</span>
          <h1>{isRegister ? <>Build better,<br />starting today.</> : <>Welcome back<br />to your workspace.</>}</h1>
          <p>{isRegister ? "Bring your repositories, AI tools, and developer community together in one place." : "Pick up where you left off. Your projects and ideas are ready when you are."}</p>
          <div className="auth-illustration"><Image src="/assets/main-image.png" alt="Developer using ByteBin’s AI coding workspace" fill priority sizes="(max-width: 800px) 90vw, 52vw" /></div>
          <div className="auth-story-foot"><span><GitBranch size={15} /> GitHub connected</span><span><Code2 size={15} /> AI-ready workspace</span></div>
        </section>

        <section className="auth-form-panel" aria-labelledby="auth-title">
          <div className="auth-form-heading">
            <span className="auth-form-kicker">{isRegister ? "CREATE YOUR ACCOUNT" : "GOOD TO HAVE YOU BACK"}</span>
            <h2 id="auth-title">{isRegister ? "Create an account" : "Log in to ByteBin"}</h2>
            <p>{isRegister ? "Start building with your developer workspace." : "Enter your details to access your workspace."}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isRegister && <label className="auth-field"><span>Your name</span><span className="auth-input-wrap"><UserRound size={17} /><input autoComplete="name" name="name" placeholder="Alex Morgan" required value={name} onChange={(event) => setName(event.target.value)} /></span></label>}
            <label className="auth-field"><span>Email address</span><span className="auth-input-wrap"><Mail size={17} /><input autoComplete="email" name="email" type="email" placeholder="you@example.com" required value={email} onChange={(event) => setEmail(event.target.value)} /></span></label>
            <label className="auth-field"><span>Password</span><span className="auth-input-wrap"><Code2 size={17} /><input autoComplete={isRegister ? "new-password" : "current-password"} name="password" type={showPassword ? "text" : "password"} placeholder={isRegister ? "At least 8 characters" : "Enter your password"} minLength={8} required value={password} onChange={(event) => setPassword(event.target.value)} /><button className="auth-password-toggle" type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></span></label>
            {!isRegister && <div className="auth-form-options"><a href="mailto:hello@bytebin.dev?subject=Password%20help">Forgot password?</a></div>}
            {error && <p className="auth-error" role="alert">{error}</p>}
            <button className="auth-submit" type="submit" disabled={pending}>{pending ? "Please wait…" : isRegister ? "Create account" : "Log in"}<ArrowRight size={16} /></button>
          </form>

          <p className="auth-switch">{isRegister ? "Already have an account?" : "New to ByteBin?"} <Link href={isRegister ? "/login" : "/register"}>{isRegister ? "Log in" : "Create an account"}</Link></p>
          <p className="auth-terms">By continuing, you agree to our <Link href="/#terms">Terms</Link> and <Link href="/#privacy">Privacy Policy</Link>.</p>
        </section>
      </div>
      <footer className="auth-footer"><span>© 2026 ByteBin</span><span>Build smarter. Code together.</span></footer>
    </main>
  );
}
