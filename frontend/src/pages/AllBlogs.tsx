import {BlogCard} from "../components/BlogCard";
import {AppBar} from "../components/AppBar";
import {useBlogs} from "../hook";
import {Skeleton} from "../components/Skeleton";

export const AllBlogs = () => {
  const {loading, blogs} = useBlogs();
  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-7">
        <div className="flex flex-row items-start border-b border-slate-400 pb-3 w-full sm:w-[5000px] md:w-[650px] lg:w-[800px]">
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
        {loading ? (
          <div>
            <Skeleton />
          </div>
        ) : (
          <div>
            {blogs.map((posts) => (
              <BlogCard
                id={posts.id}
                authorName={posts.author.name}
                title={posts.title}
                content={posts.content}
                publishedDate={new Date().toDateString()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
