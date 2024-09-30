import React from 'react'

export const SkillCard = ({
    skillimg = null,
    skillname,
    icon,
}) => {
  return (
    <div title={skillname} className='flex p-[10px] flex-col items-center md:rounded-3xl rounded-xl bg-white md:h-[110px] h-[80px] w-[80px] md:w-[110px] justify-center'>
        {skillimg == null ? icon : <img src={skillimg} className='object-contain rounded-lg h-full w-full'/>}
        <label className='font-bold md:text-[18px] text-[15px] md:text-base'>{skillname}</label>
    </div>
  )
}
