import React from 'react'

import {Link} from 'react-router-dom';

export const ProjectCard = ({
    image,
    title,
    desc,
    frontend,
    backend,
    link,
    buttoncolor,
    swap = false,
}) => {
  return (
    <div className={swap ? 'bg-white p-5 m-2 shadow-md rounded-lg flex flex-col justify-around items-center gap-5 md:flex-row-reverse' : 'bg-white p-5 m-2 shadow-md rounded-lg flex justify-around items-center flex-col md:flex-row gap-5'}>
        <div className=''>
            <img src={image} className='rounded-md h-[250px]' />
        </div>
        <div className='md:w-[50%] text-center flex flex-col justify-between items-center'>
            <label className='font-bold text-[30px]'>{title}</label>
            <p className='mt-5'>{desc}</p>
            <p>Frontend - <strong>{frontend}</strong></p>
            <p>Backend - <strong>{backend}</strong></p>
            <Link to={link} className={'px-5 py-2 mt-5 rounded text-white '+buttoncolor}>View Screenshots</Link>
        </div>
        
    </div>
  )
}
