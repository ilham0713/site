import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Expertise from './components/expertise/Expertise'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import Floatingnav from './components/floatingnav/Floatingnav'

const App = () => {
    return (
        <>
            <Nav />
            <Header />
            <Floatingnav />
            <Expertise />
            <Experience />
            <Projects />
            <Footer />
            
        </>
    )
}

export default App
