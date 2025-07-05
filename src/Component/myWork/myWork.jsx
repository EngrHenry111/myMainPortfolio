import React from 'react'
import './myWork.css'
import theme_partern from '../../assets/image/Group 1 (2).png'
import mywork_data from '../../assets/mywork_data'

export const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="myworkTitle">
            <h1>My  Latest Work</h1>
            <img src={theme_partern} alt="" />
        </div>
        <div className="myworkcontainer">
            {mywork_data.map((work, index) =>{
                return <img  key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork_showmore">
            <p>Show More</p>
            <i  class='bxr2  bx-arrow-right-stroke'  ></i> 
            
        </div>
    </div>
  )
}
