import React from 'react'

export const SkillCard = ({
    skillimg,
    skillname,
}) => {
  return (
    <div className='flex w-fit p-3 items-center rounded-md bg-white shadow-md gap-2'>
        <img src={skillimg} className='h-10 object-cover'/>
        <label>{skillname}</label>
    </div>
  )
}
