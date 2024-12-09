import { Link } from 'react-router-dom';

interface BlogCardProps {
  id:number;
  author: string;
  title: string;
  content: string;
  publishDate: string;
}

const BlogCard = ({ id, author, title, content, publishDate }: BlogCardProps) => {
  return (
    
    <div className="flex flex-col w-2/5 gap-2 mt-3">
     <Link to={`/blog/${id}`}>
      <div className="flex items-center gap-2 cursor-pointer ">
        <Avatar name={author}  />
        <p className="font-semibold ">{author}</p>
        <p className="text-xs mt-2">&#128900;</p>
        <p className="font-thin text-slate-500">{publishDate}</p>
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div>{`${content.slice(0, 60)}` + " . . ."}</div>
      <div className="text-slate-500 text-sm font-thin pt-4">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
      </div>
      <div className="border border-b-0 mt-2"></div>
      </Link>
    </div>
   
  );
};

export function Avatar({ name }: { name: string }) {
  const nameParts = name.split(' ');
  const surnameInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : '';
  
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" text-xs font-semibold text-gray-600 dark:text-gray-300">
        {nameParts[0][0]}{surnameInitial}
      </span>
    </div>
  );
}

export default BlogCard;

