import React from 'react'

export const Section4 = () => {
  return (
    <div id='Section-Aboutme' className='bg-gray-900 md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
        <div className='md:h-0 h-[70px]'></div>
        <div className='rounded-xl bg-black md:p-[20px] p-[10px] flex flex-col md:gap-[20px] gap-[10px]'>
            <label className='text-white font-bold text-[40px]'>About Me</label>
            <div className='flex flex-col md:gap-[10px] gap-[5px]'>
                <label className='text-white font-bold text-[20px]'>EDUCATION:</label>
                <div className='flex md:flex-row flex-col md:gap-[20px] gap-[10px]'>
                    <div className='flex flex-col justify-between md:w-[300px] w-full bg-white md:p-[20px] p-[10px] rounded-lg'>
                        <label className='font-bold text-lg'>JECRC UNIVERSITY</label>
                        <label className='font-bold'>MCA - Cloud Computing & FullStack Development (IBM)</label>
                        <label><strong>Aug 2023 - *</strong></label>
                    </div>
                    <div className='flex flex-col justify-between md:w-[300px] w-full bg-white md:p-[20px] p-[10px] rounded-lg'>
                        <label className='font-bold text-lg'>CVM UNIVERSITY</label>
                        <label className='font-bold'>BCA</label>
                        <label>NVPAS College</label>
                        <label><strong>Aug 2020 - May 2023</strong></label>
                        <label>Grade - 9.72/10</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    /*<div id='Section-Resume' className='min-h-screen pt-[60px] px-8 md:px-32 bg-slate-50 '>
        <label className='font-bold text-black' style={{fontSize: '30px'}}>About Me</label>
        <div className='mt-8 flex justify-center'>
            <div>
                <label className='font-bold text-2xl'>EDUCATION:</label>
                <div className='flex flex-col mt-5'>
                    <label className='font-bold text-lg'>JECRC UNIVERSITY</label>
                    <label className='font-bold'>MCA - Cloud Computing & FullStack Development (IBM)</label>
                    <label>Aug 2023 - *</label>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg'>CVM UNIVERSITY</label>
                    <label className='font-bold'>BCA</label>
                    <label>NVPAS College</label>
                    <label>Aug 2020 - May 2023</label>
                    <label>Grade - 9.72/10</label>
                </div>
            </div>
        </div>
    </div>*/
  )
}
