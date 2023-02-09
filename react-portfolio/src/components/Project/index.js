import './index.scss'
import { React, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import projectData from '../../data/projects.json'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=> {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    })

    const renderProjects = (projects) => {
        return (
            <div className="images-container">
                {
                    projects.map((proj, idx) => {
                        return (
                            <div className="image-rectangle" key={idx}>
                                <img 
                                src={proj.cover} 
                                className="project-gif"
                                alt="project" />
                                <div className="content">
                                    <p className="title">Project Name: {proj.title}</p>
                                    <p className="tools">Tools: {proj.tools}</p>
                                    <p className="description">{proj.description}</p>
                                    <button
                                        className='btn'
                                        onClick={() => window.open(proj.url)}
                                    >Live Link</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
    <>
        <div className='container project-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx={15}
                />
            </h1>
                <div>{renderProjects(projectData.projects)}
                </div>
        </div>
        <Loader type='ball-grid-beat' />
    </>
    )
}

export default Project