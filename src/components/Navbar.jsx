import React from 'react'
import {useState, useEffect} from 'react';
import { NavMenu } from './NavMenu'
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {
  const [menuOn, setMenuOn] = useState(true);

  const onMenuClick = () =>{
    setMenuOn(!menuOn);
  }
  
  return (
    <nav className='fixed z-50 w-full flex flex-col md:flex-row md:justify-between md:items-center px-8 sm:px-4 md:px-32  py-2 bg-white/20 backdrop-blur-md transition-all'>
        <div className='flex items-center justify-between'>
          <label className='font-bold text-[30px] md:text-lg'>Nikul Suthar</label>
          <FaBars id='menu-btn' className='md:hidden cursor-pointer' onClick={onMenuClick}/>
        </div>
        {menuOn ? <NavMenu/> : ""}
        
    </nav>
  )
}
