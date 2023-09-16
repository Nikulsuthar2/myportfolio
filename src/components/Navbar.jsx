import React from 'react'
import { NavMenu } from './NavMenu'

export const Navbar = () => {
  return (
    <nav className='fixed z-50 w-full flex justify-between items-center px-32 py-2 bg-white/20 backdrop-blur-md'>
        <label className='font-bold text-lg'>Nikul Suthar</label>
        <NavMenu/>
    </nav>
  )
}
