export const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-center gap-8 lg:w-[30rem]">
      <div>
        <div className="w-96 h-12 bg-slate-400 rounded-md" />
        <div className="w-56 h-8 bg-slate-400 mx-auto mt-6 rounded-md" />
      </div>
      <div className="h-14 bg-slate-400 w-full rounded-md" />
      <div className="h-14 bg-slate-400 w-full rounded-md" />
      <div className="h-14 bg-slate-400 w-full rounded-md" />
      <div className="h-14 bg-slate-400 w-1/2 rounded-md" />
    </div>
  );
};
