import { className } from 'gridjs';
import React from 'react';
import './contact.css';
import {AiTwotoneMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id = "#contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className="contact__options">
                    <article className="contact__option">
                        <AiTwotoneMail/>
                        <h4>Email</h4>
                        <h5>mukatilham@gmail.com</h5>
                        <a href = "mailto:mukatilham@gmail.com<">Send email</a>
                    </article>
                </div>
                {/* end of contact options */}
                <form action = "">
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
