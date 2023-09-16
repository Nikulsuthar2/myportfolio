import React from 'react'
import { FaDownload } from 'react-icons/fa';
import nikul from '../assets/nikul.png';

export const Section1 = () => {
  return (
    <div className='relative z-0 flex justify-between pt-[60px] px-32 h-screen bg-gradient-to-tl from-lightorange to-lightviolet'>
        <div className='h-full flex justify-center flex-col'>
            <label className='font-bold text-white' style={{fontSize: '50px'}}>Hello, I'm Nikul Suthar</label>
            <label className='font-bold text-yellow-300' style={{fontSize: '30px'}}>Web Developer</label>
            <div className='flex gap-3 mt-5'>
            
                <input 
                    type='button' 
                    value={"Contact Me"} 
                    className='py-2 px-4 rounded-md bg-nikblack text-white hover:bg-black transition-all' 
                />
                <button className='flex items-center gap-2 py-2 px-4 rounded-md bg-white text-black font-semibold shadow-md hover:rounded transition-all'>
                    Resume <FaDownload size={13}/>
                </button>
                
            </div>
        </div>
        <img src={nikul} alt='portfolio photo'/>
        
    </div>
  )
}
