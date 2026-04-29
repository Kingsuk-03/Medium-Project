import {BlogCard} from "../components/BlogCard";
import {AppBar} from "../components/AppBar";
import {useBlogs} from "../hook";
import {Skeleton} from "../components/Skeleton";
import {useState} from "react";

const tabs = ["For You", "Following", "Featured", "Latest"];
const topics = [
  "Writing", "Technology", "Design", "Life", "Culture",
  "Productivity", "Philosophy", "Science",
];

export const AllBlogs = () => {
  const {loading, blogs} = useBlogs();
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <AppBar />

      {/* Masthead */}
      <section className="border-b border-[var(--line-soft)] bg-[var(--paper-warm)] noise relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em]">
                  EDITION № {String(new Date().getDate()).padStart(3, '0')}
                </span>
              </div>
              <h1 className="display-lg text-5xl sm:text-6xl text-[var(--ink)] mb-2">
                The <em className="italic text-[var(--accent)]">Daily</em>
              </h1>
              <p className="text-[var(--ink-muted)] text-base max-w-md">
                Hand-picked essays from writers who care about craft.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <button className="btn-ghost !py-2 !px-4 text-xs">
                <i className="ri-filter-3-line"></i> Filter
              </button>
              <button className="btn-ghost !py-2 !px-4 text-xs">
                <i className="ri-sort-desc"></i> Newest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main feed */}
          <div>
            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-[var(--line-soft)] mb-8 overflow-x-auto -mx-2 px-2">
              <button
                className="p-2 mr-2 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors flex-shrink-0"
                aria-label="Add">
                <i className="ri-add-line text-lg"></i>
              </button>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all relative ${
                    activeTab === tab
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}>
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-[-1px] left-3 right-3 h-[2px] bg-[var(--accent)] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="flex justify-center sm:justify-start">
              {loading ? (
                <Skeleton />
              ) : (
                <div className="w-full">
                  {blogs.map((posts) => (
                    <BlogCard
                      key={posts.id}
                      id={posts.id}
                      authorName={posts.author.name}
                      title={posts.title}
                      content={posts.content}
                      publishedDate={new Date().toDateString()}
                    />
                  ))}
                  {blogs.length === 0 && !loading && (
                    <div className="text-center py-20">
                      <div className="font-display italic text-2xl text-[var(--ink-muted)] mb-2">~</div>
                      <p className="text-[var(--ink-muted)]">No stories yet. Be the first to write one.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-10">
              {/* Topics */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="eyebrow">Recommended Topics</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      className="px-3 py-1.5 text-xs border border-[var(--line)] rounded-full text-[var(--ink-soft)] hover:border-[var(--ink)] hover:bg-[var(--paper-warm)] transition-all font-body">
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Staff picks */}
              <div className="border-t border-[var(--line-soft)] pt-8">
                <span className="eyebrow block mb-5">Staff Picks</span>
                <ul className="space-y-5">
                  {[
                    {a: "Maya Levin", t: "The slow death of the long sentence"},
                    {a: "Theo Bauer", t: "On building things that last"},
                    {a: "Aiko Reyes", t: "Why I write at 5am"},
                  ].map((p, i) => (
                    <li key={i} className="cursor-pointer group">
                      <div className="font-mono text-[0.65rem] text-[var(--ink-muted)] tracking-wider mb-1">
                        № {String(i + 1).padStart(2, "0")} · {p.a}
                      </div>
                      <div className="font-display text-base text-[var(--ink)] leading-snug group-hover:text-[var(--accent)] transition-colors" style={{fontWeight: 600}}>
                        {p.t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reading habit */}
              <div className="border-t border-[var(--line-soft)] pt-8">
                <span className="eyebrow block mb-3">Today's Habit</span>
                <p className="font-display text-lg leading-snug text-[var(--ink-soft)] italic" style={{fontWeight: 500}}>
                  "Read one essay before opening any feed."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
