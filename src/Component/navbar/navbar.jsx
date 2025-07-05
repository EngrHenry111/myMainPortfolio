import React, { useRef, useState } from 'react'
import './navbar.css'
import logo from '../../assets/image/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open_icon from '../../assets/image/Open-icon2.png'
import close_icon from '../../assets/image/close-icon2.png'

export const Navbar = () => {
  const [menu, setmenu] = useState("")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }



  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={open_icon} onClick={openMenu} alt="" className='nav-mobile-open'/>
       
        <ul ref={menuRef} className='navmenu'>
            <img src={close_icon} onClick={closeMenu} alt=""  className='nav-mobile-close'/>
            <li> <AnchorLink className='anchor-link'href='#home'><p onClick={()=>setmenu("home")} >Home</p></AnchorLink>  {menu==="home"?<i style={{ background: "linear-gradient(265deg, #DF8908 -5.09%, #B415FF 106.28%)", backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'  }} class='bxr  bx-dots-horizontal'  ></i> :<></>} </li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>setmenu("about")} >About</p></AnchorLink>{menu==="about"?<i style={{ background: "linear-gradient(265deg, #DF8908 -5.09%, #B415FF 106.28%)", backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'  }} class='bxr  bx-dots-horizontal'  ></i> :<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=>setmenu("services")} >Services</p></AnchorLink>{menu==="services"?<i style={{ background: "linear-gradient(265deg, #DF8908 -5.09%, #B415FF 106.28%)", backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'  }} class='bxr  bx-dots-horizontal'  ></i> :<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#mywork'> <p onClick={()=>setmenu("mywork")} >Portfolio</p></AnchorLink>{menu==="portfolio"?<i style={{ background: "linear-gradient(265deg, #DF8908 -5.09%, #B415FF 106.28%)", backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'  }} class='bxr  bx-dots-horizontal'  ></i> :<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={()=>setmenu("contact")} >Contact</p></AnchorLink>{menu==="contact"?<i style={{ background: "linear-gradient(265deg, #DF8908 -5.09%, #B415FF 106.28%)", backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'  }} class='bxr  bx-dots-horizontal'  ></i> :<></>}</li>

        </ul>
        <div className="navconnect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}



