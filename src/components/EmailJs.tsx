import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './emailJs.css'

const EmailJs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showConfirm, setShowConfirm] = useState(false)


    const form = useRef(null!);
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();    
        emailjs.sendForm('service_l11m0di', 'template_2puahmw', form.current, 'SeD_fiZlU72aEFMCI')
        .then((result) => {
            console.log(result.text);
            setName('')
            setEmail('')
            setMessage('')
            setShowConfirm(true)
            setTimeout(() => {
                setShowConfirm(false)
            }, 3000)
        }, (error) => {
            console.log(error.text);
        });        
    };
    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
  return (
    <div className='emailJs'  >
        <h3>Let's get in touch!!!</h3>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Nombre</label>
                <input className='emailInput'  type="text" name="user_name" required value={name} onChange={nameChange} /> 
            </div>
            <div>
                <label>Email</label>
                <input className='emailInput'  type="email" name="user_email" required value={email} onChange={emailChange}/>
            </div>
            <div>
                <label>Mensaje</label>
                <textarea className='emailInput'  name="message" rows={10} required value={message} onChange={messageChange}/>
            </div>                       
            <input className='sendBtn' type="submit" value="Enviar mensaje" />            
        </form>
        <div className="confirmMessage" id={showConfirm ? 'show' : 'hide'} >
            <p>Great!!! We are in touch now!!!</p>
        </div>
    </div>
  )
}

export default EmailJs