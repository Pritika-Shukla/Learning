import Auth from '../components/Auth'

import Qoute from '../components/Qoute'

const Signin= () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
    <div className="bg-white flex justify-center items-center">
    <Auth type='signin'/>
    </div>
    <div className='hidden lg:block'>
    <Qoute  />
    </div>
  
  </div>
  )
}

export default Signin
