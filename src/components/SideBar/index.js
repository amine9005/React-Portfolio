import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import LogoM from '../../assets/logo/logo.png'
import SubLogo from '../../assets/logo/Sub_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faEnvelope, faHome,faSackDollar,faTimes,faTrophy,faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from 'react-bootstrap/Navbar';

const SideBar  = () => {
    const [menu_btn,set_menu_btn] = useState(true)
    const showNavBar = () => {
        set_menu_btn(!menu_btn )
    }

    return <Navbar  className={menu_btn? 'nav-bar':"nav-bar expand"}>
            <Link className='logo' to='/'>
                <img src={LogoM} alt='logo'/>
                <img src={SubLogo} alt='Mohamed Amine'
                onClick={(event) => showNavBar()}
                />
            </Link>
            <div className={menu_btn ? 'nav-callopse':'nav-callopse show'}>
            <nav >
                <NavLink
                    onClick={(event) => showNavBar()} 
                    exact="true"
                    className="nav-link" 
                    activeclassname="active" 
                    to='/'>
                        <div className='nav-btn'>
                            <FontAwesomeIcon  icon={faHome} color="#4d4d4e"/>
                            Home
                        </div>
                    
                    
                </NavLink>
                <NavLink
                onClick={(event) => showNavBar()} 
                    exact="true"
                    className="nav-link" 
                    activeclassname="active" 
                    to='/about'>
                    <div className='nav-btn'>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                        About
                    </div>
                </NavLink>
                <NavLink
                onClick={(event) => showNavBar()} 
                    exact="true"
                    className="nav-link" 
                    activeclassname="active" 
                    to='/projects'>
                    <div className='nav-btn'>
                        <FontAwesomeIcon icon={faSackDollar} color="#4d4d4e"/>
                        Projects
                    </div>
                </NavLink>
                {/* <NavLink
                onClick={(event) => showNavBar()} 
                    exact="true"
                    className="nav-link" 
                    activeclassname="active" 
                    to='/certifs'>
                    <div className='nav-btn'>
                        <FontAwesomeIcon icon={faTrophy} color="#4d4d4e"/>
                        CERTIFs
                    </div>
                </NavLink> */}
                <NavLink
                onClick={(event) => showNavBar()} 
                    exact="true"
                    className="nav-link" 
                    activeclassname="active" 
                    to='/contact'>
                    <div className='nav-btn'>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                        Contact
                    </div>
                </NavLink>
            </nav>
            <div className='icons'>

            </div>
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

            <FontAwesomeIcon
            className={menu_btn? "menu bars":"menu times" }
            onClick={(event) => showNavBar()} 
            icon={menu_btn? faBars : faTimes } color="#4d4d4e"/>
            
        </Navbar>
}

export default SideBar

