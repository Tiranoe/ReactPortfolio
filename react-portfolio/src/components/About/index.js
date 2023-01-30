import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
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

            <div className='toolbox'>
                <div className='toolbox_list'>
                    <div className='item1'>
                        <FontAwesomeIcon icon={faJsSquare} color='#f0db4f' />
                    </div>
                    <div className='item2'>
                        <FontAwesomeIcon icon={faPython} color='#4584b6' />
                    </div>
                    <div className='item3'>
                        <FontAwesomeIcon icon={faReact} color='#61dbfb' />
                    </div>
                    <div className='item4'>
                        <FontAwesomeIcon icon={faNode} color='#68A063' />
                    </div>
                    <div className='item5'>
                        <FontAwesomeIcon icon={faC} color='#3c44a4' />
                    </div>
                    <div className='item6'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='item7'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-grid-beat' />
    </>
    )
}

export default About