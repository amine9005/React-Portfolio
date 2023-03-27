import './index.scss';
import LogoM from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
 
const Home = () => {
   return (<div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi<br/> I'm
                    <img src={LogoM} alt='developer'/>
                    ohamed Amine 
                    <br/>
                    Web Developer
                    <br/>
                </h1>
                <h2>Full Stack Developer | Software Enginer | DevOps</h2>
                <span>Progarming is a passion to me, I enjoy creating new things and taken on challenges.</span>
                <br/>
                <Link to="/contact" className='flat-button'>Let's make something beautiful</Link>
            </div>

        </div>
        );
    
};

export default Home;