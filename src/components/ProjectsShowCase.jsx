import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const ProjectsShowCase = () => {
  return (
    <div className='bg-[#0F0341] p-[10px] flex flex-col text-white cursor-default'>
        <div className='flex items-center gap-[20px]'>
            <BiArrowBack onClick={()=>history.back()} size={40}  className='p-[10px] cursor-pointer bg-white font-bold text-black rounded-xl active:translate-x-1'/>
            <span className='text-[40px] font-bold'>Projects</span>
        </div>
        <div id='nikcalculator' className='flex'>
            <div>

            </div>
            <div className='flex flex-col'>
                <h1>Nik Calulator</h1>
            </div>
        </div>
    </div>
  )
}

export default ProjectsShowCase