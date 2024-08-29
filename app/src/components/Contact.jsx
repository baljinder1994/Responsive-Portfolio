import React from 'react'
import {FaLinkedin,FaGithub,FaTwitter} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact-section' id="contact">
       <h2 className='section-title'>Contact Me</h2>
       <div className='contact-content'>
        <form className='contact-form'>
          <input
            type="text"
            name="name"
            placeholder='Your name'
          ></input>
           <input
            type="text"
            name="name"
            placeholder='Your name'
          ></input>
          <textarea
            name="message"
            placeholder='Your message'
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <div className='contact-info'>
          <p>Email me directly: <a href="mailto:your.email@example.com">abc@gmail.com</a></p>
          <div className='social-icons'>
            <a href="#" target="_blank" rel="noopener noreffer"><FaLinkedin/></a>
            <a href="#" target="_blank" rel="noopener noreffer"><FaGithub/></a>
            <a href="#" target="_blank" rel="noopener noreffer"><FaTwitter/></a>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Contact
