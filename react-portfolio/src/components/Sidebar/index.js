import { Link } from 'react-router-dom'
import './index.scss'
import LOGO from '../../assets/images/LOGO.png'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to ='/'>
            <img src={LOGO} alt = 'logo' />
        </Link>
    </div>
)

export default Sidebar