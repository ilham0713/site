import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello! I'm</h5>
                <h1>Ilham Mukati</h1>
                <h5 className="text-light">Software Engineer</h5>
                {/* <h5>A Computer Science Major at the University of Central Florida.  I love all</h5>
                <h5>things development and am working towards a career in Full Stack Engineering.</h5>  */}
                <CTA/>
            </div>
            {/* <div className = 'me'>
                <img src = {} alt 'me'/>
            </div> */}
        </header>
    )
}

export default Header
