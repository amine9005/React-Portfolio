import './index.scss';
import LogoM from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o','h','a','m','e','d',' ','A','m','i','n','e'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];


   return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass+' _5'}>H</span>
                    <span className={letterClass+' _6'}>i</span> 
                    <br/>
                    <span className={letterClass+' _7'}>I</span>
                    <span className={letterClass+' _8'}>'m</span>
                    <img src={LogoM} alt='developer'/>
                    <AnimatedLetters lettersClass={letterClass} strArray={nameArray} idx={9} />
                    <br/>
                    <AnimatedLetters lettersClass={letterClass} strArray={jobArray}
                    idx={nameArray.length+9}/>
                    <br/>
                </h1>
                <h2>Full Stack Developer | Software Enginer | DevOps</h2>
                <span className='description'>Progarming is a passion to me, I enjoy creating new things and taken on challenges.</span>
                <br/>
                <Link to="/contact" className='flat-button'>Let's make something beautiful</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
        
        
        );
    
};

export default Home;