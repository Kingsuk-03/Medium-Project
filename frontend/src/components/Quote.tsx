interface QuoteProps {
  quote: string;
  author: string;
  company: string;
}

export function Quote({quote, author, company}: QuoteProps) {
  return (
    <div className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[var(--cream)] noise">
      {/* Decorative ink-blot shapes */}
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
        style={{background: "radial-gradient(circle, var(--accent-soft), transparent 70%)", animation: "drift 12s ease-in-out infinite"}}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[32rem] h-[32rem] rounded-full opacity-25 blur-3xl"
        style={{background: "radial-gradient(circle, var(--gold), transparent 70%)", animation: "drift 16s ease-in-out infinite reverse"}}
      />

      {/* Top label */}
      <div className="relative z-10 px-12 lg:px-16 pt-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[var(--ink)]" />
          <span className="eyebrow">Vol. 24 — Issue 04</span>
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-10 px-12 lg:px-16 pr-12 lg:pr-24">
        <div className="text-[8rem] leading-none font-display text-[var(--accent)] mb-2 select-none" style={{fontVariationSettings: '"opsz" 144'}}>
          &ldquo;
        </div>
        <blockquote className="display-md text-[2rem] sm:text-[2.4rem] text-[var(--ink)] leading-[1.15] mb-10 -mt-12 max-w-2xl">
          {quote}
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center font-display text-xl">
            {author[0]}
          </div>
          <div>
            <div className="font-display text-xl text-[var(--ink)] tracking-tight" style={{fontWeight: 600}}>
              {author}
            </div>
            <div className="text-sm text-[var(--ink-muted)] font-body">
              {company}
            </div>
          </div>
        </div>
      </div>

      {/* Footer mark */}
      <div className="relative z-10 px-12 lg:px-16 pb-12 flex items-end justify-between">
        <div className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">
          MEDIUM · EST. MMXXIV
        </div>
        <div className="font-display italic text-2xl text-[var(--ink-muted)]">
          ~
        </div>
      </div>
    </div>
  );
}
