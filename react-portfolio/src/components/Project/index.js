import './index.scss'
import { React, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import projectData from '../../data/projects.json'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(projectData)

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
                            <div className="image-box" key={idx}>
                                <img 
                                src={proj.cover} 
                                className="project-gif"
                                alt="project cover" />
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
            <div className='page-title'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProjects(projectData.projects)}</div>
            </div>
            </div>
        <Loader type='ball-grid-beat' />
    </>
    )
}

export default Project