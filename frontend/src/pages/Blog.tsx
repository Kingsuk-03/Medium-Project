import {AppBar} from "../components/AppBar";
import {Skeleton} from "../components/skeleton";
import {SpecificBlog} from "../components/SpecificBlog";
import {useBlog} from "../hook/index2";

export const Blog = () => {
  const {loading, blog} = useBlog();
  return (
    <div>
      <AppBar></AppBar>
      <div>
        {!loading && blog ? (
          <div>
            <SpecificBlog
              authorName={blog.author.name}
              title={blog.title}
              content={blog?.content}
              publishedDate={new Date().toDateString()}></SpecificBlog>
          </div>
        ) : (
          <div className="flex justify-center p-10">
            <Skeleton />
          </div>
        )}
      </div>
    </div>
  );
};
