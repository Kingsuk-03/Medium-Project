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
    <div className="w-full pb-5 mb-8">
      <div>
        <div className="flex h-full pr-50 pl-40 pt-10">
          <div className="w-[75%] py-4">
            <div className="text-4xl text-black font-extrabold pb-4 ">{title}</div>
            <div className="pb-3 text-lg font-semibold pl-2 text-slate-600">
              Posted on {publishedDate}
            </div>
            <div className="pl-5 text-lg">{content}</div>
          </div>
          <div className="w-[25%] pt-10 pl-15">
            <div className="text-lg font-medium pb-6">Author</div>
            <div className="flex flex-row">
              <img
                className="w-9 h-9 flex flex-col justify-center rounded-full border-1 border-black mr-4"
                src={avatar}
                alt="Rounded avatar"
              />
              <div className="flex flex-col justify-center mr-1 text-2xl font-bold">
                {authorName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
