import React from "react";
import { skills, socialLinks } from "../data";
import { ChevronDown } from "lucide-react";

const HomeSection = () => {
  return (
    <header
      id="home"
      className="h-screen flex items-center justify-center relative overflow-visible pt-16"
    >
      <div className="overflow-visible absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full opacity-20 blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-20 blur-[100px] animate-pulse delay-2000"></div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.05,
              }}
            >
              {React.cloneElement(skills.languages[i % skills.languages.length].icon, {
                size: 40 + (i % 3) * 8,
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto pl-4">
        <div className="max-w-6xl mx-auto text-center overflow-visible">
          <h2 className="text-4xl md:text-3xl font-bold mb-4">
            Hi👋🏼, I'm
          </h2>
          <h1 className="text-8xl md:text-8xl font-bold text-yellow-400 mb-6">
            Nikul Suthar
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            ✨ Full Stack Developer crafting exceptional digital experiences
          </p>
          <div className="flex flex-wrap overflow-visible justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 card-gradient rounded-xl hover:scale-110 transition-transform"
                title={link.name}
              >
                {React.cloneElement(link.icon, {
                  className: "text-blue-400",
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
      <a href="#skills" className="p-2 h-fit cursor-pointer">
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-blue-400" />
        </div>
      </a>
    </header>
  );
};

export default HomeSection;