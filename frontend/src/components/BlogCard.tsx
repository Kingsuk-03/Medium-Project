import {Link} from "react-router-dom";
import "remixicon/fonts/remixicon.css";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

// Generate a stable accent color from author name
const accentForAuthor = (name: string) => {
  const palette = ["var(--accent)", "var(--gold)", "#5b7553", "#3d5a80", "#7d4f50"];
  const idx = name.charCodeAt(0) % palette.length;
  return palette[idx];
};

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const readMin = Math.ceil(content.length / 400);
  const accent = accentForAuthor(authorName);

  return (
    <Link to={`/blog/${id}`} className="block group">
      <article className="border-b border-[var(--line)] pb-8 mb-8 cursor-pointer w-full md:w-[650px] lg:w-[780px] card-hover">
        {/* Author meta */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-7 h-7 flex items-center justify-center font-display text-xs text-[var(--paper)] rounded-full"
            style={{background: accent, fontWeight: 600}}>
            {authorName[0].toUpperCase()}
          </div>
          <span className="font-body text-sm text-[var(--ink)]" style={{fontWeight: 500}}>
            {authorName}
          </span>
          <span className="text-[var(--line)]">·</span>
          <span className="text-xs text-[var(--ink-muted)] font-mono tracking-wide">
            {publishedDate}
          </span>
        </div>

        {/* Title + excerpt */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-2xl sm:text-[1.65rem] text-[var(--ink)] leading-[1.15] tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors duration-300" style={{fontWeight: 600}}>
              {title}
            </h2>
            <p className="text-[var(--ink-soft)] text-base leading-relaxed line-clamp-2">
              {content.slice(0, 205) + "..."}
            </p>
          </div>

          {/* Decorative tile thumbnail */}
          <div
            className="hidden sm:flex w-32 h-24 lg:w-36 lg:h-28 flex-shrink-0 rounded-md items-center justify-center relative overflow-hidden border border-[var(--line-soft)]"
            style={{
              background: `linear-gradient(135deg, ${accent}22, var(--paper-warm))`,
            }}>
            <span
              className="font-display text-5xl opacity-40 italic"
              style={{color: accent, fontWeight: 400}}>
              {title[0]}
            </span>
            <div className="absolute bottom-1.5 right-2 font-mono text-[0.6rem] text-[var(--ink-muted)] tracking-wider">
              {String(readMin).padStart(2, "0")}m
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--ink-muted)] tracking-wider">
              <i className="ri-time-line"></i>
              {readMin} min read
            </span>
            <span
              className="hidden sm:inline-flex text-[0.7rem] font-mono uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm border border-[var(--line)] text-[var(--ink-muted)]">
              Essay
            </span>
          </div>
          <div className="flex items-center gap-1 text-[var(--ink-muted)]">
            <button className="p-1.5 hover:text-[var(--ink)] transition-colors" onClick={(e) => e.preventDefault()}>
              <i className="ri-bookmark-line text-lg"></i>
            </button>
            <button className="p-1.5 hover:text-[var(--ink)] transition-colors" onClick={(e) => e.preventDefault()}>
              <i className="ri-share-line text-lg"></i>
            </button>
            <button className="p-1.5 hover:text-[var(--ink)] transition-colors" onClick={(e) => e.preventDefault()}>
              <i className="ri-more-fill text-lg"></i>
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};
