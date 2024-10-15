'use client';

import React from 'react'
import Image from 'next/image';
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"

const Hero = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left'>
            <div>
                <Image className='rounded-3xl shadow-2xl' src="/profile.jpg" alt="missing" width={300} height={300}/>
            </div>
            <div>
                <h1 className='font-bold text-4xl mt-6'>Hi, I'm Jonathan!</h1>
                <p className='text-lg mt-4 mb-6'>
                    I'm a second-year {" "}
                    <span className='font-semibold text-teal-600'>
                    Computer Science Student {" "}
                    </span>
                    at the University of Virginia. I'm based in Northern Virginia and love developing software to solve real-world
                    problems that simplifies our daily livesw.
                </p>
                <Link
                    to="projects"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
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
                <HiArrowDown size={35} className="animate-bounce" />
            </Link>
        </div>
    </section>
  );
};

export default Hero;