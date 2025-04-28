"use client";

import React from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { useState, useTransition } from 'react'
import { Content } from 'next/font/google';

const TAB_DATA = [
  {
    title: 'front-end',
    id: 'front-end',
    Content:(
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS, Tailwind CSS</li>
        <li>JavaScript, TypeScript</li>
      </ul>
    )
  },
  {
    title: 'back-end',
    id: 'back-end',
    Content:(
      <ul>
        <li>C#</li>
        <li>.NET Core</li>
        <li>PostgreSQL</li>
        <li>RESTful APIs</li>
      </ul>
    )
  }
]


const AboutSection = () => {
  const [tab, setTab] = useState('front-end')
  const [isPending, startTransition] = useTransition()
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="lg:py-12 md:mt-40 mt-25 " id='about'>    
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-28 gap-12 mt-30">
      
        <div className="lg:col-span-5 lg:order-1 order-2 col-span-1 place-self-center">
          <Image src="/about-image.png" alt="about"  width={450} height={450}/>
        </div>

        <div className="lg:col-span-7 lg:order-2 order-1 col-span-1 lg:mr-20 grid gap-4 ">
          <p className='text-4xl'>About me</p>
          <p className='text-base'>I'm a Junior Software Engineer with a Master’s degree in IT with Excellence from UNSW, currently looking for software developer opportunities in Sydney.</p>
          <p className='text-base'>I love building things that work. I have experience developing web applications using C# and .NET Core, designing RESTful APIs, and working with PostgreSQL databases. On the front end, I enjoy working with React and TypeScript. Along the way, I’ve also mentored students in programming, helping them debug tricky code.</p>
          <p className='text-4xl mt-5'>Skills</p>
          <div className='flex flex-row gap-4 '>
            <TabButton active={tab === 'front-end'} selectTab={() => handleTabChange('front-end')}>Front-end</TabButton>
            <TabButton active={tab === 'back-end'} selectTab={() => handleTabChange('back-end')}>Back-end</TabButton>
          </div>
          <div className='text-base h-30'>{TAB_DATA.find((tabData) => tabData.id === tab).Content}</div>

        </div>

      </div>

    </section>

  )
}

export default AboutSection