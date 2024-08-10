import React from 'react'
import './obBlog.css';

const ObBlog = () => {
  return (
    <div className='obBlogPage'>
      
      <h1>BLOG</h1>
      <p>Proyecto de divulgación realizado con: <br />
       next.js, velite, markdown, shadcn, tailwindcss.</p>
      <div className="oblog">
        <a href="https://ob-blog-one.vercel.app/" target='_blank' rel="noopener noreferrer">
        <h1 >OB-blog</h1>
        <p>Proyecto de divulgación científica del campo del Psicoanálisis</p>
        </a> 
      </div>   
       
    </div>
  )
}

export default ObBlog
