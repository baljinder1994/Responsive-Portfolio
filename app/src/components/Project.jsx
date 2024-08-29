import React from 'react'
import {motion} from 'framer-motion'
const Project = () => {
  const projectData=[
    {
      title:'Project 1',
      image:'project1.png',
      description:'This is short description of project',
      liveDemo:'https://live-demo-link.com',
      github:'https:github-repo-link.com'
    },
    {
      title:'Project 2',
      image:'project2.png',
      description:'This is short description of project',
      liveDemo:'https://live-demo-link.com',
      github:'https:github-repo-link.com'
    }
  ]


  return (
    <div className='projects-section' id="projects">
      <h2 className='section-title'>My Projects</h2>
      <div className='projects-grid'>
        {projectData.map((project,index) =>(
          <motion.div
          className="project-card"
          key={index}
          initial={{opacity:0,y: 50}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6,delay:index * 0.2}}
          >
            <img src={project.image} className="project-image"></img>
            <div className='project-info'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='project-links'>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className='btn'>Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  )
}

export default Project
