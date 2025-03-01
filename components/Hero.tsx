'use client';

import React from 'react'
import Image from 'next/image';
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"

const Hero = () => {
  return (
    <section id='home'>
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-4 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2">
                <Image className='rounded-3xl shadow-2xl' src="/profile.jpg" alt="missing" width={350} height={350}/>
            </div>
            <div className='md:mt-2 md:w-1/2'>
                <h1 className='font-bold text-5xl mt-6 md:text-7xl md:mt-0'>Hi, I&#39;m Jonathan!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                    I&#39;m a passionate {" "}
                    <span className='font-semibold text-sky-500'>
                    Computer Science student {" "}
                    </span>
                    interested in software engineering and cloud computing. I love building applications to solve real-world problems and improve our daily lives.
                </p>
                <Link
                    to="projects"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-sky-500 rounded shadow hover:bg-sky-700"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
        </div>

        <div className="flex flex-row items-center text-center justify-center ">
            <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={45} className="animate-bounce" />
            </Link>
        </div>
    </section>
  );
};

export default Hero;