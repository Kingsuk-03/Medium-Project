interface QuoteProps {
  quote: string;
  author: string;
  company: string;
}

export function Quote({quote, author, company}: QuoteProps) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-400 h-screen w-full flex flex-col justify-center pl-20 pr-60">
      <div className="flex flex-col justify-center">
        <div className="font-bold text-3xl">{quote}</div>
        <div className="font-bold text-xl mt-5">{author}</div>
        <div className="text-slate-700 text-base font-medium">{company}</div>
      </div>
    </div>
  );
}
