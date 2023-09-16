import React from 'react'
import { FaDownload } from 'react-icons/fa';
import nikul from '../assets/nikul.png';

export const Section1 = () => {
  return (
    <div className='relative z-0 flex justify-between items-center pt-[60px] px-8 md:px-32 h-screen bg-gradient-to-tl from-lightorange to-lightviolet'>
        <div className='p-4 md:p-0 md:h-full h-fit flex justify-center flex-col relative z-10 rounded-md backdrop-blur-sm md:backdrop-blur-none shadow-md md:shadow-none'>
            <label className='font-bold text-white drop-shadow-md' style={{fontSize: '50px'}}>Hello, I'm Nikul Suthar</label>
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
        <img src={nikul} alt='portfolio photo' className='absolute h-screen z-0  bottom-0 right-0'/>
        
    </div>
  )
}
