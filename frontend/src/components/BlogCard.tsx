import {Link} from "react-router-dom";
import avatar from "../assets/51.png";
import "remixicon/fonts/remixicon.css";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b w-200 border-slate-400 pb-5 pr-50 mb-8 cursor-pointer">
        <div>
          <div className="flex flex-row">
            <img
              className="w-7 h-7 flex flex-col justify-center rounded-full border-1 border-black mr-2"
              src={avatar}
              alt="Rounded avatar"
            />
            <div className="flex flex-col justify-center font-medium mr-1">
              {authorName}
            </div>
            <div className="flex flex-col justify-center text-slate-700 text-sm font-medium">
              ⋅ {publishedDate}
            </div>
          </div>
          <div className="font-bold text-xl pt-2">{title}</div>
          <div className="pt-1">{content.slice(0, 164) + "..."}</div>
          <div className="mt-7 pb-1 flex justify-between">
            <div className="text-slate-700 text-base">{`${Math.ceil(
              content.length / 400
            )} min read`}</div>
            <div>
              <i className="ri-bookmark-line text-2xl text-gray-600 hover:text-black pl-2"></i>
              <i className="ri-delete-back-2-line text-2xl text-gray-600 hover:text-black pl-2"></i>
              <i className="ri-more-fill text-2xl pl-2"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
