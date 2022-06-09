import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";



function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="portfolio" element={<Portfolio/>}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route
          path="/service/:serviceId"
          element={<Details></Details>}
        ></Route>
      </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
