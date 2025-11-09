import React from "react";
import { skills } from "../data";

const SkillSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 md:mt-2 mb-12 md:mb-16 overflow-visible">
          <span className="text-gray-100 dark:text-gray-900">🛠️</span>
          <span className="text-gradient ml-2">Technical Skills</span>
        </h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {skills.languages.map((skill) => (
            <span
              key={skill.name}
              title={skill.name}
              className="px-4 py-2 rounded-xl project-card text-purple-400 text-sm font-medium flex items-center gap-3"
              style={{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
                border: `1px solid ${skill.color}30`,
              }}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-lg">{skill.name}</span>
            </span>
          ))}
          {skills.development.map((skill) => (
            <span
              key={skill.name}
              title={skill.name}
              className="px-4 py-2 rounded-xl project-card text-blue-400 text-sm font-medium flex items-center gap-3 "
              style={{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
                border: `1px solid ${skill.color}30`,
              }}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-lg">{skill.name}</span>
            </span>
          ))}
          {skills.database.map((skill) => (
            <span
              key={skill.name}
              title={skill.name}
              className="px-4 py-2 rounded-xl project-card text-indigo-400 text-sm font-medium flex items-center gap-3 "
              style={{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
                border: `1px solid ${skill.color}30`,
              }}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-lg">{skill.name}</span>
            </span>
          ))}
          {skills.tools.map((skill) => (
            <span
              key={skill.name}
              title={skill.name}
              className="px-4 py-2 rounded-xl project-card text-green-400 text-sm font-medium flex items-center gap-3 "
              style={{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
                border: `1px solid ${skill.color}30`,
              }}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-lg">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;