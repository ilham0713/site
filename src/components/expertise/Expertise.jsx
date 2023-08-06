import React from 'react'
import './expertise.css'
import { HiDesktopComputer } from 'react-icons/hi';
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';


const Expertise = () => {
    return (
        <section id = 'expertise'>
            <h5>
                Skills and Specfics
            </h5>
            <h2>
                What am I good at?
            </h2>
            <div className = 'about_content'>
                <div className = 'about__cards'>
                    <article classname = 'about__card'>
                        <HiDesktopComputer size = {20} className='about-icon'/>
                        <h2>Back-End</h2>
                        <p>Java, C, Python</p> 
                        <p>SQL, PHP, Git, Github,</p>
                        <p>Postman, MongoDB</p>
                    </article>
                    <article classname = 'about__card'>
                        <DiReact size = {25} className='about-icon'/>
                        <h2>Front-End</h2>
                        <p> React.js, JavaScript, </p> 
                        <p> HTML, CSS TypeScript</p>
                        <p> Docusaurus, PowerBI,</p>
                        <p> Adobe Analytics</p>
                         
                    </article>
                    {/* <article classname = "about__card">
                        <h2><BsFillClipboardCheckFill size = {20} className='about-icon margin-h-r'/>  Frameworks and Applications</h2>
                    </article> */}
                </div>
            </div>

            
        </section>
    )
}

export default Expertise
