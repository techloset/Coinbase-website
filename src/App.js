
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
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/BlogContent' element={<BlogContent />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
      
     
    </>
  );
}

export default App;
