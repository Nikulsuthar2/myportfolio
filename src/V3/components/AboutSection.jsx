import React from "react";
import { education } from "../data";
import { Building2, Calendar, ClipboardPen, GraduationCap } from "lucide-react";
import nik from "../../assets/MyPhoto/profile3.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500  rounded-full opacity-20 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center overflow-visible mt-4 md:mt-2 mb-12 md:mb-16">
          <span className="text-gray-100 dark:text-gray-900">👨‍💻</span>
          <span className="text-gradient ml-2">About Me</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-4 project-card rounded-xl p-3">
            <img
              src={nik}
              alt="Nikul Suthar"
              className="h-full rounded-xl w-full object-cover"
            />
            <div className="space-y-4">
              <div className="project-card p-4 md:p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  Hey there! 👋, I'm Nikul!
                </h3>
                <p className="text-gray-300 mb-4">
                  A passionate Software Developer who loves exploring and building innovative digital experiences.
                  I primarily work with full-stack web development using React, TailwindCSS, and the MERN stack and
                  enjoy experimenting with new technologies to expand my skill set.
                </p>
                <p className="text-gray-300">
                  I enjoy solving real-world problems through code, whether it's developing web applications,
                  designing UI components, or learning new things. Apart from coding, I love Video Games, digital art, and creative projects,
                  which allows me to blend technology with creativity.
                </p>
              </div>
              <div className="project-card p-4 md:p-8 rounded-xl">
                <h3 className="text-2xl mb-4 font-semibold text-indigo-400">
                  🎯 Interests
                </h3>
                <p className="text-gray-300">
                  💻 Technology & Development,
                  🎨 Creativity & Art,
                  🧠 Reading Books & Learning,
                  🏋️‍♂️ Health & Fitness.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 project-card rounded-xl p-3">
            <h3 className="text-2xl font-bold text-center mb-4">
              <span className="text-gradient">Education</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="project-card p-2 md:p-6 rounded-xl space-y-4"
                >
                  <div className="flex items-start gap-4">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.university}
                        className="w-20 md:w-28 h-20 md:h-28 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10">
                        <GraduationCap className="w-24 h-24 text-blue-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-400">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-400  mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>
                          {edu.collage ? edu.collage + " | " : ""}
                          {edu.university}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400  mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-400  mt-1">
                        <ClipboardPen className="w-4 h-4" />
                        <span>CGPA: {edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;