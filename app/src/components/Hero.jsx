import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='hero-section' id="home">
       <div className='hero-content'>
        <motion.div
         className="hero-details"
         initial={{opacity:0,x: -50}}
         animate={{opacity:1,x:0}}
         transition={{duration:1}}
        >
            <h1>Hi, I'm Baljinder Kaur</h1>
            <h2>Full Stack Developer</h2>
            <div className="hero-button">
                <a href="#projects" className='btn'>View My Projects</a>
                <a href="#contact" className='btn btn-secondary'>Get in Touch</a>
            </div>
        </motion.div>
        <motion.div
         className="hero-image"
         initial={{opacity:0,x: 50}}
         animate={{opacity:1,x:0}}
         transition={{duration:1,delay:0.3}}
        >
            <div className='image-container'>
                <img src="baby.jpg" className='profile-image'></img>
            </div>

        </motion.div>
       </div>
    </div>
  )
}

export default Hero
