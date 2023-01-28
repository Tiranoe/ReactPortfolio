import { Link } from 'react-router-dom';
import LOGO from '../../assets/images/LOGO.png'
import './index.scss';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> My name is John Nam </h1>
                <h1 className='initals'>Also known as
                <img src={LOGO} alt='JJN' />
                </h1>
                <br />
                Software Engineer
                <h2>Data Engineer / QA Analyst</h2>
                <Link to ='/contact' className='flat-button'>REACH ME HERE</Link>
            </div>
        </div>
    )
}

export default Home