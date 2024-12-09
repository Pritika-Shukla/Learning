import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import Navbar from "../components/Navbar";
import { useBlogs } from "../hooks";

const Blog = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>
    <Navbar/>
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
       <BlogSkeleton /> <BlogSkeleton />
       <BlogSkeleton />
       <BlogSkeleton /> <BlogSkeleton />
    </div>
    
  }
  return (
    <div>
      <Navbar />

      <div className="flex justify-center w-screen mx-auto  flex-col items-center">
        {blogs.map(
          (blog: {
            id: number;
            author: { username: string };
            title: string;
            content: string;
          }) => (
            <BlogCard
              id={blog.id}
              author={blog.author.username || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishDate="2nd December 2016"
            />
          )
        )}
      </div> 
    </div>
  );
};

export default Blog;
