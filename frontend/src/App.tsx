import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "./pages/Landing";
import {Signup} from "./pages/Signup";
import {Signin} from "./pages/Signin";
import {Blog} from "./pages/Blog";
import {Publish} from "./pages/Publish";
import {AllBlogs} from "./pages/AllBlogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/writeBlog" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
