import {Link} from "react-router-dom";
import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";
import {useState} from "react";

export const AppBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const clearStorage = () => {
    alert("Logged Out Successfully!");
    localStorage.clear();
  };
  return (
    <header className="sticky top-0 z-40 bg-[var(--paper)]/85 backdrop-blur-md border-b border-[var(--line-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="/blogs" className="flex items-center gap-2 group">
              <svg
                className="h-7 w-7 text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors duration-300 -rotate-12 group-hover:rotate-0"
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

            <div className="hidden md:flex items-center gap-1 ml-2">
              <span className="font-mono text-[0.65rem] text-[var(--ink-muted)] tracking-[0.2em] uppercase border-l border-[var(--line)] pl-3">
                Today's Edition
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to={`/writeBlog`}>
              <button
                type="button"
                className="group inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--accent)] font-medium text-sm px-3 py-2 cursor-pointer transition-colors">
                <i className="ri-quill-pen-line text-base"></i>
                <span className="hidden sm:inline">Write</span>
              </button>
            </Link>

            <button className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors p-2 cursor-pointer">
              <i className="ri-search-line text-xl"></i>
            </button>

            <button className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors p-2 cursor-pointer relative">
              <i className="ri-notification-3-line text-xl"></i>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
            </button>

            <div className="relative inline-block">
              <button
                onClick={() => setShowOptions((prev) => !prev)}
                className="block hover:cursor-pointer relative group">
                <img
                  src={avatar}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full border border-[var(--line)] group-hover:border-[var(--ink)] transition-all duration-300"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[var(--accent)] rounded-full border-2 border-[var(--paper)]" />
              </button>

              {showOptions && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowOptions(false)} />
                  <div className="absolute right-0 top-full mt-3 z-50 bg-[var(--paper)] border border-[var(--line)] rounded-lg shadow-2xl shadow-black/10 w-60 overflow-hidden fade-up" style={{animationDuration: '0.2s'}}>
                    <div className="px-4 py-3 border-b border-[var(--line-soft)] bg-[var(--paper-warm)]">
                      <div className="font-display text-base text-[var(--ink)]" style={{fontWeight: 600}}>Reader</div>
                      <div className="text-xs text-[var(--ink-muted)] font-mono tracking-wide">Welcome back</div>
                    </div>
                    <div className="py-1.5">
                      <button type="button" className="w-full px-4 py-2.5 text-left text-sm font-body text-[var(--ink-soft)] hover:bg-[var(--paper-warm)] hover:text-[var(--ink)] transition-colors flex items-center gap-3">
                        <i className="ri-user-line text-base text-[var(--ink-muted)]"></i>
                        Profile
                      </button>
                      <button type="button" className="w-full px-4 py-2.5 text-left text-sm font-body text-[var(--ink-soft)] hover:bg-[var(--paper-warm)] hover:text-[var(--ink)] transition-colors flex items-center gap-3">
                        <i className="ri-bookmark-line text-base text-[var(--ink-muted)]"></i>
                        Saved stories
                      </button>
                      <button type="button" className="w-full px-4 py-2.5 text-left text-sm font-body text-[var(--ink-soft)] hover:bg-[var(--paper-warm)] hover:text-[var(--ink)] transition-colors flex items-center gap-3">
                        <i className="ri-settings-3-line text-base text-[var(--ink-muted)]"></i>
                        Settings
                      </button>
                    </div>
                    <div className="border-t border-[var(--line-soft)]">
                      <Link to={`/`}>
                        <button
                          type="button"
                          onClick={clearStorage}
                          className="w-full px-4 py-2.5 text-left text-sm font-body text-[var(--accent)] hover:bg-[var(--paper-warm)] transition-colors cursor-pointer flex items-center gap-3">
                          <i className="ri-logout-box-r-line text-base"></i>
                          Sign out
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
