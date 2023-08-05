import React from 'react'
import './floatingnav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RiContactsFill} from 'react-icons/ri'
import {BsFillBookFill} from 'react-icons/bs'
import {BiSolidMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'


const Floatingnav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <floatingnav>
            <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}><BiHomeAlt/></a>
            <a href="#expertise" onClick={()=>setActiveNav('#expertise')}className={activeNav==='#expertise'?'active':''}><BsFillBookFill /></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')}className={activeNav==='#experience'?'active':''}><RiContactsFill /></a>
            <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects'?'active':''}><HiOutlineLightBulb/></a>
            <a href="#footer" onClick={()=>setActiveNav('#footer')} className={activeNav==='#footer'?'active':''}><BiSolidMessageSquareDetail/></a>
        </floatingnav>
    )
}

export default Floatingnav

