import './navbar.css'
import { Link,  } from "react-router-dom"
import * as React from 'react'
import Title from '../pages/home/components/Title'

const Navbar = () => {

    return (
        <div className="navbar" >  
        <div className="titleBox">
             <Title/>
        </div>
           
        
        
            <div className="navLinks">
                <Link to="/" >Home</Link>
                <Link to="proyects">Education</Link>
                <Link to="experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar