import React from 'react'
import { FaCodepen, FaGithub, FaYoutube } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className='mediaSites'>
            <FaCodepen />
            <FaGithub />
            <FaYoutube />

        </div>
        <p> &copy; OB 2022</p>
    </div>
  
  )
}

export default Footer