import React from 'react'
import './services.css'
import theme_pattern from '../../assets/image/Group 1 (2).png'
import ServicesData from '../../assets/services_data'


export const Services = () => {
  return (
    <div id='services' className='services'>

        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
          {ServicesData.map((service, index)=>{
            return <div key={index} className="service-format">
              <h1> {service.s_no} </h1>
              <h2> {service.s_name} </h2>
              <p> {service.s_desc} </p>
              <div className="services-readmore">
                <p>Read More</p>
                <i  class='bxr  bx-arrow-right-stroke'  ></i> 
              </div>
            </div>
          })}
        </div>
    </div> 
  )
}
