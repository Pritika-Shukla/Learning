import { useBlog } from '../hooks';
import { useParams } from 'react-router-dom';
import FullBlog from '../components/FullBlog';
import Navbar from '../components/Navbar';
import LoadingButton from '../components/LoadingButton';

const Blogs = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || " ",
  });

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className='flex justify-center items-center'>
          <LoadingButton/>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blogs;
