import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='about-section' id="about">
     <div className='about-content'>
      <motion.div
          className="about-image-container"
          initial={{opacity:0,x: -50}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
      >
         <img src="baby.jpg" className='about-image'></img>
        </motion.div>   
        <motion.div
            className="about-details"
            initial={{opacity:0,x: 50}}
            animate={{opacity:1,x:0}}
            transition={{duration:1,delay:0.3}}
        >
             <h2>About Me</h2>
             <p>
              Hi, I'm Baljinder Kaur, a passionate Full Stack Developer with experience in bulding responsive websites
             </p>
             <div className='skills'>
              <h3>Skills & Technologies</h3>
              <ul className='skills-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Git</li>
              </ul>
             </div>
             
             <a href="path.pdf" download className='btn resume-btn'>Download</a>
          </motion.div>  
          </div> 
    </div>
  )
}

export default About
