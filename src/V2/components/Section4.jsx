import React, { useRef } from "react";
import EducationCard from "./EducationCard";
import jecrc from '../../assets/Education/jecrc.jpg';
import nvpas from '../../assets/Education/nvpas.jpg';
import {motion, useInView} from 'framer-motion';

export const Section4 = () => {
  const ref = useRef(null);
    const isinview = useInView(ref);
  return (
    <div
      ref={ref}
      id="Section-Aboutme"
      className="md:h-screen bg-[#0F0341] p-[10px] flex justify-center items-center"
    >
      <div className="flex flex-col w-[90%]">
        <label className="text-white font-bold text-[40px] text-center">
          About Me
        </label>
        <div className="flex md:flex-row flex-col gap-[20px] justify-between mt-2">
          <div className="flex flex-col items-center gap-[10px] w-full">
            <label className="text-white font-bold text-[25px]">
              SUMMARY
            </label>
            <motion.div initial={{opacity:0,scale:0,}} animate={isinview ? {opacity:1,scale:1,}: {}} transition={{duration:1}} className="backdrop-blur-xl bg-[#9981ff52] text-white p-[20px] rounded-[20px] text-justify h-full">
            I have recently completed my Bachelor's degree in Computer Applications (BCA) and I am about to embark on a new chapter in my academic journey. I am going to start my Master's program in Computer Applications (MCA) and I am eager to expand my knowledge and skills. While I may not have professional experience at this stage, my educational background has equipped me with a solid foundation in computer applications, programming languages, and various IT concepts. I have actively engaged in coursework and projects that have honed my technical abilities and problem-solving skills.
            </motion.div>
          </div>
          <div className="flex flex-col items-center gap-[10px] w-full">
            <label className="text-white font-bold text-[25px]">
              EDUCATION
            </label>
            <EducationCard 
                image={jecrc}
                name={"JECRC UNIVERSITY"}
                course={"MCA - Cloud Computing & FullStack Development (IBM)"}
                duration={"Aug 2023 - Present"}
                grade={"CGPA: 8.53*"}
            />
             <EducationCard 
                image={nvpas}
                name={"NVPAS College, CVM UNIVERSITY"}
                course={"Bachelor of Computer Application (BCA)"}
                duration={"Aug 2020 - May 2023"}
                grade={"CGPA: 9.72"}
            />
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
  );
};
