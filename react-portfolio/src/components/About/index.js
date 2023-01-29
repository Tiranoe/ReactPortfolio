import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=> {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p> I am an aspiring Software Engineer with a background in Applied Mathematics and experiences within the healthcare and IT industry.
                    My interests generally lie in the areas of Frontend Development along with Data Engineer and QA Analyst.
                </p>
                <p> I enjoy the process of problem-solving and love learning about the underlying algorithmic solutions!
                    My favorite language are in Python and JavaScript.
                </p>
                <p> 
                    As a person, I love to go travel and experience the many unique beauty of this world, capture those moments to create a film for memories,
                    love to ride my bicycle around local places as well, and most importantly tech-obsessed!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#90EE90' />
                    </div>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#90EE90' />
                    </div>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#90EE90' />
                    </div>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#90EE90' />
                    </div>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#90EE90' />
                    </div>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#90EE90' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About