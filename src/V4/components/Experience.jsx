import React from "react";
import { experience } from "../data/v4Data";
import { calculateExperience } from "../../utils";
import { Briefcase, Calendar, MapPin, ExternalLink, Activity } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32 w-full">

      {/* Title Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Experience.
        </h2>
        <p className="text-lg sm:text-xl text-[#86868b] dark:text-[#a1a1a6] font-medium leading-relaxed">
          My professional journey and technical roles.
        </p>
      </div>

      {/* Clean Flowing List */}
      <div className="max-w-4xl mx-auto space-y-16">
        {experience.map((role, idx) => {
          const computedDuration = role.endDate
            ? role.duration
            : calculateExperience(role.startDate, null);

          return (
            <motion.div
              key={idx}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start w-full text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left Column: Timeline & Duration */}
              <div className="flex flex-col items-start gap-1 pt-2">
                <span className="text-lg font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {role.period.split(" - ")[0]} — {role.period.split(" - ")[1] || "Present"}
                </span>
                <span className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
                  {role.endDate ? role.duration : computedDuration}
                </span>
              </div>

              {/* Right Column: Experience Details Container */}
              <div className="space-y-6 bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 rounded-3xl p-6 sm:p-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                  <div className="w-14 h-14 rounded-[14px] overflow-hidden bg-[#f5f5f7] dark:bg-[#000000] flex items-center justify-center p-2 flex-shrink-0 border border-black/5 dark:border-white/5">
                    <img
                      src={role.logo}
                      alt={role.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
                      {role.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-sm sm:text-base font-medium text-[#86868b] dark:text-[#a1a1a6]">
                      <span>{role.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{role.type}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {role.location || "On-site"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-[#1d1d1f] dark:text-[#f5f5f7] text-base sm:text-lg leading-relaxed font-normal">
                    {role.description}
                  </p>
                </div>

                {/* Technologies */}
                {role.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {!role.endDate && (
                      <>
                        <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 px-3 py-1.5 rounded-full">
                          SAP BTP
                        </span>
                        <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 px-3 py-1.5 rounded-full">
                          SAP UI5
                        </span>
                        <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 px-3 py-1.5 rounded-full">
                          RAP / CAPM
                        </span>
                      </>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default Experience;
