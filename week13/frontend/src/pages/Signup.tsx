import Qoute from "../components/Qoute";
import Auth from '../components/Auth';

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="bg-white flex justify-center items-center">
      <Auth type='signup'/>
      </div>
      <div className='hidden lg:block'>
    <Qoute  />
    </div>
    </div>
  );
};

export default Signup;
