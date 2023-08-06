import { className } from 'gridjs';
import React from 'react';
import './contact.css';
import {AiTwotoneMail} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_pk2hsnd', 'template_pb3dlhe', form.current, '2Kj-N1p3y3giOaIR6')
        e.target.reset()
    }
    return (
        <section id = "#contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className="contact__options">
                    <article className="contact__option">
                        <AiTwotoneMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>mukatilham@gmail.com</h5>
                        <a href = "mailto:mukatilham@gmail.com<">Send email</a>
                    </article>
                </div>
                {/* end of contact options */}
                <form ref={form} onSubmit = {sendEmail}>
                    <input type = "text" name = 'name' placeholder = 'full name' required/>
                    <input type = "text" email = 'email' placeholder = 'Your Email' required/>
                    <textarea name= "message" rows = "7" placeholder = 'message here' required></textarea>
                    <button type = "submit" className= "btn btn-prim">Send</button>
                </form>

            </div>

        </section>

    )
}

export default Contact
