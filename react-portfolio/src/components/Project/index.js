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

                <div className='projects_list'>
                    <div className='card'></div>
                    <div className='card-image'>
                        <div className='project1'>
                            <figure class='image-is-square'>
                            <img src= "https://github.com/Tiranoe/adventureTime/blob/main/assets/adventuretimegif.gif?raw=true" alt = "adventureTimes"/> </figure>
                        </div>
                        <div className='project2'>
                            <figure class='image-is-square'>
                            <img src= "https://github.com/Tiranoe/Instagram-Cloning/blob/main/assets/instagram%20clone%20gif.gif?raw=true" alt = "instagramClone"/> </figure>
                        </div>
                        <div className='project3'>
                            <img src= "https://github.com/Tiranoe/TAMA/blob/main/assets/ezgif-5-9cb8e12fd0.gif?raw=true" alt = "tamagatchi"/>
                        </div>
                        <div className='project4'>
                            <img src= "https://github.com/Tiranoe/Travel-Cities/blob/main/assets/travelizer%20gif.gif?raw=true" alt = "travelizer"/>
                        </div>
                    </div>
                </div>
            </div>
        <Loader type='ball-grid-beat' />
    </>
    )
}

export default Project