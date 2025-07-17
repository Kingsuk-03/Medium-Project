import {BlogCard} from "../components/BlogCard";
import {AppBar} from "../components/AppBar";

export const AllBlogs = () => {
  //
  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-7">
        <div className="flex flex-row items-start border-b w-200 border-slate-400 pb-3">
          <i className="ri-add-line text-xl text-gray-600 hover:text-black pr-5 hover:cursor-pointer"></i>
          <div className="font-semibold text-lg pr-5 hover:cursor-pointer">
            For You
          </div>
          <div className="text-lg  text-gray-600 hover:text-black pr-5 hover:cursor-pointer">
            Following
          </div>
        </div>
      </div>
      <div className="flex justify-center m-10">
        <div>
          <BlogCard
            authorName="Kingsuk Bose"
            title="How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
            content="No need to create a fancy and modern website with hundreds of pages to make money online. --- Making money online is the dream for man"
            publishedDate="Dec 3, 2024"></BlogCard>
        </div>
      </div>
    </div>
  );
};
