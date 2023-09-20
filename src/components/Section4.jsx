import React from 'react'

export const Section4 = () => {
  return (
    <div id='Section-Resume' className='min-h-screen pt-[60px] px-8 md:px-32 bg-slate-50 '>
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
    </div>
  )
}
