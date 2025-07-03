import React from 'react'
import './hero.css'
import profile_image from '../../assets/image/profile_image.png'

export const Hero = () => {
  return (
    <div className='hero'>

        <img src={profile_image} alt="" />
        
        <h1><span>I'm  Engr.  Henry  Akpan,</span> Nigeria!  </h1>
        <p>A Full-Stack  Web  Developer   Electrical/Electronics  and  Telecommunication 
            UI/UX Designer (Figma)
            Graphic  Designer
        </p>

        <div className="hero_action">
            <div className="hero_connect">Connect With Me</div>
            <div className="hero_resume">My Resume</div>
        </div>

    </div>
  )
}




















