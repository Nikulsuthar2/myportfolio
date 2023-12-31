import React from 'react'
import {FaHome, FaTools, FaFolderOpen, FaUser} from 'react-icons/fa';



export const NavMenu = () => {
  return (
    <div className='flex md:flex-col justify-evenly w-full items-center gap-2'>
        <a href='#home' title='Home' className='border md:border-[#cbcbcb] md:p-[10px] p-[8px] rounded-xl hover:bg-gray-900'>
          <FaHome color='white' size={20}/>
        </a>
        <a href='#Section-Skills' title='Skills' className='border border-[#cbcbcb] md:p-[10px] p-[8px] rounded-xl hover:bg-gray-900'>
          <FaTools color='white' size={20}/>
        </a>
        <a href='#Section-Projects' title='Projects' className='border border-[#cbcbcb] md:p-[10px] p-[8px] rounded-xl hover:bg-gray-900'>
          <FaFolderOpen color='white'  size={20}/>
        </a>
        <a href='#Section-Aboutme' title='About Me' className='border border-[#cbcbcb] md:p-[10px] p-[8px] rounded-xl hover:bg-gray-900'>
          <FaUser color='white'  size={20}/>
        </a>
        
    </div>
  )
}
