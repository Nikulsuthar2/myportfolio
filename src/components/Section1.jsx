import React, { useEffect } from 'react'
import { FaDownload, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaCode, FaYoutube , FaLinkedin ,FaLinkedinIn} from 'react-icons/fa';
import nikul from '../assets/MyPhoto/profile2.jfif';
import {Link} from 'react-router-dom';
import BG from '../assets/Background/bg.png';

export const Section1 = () => {
    

  return (
    <div id="home" className='h-screen bg-gray-900 md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
        <img src={BG} className='h-[20%] md:h-[30%] w-full object-cover rounded-xl'/>
        <div className='h-[60%] md:h-[45%] rounded-xl bg-[#004E54] md:p-[20px] p-[10px] flex md:flex-row flex-col justify-between items-center gap-[10px] md:gap-[20px]'>
            <div className='flex md:gap-[30px] gap-[10px] h-full md:flex-row flex-col items-center'>
                <img id="myprofile" src={nikul} className='md:h-full h-[100px] aspect-square object-cover rounded-full'/>
                <div className='flex flex-col h-full w-full md:w-fit justify-between'>
                    <div className='flex flex-col items-center md:items-start'>
                        <label className='text-white font-bold md:text-[60px] text-[30px] leading-tight overflow-hidden'>Nikul Suthar</label>
                        <label className='text-yellow-200 font-bold md:text-[30px] leading-tight overflow-hidden'>Software Developer</label>
                    </div>
                    <div className='flex md:gap-[10px] gap-[5px] flex-wrap justify-center md:justify-start'>
                        <Link to={"https://leetcode.com/nikulsuthar/"} target='_blank' className='bg-white hover:bg-orange-600 hover:text-white rounded-xl md:p-3 p-1'><FaCode title='Leetcode'/></Link>
                        <Link to={"https://www.linkedin.com/in/nikulsuthar"} target='_blank' className='bg-white hover:bg-blue-700 hover:text-white rounded-xl md:p-3 p-1'><FaLinkedin title='nikulsuthar'/></Link> 
                        <Link to={"https://github.com/Nikulsuthar2"} target='_blank' className='bg-white hover:bg-black hover:text-white rounded-xl md:p-3 p-1'><FaGithub title='nikulsuthar2'/></Link> 
                        <Link to={"https://instagram.com/nikcodeorg"} target='_blank' className='bg-white hover:bg-pink-500 hover:text-white rounded-xl md:p-3 p-1'><FaInstagram title='nikcodeorg'/></Link> 
                        <Link to={"https://youtube.com/@Nikcode"} target='_blank' className='bg-white hover:bg-red-600 hover:text-white rounded-xl md:p-3 p-1'><FaYoutube title='Nikcode'/></Link>
                        <Link to={"https://x.com/NikulSuthar27"} target='_blank' className='bg-white hover:bg-black hover:text-white rounded-xl md:p-3 p-1'><FaTwitter title='NikulSuthar27'/></Link>  
                        <Link to={"https://www.facebook.com/nik.suthar.1238"} target='_blank' className='bg-white hover:bg-blue-500 hover:text-white rounded-xl md:p-3 p-1'><FaFacebook title='Nikul Suthar'/></Link>
                
                    </div>
                </div>
            </div>
            <a href="#Section-Connect" className='bg-white hover:bg-gray-300 text-sm md:text-base rounded-lg md:px-6 md:py-3 py-1 w-full md:w-fit font-bold'>connect</a>
        </div>
        <div className='h-[20%] md:h-[25%] rounded-xl bg-[#3B2F34] p-[20px] flex justify-center items-center overflow-visible'>
            <p className='text-white text-sm md:text-[20px] font-light text-center md:text-left overflow-visible'>
                hi there, I am Nikul Suthar<br/>
                I am a Web Developer 😎💻<br/>
                Currently I am pursuing my MCA from JECRC University
            </p>
        </div>
        <div className='md:h-0 h-[50px]'></div>
    </div>
  )
}
