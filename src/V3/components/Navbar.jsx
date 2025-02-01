import { useState } from "react";
import nik from "../../assets/nikcodelogo.png";
import { navLinks } from "../data";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="container mx-auto px-4 md:flex justify-center ">
        <div className="bg-[rgba(15,17,21,0.5)] w-full backdrop-blur-lg border border-gray-800 rounded-2xl">
          <div className="flex items-center justify-between h-16 px-4 ">
            <a href="#home" className="text-xl font-bold text-gradient">
              NS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white md:hover:scale-125 lg:hover:scale-100 transition-all"
                >
                  {link.icon}
                  <span className="text-sm md:hidden lg:block">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Profile Icon */}
            <div className="relative hidden md:flex  justify-center items-center">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-10 h-10 rounded-full border-0 border-blue-400 overflow-hidden hover:scale-110 transition-transform"
              >
                <img
                  src={nik}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-14 mt-2 w-64 rounded-xl overflow-hidden animate-slideOut">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-xl">
                    <div className="bg-[#0f1115] rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={nik}
                          alt="Profile"
                          className="w-12 h-12 rounded-full border-2 border-blue-400"
                        />
                        <div>
                          <h3 className="font-semibold text-white">Nikul Suthar</h3>
                          <p className="text-sm text-gray-400">Software Developer</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a href="#about" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-300  hover:bg-gray-700/50  rounded-lg">
                          View Profile
                        </a>
                        <a href="#projects" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-300  hover:bg-gray-700/50  rounded-lg">
                          My Projects
                        </a>
                        <a href="#contact" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-300  hover:bg-gray-700/50  rounded-lg">
                          Contact
                        </a>
                        <a href="./resume_public.pdf" target="_blank" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-300  hover:bg-gray-700/50  rounded-lg">
                          View Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container mx-auto px-4">
          <div className="md:hidden bg-[rgba(15,17,21,0.5)] backdrop-blur-lg border border-gray-800 mt-2 rounded-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
              <a key="resume" href="./resume_public.pdf" target="_blank" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors">
                <Download size={16} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;