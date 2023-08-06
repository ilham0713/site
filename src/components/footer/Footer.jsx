import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href = "#" className = 'footer__logo'>Ilham</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#experience'>Expertise</a></li>
                <li><a href='#projects'>Projects</a></li>
                {/* <li><a href='#'>Experience</a></li> */}
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/"><BsLinkedin/></a>
                <a href="https://github.com/"><BsGithub/></a>
               

            </div>
        </footer>
    )
}

export default Footer
