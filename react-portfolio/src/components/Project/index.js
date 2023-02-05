import './index.scss'
import { React, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=> {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
    <>
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
            </div>

                <div className='projects'>
                    <div className='project_list'>
                        <figure class='image-is-rectangle'>
                        <div className='project1'>
                            <img src= "https://github.com/Tiranoe/adventureTime/blob/main/assets/adventuretimegif.gif?raw=true" alt = "adventureTimes"/>
                        </div>
                        <div className='project2'>
                            <img src= "https://github.com/Tiranoe/Instagram-Cloning/blob/main/assets/instagram%20clone%20gif.gif?raw=true" alt = "instagramClone"/>
                        </div>
                        <div className='project3'>
                            <img src= "https://github.com/Tiranoe/TAMA/blob/main/assets/ezgif-5-9cb8e12fd0.gif?raw=true" alt = "tamagatchi"/>
                        </div>
                        <div className='project4'>
                            <img src= "https://github.com/Tiranoe/Travel-Cities/blob/main/assets/travelizer%20gif.gif?raw=true" alt = "travelizer"/>
                        </div>
                        </figure>
                    </div>
                </div>
            </div>
        <Loader type='ball-grid-beat' />
    </>
    )
}

export default Project