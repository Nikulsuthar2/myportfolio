import React from 'react'
import {FaHome, FaTools, FaFolderOpen, FaUser} from 'react-icons/fa';



export const NavMenu = () => {
  return (
    <div className='flex justify-evenly items-center md:gap-[10px] gap-4 font-bold text-white'>
        <a href='#home' title='Home' className='flex gap-[10px] items-center hover:bg-[#ffffff41] rounded-full md:py-[10px] md:px-[20px] p-2'>
          <FaHome color='white' className='text-[20px]'/> <label className='md:block hidden'>Home</label>
        </a>
        <a href='#Section-Skills' title='Skills' className='flex gap-[10px] items-center hover:bg-[#ffffff41] rounded-full md:py-[10px] md:px-[20px] p-2'>
          <FaTools color='white' className='text-[20px]'/> <label className='md:block hidden'>Skills</label>
        </a>
        <a href='#Section-Projects' title='Projects' className='flex gap-[10px] items-center hover:bg-[#ffffff41] rounded-full md:py-[10px] md:px-[20px] p-2'>
          <FaFolderOpen color='white' className='text-[20px]'/> <label className='md:block hidden'>Projects</label>
        </a>
        <a href='#Section-Aboutme' title='About Me' className='flex gap-[10px] items-center hover:bg-[#ffffff41] rounded-full md:py-[10px] md:px-[20px] p-2'>
          <FaUser color='white' className='text-[20px]'/> <label className='md:block hidden'>About Me</label>
        </a>
    </div>
  )
}
