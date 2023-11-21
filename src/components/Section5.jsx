import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaCode, FaYoutube , FaLinkedin ,FaLinkedinIn, FaFacebookF, FaInstagramSquare, FaGithubAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export const Section5 = () => {
  return (
    <div id='Section-Connect' className=' bg-gray-900 md:p-[20px] p-[10px] flex flex-col md:gap-[30px] gap-[20px] justify-between'>
        <div className='rounded-xl bg-[#2b5351] md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
            <label className='text-white font-bold text-[40px]'>Connect</label>
            <div className='text-white flex flex-col md:gap-[10px] gap-[5px]'>
                <label className='md:text-base text-[25px]'>Email :- <strong>nikulsuthar973@gmil.com</strong></label>
                <div className='mt-2 md:grid md:grid-cols-3 flex flex-col text-black md:gap-[20px] gap-[10px]'>
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
        </div>
        <footer className='flex items-center md:gap-2 gap-1 text-white justify-center text-[20px] md:text-base'>
            &copy; Made with <FaCode/> by Nikul Suthar. 2023
        </footer>
    </div>
  )
}
