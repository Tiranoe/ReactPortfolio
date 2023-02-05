import './index.scss'
import { React, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=> {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Projects".split("")}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type='ball-grid-beat' />
        </>
    )
}

export default Project