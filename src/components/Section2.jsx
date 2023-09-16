import React from 'react'
import { SkillCard } from './SkillCard'
import cpp from '../assets/cppblack.png';
import python from '../assets/pythonblack.png';

export const Section2 = () => {
  return (
    <div id='Section-Skills' className='h-screen pt-[60px] px-8 md:px-32 bg-slate-50'>
        <label className='font-bold text-black' style={{fontSize: '30px'}}>My Skills</label>
        <div>
          <div className='mt-8'>
            <label>Programming Languages</label>
            <div className='py-4 flex gap-4'>
              <SkillCard skillimg={cpp} skillname={"C++"}/>
              <SkillCard skillimg={python} skillname={"Python"}/>
            </div>
          </div>
        </div>
    </div>
  )
}
