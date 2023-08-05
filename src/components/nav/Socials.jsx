import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
    return (
        <div className='nav-socials'>
            <a href = 'https://linkedin.com/' target ="_blank"><BsLinkedin/></a>
            <a href = 'https://github.com/' target ="_blank"><BsGithub/> </a>
            {/* <a href = 'https://linkedin.com/' target ="_blank"> <a/> */}
        </div>
    )
}

export default Socials
