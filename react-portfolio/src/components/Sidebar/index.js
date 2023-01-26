import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LOGO from '../../assets/images/LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to ='/'>
            <img src={LOGO} alt = 'logo' />
        </Link>
    <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/johnnam1/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Tiranoe'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/18S27qNktBsV2oSEV02SJ5GhRFf_KikFs/edit?usp=sharing&ouid=103488331271853740572&rtpof=true&sd=true/'>
                <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
            </a>
        </li>
    </ul>
    </div>
)

export default Sidebar