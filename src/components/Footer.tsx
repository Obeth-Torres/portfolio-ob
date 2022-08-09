import React from 'react'
import { FaCodepen, FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import './navbar.css'

const Footer = () => {
  
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = 'isActive'
  let notActive = 'notActive'
  return (
    <div className="footer">
      <div className="navfooter">
        <div className="homeIcon"> <Link to="/"> <FaHome/> </Link>  </div>      
        <div className="navLinks">
          <NavLink to="about" className={({isActive}) => isActive ? activeClassName : notActive}>About</NavLink>
          <NavLink to="education" className={({isActive}) => isActive ? 'isActive' : notActive}>Education</NavLink>
          <NavLink to="projects" className={({isActive}) => isActive ? activeClassName : 'notActive'}>Projects</NavLink>
          <NavLink to='contact' className={({isActive}) => isActive ? activeClassName : 'notActive'} >Contact</NavLink>
        </div>
        <div className="logoOB"><span>OB </span> </div>
      </div>
      


      <div className='mediaSites'>
          <a href="https://codepen.io/your-work"><FaCodepen/></a>
          <a href="https://github.com/Obeth-Torres"><FaGithub /> </a>
          
      </div>
      <p>portfolio &copy; Obeth Torres Moreno 2022</p>
    </div>
  
  )
}

export default Footer