import React from 'react'
import './contact.css'
import theme_partern from '../../assets/image/Group 1 (2).png'

export const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
         <h1>   Get in touch</h1>
         <img src={theme_partern} alt="" />
        </div>  
        <div className="contactSection">
            <div className="contactLeft">
                <h1>Let's talk</h1>
                <p>I'm currently availble to take on new projects, so feel free to send me a message
                about anything that you want me to work on. You can contact me anytime.
                </p>
                <div className="contactDetails">
                    <div className="contactDetail">
                        <i class='bxr1  bx-envelope'  ></i> 
                        <p>henryengrakpan@gmail.com</p>
                    </div>
                    <div className="contactDetail">
                        <i class='bxr1  bx-phone-ring'></i>
                        <p>+234-90-2836-1165</p>
                    </div>
                    <div className="contactDetail">
                        <i class='bxr1  bx-street-view'  ></i> 
                        <p>Akwa Ibom State, Nigeria.</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name'  name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your text message here</label>
                <textarea name="message" rows={10} placeholder='Enter your mesage' id=""></textarea>
                <button className="contact-submit">Submit now</button>
            </form>
        </div>      
    </div>
  )
}
