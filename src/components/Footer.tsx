import React from 'react'
import { FaCodepen, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Footer = () => {
  
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = 'isActive'
  let notActive = 'notActive'
  return (
    <div className="footer">
      <div className="navLinks">
        <NavLink to="about" className={({isActive}) => isActive ? activeClassName : notActive}>About</NavLink>
        <NavLink to="education" className={({isActive}) => isActive ? 'isActive' : notActive}>Education</NavLink>
        <NavLink to="projects" className={({isActive}) => isActive ? activeClassName : 'notActive'}>Projects</NavLink>
        <NavLink to='contact' className={({isActive}) => isActive ? activeClassName : 'notActive'} >Contact</NavLink>
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