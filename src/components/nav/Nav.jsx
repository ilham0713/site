import React from 'react'
import './nav.css'
import Socials from './Socials'
const Nav = () => {
    return (
        <nav className = 'margin-1-l margin-1-t'>
            <Socials/> 
            <a href="#" className='nav-btn'>Home</a>
            <a href="#expertise" className='nav-btn'>Expertise</a>
            <a href="#projects" className='nav-btn'>Projects</a>
            <a href="#experience" className='nav-btn'>Experience</a>
            <a href="#footer" className='nav-btn'>Contact</a>
        </nav>
    )
}

export default Nav
