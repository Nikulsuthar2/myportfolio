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
            <div className="flex flex-wrap gap-[10px] text-white">
              <SkillCard icon={<SiCplusplus className="md:text-[60px] text-[40px]" />} skillname={"C++"} />
              <SkillCard icon={<FaJava className="md:text-[60px] text-[40px]" />} skillname={"Java"} />
              <SkillCard icon={<SiPython className="md:text-[60px] text-[40px]" />} skillname={"Python"} />
              <SkillCard icon={<SiHtml5 className="md:text-[60px] text-[40px]" />} skillname={"HTML"} />
              <SkillCard icon={<SiCss3 className="md:text-[60px] text-[40px]"/>} skillname={"CSS"} />
              <SkillCard icon={<IoLogoJavascript className="md:text-[60px] text-[40px]"/>} skillname={"JavaScript"}/>
              <SkillCard icon={<SiPhp className="md:text-[60px] text-[40px]"/>} skillname={"PHP"} />
              <SkillCard icon={<SiCsharp className="md:text-[60px] text-[40px]"/>} skillname={"CSharp"} />
            </div>
          </div>
          <div className="flex gap-[20px] flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-[10px]">
              <label className="text-white font-bold md:text-[25px] text-[20px]">
                Frameworks/Libraries:
              </label>
              <div className="flex flex-wrap gap-[10px] text-white">
                <SkillCard icon={<SiReact className="md:text-[60px] text-[40px]" />} skillname={"React"} />
                <SkillCard icon={<SiTailwindcss className="md:text-[60px] text-[40px]"/>} skillname={"Tailwind"} />
                <SkillCard icon={<SiNodedotjs className="md:text-[60px] text-[40px]" />} skillname={"NodeJS"} />
                <SkillCard icon={<SiExpress className="md:text-[60px] text-[40px]" />} skillname={"ExpressJS"} />
                <SkillCard icon={<SiFlutter className="md:text-[60px] text-[40px]" />} skillname={"Flutter"} />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-white font-bold md:text-[25px] text-[20px]">
                Database:
              </label>
              <div className="flex flex-wrap gap-[10px] text-white">
                <SkillCard icon={<GrMysql className="md:text-[60px] text-[40px]"/>} skillname={"MySQL"} />
                <SkillCard icon={<SiMongodb className="md:text-[60px] text-[40px]"/>} skillname={"MongoDB"} />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-white font-bold md:text-[25px] text-[20px]">
                Tools:
              </label>
              <div className="flex flex-wrap gap-[10px] text-white">
                <SkillCard icon={<SiGit className="md:text-[60px] text-[40px]" />} skillname={"Git"}  />
                <SkillCard icon={<SiVisualstudiocode className="md:text-[60px] text-[40px]"/>} skillname={"VS Code"}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
