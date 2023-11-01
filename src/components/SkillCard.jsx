import React from 'react'

export const SkillCard = ({
    skillimg = null,
    skillname,
    icon,
}) => {
  return (
    <div className='flex md:p-[10px] p-[5px] items-center md:rounded-2xl rounded-full bg-white md:gap-[10px] gap-[5px]'>
        {skillimg == null ? icon : <img src={skillimg} className='md:h-8 h-4 object-cover'/>}
        <label className='font-bold text-sm md:text-base'>{skillname}</label>
    </div>
  )
}
