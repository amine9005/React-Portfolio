import './index.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import pythonIcon from '../../assets/logo/python.png'
import html5Icon from '../../assets/logo/html5.png'
import cssIcon from '../../assets/logo/css.png'
import gitIcon from '../../assets/logo/git.png'
import angularIcon from '../../assets/logo/angular.png'
import jsIcon from '../../assets/logo/javaScript.png'
import reactIcon from '../../assets/logo/react.png'
import laravelIcon from '../../assets/logo/laravel.png'
import Loader from 'react-loaders'


export const About = () => {
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']} idx={3}/>
          </h1>

          <p className='first'>
            I'm an aspiring full stack developer I'm <strong>energetic</strong> and <strong>ambitious</strong> I'm a <strong>passionate</strong>  programmer who's <strong>self disciplined</strong>. I'm looking for the <strong>opportunity</strong>  to work with the latest 
            technologies on challenging and diverse projects
          </p>
          <p className='second'>
            I'm a <strong>confident</strong> person who attempts to take on hard <strong>challenges</strong>  and solve problems that have not yet been <strong>solved</strong> I enjoy helping people and I aim to create long <strong>lasting</strong> relationships and to <strong>provide</strong> value to other people
          </p>
          <p className='third'>
            Thank you for taking the time learn about me <strong>you are appreciated</strong> 
          </p>

          <a target="_blank" 
            className='flat-button'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1VAqejn_2mCYK5QBKTlhtiv_R3BzraEPl/view?usp=sharing'
            >
                View My Resume
          </a>

        </div>

        <div className='skills-bar-1'>
          <div className='skills-react'>
            <img className='reactIcon' src={reactIcon} alt='React'/>
          </div>
          <div className='skills-angular'>
            <img className='angularIcon' src={angularIcon} alt='Angular'/>
          </div>
          <div className='skills-laravel'>
            <img className='laravelIcon' src={laravelIcon} alt='Laravel'/>
          </div>
          <div className='skills-python'>
            <img className='pythonIcon' src={pythonIcon} alt='Python'/>
          </div>
          
        </div>

        <div className='skills-bar-2'>
          <div className='skills-css'>
            <img className='cssIcon' src={cssIcon} alt='CSS'/>
          </div>
          <div className='skills-js'>
            <img className='jsIcon' src={jsIcon} alt='JavaScript'/>
          </div>
          <div className='skills-html'>
            <img className='htmlIcon' src={html5Icon} alt='HTML'/>
          </div>
          
          <div className='skills-python'>
            <img className='jsIcon' src={gitIcon} alt='Git'/>
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </>

  );
}

export default About;
