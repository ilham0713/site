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
            <div className="expert-content">
                <div className = "about-cards">
                    <article classname = "about_card">
                        <HiDesktopComputer className='about-icon'/>
                        <h5>Back-End</h5>
                        <small>3+ years</small>
                    </article>
                    <article classname = "about_card">
                        <DiReact className='about-icon'/>
                        <h5>Front-End</h5>
                        <small>2+ years</small>
                        {/* <p>dhsfihwfhiwhfwehuwehuiewhfeuiwhfuwehfuwehfuewhfwjehwfucehwnufewhfihwfwjdhfuwehfuwehuewjuwjewjuewufuwejfewf
                            fehwfhuewhfuwehfeefhfjewhfnhiwbfwe
                        </p> */}
                    </article>
                    <article classname = "about_card">
                        <BsFillClipboardCheckFill className='about-icon'/>
                        <h5>Frameworks and Applications</h5>
                        <small>3+ years</small>
                    </article>
                </div>
            </div>

            
        </section>
    )
}

export default Expertise
