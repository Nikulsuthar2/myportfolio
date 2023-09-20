import React from 'react'
import { FaDownload, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaCode, FaYoutube , FaLinkedin ,FaLinkedinIn} from 'react-icons/fa';
import nikul from '../assets/nikul.png';
import {Link} from 'react-router-dom';

export const Section1 = () => {
  return (
    <div className='relative z-0 flex justify-between items-center pt-[60px] px-8 md:px-32 min-h-screen bg-gradient-to-tl from-lightorange to-lightviolet overflow-hidden'>
        <div className='p-4 md:mt-0 mt-64 md:p-0 md:h-full h-fit flex md:justify-center flex-col relative z-10 rounded-md backdrop-blur-sm md:backdrop-blur-none shadow-md md:shadow-none'>
            <label className='font-bold text-white drop-shadow-md' style={{fontSize: '50px'}}>Hello, I'm Nikul Suthar</label>
            <label className='font-bold text-yellow-300' style={{fontSize: '30px'}}>Software Developer</label>
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
            <div className='flex gap-4 md:gap-8 mt-4 bg-white/30 w-fit p-3 rounded-xl backdrop-blur'>
                <Link to={"https://leetcode.com/nikulsuthar/"} target='_blank'><FaCode title='Leetcode'size={30}/></Link>
                <Link to={"https://www.linkedin.com/in/nikulsuthar"} target='_blank'><FaLinkedin title='nikulsuthar'size={30}/></Link> 
                <Link to={"https://github.com/Nikulsuthar2"} target='_blank'><FaGithub title='nikulsuthar2'size={30}/></Link> 
                <Link to={"https://instagram.com/nikcodeorg"} target='_blank'><FaInstagram title='nikcodeorg'size={30}/></Link> 
                <Link to={"https://youtube.com/@Nikcode"} target='_blank'><FaYoutube title='Nikcode'size={30}/></Link>
                <Link to={"https://x.com/NikulSuthar27"} target='_blank'><FaTwitter title='NikulSuthar27'size={30}/></Link>  
                <Link to={"https://www.facebook.com/nik.suthar.1238"} target='_blank'><FaFacebook title='Nikul Suthar'size={30}/></Link>
             
            </div>
        </div>
        <img src={nikul} alt='portfolio photo' className='absolute md:h-screen z-0 top-10 right-4 md:bottom-0 md:right-0'/>
        
    </div>
  )
}
