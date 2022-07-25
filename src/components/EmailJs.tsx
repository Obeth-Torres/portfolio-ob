import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './emailJs.css'

const EmailJs = () => {

    const form = useRef(null!);

    const sendEmail = (e: any) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l11m0di', 'template_2puahmw', form.current, 'SeD_fiZlU72aEFMCI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='emailJs'>
        <h3>Let's get in touch!!!</h3>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Name</label>
                <input type="text" name="user_name" /> 
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" rows={10} />
            </div>
                       
            <input type="submit" value="Send" />
            
        </form>
    </div>
  )
}

export default EmailJs