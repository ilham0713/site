import React from 'react'
import './experience.css'
import { DiGitCommit } from 'react-icons/di';
const Experience = () => {
    return (
        <section id ='experience'>
            <h5>Skills and Specifications</h5>
            <h2>Expertise</h2>
            <div className="container experience__container">
                <div className="experience__backend">
                    <h3>Backend</h3>
                    <div className="experience__content">
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Java</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>C</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Golang</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Amazon DynamoDB</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>SQL</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Python</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>PHP</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>MongoDB</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Git</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Postman</h4>
                        </article>
                    </div>
                </div>

                <div className="experience__frontend">
                    <h3>Frontend</h3>
                    <div className="experience__content">
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>React.js</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Tailwind CSS</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Node.js</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>HTML</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>CSS</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>React Native</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Bootstrap</h4>
                        </article>
                        <article className = "experience__details">
                            <DiGitCommit className = "experience__details_icons"/>
                            <h4>Adobe Analytics</h4>
                        </article>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Experience
