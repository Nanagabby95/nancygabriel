
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Home/home";
import Services from "./components/Home/services";
import Certificates from "./components/Home/certificates";
import Projects from "./components/Home/projects";
import Footer from "./components/Home/Footer";
import About from "./components/about/AboutNancy";
import Contact from "./components/contact/contact_nancy";
import ArticFinanceLtd from "./components/projects/artic_finance_ltd";
import FromHome from "./components/projects/from_home";
import Edura from "./components/projects/edura";
import Coinwise from "./components/projects/coinwise";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;

      document.documentElement.classList.toggle("dark", newMode);

      return newMode;
    });
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-linear-to-br from-black via-[#18000d] to-[#831843] text-white"
          : "min-h-screen bg-linear-to-br from-white via-[#fff1f7] to-[#fce7f3] text-gray-900"
      }
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Certificates />
              <Projects />
              <Contact />
            </>
          }
        />

     
        <Route
          path="/about"
          element={<About />}
        />

    
        <Route
          path="/projects/artic_finance_ltd"
          element={<ArticFinanceLtd />}
        />

        <Route
          path="/projects/from_home"
          element={<FromHome />}
        />

        <Route
          path="/projects/edura"
          element={<Edura />}
        />

        <Route
          path="/projects/coinwise"
          element={<Coinwise />}
        />
      </Routes>

      <footer />
    </div>
  );
};

export default App;

