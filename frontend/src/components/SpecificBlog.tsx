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
  return (
    <div className="w-full pb-5 mb-8 px-4">
      <div className="flex flex-col lg:flex-row lg:pl-35 h-full pt-10 gap-6">
        <div className="lg:w-[75%] w-full py-4">
          <div className="text-3xl sm:text-4xl text-black font-extrabold pb-4">
            {title}
          </div>
          <div className="pb-3 text-base sm:text-lg font-semibold pl-1 text-slate-600">
            Posted on {publishedDate}
          </div>
          <div className="pl-2 sm:pl-5 text-base sm:text-lg">{content}</div>
        </div>
        <div className="lg:w-[25%] w-full pt-6 lg:pt-10">
          <div className="text-lg font-medium pb-4">Author</div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full border border-black mr-4"
              src={avatar}
              alt="Author avatar"
            />
            <div className="text-xl font-bold">{authorName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
