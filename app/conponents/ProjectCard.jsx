import React from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({imgUrl,title,description, gitUrl, previewUrl,tech}) => {
  return (
    <div className='col-span-1 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg'>
      <div className='h-55 w-full md:h-65 rounded-t-xl relative group ' style={{background:`url(${imgUrl})`, backgroundSize: "cover",backgroundPosition: 'center'}}>
        <div className='overlay rounded-t-xl absolute top-0 left-0 w-full h-full bg-[#181818]/50 hidden group-hover:flex items-center justify-center gap-5 group-hover:bg-[#181818]/30 '>
          <Link href={gitUrl} className='h-10 w-10'>
            <CodeBracketIcon className='h-10 w-10 place-self-center'/>
          </Link>
          {previewUrl &&(<Link href="/" className='h-10 w-10 '>
            <EyeIcon className='h-10 w-10 place-self-center'/>
          </Link>)}
        </div>
      </div>

      <div className='text-white w-full rounded-b-xl bg-[#181818] py-6 px-4 flex-col flex-1'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <h5 className='text-base mb-2'>Tech stack: {tech}</h5>
        <h5 className='text-[#c6cdd2]'>{description}</h5>
      </div>
    </div>
  )
}

export default ProjectCard