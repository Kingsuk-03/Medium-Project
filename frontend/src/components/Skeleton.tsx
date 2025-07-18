export const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-center gap-8 w-[30rem]">
      {" "}
      {/* 2x wider */}
      <div>
        <div className="w-96 h-12 bg-slate-400 rounded-md" />{" "}
        {/* w-48 → w-96, h-6 → h-12 */}
        <div className="w-56 h-8 bg-slate-400 mx-auto mt-6 rounded-md" />{" "}
        {/* w-28 → w-56, h-4 → h-8 */}
      </div>
      <div className="h-14 bg-slate-400 w-full rounded-md" />
      <div className="h-14 bg-slate-400 w-full rounded-md" />
      <div className="h-14 bg-slate-400 w-full rounded-md" />
      <div className="h-14 bg-slate-400 w-1/2 rounded-md" />
    </div>
  );
};
