import {useNavigate} from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--paper)]/85 backdrop-blur-md border-b border-[var(--line-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2 group">
                <svg
                  className="h-7 w-7 text-[var(--ink)] group-hover:text-[var(--accent)] transition-all duration-500 -rotate-12 group-hover:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span className="font-display text-2xl tracking-tight text-[var(--ink)]" style={{fontWeight: 600}}>
                  Medium
                </span>
              </a>
              <span className="hidden md:inline-block font-mono text-[0.65rem] text-[var(--ink-muted)] tracking-[0.2em] uppercase border-l border-[var(--line)] pl-4">
                Est. MMXXIV
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-7">
              {["Explore", "Write", "About"].map((label) => (
                <button
                  key={label}
                  //href={`/${label.toLowerCase()}`}
                  onClick={()=> navigate("/signin")}
                  className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors font-medium relative group">
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => navigate("/signin")}
                className="px-3 sm:px-4 py-2 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] font-medium hover:cursor-pointer transition-colors">
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="btn-primary !py-2 !px-4 sm:!px-5 text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero — Editorial masthead style */}
      <section className="relative pt-12 lg:pt-20 pb-20 lg:pb-32 noise overflow-hidden">
        {/* Decorative shapes */}
        <div
          className="absolute top-1/4 -right-32 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{background: "radial-gradient(circle, var(--accent-soft), transparent 70%)", animation: "drift 14s ease-in-out infinite"}}
        />
        <div
          className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{background: "radial-gradient(circle, var(--gold), transparent 70%)", animation: "drift 18s ease-in-out infinite reverse"}}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Top bar — date/issue */}
          <div className="flex items-center justify-between border-b border-[var(--ink)] pb-3 mb-10 lg:mb-16 fade-up">
            <span className="font-mono text-[0.7rem] sm:text-xs tracking-[0.25em] text-[var(--ink)]">
              VOLUME 24 · ISSUE 04
            </span>
            <span className="font-display italic text-base text-[var(--ink-soft)] hidden sm:block">
              Where stories find their voice
            </span>
            <span className="font-mono text-[0.7rem] sm:text-xs tracking-[0.25em] text-[var(--ink)]">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
            </span>
          </div>

          {/* Hero grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end stagger">
            <div className="lg:col-span-8">
              <span className="eyebrow flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                A Home for Thoughtful Writing
              </span>
              <h1 className="display-xl text-[3.5rem] sm:text-7xl lg:text-[7rem] mt-6 mb-8">
                Where great
                <br />
                <span className="italic font-display text-[var(--accent)]" style={{fontWeight: 400}}>stories</span>
                <span className="text-[var(--ink-muted)]"> &mdash;</span>
                <br />
                find a voice.
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-4">
              <p className="font-display text-lg lg:text-xl text-[var(--ink-soft)] leading-[1.5] mb-8 max-w-md" style={{fontWeight: 400}}>
                Join a quiet community of writers and readers who care about
                craft, honesty, and the long sentence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/signup")}
                  className="btn-primary group">
                  Start Writing
                  <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
                </button>
                <button
                  onClick={() => navigate("/signin")}
                  className="btn-ghost group">
                  <i className="ri-book-open-line"></i>
                  New AI Feature
                </button>
              </div>
            </div>
          </div>

          {/* Featured snippet card */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 fade-up" style={{animationDelay: '0.4s'}}>
            <div className="lg:col-span-7 border-t border-[var(--line)] pt-8">
              <span className="eyebrow">Featured Today</span>
              <h2 className="display-md text-3xl sm:text-4xl mt-3 mb-4 text-[var(--ink)]">
                The case for writing slowly &mdash; and what we lose when we don't.
              </h2>
              <p className="text-[var(--ink-soft)] text-base leading-relaxed mb-4 max-w-2xl">
                In an era of infinite scroll and dopamine-engineered feeds, a
                growing number of writers are returning to the long form. They
                argue that depth requires time, and time requires patience.
              </p>
              <div className="flex items-center gap-2.5 text-sm text-[var(--ink-muted)]">
                <span className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--paper)] font-display text-xs" style={{fontWeight: 600}}>
                  M
                </span>
                <span className="text-[var(--ink)] font-medium">Maya Levin</span>
                <span className="text-[var(--line)]">·</span>
                <span className="font-mono text-xs tracking-wider">8 MIN READ</span>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                {n: "01", t: "On the discipline of finishing things", a: "Theo Bauer"},
                {n: "02", t: "What I learned from rewriting a single paragraph 47 times", a: "Aiko Reyes"},
              ].map((s) => (
                <div key={s.n} className="border-t border-[var(--line)] pt-5 cursor-pointer group">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">№ {s.n}</span>
                    <span className="text-xs text-[var(--ink-muted)]">— {s.a}</span>
                  </div>
                  <h3 className="font-display text-xl text-[var(--ink)] leading-snug group-hover:text-[var(--accent)] transition-colors" style={{fontWeight: 600}}>
                    {s.t}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats — editorial figures */}
      <section className="bg-[var(--ink)] text-[var(--paper)] py-16 lg:py-24 relative noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[var(--paper)]/20 pb-3 mb-10">
            <span className="font-mono text-xs tracking-[0.25em] text-[var(--paper)]/70">
              BY THE NUMBERS
            </span>
            <span className="font-display italic text-base text-[var(--paper)]/60 hidden sm:block">
              A growing community
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {n: "2M+", l: "Active Writers", c: "from 142 countries"},
              {n: "50M+", l: "Stories Published", c: "across every topic"},
              {n: "100M+", l: "Monthly Readers", c: "and quietly growing"},
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="font-mono text-xs text-[var(--paper)]/50 tracking-[0.2em] mb-3">
                  № {String(i + 1).padStart(2, "0")}
                </div>
                <div className="display-lg text-6xl lg:text-7xl text-[var(--paper)] mb-2">
                  {s.n}
                </div>
                <div className="font-display text-lg text-[var(--paper)] mb-1" style={{fontWeight: 500}}>
                  {s.l}
                </div>
                <div className="text-sm text-[var(--paper)]/60 italic font-display">
                  &mdash; {s.c}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
            <div className="lg:col-span-4">
              <span className="eyebrow">The Toolkit</span>
              <h2 className="display-md text-4xl lg:text-5xl mt-3">
                Everything you need to tell your <em className="italic text-[var(--accent)]">story</em>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-6">
              <p className="font-display text-lg text-[var(--ink-soft)] leading-relaxed">
                Tools built with restraint &mdash; just enough to help you write
                well, and never so much that they get in the way.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
            {[
              {n: "01", icon: "ri-quill-pen-line", t: "Distraction-free editor", d: "Write with our minimal editor that focuses on your content and creativity, nothing else."},
              {n: "02", icon: "ri-team-line", t: "Engaged community", d: "Connect with readers and writers who share your interests and respect your time."},
              {n: "03", icon: "ri-sparkling-2-fill", t: "AI as collaborator", d: "Unleash your ideas with AI-powered drafting — fast, smart, and never overbearing.", featured: true},
              {n: "04", icon: "ri-book-2-line", t: "Rich formatting", d: "Add images, pull quotes, and interactive elements that make your stories come alive."},
              {n: "05", icon: "ri-compass-3-line", t: "Personalized feed", d: "Discover content tailored to your interests, curated by editors not algorithms."},
              {n: "06", icon: "ri-rocket-2-line", t: "Easy publishing", d: "Publish instantly or schedule your stories for the perfect moment to share."},
            ].map((f) => (
              <div
                key={f.n}
                className={`group p-7 lg:p-9 transition-all duration-500 cursor-default ${
                  f.featured ? "bg-[var(--cream)]" : "bg-[var(--paper)] hover:bg-[var(--paper-warm)]"
                }`}>
                <div className="flex items-start justify-between mb-7">
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center transition-all duration-500 ${
                    f.featured
                      ? "bg-[var(--accent)] text-[var(--paper)] group-hover:scale-110 group-hover:rotate-3"
                      : "bg-[var(--paper-warm)] text-[var(--ink)] border border-[var(--line)] group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:border-[var(--ink)]"
                  }`}>
                    <i className={`${f.icon} text-xl`}></i>
                  </div>
                  <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">
                    № {f.n}
                  </span>
                </div>
                <h3 className="font-display text-xl text-[var(--ink)] mb-3 leading-tight" style={{fontWeight: 600}}>
                  {f.t}
                </h3>
                <p className="text-[var(--ink-soft)] text-sm leading-relaxed">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote section */}
      <section className="py-20 lg:py-28 bg-[var(--cream)] noise relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="font-display text-9xl lg:text-[10rem] text-[var(--accent)] leading-none mb-0 select-none opacity-90">
            &ldquo;
          </div>
          <blockquote className="display-md text-3xl sm:text-4xl lg:text-5xl text-[var(--ink)] leading-[1.15] -mt-12 mb-8 max-w-4xl mx-auto">
            A platform that finally feels like it was made by people who
            actually <em className="italic text-[var(--accent)]">read</em>.
          </blockquote>
          <div className="editorial-divider max-w-xs mx-auto">
            <span className="font-mono text-[0.7rem] tracking-[0.2em]">THE NEW YORKER</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
            <div>
              <span className="eyebrow">Reader Letters</span>
              <h2 className="display-md text-4xl lg:text-5xl mt-3 max-w-xl">
                Loved by writers <em className="italic text-[var(--accent)]">worldwide</em>.
              </h2>
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--ink-muted)]">
              FROM OUR INBOX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {n: "Sarah Johnson", r: "Tech Writer", q: "Medium has transformed how I share my ideas. The community is incredibly supportive and the platform is a joy to use.", c: "var(--accent)"},
              {n: "Michael Chen", r: "Entrepreneur", q: "The AI feature is genuinely useful — it doesn't write for me, it writes with me. That distinction matters.", c: "var(--gold)"},
              {n: "Emily Rodriguez", r: "Creative Writer", q: "I've found my voice as a writer thanks to Medium. The community feedback has been invaluable for my growth.", c: "#5b7553"},
            ].map((t, i) => (
              <div
                key={i}
                className="group bg-[var(--paper)] border border-[var(--line)] p-7 lg:p-8 rounded-md hover:border-[var(--ink)] transition-all duration-500 card-hover">
                <div className="flex items-center gap-1 mb-5 text-[var(--accent)]">
                  {Array.from({length: 5}).map((_, j) => (
                    <i key={j} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
                <p className="font-display text-lg text-[var(--ink-soft)] leading-relaxed mb-7" style={{fontWeight: 400}}>
                  &ldquo;{t.q}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-[var(--line-soft)]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display text-base text-[var(--paper)]"
                    style={{background: t.c, fontWeight: 600}}>
                    {t.n.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div className="font-display text-base text-[var(--ink)]" style={{fontWeight: 600}}>{t.n}</div>
                    <div className="text-xs text-[var(--ink-muted)] font-mono tracking-wider">{t.r.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--ink)] text-[var(--paper)] rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden noise">
            {/* Decorative */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{background: "radial-gradient(circle, var(--accent), transparent 70%)"}}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-[var(--paper)]/60 mb-4 block">
                  AN INVITATION
                </span>
                <h2 className="display-md text-4xl lg:text-5xl mb-5 text-[var(--paper)] leading-tight">
                  Ready to share your <em className="italic text-[var(--accent-soft)]">story</em>?
                </h2>
                <p className="text-[var(--paper)]/70 text-base lg:text-lg max-w-md leading-relaxed">
                  Join thousands of writers who have already discovered the joy
                  of writing on Medium &mdash; on their own terms.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--paper)] text-[var(--ink)] px-7 py-3.5 rounded-full font-medium text-base hover:bg-[var(--accent)] hover:text-[var(--paper)] transition-all duration-300 group">
                  Get started for free
                  <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
                </button>

                <div className="pt-4 border-t border-[var(--paper)]/15">
                  <label className="font-mono text-[0.7rem] text-[var(--paper)]/60 tracking-[0.2em] mb-3 block">
                    OR SUBSCRIBE TO OUR LETTER
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2.5 bg-transparent border border-[var(--paper)]/25 rounded-full text-[var(--paper)] placeholder:text-[var(--paper)]/40 text-sm focus:border-[var(--accent-soft)]"
                    />
                    <button className="px-5 py-2.5 border border-[var(--paper)]/25 hover:border-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)] rounded-full transition-all text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--paper-warm)] border-t border-[var(--line)] py-16 lg:py-20 relative noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg className="h-7 w-7 text-[var(--ink)] -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="font-display text-2xl text-[var(--ink)] tracking-tight" style={{fontWeight: 600}}>Medium</span>
              </div>
              <p className="font-display text-[var(--ink-soft)] text-base leading-relaxed italic max-w-xs" style={{fontWeight: 400}}>
                Where great stories come to life. Quietly, slowly, well.
              </p>
            </div>

            {[
              {h: "Product", l: ["Features", "Pricing", "Mobile App", "Changelog"]},
              {h: "Community", l: ["For Writers", "For Readers", "Help Center", "Forum"]},
              {h: "Company", l: ["About", "Careers", "Contact", "Press"]},
            ].map((col) => (
              <div key={col.h}>
                <h3 className="eyebrow mb-5">{col.h}</h3>
                <ul className="space-y-3">
                  {col.l.map((item) => (
                    <li key={item}>
                      <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors font-body text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--line)] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-[var(--ink-muted)] text-sm font-body">
                © {new Date().getFullYear()} Medium. All rights reserved.
              </p>
              <span className="text-[var(--line)] hidden sm:inline">·</span>
              <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em] hidden sm:inline">
                MADE WITH CARE
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors text-sm">Privacy</a>
              <a href="/terms" className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors text-sm">Terms</a>
              <div className="flex items-center gap-3 ml-2">
                {["twitter-x", "github", "instagram"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] transition-all">
                    <i className={`ri-${s}-line text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
