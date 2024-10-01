import React from 'react'
import { ProjectCard } from './ProjectCard'
import chatp1 from '../assets/ProjectThumbnail/chat2.png';
import moviep1 from '../assets/ProjectThumbnail/moviestream.png';
import nikcalc from '../assets/ProjectThumbnail/nikcalculator.png';
import jblstore from '../assets/ProjectThumbnail/jblstore.png';

export const Section3 = () => {
  return (
    <div id='Section-Projects' className='md:h-screen bg-[#0F0341] p-[10px] flex justify-center items-center'>
      <div className='w-[90%] flex flex-col gap-[20px]'>
        <label className='text-white text-center font-bold text-[40px]'>My Projects</label>
        <div className='flex md:flex-row flex-col w-full justify-start gap-[20px] overflow-x-scroll'>
            <ProjectCard 
                link={"/projects#nikcalculator"}
                title={"Calculator"}
                image={nikcalc}
                desc={"A Simple calculator with some advance feature like factorial, square etc"}
                // link={"/"}
                islive={true}
                liveUrl={"https://nikcalculator.netlify.app/"}
                githubUrl={"https://github.com/Nikulsuthar2/Calculator"}
            />
            <ProjectCard 
                link={"/projects#jblstore"}
                title={"JBL Store"}
                image={jblstore}
                desc={"An E-commerce website where we can sell JBL product, manage inventory, generate bill. This website has two modules - 1. User, 2. Admin"}
                // link={"/chatproject"}
                githubUrl={"https://github.com/Nikulsuthar2/JBLStore"}
            />
            <ProjectCard 
                link={"/projects#chatingwebsite"}
                title={"Realtime Chatting System"}
                image={chatp1}
                desc={"Online Chatting System is realtime chatting website where we can create an account, search user for chatting, send messages, block user and edit profile. This website has two modules - 1. User, 2. Admin"}
                // link={"/chatproject"}
                githubUrl={"https://github.com/Nikulsuthar2/OnlineChat"}
            />
            <ProjectCard 
                link={"/projects#moviestreamer"}
                title={"Movie Streaming & Subscription System"}
                image={moviep1}
                desc={"Online Movie Streaming & Subscription System is a movie streaming website where you can create an account, buy a subscription, watch movie, add movie to watchlist. This website has two modules - 1. User, 2. Admin"}
                // link={"/movieproject"}
                githubUrl={"https://github.com/Nikulsuthar2/MovieStreamer"}
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
