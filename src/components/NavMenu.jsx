import React from 'react'
import {FaHome, FaTools, FaFolderOpen, FaFile} from 'react-icons/fa';



export const NavMenu = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:gap-8 sm:gap-4 sm:flex-col items-center font-semibold md:items-center'>
        <a href='#' className='flex gap-2 items-center'><FaHome size={13}/>HOME</a>
        <a href='#Section-Skills' className='flex gap-2 items-center'><FaTools size={13}/> SKILLS</a>
        <a href='#Section-Projects' className='flex gap-2 items-center'><FaFolderOpen size={13}/>PROJECTS</a>
        <a href='#Section-Resume' className='flex gap-2 items-center'><FaFile size={13}/>ABOUT ME</a>
        <input 
            type='button' 
            value={"CONTACT ME"} 
            className='py-2 px-4 text-sm rounded-md bg-nikblack text-white hover:rounded-xl transition-all' 
        />
    </div>
  )
}
