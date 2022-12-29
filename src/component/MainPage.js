import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Product from "../pages/Products"
import Footer from "./Footer"
import Navbar from "./Navbar"

const MainPage =()=>{
    return(
        <div className="App">
       <Navbar />
      <Routes>
      <Route index element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    )
}
export default MainPage;