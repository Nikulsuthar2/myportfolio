import React from 'react'

export const SkillCard = ({
    skillimg = null,
    skillname,
    icon,
}) => {
  return (
    <div className='w-[160px] flex p-3 justify-between items-center rounded-lg bg-white shadow-md gap-2'>
        {skillimg == null ? icon : <img src={skillimg} className='h-10 object-cover'/>}
        
        <label className='font-bold'>{skillname}</label>
    </div>
  )
}
