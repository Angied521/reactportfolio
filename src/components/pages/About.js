import React from 'react'
import image from './Images/angiem1.jpg'
import resume from './Images/AngelaDePasqualeResume.pdf'

function About() {
  return (
    <div>
      <h1>Angela DePasquale</h1>
      <img src={image} />
      <h4>North Ridgeville, OH 44039</h4>

      <h4>Phone: 216-347-0197 | Email: </h4>


      <img src={resume} />



      <p>Full Stack Developer with emphasis on front end. Motivated team player that works well with others. I
      am looking to help your company further it’s web development needs. I am organized, pay attention to
      details, good listener and open minded.
      </p>
    </div>
  )
}

export default About
{/* <a href="https://www.linkedin.com/in/angie-depasquale-876257165/" target="_blank"> linkedin |</a>
      <a href="http://github.com/Angied521" target="_blank"> GitHub |</a> */}