import React from 'react'
import './about.css'
import theme_parttern from '../../assets/image/Group 1 (2).png'
import profile_image from '../../assets/image/profile_image.png'

export const About = () => {
  return (
    <div className='about'>
        <div className="about_title">
            <h1>About Me</h1>
            <img src={theme_parttern} alt="" />
        </div>

        <div className="about_section">
            <div className="about_left">
                <img src={profile_image} alt="" />
            </div>

            <div className="about_right">
                <div className="about_paragraph">
                    <p>I'm an experience Full-Stack Web Developer with years of experience</p>
                    <p>My passion for web development increase on daily bases as I encounter change and be able to solve them.</p>

                </div>

            <div className="about_skills">
                <div className="about_skill"><p>HTML & CSS </p><hr style={{width: "50%"}} /> </div>
                <div className="about_skill"><p>REACT JS</p> <hr style={{width: "70%"}} /> </div>
                <div className="about_skill"><p>JAVASCRIPT</p><hr style={{width: "60%"}} /> </div>
                <div className="about_skill"><p>EXPRESS JS</p><hr style={{width: "50%"}} /> </div>
                <div className="about_skill"><p>MONGODB</p><hr style={{width: "60%"}} /> </div>

               
            </div>
            </div>

        
        </div>
          <div className="about_achievements">

            <div className="about_achievement">
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>

            <hr />

             <div className="about_achievement">
              <h1>10+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>

            <hr />

             <div className="about_achievement">
              <h1>10+</h1>
              <p>HAPPY CLIENT</p>
            </div>
            
          </div>

    </div>
  )
}








 

 



