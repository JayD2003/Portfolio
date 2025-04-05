import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";


function App() {
  useEffect(() => {
    // Check if the user has selected a theme and apply it
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else{
      // If the user's OS preference is dark mode, apply dark mode
      document.body.classList.add("dark");
    }
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",  // 👈 This makes it scroll smoothly
      });
    }, [pathname]);
  
  
    return null;
  }

  return (
    <>
      <div className="bg-main ml-5 mr-5 px-10 md:px-24 md:py-1 md:ml-20 md:mr-20 border-4 border-mainbr overflow-hidden">
        <Router>
          {/* <ScrollToTop /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects /> } />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
