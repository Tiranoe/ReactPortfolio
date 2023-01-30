import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=> {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])
    
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am looking towards any opportunities to improve my skill set 
                    in programming languages of Python and JavaScript. Please reach out via email
                    @Jungwoo9543@gmail.com, and I would love to discuss anything regarding to my experiences!
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li> 
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required/>
                            </li>
                            <li>
                                <input name='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='ball-grid-beat' />
        </>
    )
}

export default Contact