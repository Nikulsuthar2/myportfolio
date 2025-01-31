import React from "react";

const EducationCard = ({
    image,
    name,
    course,
    duration,
    grade
}) => {
  return (
    <div className="backdrop-blur-xl bg-[#9981ff52] text-white flex items-center w-full p-[15px] gap-[20px] rounded-[20px]">
        <img src={image} className="flex-none h-[100px] w-[100px] rounded-[10px] aspect-square object-cover" />
        <div className="flex flex-col">
            <label className="font-bold text-xl">{name}</label>
            <label className="font-semibold">
                {course}
            </label>
            <label>
                <strong>{duration}</strong>
            </label>
            <label>{grade}</label>
        </div>
    </div>
  );
};

export default EducationCard;
