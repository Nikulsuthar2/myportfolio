import React, { useState } from "react";
import { skills } from "../data/v4Data";
import { Cpu, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32 w-full">

      {/* Title Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Expertise.
        </h2>
        <p className="text-lg sm:text-xl text-[#86868b] dark:text-[#a1a1a6] font-medium leading-relaxed">
          The languages, tools, and frameworks I use to build digital experiences.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 w-full">
        {/* Category: Languages */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Core Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.languages.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className={`relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 transition-all ${skill.past ? "opacity-50 hover:opacity-100" : ""}`}
              >
                {skill.past && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest text-[#86868b] dark:text-[#a1a1a6] uppercase">
                    Past
                  </span>
                )}
                <div
                  className="text-4xl mb-4 transition-transform"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category: Development */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Development & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {skills.development.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className={`relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 transition-all ${skill.past ? "opacity-50 hover:opacity-100" : ""}`}
              >
                {skill.past && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest text-[#86868b] dark:text-[#a1a1a6] uppercase">
                    Past
                  </span>
                )}
                <div
                  className="text-4xl mb-4 transition-transform"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category: Databases */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {skills.database.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className={`relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 transition-all ${skill.past ? "opacity-50 hover:opacity-100" : ""}`}
              >
                {skill.past && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest text-[#86868b] dark:text-[#a1a1a6] uppercase">
                    Past
                  </span>
                )}
                <div
                  className="text-4xl mb-4 transition-transform"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category: Tools */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Workflow & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {skills.tools.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className={`relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 transition-all ${skill.past ? "opacity-50 hover:opacity-100" : ""}`}
              >
                {skill.past && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest text-[#86868b] dark:text-[#a1a1a6] uppercase">
                    Past
                  </span>
                )}
                <div
                  className="text-4xl mb-4 transition-transform"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;
