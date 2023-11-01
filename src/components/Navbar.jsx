import React from 'react'
import {useState, useEffect} from 'react';
import { NavMenu } from './NavMenu'
import { FaFileAlt } from 'react-icons/fa'
import nikcode from '../assets/nikcodelogo.png';

export const Navbar = () => {
  
  return (
    <nav className='flex md:flex-col md:justify-between justify-center items-center bg-gray-900 md:w-[80px] w-full md:h-screen h-[50px] absolute md:relative z-50 p-[15px] overflow-hidden'>
        <img src={nikcode} className='rounded-xl md:w-full hidden md:block'/>
        <NavMenu/>
        <a href='#Section-Resume' className='hidden md:block bg-gray-900 border border-[#cbcbcb] p-[10px] rounded-xl hover:bg-gray-900'>
          <FaFileAlt color='white'  size={20}/>
        </a>
    </nav>
  )
}
