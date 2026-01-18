'use client'

import Image from "next/image";
import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const ExperienceCard = ({ experience }) => {
    const [open, setOpen] = useState(false); 

    return (
        <div 
            className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-16 mt-10 items-center p-5 bg-gray-100 dark:bg-gray-800 rounded-3xl hover:-translate-y-1 transition transform cursor-pointer'
            onClick={() => setOpen(!open)}
        >
            {/* container for company logo */}
            <div className="w-full md:w-1/6 aspect-square bg-slate-200 p-4 flex items-center justify-center rounded-3xl shrink-0 mb-5 md:mb-0">
                {/* company logo */}
                <Image 
                    src={experience.image}
                    alt={experience.company}
                    height={500}
                    width={500}
                    className="object-contain"
                />
            </div>

            {/* container for experience details */}
            <div className="flex flex-1 items-center justify-between w-full">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        {experience.title}
                    </h1>
                    <h2 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                        {experience.company}
                    </h2>
                    <p className="text-lg md:text-base text-neutral-600 dark:text-neutral-400">
                        {experience.date}
                    </p>
                </div>
                
                <AiFillCaretLeft 
                    size={30}
                    className={`shrink-0 transition-transform duration-200 ${open ? "-rotate-90" : ""}`}
                />
            </div>


        </div>
    )
}

export default ExperienceCard;