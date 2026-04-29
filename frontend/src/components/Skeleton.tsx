export const Skeleton = () => {
  return (
    <div className="w-full md:w-[650px] lg:w-[780px] space-y-10">
      {[0, 1, 2].map((i) => (
        <div key={i} className="animate-pulse border-b border-[var(--line-soft)] pb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-full bg-[var(--line)]" />
            <div className="w-28 h-3 bg-[var(--line)] rounded-sm" />
            <div className="w-20 h-3 bg-[var(--line-soft)] rounded-sm" />
          </div>
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              <div className="h-7 bg-[var(--line)] rounded-sm mb-3 w-11/12" />
              <div className="h-4 bg-[var(--line-soft)] rounded-sm mb-2 w-full" />
              <div className="h-4 bg-[var(--line-soft)] rounded-sm w-4/5" />
            </div>
            <div className="hidden sm:block w-32 h-24 lg:w-36 lg:h-28 bg-[var(--line-soft)] rounded-md flex-shrink-0" />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="h-3 w-20 bg-[var(--line-soft)] rounded-sm" />
            <div className="h-3 w-24 bg-[var(--line-soft)] rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};
