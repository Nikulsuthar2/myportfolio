import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaCode, FaYoutube , FaLinkedin ,FaLinkedinIn, FaFacebookF, FaInstagramSquare, FaGithubAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export const Section5 = () => {
  return (
    <div id='Section-Connect' className='relative h-screen bg-[#0F0341] p-[10px] flex justify-center items-center'>
        <div className='w-[90%] flex flex-col '>
            <label className='text-white font-bold text-[40px] text-center'>Connect</label>
            <div className='text-white flex flex-col gap-[10px]'>
                <label className='md:text-base text-[25px]'>Email :- <a href='mailto:nikulsuthar973@gmail.com'><strong>nikulsuthar973@gmail.com</strong></a></label>
                <div className='mt-2 md:grid md:grid-cols-4 flex flex-col text-black md:gap-[20px] gap-[10px]'>
                    <Link to={"https://leetcode.com/nikulsuthar/"} target='_blank' 
                    className='bg-white hover:bg-orange-600 hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaCode title='Leetcode'/>LeetCode
                    </Link>
                    <Link to={"https://www.linkedin.com/in/nikulsuthar"} target='_blank' 
                    className='bg-white hover:bg-blue-700 hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaLinkedinIn title='nikulsuthar' size={20}/>nikulsuthar
                    </Link> 
                    <Link to={"https://github.com/Nikulsuthar2"} target='_blank' 
                    className='bg-white hover:bg-black hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaGithub title='nikulsuthar2' size={20}/>Nikulsuthar2
                    </Link> 
                    <Link to={"https://instagram.com/nikcodeorg"} target='_blank' 
                    className='bg-white hover:bg-pink-600 hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaInstagram title='nikcodeorg' size={20}/>nikcodeorg
                    </Link> 
                    <Link to={"https://youtube.com/@Nikcode"} target='_blank' 
                    className='bg-white hover:bg-red-600 hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaYoutube title='Nikcode'size={20}/>Nikcode
                    </Link>
                    <Link to={"https://x.com/NikulSuthar27"} target='_blank' 
                    className='bg-white hover:bg-black hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaTwitter title='NikulSuthar27' size={20}/>NikulSuthar27
                    </Link>  
                    <Link to={"https://www.facebook.com/nik.suthar.1238"} target='_blank' 
                    className='bg-white hover:bg-blue-500 hover:text-white text-[25px] rounded-xl md:p-3 p-2 px-[10px] md:px-[20px] flex items-center justify-between md:gap-[10px] font-bold'>
                        <FaFacebookF title='Nikul Suthar' size={20}/>Nikul Suthar
                    </Link>   
                </div>
            </div>
            <footer className='absolute bottom-4 left-[50%] -translate-x-[50%] flex items-center md:gap-2 gap-1 text-white justify-center md:text-[20px] text-[12px]'>
                &copy; Made with <FaCode/> by Nikul Suthar. 2024
            </footer>
        </div>
        
    </div>
  )
}
