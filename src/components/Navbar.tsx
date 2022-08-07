import './navbar.css'
import { Link, NavLink,  } from "react-router-dom"
import * as React from 'react'
import Title from '../pages/home/components/Title'
import { FaHome } from 'react-icons/fa'

const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline",
      };
      let activeClassName = 'isActive'
      let notActive = 'notActive'
    return (
        <div className="navbar" >  
            <div className="titleBox">
                <div className="homeIcon"> <Link to="/"> <FaHome/> </Link>  </div>
                <div className="navLinks">

                    <NavLink to="/" className={({isActive}) => isActive ? activeClassName : notActive}>About</NavLink>
                    <NavLink to="education" className={({isActive}) => isActive ? 'isActive' : notActive}>Education</NavLink>
                    <NavLink to="projects" className={({isActive}) => isActive ? activeClassName : 'notActive'}>Projects</NavLink>
                    <NavLink to='contact' className={({isActive}) => isActive ? activeClassName : 'notActive'} >Contact</NavLink>
                </div>            
                <div className="logoOB"><span>OB </span> </div>
            </div>         
            <div className="titleErste">
                <Title/>
            </div>     
            
        </div>
    )
}

export default Navbar