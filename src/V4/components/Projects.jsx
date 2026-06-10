import React, { useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "../data/v4Data";
import { Github, ExternalLink, Youtube, X, ArrowLeft, ArrowRight, Package, Copy, Check, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextScreenshot = (screenshotsCount) => {
    setActiveSlide((prev) => (prev === screenshotsCount - 1 ? 0 : prev + 1));
  };

  const prevScreenshot = (screenshotsCount) => {
    setActiveSlide((prev) => (prev === 0 ? screenshotsCount - 1 : prev - 1));
  };

  return (
    <section id="projects" className="scroll-mt-32 w-full text-left space-y-16 pb-24">

      {/* Title Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Selected Work.
        </h2>
        <p className="text-lg sm:text-xl text-[#86868b] dark:text-[#a1a1a6] font-medium leading-relaxed">
          A collection of platforms, tools, and developer utilities engineered with precision.
        </p>
      </div>

      {/* Grid Layout (Better for Portfolios) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group flex flex-col h-full rounded-[32px] bg-white dark:bg-[#1d1d1f] transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-black/5 dark:border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Screenshot Frame (Edge to Edge) */}
            <div
              className="relative w-full aspect-[4/3] bg-[#f5f5f7] dark:bg-[#000000] overflow-hidden cursor-pointer"
              onClick={() => openProjectDetails(project)}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#e5e5ea] dark:bg-[#1d1d1f] text-[#86868b] dark:text-[#a1a1a6] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
                  <ImageIcon size={48} className="mb-3 opacity-30" />
                  <span className="text-sm font-medium tracking-wide uppercase">Screenshot Pending</span>
                </div>
              )}
              {project.status === "WIP" && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-amber-400 text-amber-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                  Work in Progress
                </div>
              )}
            </div>

            {/* Content summary */}
            <div className="p-8 space-y-6 flex flex-col justify-between flex-grow">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {project.title}
                </h3>
                <p className="text-[#86868b] dark:text-[#a1a1a6] text-lg leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Minimal Tech List */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-[#333336] px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs font-medium text-[#86868b] dark:text-[#a1a1a6] px-3 py-1.5">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => openProjectDetails(project)}
                  className="flex-1 min-w-[120px] flex justify-center items-center py-3 rounded-full text-sm font-medium bg-[#1d1d1f] text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] hover:scale-105 transition-transform"
                >
                  Show Details
                </button>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex justify-center items-center gap-2 py-3 rounded-full text-sm font-medium border border-black/10 dark:border-white/10 text-[#1d1d1f] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105 transition-transform"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {project.npmUrl && (
                  <a
                    href={project.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex justify-center items-center gap-2 py-3 rounded-full text-sm font-medium bg-[#cb3837]/10 text-[#cb3837] border border-[#cb3837]/20 hover:bg-[#cb3837] hover:text-white hover:scale-105 transition-all"
                  >
                    NPM <Package size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Slide Details Modal - Apple Sheet Style */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-2">

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeProjectDetails}
                className="absolute inset-0 bg-black/50 backdrop-blur-md"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-5xl bg-white dark:bg-[#1d1d1f] rounded-[24px] sm:rounded-[32px] flex flex-col h-[90vh] overflow-hidden z-10 border border-black/5 dark:border-white/10"
              >

                {/* Header */}
                <div className="sticky top-0 bg-white/90 dark:bg-[#1d1d1f]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 h-20 px-8 flex items-center justify-between z-20 shrink-0">
                  <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeProjectDetails}
                    className="p-2 rounded-full bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-white hover:scale-105 transition-transform"
                    aria-label="Close details"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto w-full">
                  <div className="mx-auto p-6 sm:p-10 lg:p-12 space-y-12">

                    {/* Image Slider */}
                    <div className="relative rounded-[24px] overflow-hidden aspect-video bg-[#f5f5f7] dark:bg-[#000000] group flex items-center justify-center border border-black/5 dark:border-white/5">
                      {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                        <>
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={activeSlide}
                              src={selectedProject.screenshots[activeSlide]}
                              alt={`${selectedProject.title} slide ${activeSlide + 1}`}
                              className="w-full h-full object-contain"
                              initial={{ opacity: 0, scale: 1.02 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4 }}
                            />
                          </AnimatePresence>

                          {selectedProject.screenshots.length > 1 && (
                            <>
                              <button
                                onClick={() => prevScreenshot(selectedProject.screenshots.length)}
                                className="absolute left-6 p-3 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black/50 hover:scale-105 active:scale-95"
                                aria-label="Previous slide"
                              >
                                <ArrowLeft size={20} />
                              </button>
                              <button
                                onClick={() => nextScreenshot(selectedProject.screenshots.length)}
                                className="absolute right-6 p-3 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black/50 hover:scale-105 active:scale-95"
                                aria-label="Next slide"
                              >
                                <ArrowRight size={20} />
                              </button>

                              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full">
                                {selectedProject.screenshots.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveSlide(idx)}
                                    className={`h-2 rounded-full transition-all duration-300
                                      ${idx === activeSlide ? "bg-white w-6" : "bg-white/50 w-2"}`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[#86868b] dark:text-[#a1a1a6]">
                          <ImageIcon size={64} className="mb-4 opacity-30" />
                          <span className="text-lg font-medium tracking-wide">Screenshots Pending</span>
                        </div>
                      )}
                    </div>

                    {/* Details Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                      <div className="md:col-span-2 space-y-8 text-left">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <h4 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Overview</h4>
                            {selectedProject.status === "WIP" && (
                              <span className="px-3 py-1.5 rounded-full bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                Work in Progress
                              </span>
                            )}
                          </div>
                          <p className="text-[#1d1d1f] dark:text-[#f5f5f7] text-lg leading-relaxed font-normal">
                            {selectedProject.longDescription}
                          </p>
                          {selectedProject.installCommand && (
                            <div className="mt-6 p-4 rounded-xl bg-[#f5f5f7] dark:bg-[#000000] border border-black/5 dark:border-white/5 font-mono text-sm text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center justify-between group">
                              <span>{">"} {selectedProject.installCommand}</span>
                              <button 
                                onClick={() => handleCopy(selectedProject.installCommand)}
                                className="p-2 rounded-lg bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105 active:scale-95"
                                title="Copy to clipboard"
                              >
                                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                              </button>
                            </div>
                          )}
                        </div>

                        <div className="space-y-4 pt-4">
                          <h4 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Features</h4>
                          <ul className="space-y-4">
                            {selectedProject.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-4 text-[#1d1d1f] dark:text-[#f5f5f7] text-lg leading-relaxed">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#86868b] dark:bg-[#a1a1a6] mt-[11px] shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Sidebar Info */}
                      <div className="space-y-10">
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-[#86868b] dark:text-[#a1a1a6] uppercase tracking-wider">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-[#333336] px-4 py-2 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-[#86868b] dark:text-[#a1a1a6] uppercase tracking-wider">Links</h4>
                          <div className="flex flex-col gap-3">
                            {selectedProject.npmUrl && (
                              <a
                                href={selectedProject.npmUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium bg-[#cb3837] text-white hover:scale-105 transition-transform"
                              >
                                <Package size={18} />
                                <span>View on NPM</span>
                              </a>
                            )}
                            {selectedProject.demoUrl && (
                              <a
                                href={selectedProject.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1d1d1f] hover:scale-105 transition-transform"
                              >
                                <ExternalLink size={18} />
                                <span>Live Project</span>
                              </a>
                            )}

                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-[#f5f5f7] hover:scale-105 transition-transform"
                            >
                              <Github size={18} />
                              <span>View Source</span>
                            </a>

                            {selectedProject.youtubeUrl && (
                              <a
                                href={selectedProject.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-[#f5f5f7] hover:scale-105 transition-transform"
                              >
                                <Youtube size={18} />
                                <span>Watch Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
};

export default Projects;
