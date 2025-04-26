import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id:1,
    title:"Personal Portfolio",
    description:"project1",
    image:"/projects/1.png"
  },
  {
    id:2,
    title:"Airbnb Clone Web App",
    description:"Developed an Airbnb-style web app",
    image:"/projects/2.png"
  },
  {
    id:3,
    title:"React Protfolio website",
    description:"project1",
    image:"/projects/1.png"
  },

]


const ProjectSection = () => {
  return (
    <section className='lg:py-12 '>
      <h2 className='text-5xl mb-15 place-self-center'>My projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12'>
        {projectsData.map((project)=><ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}
      </div>
    </section>
  
  )
}

export default ProjectSection