import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello! I'm</h5>
                <h1>Ilham Mukati</h1>
                <h5 className="text-light">Aspiring Software Engineer</h5>
                <CTA/>
            </div>
            {/* <div className = 'me'>
                <img src = {} alt 'me'/>
            </div> */}
            <a href= "#contact" className='scroll-down'>Scroll Down</a>
        </header>
    )
}

export default Header
