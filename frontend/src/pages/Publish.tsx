import {useEffect, useRef, useState} from "react";
import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";
import {useNavigate} from "react-router-dom";
import {BACKEND_URL} from "../config";
import axios from "axios";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [generating, setGenerating] = useState(false);

  const navigate = useNavigate();
  const publishBlog = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and Content are required to publish!");
      return;
    }
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {title, content},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) {
        setTimeout(() => {
          navigate(`/blog/${res.data.id}`);
        }, 1000);
      }
    } catch (err) {
      console.error("Some Error Occured", err);
    }
  };

  const generateBlog = async () => {
    if (!title || !title.trim()) {
      alert("Write a Title to generate Blog!");
      return;
    }
    try {
      setGenerating(true);
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog/generate-blog`,
        {title},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const GeneratedContent = res.data.content;
      if (res.status === 200) {
        setContent(GeneratedContent);
      }
    } catch (err) {
      console.error("Some Error Occured", err);
    } finally {
      setGenerating(false);
    }
  };

  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const readMin = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <DraftBar publishBlog={publishBlog} wordCount={wordCount} readMin={readMin} />

      <div className="max-w-screen-md mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[var(--accent)]" />
          <span className="eyebrow">New Draft · Untitled</span>
        </div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
          <div className="flex-shrink-0 sm:pt-3">
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] hover:rotate-90 transition-all duration-300"
              aria-label="Add media">
              <i className="ri-add-line text-2xl"></i>
            </button>
          </div>
          <textarea
            rows={1}
            placeholder="Title"
            className="block w-full font-display text-[var(--ink)] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight bg-transparent placeholder:text-[var(--ink-muted)]/40 placeholder:font-display resize-none"
            style={{fontWeight: 600, letterSpacing: '-0.02em'}}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>

        {/* Divider */}
        <div className="ml-0 sm:ml-[4.5rem] mb-8">
          <div className="editorial-divider">
            <span className="font-display italic text-base text-[var(--ink-muted)]">¶</span>
          </div>
        </div>

        {/* Content */}
        <div className="ml-0 sm:ml-[4.5rem] relative">
          <textarea
            ref={contentRef}
            rows={1}
            placeholder="Tell your story..."
            className="block w-full font-display text-[var(--ink-soft)] text-lg sm:text-xl leading-[1.7] bg-transparent placeholder:text-[var(--ink-muted)]/40 placeholder:italic resize-none min-h-[40vh]"
            style={{fontWeight: 400}}
            value={content}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />

          {generating && (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--paper)]/70 backdrop-blur-[2px]">
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" style={{animationDelay: '0s'}}/>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" style={{animationDelay: '0.15s'}}/>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" style={{animationDelay: '0.3s'}}/>
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-[var(--ink-muted)]">
                  COMPOSING...
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Generate AI button - floating bottom */}
        <div className="fixed bottom-6 right-6 z-30">
          <button
            type="button"
            onClick={generateBlog}
            disabled={generating}
            className="group relative inline-flex items-center gap-2 text-[var(--paper)] py-3 px-5 rounded-full cursor-pointer bg-[var(--ink)] hover:bg-[var(--accent)] transition-all duration-300 shadow-lg shadow-black/20 disabled:opacity-50 disabled:cursor-not-allowed">
            <i className="ri-sparkling-2-fill text-base group-hover:rotate-12 transition-transform"></i>
            <span className="font-medium text-sm">Generate with AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface DraftBarProps {
  publishBlog: () => void;
  wordCount: number;
  readMin: number;
}

const DraftBar = ({publishBlog, wordCount, readMin}: DraftBarProps) => {
  return (
    <header className="sticky top-0 z-40 bg-[var(--paper)]/85 backdrop-blur-md border-b border-[var(--line-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <a href="/blogs" className="flex items-center gap-2 group">
              <svg className="h-6 w-6 text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="font-display text-xl tracking-tight text-[var(--ink)]" style={{fontWeight: 600}}>Medium</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 ml-2 pl-4 border-l border-[var(--line)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-[0.2em] uppercase">
                Draft
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-xs text-[var(--ink-muted)] font-mono tracking-wider">
              <span>{wordCount} {wordCount === 1 ? 'WORD' : 'WORDS'}</span>
              <span className="text-[var(--line)]">·</span>
              <span>{readMin} MIN READ</span>
            </div>
            <button
              type="button"
              onClick={publishBlog}
              className="btn-primary !py-2 !px-5 text-sm">
              Publish
              <i className="ri-arrow-right-up-line"></i>
            </button>
            <button className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors p-2 cursor-pointer hidden sm:block">
              <i className="ri-notification-3-line text-xl"></i>
            </button>
            <img
              className="w-9 h-9 rounded-full border border-[var(--line)] hover:border-[var(--ink)] transition-all cursor-pointer"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
