import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'J', 'o', 'h', 'n',' ', 'N', 'a', 'm']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '!']

    useEffect(()=> {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
    <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>Hi, </span>    
                <br />
                My name is 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                I am a...
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={23} />
                </h1>
                <h2>Data Engineer / QA Analyst / Youtuber</h2>
                <Link to ='/contact' className='flat-button'>REACH ME HERE</Link>
            </div>
        </div>
        <Loader type='ball-grid-beat'/>
    </>
    )
}

export default Home