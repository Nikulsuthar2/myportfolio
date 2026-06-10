import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { education, certificates } from "../data/v4Data";
import { GraduationCap, Building, Calendar, BookOpen, ChevronRight, Award, X, ExternalLink, Heart, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import myPhoto from "@/assets/MyPhoto/profile3.png";

const About = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [activeZoomImage, setActiveZoomImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (isCertModalOpen || activeZoomImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCertModalOpen, activeZoomImage]);

  const filteredCerts = certificates.filter(cert => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Accenture") return cert.organization === "Accenture";
    if (activeFilter === "IBM") return cert.organization.includes("IBM");
    if (activeFilter === "Coursera") return cert.organization === "Coursera";
    if (activeFilter === "Other") return cert.organization === "FreeCodeCamp";
    return true;
  });

  return (
    <section id="about" className="scroll-mt-32 w-full">

      {/* Title Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          About Me.
        </h2>
        <p className="text-lg sm:text-xl text-[#86868b] dark:text-[#a1a1a6] font-medium leading-relaxed">
          The story behind the screen.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-24 w-full">

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Portrait */}
          <div className="w-full aspect-[4/5] bg-white dark:bg-[#1d1d1f] rounded-[32px] overflow-hidden border border-black/5 dark:border-white/5">
            <img
              src={myPhoto}
              alt="Nikul Suthar portrait"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Narrative */}
          <div className="space-y-8 text-left">
            <h3 className="text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
              Hello. I'm Nikul.
            </h3>
            <div className="space-y-6 text-[#1d1d1f] dark:text-[#f5f5f7] text-lg leading-relaxed font-normal">
              <p>
                I am a passionate software engineer and digital builder. I primarily build full-stack web applications, custom tools, and offline-first mobile systems using modern frameworks. I have a deep drive to solve real-world problems and create things that feel fully refined, complete, and robust.
              </p>
              <p>
                Apart from writing code, my interests span video editing, 3D digital art modeling, and creative audio track engineering. This unique creative background allows me to bring absolute visual precision, premium styling, and robust user psychology into every digital interface I architect.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#86868b] dark:text-[#a1a1a6] uppercase tracking-wider">Based In</p>
                <p className="text-base font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Rajasthan, India</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#86868b] dark:text-[#a1a1a6] uppercase tracking-wider">Contact</p>
                <a href="mailto:nikulsuthar.dev@gmail.com" className="text-base font-medium text-blue-500 hover:underline block">
                  nikulsuthar.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-black/5 dark:border-white/5">
              <button
                onClick={() => setIsCertModalOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1d1d1f] hover:scale-105 transition-transform"
              >
                <Award size={20} />
                <span>View Credentials & Certificates</span>
              </button>
            </div>

          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8 pb-24">
          <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] text-center">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-6 bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 rounded-3xl transition-all"
              >
                <div className="w-16 h-16 rounded-[16px] overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src={edu.logo} alt={edu.university} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-1 text-left flex-grow">
                  <h4 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
                    {edu.college || edu.university}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-[#333336] px-2 py-1 rounded-md">
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-[#333336] px-2 py-1 rounded-md">
                      CGPA: {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Credentials Modal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isCertModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCertModalOpen(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-md"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ y: "100%", sm: { y: 20, scale: 0.95 }, opacity: 0 }}
                animate={{ y: 0, sm: { y: 0, scale: 1 }, opacity: 1 }}
                exit={{ y: "100%", sm: { y: 20, scale: 0.95 }, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-5xl bg-white dark:bg-[#1d1d1f] rounded-[24px] sm:rounded-[32px] flex flex-col h-[90vh] overflow-hidden z-10 border border-black/5 dark:border-white/10"
              >

                {/* Header */}
                <div className="sticky top-0 bg-white/90 dark:bg-[#1d1d1f]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 h-20 px-8 flex items-center justify-between z-20 shrink-0">
                  <div className="flex items-center gap-3">
                    <Award className="text-[#1d1d1f] dark:text-[#f5f5f7]" size={24} />
                    <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                      Credentials
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsCertModalOpen(false)}
                    className="p-2 rounded-full bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-white hover:scale-105 transition-transform"
                    aria-label="Close details"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto w-full">
                  <div className="mx-auto p-6 sm:p-10 lg:p-12 space-y-8">

                    <div className="flex flex-wrap justify-center gap-2 pb-4">
                      {["All", "Accenture", "IBM", "Coursera", "Other"].map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveFilter(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                            ${activeFilter === category
                              ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1d1d1f]"
                              : "bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#e8e8ed] dark:hover:bg-[#333336]"}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCerts.map((cert) => (
                        <motion.div
                          key={cert.id || cert.name}
                          whileHover={{ scale: 1.02 }}
                          className="group p-4 rounded-3xl bg-[#f5f5f7] dark:bg-[#000000] border border-black/5 dark:border-white/5 transition-all flex flex-col gap-4"
                        >
                          <div
                            onClick={() => setActiveZoomImage(cert.image)}
                            className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-white dark:bg-[#1d1d1f] cursor-zoom-in"
                          >
                            <img src={cert.image} alt={cert.name} className="w-full h-full object-contain p-2 transition-transform group-hover:scale-105" />
                          </div>

                          <div className="space-y-1 text-left px-2 flex-grow">
                            <h4 className="font-semibold text-base text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                              {cert.name}
                            </h4>
                            <p className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
                              {cert.organization} • {cert.issueDate}
                            </p>
                          </div>

                          {cert.link && (
                            <div className="px-2 pb-2">
                              <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-medium bg-white dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] hover:scale-105 transition-transform"
                              >
                                View Credential
                              </a>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Zoom Modal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {activeZoomImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveZoomImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[10000] flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[90vh] rounded-[32px] overflow-hidden"
              >
                <img
                  src={activeZoomImage}
                  alt="Enlarged Credential"
                  className="w-full h-auto max-h-[90vh] object-contain bg-[#f5f5f7] dark:bg-[#1d1d1f]"
                />
                <button
                  onClick={() => setActiveZoomImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
};

export default About;
