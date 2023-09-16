import React from 'react'
import {FaHome, FaTools} from 'react-icons/fa';

export const NavMenu = () => {
  return (
    <div className='flex gap-8 font-semibold items-center'>
        <a href='#' className='flex gap-2 items-center'><FaHome size={13}/>HOME</a>
        <a href='#Section-Skills' className='flex gap-2 items-center'><FaTools size={13}/> SKILLS</a>
        <a href='#'>PROJECTS</a>
        <a href='#'>RESUME</a>
        
        <input 
            type='button' 
            value={"CONTACT ME"} 
            className='py-1 px-4 text-sm rounded-md bg-nikblack text-white hover:rounded-xl transition-all' 
        />
    </div>
  )
}
