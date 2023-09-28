import React from 'react'
import { SkillCard } from './SkillCard'
import cpp from '../assets/cppblack.png';
import python from '../assets/pythonblack.png';
import java from '../assets/javablack.png';
import flutter from '../assets/flutterblack.webp';
import html from '../assets/html5.png';
import css from '../assets/css.png';
import cs from '../assets/cshblack.png';
import tailwind from '../assets/tailwind.png';
import reactlogo from '../assets/react.svg';

export const Section2 = () => {
  return (
    <div id='Section-Skills' className='min-h-screen pt-[60px] px-8 md:px-32 bg-slate-50'>
        <label className='font-bold text-black' style={{fontSize: '30px'}}>My Skills</label>
        <div className='mt-8 md:flex md:justify-between md:gap-10'>
          <div className='md:w-[40%]'>
            <label>Languages:</label>
            <div className='py-4 flex gap-4 flex-wrap'>
              <SkillCard skillimg={cpp} skillname={"C++"}/>
              <SkillCard skillimg={java} skillname={"Java"}/>
              <SkillCard skillimg={python} skillname={"Python"}/>
              <SkillCard skillimg={html} skillname={"HTML"}/>
              <SkillCard skillimg={css} skillname={"CSS"}/>
              <SkillCard skillimg={html} skillname={"JavaScript"}/>
              <SkillCard skillimg={html} skillname={"PHP"}/>
            </div>
          </div>
          <div className='md:w-[65%]'>
            <div>
              <label>Frameworks or Tools: </label>
              <div className='py-4 flex gap-4 flex-wrap'>
                <SkillCard skillimg={reactlogo} skillname={"React"}/>
                <SkillCard skillimg={tailwind} skillname={"Tailwind"}/>
                <SkillCard skillimg={flutter} skillname={"Flutter"}/>
                <SkillCard skillimg={flutter} skillname={"ASP.NET"}/>
                <SkillCard skillimg={flutter} skillname={"GIT/GITHUB"}/>
              </div>
            </div>
            <div>
              <label>Database: </label>
              <div className='py-4 flex gap-4 flex-wrap'>
                <SkillCard skillimg={cpp} skillname={"MySQL"}/>
                <SkillCard skillimg={python} skillname={"MongoDB"}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
