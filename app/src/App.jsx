import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
