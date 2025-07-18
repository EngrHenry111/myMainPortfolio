import React from 'react'
import './about.css'
import theme_parttern from '../../assets/image/Group 1 (2).png'
import profile_image from '../../assets/image/profile_image.png'

export const About = () => {
  return (
    <div id='about' className='about'>
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
                    <p>I’m a highly skilled Electrical and Electronics Engineer and Experienced Full-Stack Web & 
                      Software Developer, with a strong background in designing and implementing scalable tech
                       solutions. With years of experience in engineering principles and 
                      hands-on software development, I bridge the gap between hardware systems and modern web 
                      technologies.
                      </p>
                    <p>My passion for web development increase on daily bases as I encounter challenges and be
                       able to solve them.
                    </p>
                </div>
            <div className="about_skills">
                <div className="about_skill"><p>HTML & CSS </p><hr style={{width: "50%"}} /> </div>
                <div className="about_skill"><p>REACT JS</p> <hr style={{width: "65%"}} /> </div>
                <div className="about_skill"><p>JAVASCRIPT</p><hr style={{width: "60%"}} /> </div>
                <div className="about_skill"><p>EXPRESS JS</p><hr style={{width: "50%"}} /> </div>
                <div className="about_skill"><p>MONGODB</p><hr style={{width: "60%"}} /> </div>                
                <div className="about_skill"><p> REST APIs </p><hr style={{width: "65%"}} /> </div>
                <div className="about_skill"><p>Git/GitHub </p><hr style={{width: "70%"}} /> </div>
                <div className="about_skill"><p> UI/UX Design</p><hr style={{width: "50%"}} /> </div>
                <div className="about_skill"><p> MATLAB</p><hr style={{width: "50%"}} /> </div>
                <div className="about_skill"><p> Electrical Installations</p><hr style={{width: "90%"}} /> </div>
                <div className="about_skill"><p>PSpice </p><hr style={{width: "40%"}} /> </div>
                <div className="about_skill"><p>  Proteus</p><hr style={{width: "30%"}} /> </div>
                <div className="about_skill"><p>Multisim </p><hr style={{width: "30%"}} /> </div>
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








 

 



