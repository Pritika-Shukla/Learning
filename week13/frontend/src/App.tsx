import { BrowserRouter, Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<Blogs />}></Route>
        <Route path="/publish" element={<Publish />}></Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
