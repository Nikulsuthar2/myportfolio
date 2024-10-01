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
    <div title={title} className='rounded-xl border-[1px] border-[#4d4d4d] backdrop-blur-xl bg-[#9981ff52] text-white flex flex-col flex-none gap-2 p-[10px] md:w-[280px] w-full transition-all justify-between'>
      <Link to={link}><img src={image} className='rounded-lg w-[100%] aspect-video' /></Link>
      <label className='font-bold text-[22px]'>{title}</label>
      <p className='line-clamp-2 text-sm font-semibold'>{desc}</p>
      <div className='flex gap-2 justify-between'>
      {islive ? <a href={liveUrl} target='_blank' className='flex text-white bg-[#0084ff] items-center rounded-md justify-center font-bold w-full'>View Live</a> : ""}
      <a href={githubUrl} target='_blank' className='flex gap-2 w-full items-center rounded-md justify-center bg-black text-white px-2 py-1 active:translate-y-1'><SiGithub /> Github</a>
      </div>
    </div>
  )
}
