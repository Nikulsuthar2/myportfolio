import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-24 py-12 border-t border-black/5 dark:border-white/5 bg-transparent select-none">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Availability */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
            Open to new challenges
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
          <span>Copyright &copy; {currentYear} Nikul Suthar. All rights reserved.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
          <span className="hidden sm:inline">Versions</span>
          <a
            href="/v2"
            className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
          >
            V2
          </a>
          <span>•</span>
          <a
            href="/v3"
            className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
          >
            V3
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
