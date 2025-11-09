import React from "react";
import { experience } from "../data";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { Building2, Calendar, ClipboardPen, GraduationCap } from "lucide-react";
import { calculateExperience } from "../../utils";

const ExperienceSection = () => {
  
  return (
    <section id="experience" className="py-20 relative overflow-visible">
        <div className="absolute inset-0 opacity-80">
        <div className="absolute top-1/2 right-1/2 w-[300px] h-[300px] bg-blue-500 rounded-full opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-2/4 w-[200px] h-[200px] bg-purple-500  rounded-full opacity-20 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 md:mt-2 overflow-visible mb-12 md:mb-16">
          <span className="text-gray-100 dark:text-gray-900">🧑‍💻</span>
          <span className="text-gradient ml-2">My Journey</span>
        </h2>
        <div className="space-y-6 project-card rounded-xl p-3">
            <h3 className="text-2xl font-bold text-center mb-4">
              <span className="text-gradient">Work Experience</span>
            </h3>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 overflow-visible">
          {experience
            .slice()
            .reverse()
            .map((exp, index) => (
              <div
                key={index}
                className="project-card p-2 md:p-6 rounded-xl space-y-4"
              >
                <div className="flex md:flex-row flex-col items-start gap-4">
                  {exp.logo ? (
                    <div className="bg-white flex justify-center items-center w-full md:w-32 md:h-32 rounded-lg p-6 md:p-2 overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center p-3 w-20 md:w-32 h-20 md:h-32 rounded-lg bg-blue-500 bg-opacity-10">
                      <Building2 className="w-24 h-24 text-blue-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {exp.position}
                    </h3>
                    <h4 className="flex items-center gap-3">
                      <span
                        className={`text-lg font-semibold text-${exp.color}-400`}
                      >
                        {exp.company}
                      </span>
                      <span> • </span>
                      <span className="text-white font-normal">
                        {exp.type}
                      </span>
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-400  mt-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.location}</span>
                      <span> • </span>
                      <span className="text-white font-normal">{exp.locationType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400  mt-1">
                      <Calendar className="w-4 h-4" />
                      <span title={exp.fullPeriod}>{exp.period}</span>
                      <span> • </span>
                      <span className="text-white font-normal">
                        {calculateExperience(exp.startDate, exp.endDate)}
                        </span>
                    </div>
                    <div className="text-xs text-gray-400  mt-2">
                        {exp.description}
                        </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-full bg-${exp.color}-500 bg-opacity-10 text-${exp.color}-400 text-xs`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
