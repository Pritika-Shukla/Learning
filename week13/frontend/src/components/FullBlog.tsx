import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="grid grid-cols-12 px-10 w-screen mt-10">
      <div className="col-span-8  px-10">
        <p className="text-4xl font-bold leading-1">{blog.title}</p>
        <p className="font-medium text-base pt-4 text-gray-500">
          Posted on August 24, 2023
        </p>
        <div className="text-lg text-gray-700 leading-normal mt-6">
          {blog.content}
        </div>
      </div>
      <div className="col-span-4 ">
        <p className="font-medium text-lg mb-6">Author</p>
        <div className="flex gap-4 "> 
            <Avatar name={blog.author.username}   />
          <p className="text-2xl font-bold ">{blog.author.username}</p>
        </div>
        <p className=" mt-4 text-gray-500 font-medium ">
          Don't let your Monday throw a 'NullPointerException' at you! Read on,
          and let's refactor your day from 'meh' to 'yay' with some code-worthy
          laughs. 😉💻
        </p>
      </div>
    </div>
  );
};

export default FullBlog;
