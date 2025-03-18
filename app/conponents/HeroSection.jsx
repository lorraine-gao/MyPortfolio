"use client";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='lg:py-12'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="col-span-6 lg:col-span-7 place-self-center grid gap-4">
          <div className="text-white text-4xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Lorraine',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'software developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <p className="text-[#ADB7BE] text-base lg:text-xl">As a full-stack developer, I’m passionate about turning ideas into real applications.</p>
          <p className="text-[#ADB7BE] text-base lg:text-xl">Check out my latest projects to see what I’ve been building.</p>
          <div>
            <button className="rounded-full bg-white hover:bg-slate-200 text-white mt-3 px-6 py-3 mr-4 sm:mr-18 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">Download Resume</button>
            {/* <button className="rounded-full hover:bg-slate-800 text-white border border-white mt-3 px-6 py-3 mr-4 sm:mr-18 w-full sm:w-fit">Contact me</button> */}
          </div>
        </div>

        <div className="grid col-span-6 lg:col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/hero-image.png" alt="hero" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300}/>
          </div>
        </div>

      </div>
    </section>

  )
}

export default HeroSection