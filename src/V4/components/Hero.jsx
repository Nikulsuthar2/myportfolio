import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { socialLinks } from "../data/v4Data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-96px)] flex flex-col justify-center items-center overflow-hidden w-full transition-all text-center select-none scroll-mt-[96px]"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12 w-full">

        {/* Massive Typography Name Title */}
        <div className="space-y-6 flex flex-col items-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-xl lg:text-2xl font-medium tracking-wide text-[#86868b] dark:text-[#a1a1a6] whitespace-nowrap"
          >
            Developer 💻 • Designer 🎨 • Builder 🚀
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl font-semibold tracking-tighter text-[#1d1d1f] dark:text-[#f5f5f7] leading-none"
            style={{ letterSpacing: "-0.04em" }}
          >
            Nikul Suthar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1d1d1f] dark:text-[#f5f5f7] text-lg sm:text-xl md:text-2xl max-w-2xl font-normal leading-relaxed mt-4 px-4"
          >
            Crafting pure, high-performance digital experiences.
          </motion.p>
        </div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1d1d1f] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-[#1d1d1f] dark:text-white bg-[#e8e8ed] dark:bg-[#333336] hover:bg-[#d1d1d6] dark:hover:bg-[#48484a] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Minimal Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 pt-12 w-full"
        >
          {socialLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868b] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white hover:-translate-y-1 transition-all duration-300"
              title={link.name}
            >
              {React.cloneElement(link.icon, { size: 24, strokeWidth: 1.5 })}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
