import React, { useRef, useState } from 'react'
import EmailJs from '../../components/EmailJs'
import './contact.css'

const Contact = () => {
  const usernameRef = useRef()
  
  return (
    <div className='contactPage'>
      
      <EmailJs/>
      
    </div>
  )
}

export default Contact