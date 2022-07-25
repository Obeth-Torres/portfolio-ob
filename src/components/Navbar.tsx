import './navbar.css'
import { Link,  } from "react-router-dom"
import * as React from 'react'
import Title from '../pages/home/components/Title'
import { FaHome } from 'react-icons/fa'

const Navbar = () => {

    return (
        <div className="navbar" >  
            <div className="titleBox">
                <div className="homeIcon"> <Link to="/"> <FaHome/> </Link>  </div>
                <div className="navLinks">
                    <Link to="/" >About</Link>
                    <Link to="education">Education</Link>
                    <Link to="projects">Projects</Link>
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