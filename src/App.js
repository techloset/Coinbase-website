
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landingpage from "./component/Landingpage/Landingpage";
import About from './component/Aboutpage/About'
import Blog from "./component/Blogpage/Blog";
import Contact from "./component/Contactpage/Contact";
import BlogContent from './component/Blogpage/BlogContent'
function App() {
  return (
    <>
  
<BrowserRouter>

      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-Content' element={<BlogContent />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
      
     
    </>
  );
}

export default App;
