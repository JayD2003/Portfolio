import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { useEffect } from "react";
import Footer from "./Components/Footer";


function App() {
  useEffect(() => {
    // Check if the user has selected a theme and apply it
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If the user's OS preference is dark mode, apply dark mode
      document.body.classList.add("dark");
    } else {
      // Default to light mode
      document.body.classList.add("light");
    }
  }, []);


  return (
    <>
      <div className="bg-main px-10 md:px-24 md:py-1 md:ml-20 md:mr-20 border-4 border-mainbr">
        <Router>
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
