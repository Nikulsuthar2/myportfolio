import React from 'react'

export const SkillCard = ({
    skillimg = null,
    skillname,
    icon,
}) => {
  return (
    <div className='flex p-[10px] items-center md:rounded-2xl rounded-xl bg-white gap-[10px]'>
        {skillimg == null ? icon : <img src={skillimg} className='md:h-8 h-8 object-cover'/>}
        <label className='font-bold text-[18px] md:text-base'>{skillname}</label>
    </div>
  )
}
