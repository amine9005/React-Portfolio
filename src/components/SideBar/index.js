import './index.scss';
import { Link, NavLink } from 'react-router-dom'

import LogoM from '../../assets/logo/logo.png'
import SubLogo from '../../assets/logo/Sub_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome,faSackDollar,faTrophy,faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar  = () => {
    return <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoM} alt='logo'/>
                <img src={SubLogo} alt='Mohamed Amine'/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="about-link"
                    to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="projects-link"
                    to='/projects'>
                    <FontAwesomeIcon icon={faSackDollar} color="#4d4d4e"/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="certifications-link"
                    to='/certifs'>
                    <FontAwesomeIcon icon={faTrophy} color="#4d4d4e"/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="contact-link"
                    to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" 
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/mohamed-amine-selmi-52216a268/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                
                <li>
                    <a target="_blank" 
                    rel='noreferrer'
                    href='https://github.com/amine9005'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" 
                    rel='noreferrer'
                    href='https://www.facebook.com/medamine.selmi.961/'
                    >
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>

        </div>
}

export default SideBar

