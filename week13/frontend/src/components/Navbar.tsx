import { Avatar } from "./BlogCard";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-3 border-b-2  mb-2">
      <div className="flex gap-2">
        <img src={Logo} alt="" className="h-10 w-10" />
        <p className="font-bold  text-xl mt-1">Medium-Blog</p>
      </div>

      <div>
        <Link to={'/publish'}>
      <button className="mr-4 p-2 px-4 cursor-pointer hover:bg-green-600 bg-green-500 rounded-full text-white font-medium ">Write</button>
      </Link>
        <Avatar name="Pritika" />
      </div>
    </div>
  );
};

export default Navbar;
