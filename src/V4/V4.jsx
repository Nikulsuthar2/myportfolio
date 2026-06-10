import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Inner layout that consumes the ThemeContext
const V4Layout = () => {
  const { isDark } = useTheme();

  // Set document tab title dynamically for professional SEO presence
  useEffect(() => {
    document.title = "Nikul Suthar | Developer";
  }, []);

  return (
    <div className="relative min-h-screen w-full transition-colors duration-500 ease-in-out bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] overflow-x-hidden selection:bg-blue-500/30 dark:selection:bg-blue-500/40 font-sans tracking-tight">
      
      {/* Main Structural Content Lobbies */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Responsive, modern layout gaps and alignments */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-12 pt-24 pb-32 space-y-32 sm:space-y-48">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

const V4 = () => {
  return (
    <ThemeProvider>
      <V4Layout />
    </ThemeProvider>
  );
};

export default V4;
