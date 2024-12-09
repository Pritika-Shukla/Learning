import Navbar from "./Navbar";

const BlogSkeleton = () => {
  return (
    <div>
     
      <div className="flex justify-center  mb-4 ">
        <div className="flex flex-col w-full max-w-2xl gap-2 p-6 bg-white rounded-lg shadow-md animate-pulse">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-20 ml-auto"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mt-4"></div>
          <div className="border-t border mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
