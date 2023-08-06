import React from 'react'
import './projects.css'
import curb from '../../assets/curb.png';
import face from '../../assets/face.png';
import path from '../../assets/path.png';
import scro from '../../assets/scro.png';
import rec from '../../assets/rec.png';


const Projects = () => {
    return (
        <section id = 'projects'>
            <h2>Portfolio</h2>
            <div className = 'port__container container'>
                <article className='port_item'>
                    <div className="port-item-image">
                        <img src = {curb} alt=""/>
                    </div>
                    <h3>Automate Curbside Processor</h3>
                    <div className='port-img-cta'>
                        <a href = "https://github.com/" className='btn' target = '_blank'>Github</a>
                        <a href = "https://github.com/" className='btn btn-prim'>Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className="port-item-image">
                        <img src = {path} alt=""/>
                    </div>
                    <h3>Pathfinding Visualizer</h3>
                    <div className='port-img-cta'>
                        <a href = "https://github.com/" className='btn' target = '_blank'>Github</a>
                        <a href = "https://github.com/" className='btn btn-prim'>Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className="port-item-image">
                        <img src = {face} alt=""/>
                    </div>
                    <h3>Superhero Correspondence</h3>
                    <div className='port-img-cta'>
                        <a href = "https://github.com/" className='btn' target = '_blank'>Github</a>
                        <a href = "https://github.com/" className='btn btn-prim'>Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className="port-item-image">
                        <img src = {scro} alt=""/>
                    </div>
                    <h3>Scroggle</h3>
                    <div className='port-img-cta'>
                        <a href = "https://github.com/" className='btn' target = '_blank'>Github</a>
                        <a href = "https://github.com/" className='btn btn-prim'>Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className="port-item-image">
                        <img src = {rec} alt=""/>
                    </div>
                    <h3>Recursive Descent Parser</h3>
                    <div className='port-img-cta'>
                        <a href = "https://github.com/" className='btn' target = '_blank'>Github</a>
                        <a href = "https://github.com/" className='btn btn-prim'>Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className="port-item-image">
                        <img src = {rec} alt=""/>
                    </div>
                    <h3>Recursive Descent Parser</h3>
                    <div className='port-img-cta'>
                        <a href = "https://github.com/" className='btn' target = '_blank'>Github</a>
                        <a href = "https://github.com/" className='btn btn-prim'>Live Demo</a>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Projects
