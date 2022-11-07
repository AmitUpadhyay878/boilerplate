import React from 'react'
import { NavLink } from 'react-router-dom'
import { aboutus, contactus, home, signin, withimage } from './routerConst'

const Header = () => {

    const style={ fontSize:"22px",color:"white",textDecoration:"none",padding:"5px",margin:"10px"}
  return (
    <div style={{backgroundColor:"black",width: "100%"}}>
            <ul>
                <li style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <NavLink to={home} style={style}>Home</NavLink>
                        <NavLink to={signin}style={style}>Sign In</NavLink>
                        <NavLink to={aboutus}style={style}>About Us</NavLink>
                        <NavLink to={contactus}style={style}>Contact Us</NavLink>
                        <NavLink to={withimage} style={style}>With Image</NavLink>
                </li>
            </ul>
    </div>
  )
}

export default Header