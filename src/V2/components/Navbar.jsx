import React from 'react'
import {useState, useEffect} from 'react';
import { NavMenu } from './NavMenu'
import { FaFileAlt } from 'react-icons/fa'
import nikcode from '../../assets/nikcodelogo.png';

export const Navbar = () => {
  
  return (
    <nav className='absolute z-20 flex justify-between items-center h-[70px] md:w-[90%] w-full md:left-[50%] md:top-[20px] md:-translate-x-[50%] px-[15px] text-black bg-[#ffffff57] backdrop-blur-2xl border-[1px] border-[#8f8f8f] md:rounded-[20px]'>
        <img src={nikcode} className='rounded-xl w-[40px] '/>
        <NavMenu/>
        <a href='#Section-Connect' className='bg-[#F9FF57] font-bold whitespace-nowrap rounded-[15px] py-[10px] px-[20px] hover:bg-yellow-400 active:translate-y-1'>
          Contact Me
        </a>
    </nav>
  )
}
