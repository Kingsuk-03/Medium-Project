import {AppBar} from "../components/AppBar";
import {SpecificBlog} from "../components/SpecificBlog";
import {useBlog} from "../hook/index2";

export const Blog = () => {
  const {loading, blog} = useBlog();
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <AppBar></AppBar>
      <div>
        {!loading && blog ? (
          <SpecificBlog
            authorName={blog.author.name}
            title={blog.title}
            content={blog?.content}
            publishedDate={new Date().toDateString()}></SpecificBlog>
        ) : (
          <BlogSkeleton />
        )}
      </div>
    </div>
  );
};

const BlogSkeleton = () => (
  <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 lg:pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20">
      <div className="max-w-2xl animate-pulse">
        <div className="h-3 w-32 bg-[var(--line)] rounded-sm mb-6" />
        <div className="h-12 bg-[var(--line)] rounded-md mb-3 w-11/12" />
        <div className="h-12 bg-[var(--line)] rounded-md mb-3 w-3/4" />
        <div className="h-4 w-40 bg-[var(--line-soft)] rounded-sm mb-10" />
        <div className="space-y-3 pt-4">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className={`h-4 bg-[var(--line-soft)] rounded-sm ${i % 3 === 0 ? "w-11/12" : i % 3 === 1 ? "w-full" : "w-4/5"}`} />
          ))}
        </div>
      </div>
      <aside className="animate-pulse hidden lg:block">
        <div className="border border-[var(--line)] rounded-lg p-6 bg-[var(--paper-warm)]">
          <div className="h-3 w-24 bg-[var(--line)] rounded-sm mb-4" />
          <div className="flex gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-[var(--line)]" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-[var(--line)] rounded-sm w-3/4" />
              <div className="h-3 bg-[var(--line-soft)] rounded-sm w-1/2" />
            </div>
          </div>
          <div className="h-3 bg-[var(--line-soft)] rounded-sm w-full mb-2" />
          <div className="h-3 bg-[var(--line-soft)] rounded-sm w-5/6" />
        </div>
      </aside>
    </div>
  </div>
);
