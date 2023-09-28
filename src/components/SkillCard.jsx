import React from 'react'

export const SkillCard = ({
    skillimg = null,
    skillname,
    icon,
}) => {
  return (
    <div className=' flex p-3 justify-between items-center rounded-lg bg-white shadow-md gap-2'>
        {skillimg == null ? icon : <img src={skillimg} className='h-5 object-cover'/>}
        
        <label className='font-bold'>{skillname}</label>
    </div>
  )
}
