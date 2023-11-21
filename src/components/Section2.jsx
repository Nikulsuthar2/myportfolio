import React from 'react'
import { SkillCard } from './SkillCard'
import cpp from '../assets/cppblack.png';
import python from '../assets/pythonblack.png';
import java from '../assets/javablack.png';
import flutter from '../assets/flutterblack.webp';
import html from '../assets/html5.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import php from '../assets/php-logo.png';
import git from '../assets/git.png';
import tailwind from '../assets/tailwind.png';
import reactlogo from '../assets/react.svg';
import asp from '../assets/asp.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';

export const Section2 = () => {
  return (
    <div id="Section-Skills" className='bg-gray-900 md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
      <div className='md:h-0 h-[70px]'></div>
      <div className='rounded-xl bg-[#133A30] md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
        <label className='text-white font-bold md:text-[40px] text-[40px]'>My Skills</label>
        <div className='flex flex-col md:gap-[10px] gap-[5px]'>
          <label className='text-white font-bold md:text-[20px] text-[25px]'>Languages:</label>
          <div className='flex flex-wrap gap-[10px]'>
            <SkillCard skillimg={cpp} skillname={"C++"}/>
            <SkillCard skillimg={java} skillname={"Java"}/>
            <SkillCard skillimg={python} skillname={"Python"}/>
            <SkillCard skillimg={html} skillname={"HTML"}/>
            <SkillCard skillimg={css} skillname={"CSS"}/>
            <SkillCard skillimg={js} skillname={"JavaScript"}/>
            <SkillCard skillimg={php} skillname={"PHP"}/>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label className='text-white font-bold md:text-[20px] text-[25px]'>Frameworks & Tools:</label>
          <div className='flex flex-wrap gap-[10px]'>
            <SkillCard skillimg={reactlogo} skillname={"React"}/>
            <SkillCard skillimg={tailwind} skillname={"Tailwind"}/>
            <SkillCard skillimg={flutter} skillname={"Flutter"}/>
            <SkillCard skillimg={asp} skillname={"ASP.NET"}/>
            <SkillCard skillimg={git} skillname={"GIT/GITHUB"}/>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label className='text-white font-bold md:text-[20px] text-[25px]'>Database:</label>
          <div className='flex flex-wrap gap-[10px]'>
            <SkillCard skillimg={mysql} skillname={"MySQL"}/>
            <SkillCard skillimg={mongodb} skillname={"MongoDB"}/>
          </div>
        </div>
      </div>
    </div>
  )
}
