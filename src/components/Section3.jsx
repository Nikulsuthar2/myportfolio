import React from 'react'
import { ProjectCard } from './ProjectCard'
import chatp1 from '../assets/project/index.png';
import moviep1 from '../assets/project/movieindex.png';

export const Section3 = () => {
  return (
    <div id='Section-Projects' className='bg-gray-900 md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
      <div className='rounded-xl bg-[#131313] md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
        <label className='text-white font-bold md:text-[40px] text-[40px]'>My Projects</label>
        <div className='flex flex-col md:flex-row md:gap-[20px] gap-[10px] items-stretch'>
            <ProjectCard 
                title={"Online Chatting System"}
                image={chatp1}
                desc={"Online Chatting System is realtime chatting website where we can create an account, search user for chatting, send messages, block user and edit profile. This website has two modules - 1. User, 2. Admin"}
                link={"/chatproject"}
            />
            <ProjectCard 
                title={"Online Movie Streaming & Subscription System"}
                image={moviep1}
                desc={"Online Movie Streaming & Subscription System is a movie streaming website where you can create an account, buy a subscription, watch movie, add movie to watchlist. This website has two modules - 1. User, 2. Admin"}
                link={"/movieproject"}
            />
        </div>
      </div>
    </div>
    /*<div id='Section-Projects' className='min-h-screen pt-[60px] px-8 md:px-32 bg-slate-50 '>
        <label className='font-bold text-black' style={{fontSize: '30px'}}>My Projects</label>
        <div className='mt-8 flex flex-col gap-20'>
            <ProjectCard 
                title={"Online Chatting System"}
                image={chatp1}
                desc={"Online Chatting System is realtime chatting website where we can create an account, search user for chatting, send messages, block user and edit profile. This website has two modules - 1. User, 2. Admin"}
                frontend={"HTML, CSS, JavScript, AJAX, PHP"}
                backend={"PHP, MySQL"}
                buttoncolor={"bg-green-500"}
                link={"/chatproject"}
            />
            <ProjectCard 
                title={"Online Movie Streaming & Subscription System"}
                image={moviep1}
                desc={"Online Movie Streaming & Subscription System is a movie streaming website where you can create an account, buy a subscription, watch movie, add movie to watchlist. This website has two modules - 1. User, 2. Admin"}
                frontend={"HTML, CSS, JavScript, PHP"}
                backend={"PHP, MySQL"}
                buttoncolor={"bg-red-500"}
                link={"/movieproject"}
                swap={true}
            />
        </div>
    </div>*/
  )
}
