import React from 'react'
import './footer.css'
import logo from '../../assets/image/logo.png'

export const Footer = () => {
  return (
    
    <div id='footer' className="footer">
        <div className="footer_top">
          <div className="footer_top_left">
            <img src={logo} alt="" />
            <p>I'm a Full-Stack Web and Software Developer from Nigeria, with 5 years of experience </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <i class='bxr  bx-contact-book'  ></i> 
              <input type="email" placeholder='Enter email here'/>
            </div>
            <div className = "footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy; 2025 Henry Mfon Akpan. All rights reserved.
          </p>
          <div className="footer-bottom-rigt">
            <p>Term of Services</p>
            <p>Prvate Policy</p>
            <p>Connect with Me</p>
          </div>
        </div>
    </div>
  )
}
