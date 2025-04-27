import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id:1,
    title:"Simple DNS Resolver",
    description:"Implemented a simple DNS resolver that performs recursive domain resolution from root DNS servers, demonstrating core DNS querying mechanisms suitable for learning and testing purposes.",
    image:"/projects/3.png",
    giturl:"https://github.com/lorraine-gao/simple-DNS-resolver",
    previewUrl:"",
    tech:"Python, Socket Programming"
  },
  {
    id:2,
    title:"RESTful API with Flask",
    description:"Developed a RESTful API using Flask that supports user registration, login, and data retrieval, following RESTful design principles.",
    image:"/projects/4.png",
    giturl:"https://github.com/lorraine-gao/RESTful-api-in-Flask",
    previewUrl:"",
    tech:"Flask, Flask-RESTful, Flask-SQLAlchemy, SQLite, Python"
  },
  {
    id:3,
    title:"Mini Airbnb Web App",
    description:"Built a simplified Airbnb-style frontend application using React, featuring responsive design and functionalities like property browsing, searching, and booking.",
    image:"/projects/2.png",
    giturl:"https://github.com/lorraine-gao/mini-airbnb",
    previewUrl:"https://mini-airbnb-frontend.onrender.com",
    tech:"React, JavaScript, HTML, CSS"
  },

]


const ProjectSection = () => {
  return (
    <section className='lg:py-12 mt-12 mb-40 ' id='projects'>
      <h2 className='text-5xl mb-10 place-self-center mt-13'>My projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-15'>
        {projectsData.map((project)=><ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.giturl} previewUrl={project.previewUrl} tech={project.tech}/>)}
      </div>
    </section>
  
  )
}

export default ProjectSection