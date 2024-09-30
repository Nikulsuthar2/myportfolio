import React from 'react'
import { SiGithub } from 'react-icons/si';

import {Link} from 'react-router-dom';

export const ProjectCard = ({
    image,
    title,
    desc,
    link,
    islive=false,
    liveUrl,
    githubUrl,
}) => {
  return (
    <Link to={link} className='md:w-[280px] w-full flex-none'>
    <div title={title} className='rounded-xl border-[1px] border-[#4d4d4d] backdrop-blur-xl bg-[#9981ff52] text-white flex flex-col gap-2 h-full p-[10px] md:w-[280px] w-full transition-all justify-between'>
      <img src={image} className='rounded-lg w-[100%] aspect-video' />
      <label className='font-bold text-[22px]'>{title}</label>
      <p className='line-clamp-2 text-sm font-semibold'>{desc}</p>
      <div className='flex gap-2 justify-between'>
      {islive ? <a href={liveUrl} className='flex text-white bg-[#0084ff] items-center rounded-md justify-center font-bold w-full'>View Live</a> : ""}
      <a href={githubUrl} className='flex gap-2 w-full items-center rounded-md justify-center bg-black text-white px-2 py-1 active:translate-y-1'><SiGithub /> Github</a>
      </div>
    </div>
    </Link>
  )
}
