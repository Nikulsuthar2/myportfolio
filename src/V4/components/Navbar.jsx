import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { navLinks } from "../data/v4Data";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for active tab
  useEffect(() => {
    const handleScroll = () => {
      // Use 1/3 of the viewport height as the trigger line.
      // This ensures that when you click a link and jump to a section, 
      // the new section easily crosses this line and becomes active immediately.
      const scrollPosition = window.scrollY + (window.innerHeight / 3);
      const sections = ["home", "projects", "experience", "skills", "about", "contact"];

      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially to set the correct active tab on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[48px] bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[980px] mx-auto px-4 h-full flex items-center justify-between text-xs font-medium">
          
          {/* Logo/Brand */}
          <a 
            href="#home" 
            className="hover:opacity-70 transition-opacity flex items-center"
          >
            <img src="/nikcode.svg" alt="Nikcode" className="h-5 dark:invert" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const hrefId = link.href.replace("#", "");
              const isActive = activeSection === hrefId || (activeSection === "home" && hrefId === "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <span className="relative z-10 text-[#1d1d1f] dark:text-[#f5f5f7]">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-[#1d1d1f] dark:text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#1d1d1f] dark:text-[#f5f5f7] opacity-80 hover:opacity-100 flex items-center justify-center"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Full Screen Mobile Menu overlay (Apple style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[48px] z-40 bg-[#f5f5f7] dark:bg-[#1d1d1f] flex flex-col px-8 pt-8"
          >
            <div className="flex flex-col gap-6 text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-black/5 dark:border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="./resume_public.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-blue-500 mt-4 text-xl"
              >
                <span>Resume</span>
                <Download size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
