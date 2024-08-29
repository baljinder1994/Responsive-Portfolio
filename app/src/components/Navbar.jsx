import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)
    const[sticky,setSticky]=useState(false)


    useEffect(() =>{
        const handleScroll=() =>{
          setSticky(window.scrollY > 50)
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <motion.div
        className={`navbar ${sticky ? 'sticky' : ''}` }
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5}}
    >
   <div className="navbar-container">
     <div className="logo">
        <a href="#home">Portfolio</a>
     </div>
     <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
     </div>
     <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
       <li>
        <a href="#home">Home</a>
       </li>
       <li>
        <a href="#projects">Projects</a>
       </li>
       <li>
        <a href="#testomonial">Testomonial</a>
       </li>
       <li>
        <a href="#contact">Contact</a>
       </li>
     </ul>
   </div>
   </motion.div>
  )
}

export default Navbar
