import React, { useEffect, useRef } from 'react'
import { FaDownload, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaCode, FaYoutube , FaLinkedin ,FaLinkedinIn} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import nik from '../assets/MyPhoto/profile3.png';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { TbDownload } from 'react-icons/tb';
import resume from '../assets/Resume/NikulSuthar.pdf'
import {motion, useInView} from 'framer-motion';

export const Section1 = () => {
    const ref = useRef(null);
    const isinview = useInView(ref);

  return (
    <div ref={ref} id="home" className='md:overflow-clip relative h-screen bg-gradient-to-b from-[#8000FF] to-[#0F0341] p-[10px] flex justify-center items-center'>
        <motion.span initial={{y:100, rotate:0, opacity:0}} animate={isinview ? {rotate:-20, y:0, opacity:100}:{}} transition={{duration:1}} className='absolute md:left-[5%] left-0 top-8 md:top-[5%] md:text-[150px] text-[100px]'>😎</motion.span>
        <motion.span initial={{y:100, rotate:0, opacity:0}} animate={isinview ? {rotate:20, y:0, opacity:100}:{}} transition={{duration:1}} className='absolute md:right-[5%] right-0 top-[0%] md:text-[250px] text-[150px]'>⚡</motion.span>
        <motion.span initial={{y:100, rotate:0, opacity:0}} animate={isinview ? {rotate:20, y:0, opacity:100}:{}} transition={{duration:1}} className='absolute md:left-[10%] left-0 bottom-[7%] md:text-[150px] text-[100px]'>👨🏼‍💻</motion.span>
        <motion.img src={nik} initial={{y:100, rotate:0, opacity:0}} animate={isinview ? {rotate:-20, y:0, opacity:100}:{}} transition={{duration:1}} className='h-[200px] w-[200px] absolute object-cover rounded-full right-[8%] bottom-[7%]' />
        <div className='flex flex-col gap-[10px] items-center justify-between text-white'>
            <div className='flex flex-col gap-2 items-center leading-none'>
                <label className='relative z-10 font-bold md:text-[60px] text-[50px] overflow-visible'>hi👋🏼, I am</label>
                <label className='relative z-10 font-bold md:text-[80px] text-[60px] text-[#FFDD00] overflow-hidden'>Nikul Suthar</label>
                <label className='relative z-10text-[#C7C7C7] mt-2 text-[30px] overflow-hidden'>Full Stack Web Developer</label>
            </div>
            <div className='text-black font-bold flex gap-[10px] p-[10px]'>
                <a href={resume} download={"Resume.pdf"} className='px-[20px] py-[10px] bg-white rounded-xl active:translate-y-1 flex items-center gap-2'><TbDownload /> Download Resume</a>
                <a href='#Section-Connect'  className='px-[20px] py-[10px] bg-[#FFDD00] hover:bg-yellow-400 rounded-xl active:translate-y-1'>Contact Me</a>
            </div>
            <div className='flex gap-[10px] md:flex-nowrap flex-wrap text-black bg-[#628cff4f] backdrop-blur-lg p-[10px] rounded-[20px]'>
                <Link to={"https://leetcode.com/nikulsuthar/"} target='_blank' className='bg-white hover:bg-orange-600 hover:text-white rounded-xl md:p-3 p-2 text-[25px]'><SiLeetcode title='Leetcode'/></Link>
                <Link to={"https://www.linkedin.com/in/nikulsuthar"} target='_blank' className='bg-white hover:bg-blue-700 hover:text-white rounded-xl md:p-3 p-2 text-[25px]'><FaLinkedin title='nikulsuthar'/></Link> 
                <Link to={"https://github.com/Nikulsuthar2"} target='_blank' className='bg-white hover:bg-black hover:text-white rounded-xl md:p-3  p-2 text-[25px]'><FaGithub title='nikulsuthar2'/></Link> 
                <Link to={"https://instagram.com/nikcodeorg"} target='_blank' className='bg-white hover:bg-pink-600 hover:text-white rounded-xl md:p-3 p-2 text-[25px]'><FaInstagram title='nikcodeorg'/></Link> 
                <Link to={"https://youtube.com/@Nikcode"} target='_blank' className='bg-white hover:bg-red-600 hover:text-white rounded-xl md:p-3 p-2 text-[25px]'><FaYoutube title='Nikcode'/></Link>
                <Link to={"https://x.com/NikulSuthar27"} target='_blank' className='bg-white hover:bg-black hover:text-white rounded-xl md:p-3 p-2 text-[25px]'><FaXTwitter title='NikulSuthar27'/></Link>  
                <Link to={"https://www.facebook.com/nik.suthar.1238"} target='_blank' className='bg-white hover:bg-blue-500 hover:text-white rounded-xl md:p-3 p-2 text-[25px]'><FaFacebook title='Nikul Suthar'/></Link>
            </div>
        </div>
    </div>
  )
}
