import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";

interface SpecificBlogProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const SpecificBlog = ({
  authorName,
  title,
  content,
  publishedDate,
}: SpecificBlogProps) => {
  const readMin = Math.ceil(content.length / 400);

  return (
    <article className="w-full pb-20 fade-up">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20">
          {/* Article body */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[var(--accent)]" />
              <span className="eyebrow">Featured Essay</span>
              <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">
                · {readMin} MIN READ
              </span>
            </div>

            {/* Title */}
            <h1 className="display-lg text-[2.5rem] sm:text-5xl lg:text-[3.5rem] text-[var(--ink)] mb-6">
              {title}
            </h1>

            {/* Date */}
            <div className="flex items-center gap-3 mb-10 pb-10 border-b border-[var(--line-soft)]">
              <span className="text-sm text-[var(--ink-muted)] font-body">
                Published {publishedDate}
              </span>
            </div>

            {/* Content */}
            <div
              className="font-display text-[1.2rem] sm:text-[1.3rem] leading-[1.7] text-[var(--ink-soft)] whitespace-pre-line drop-cap"
              style={{fontWeight: 400, fontVariationSettings: '"opsz" 14'}}>
              {content}
            </div>

            {/* End mark */}
            <div className="mt-16 flex items-center justify-center gap-3 text-[var(--ink-muted)]">
              <div className="w-12 h-px bg-[var(--line)]" />
              <span className="font-display italic text-2xl">~</span>
              <div className="w-12 h-px bg-[var(--line)]" />
            </div>

            {/* Action bar */}
            <div className="mt-10 flex items-center justify-between py-5 border-y border-[var(--line-soft)]">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors px-3 py-2 rounded-full hover:bg-[var(--paper-warm)]">
                  <i className="ri-heart-line text-lg"></i>
                  <span className="font-mono text-xs tracking-wider">128</span>
                </button>
                <button className="flex items-center gap-1.5 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors px-3 py-2 rounded-full hover:bg-[var(--paper-warm)]">
                  <i className="ri-chat-3-line text-lg"></i>
                  <span className="font-mono text-xs tracking-wider">12</span>
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button className="text-[var(--ink-soft)] hover:text-[var(--ink)] p-2 transition-colors">
                  <i className="ri-bookmark-line text-lg"></i>
                </button>
                <button className="text-[var(--ink-soft)] hover:text-[var(--ink)] p-2 transition-colors">
                  <i className="ri-share-forward-line text-lg"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="border border-[var(--line)] rounded-lg p-6 bg-[var(--paper-warm)] noise relative">
              <span className="eyebrow block mb-4">About the author</span>
              <div className="flex items-start gap-3 mb-4">
                <img
                  className="w-14 h-14 rounded-full border border-[var(--line)]"
                  src={avatar}
                  alt={authorName}
                />
                <div>
                  <div className="font-display text-lg text-[var(--ink)] leading-tight" style={{fontWeight: 600}}>
                    {authorName}
                  </div>
                  <div className="text-xs text-[var(--ink-muted)] font-mono tracking-wider mt-1">
                    WRITER · {Math.floor(Math.random() * 50) + 10} STORIES
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                Crafting words on technology, life, and the small moments that
                make a story worth telling.
              </p>
              <button className="w-full text-sm font-medium border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors py-2 rounded-full">
                Follow
              </button>
            </div>

            <div className="mt-6 px-2">
              <div className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em] mb-3">
                MORE FROM THIS WRITER
              </div>
              <ul className="space-y-3">
                {["A Field Guide to Quiet Mornings", "On Slowness", "Letters to a Younger Self"].map((t) => (
                  <li key={t} className="font-display text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] cursor-pointer transition-colors leading-snug" style={{fontWeight: 500}}>
                    → {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
