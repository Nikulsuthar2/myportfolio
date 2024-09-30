import React from "react";
import { SkillCard } from "./SkillCard";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiCsharp, SiCss3, SiDotnet, SiExpress, SiFlutter, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPython, SiReact, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export const Section2 = () => {
  return (
    <div
      id="Section-Skills"
      className="h-screen bg-[#0F0341] p-[10px] flex flex-col justify-center items-center"
    >
      <div className="w-[90%] flex flex-col items-center">
        <label className="text-white font-bold md:text-[40px] text-[30px]">
          My Skills
        </label>
        <div className="w-full flex flex-col justify-between gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <label className="text-white font-bold md:text-[25px] text-[20px]">
              Languages:
            </label>
            <div className="flex flex-wrap gap-[10px] md:justify-between">
              <SkillCard icon={<SiCplusplus size={70} />} skillname={"C++"} />
              <SkillCard icon={<FaJava size={70} />} skillname={"Java"} />
              <SkillCard icon={<SiPython size={70} />} skillname={"Python"} />
              <SkillCard icon={<SiHtml5 size={70} />} skillname={"HTML"} />
              <SkillCard icon={<SiCss3 size={70}/>} skillname={"CSS"} />
              <SkillCard icon={<IoLogoJavascript size={70}/>} skillname={"JavaScript"}/>
              <SkillCard icon={<SiPhp size={70}/>} skillname={"PHP"} />
              <SkillCard icon={<SiCsharp size={70}/>} skillname={"CSharp"} />
            </div>
          </div>
          <div className="flex gap-[20px] flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-[10px]">
              <label className="text-white font-bold md:text-[20px] text-[25px]">
                Frameworks/Libraries:
              </label>
              <div className="flex flex-wrap gap-[10px]">
                <SkillCard icon={<SiReact size={70} />} skillname={"React"} />
                <SkillCard icon={<SiTailwindcss size={70} />} skillname={"Tailwind"} />
                <SkillCard icon={<SiNodedotjs size={70} />} skillname={"NodeJS"} />
                <SkillCard icon={<SiExpress size={70} />} skillname={"ExpressJS"} />
                <SkillCard icon={<SiFlutter size={70} />} skillname={"Flutter"} />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-white font-bold md:text-[20px] text-[25px]">
                Database:
              </label>
              <div className="flex flex-wrap gap-[10px]">
                <SkillCard icon={<GrMysql size={70}/>} skillname={"MySQL"} />
                <SkillCard icon={<SiMongodb size={70}/>} skillname={"MongoDB"} />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-white font-bold md:text-[20px] text-[25px]">
                Tools:
              </label>
              <div className="flex flex-wrap gap-[10px]">
                <SkillCard icon={<SiGit size={70} />} skillname={"GIT/GITHUB"}  />
                <SkillCard icon={<SiVisualstudiocode size={70} />} skillname={"VS Code"}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
