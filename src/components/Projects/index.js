import './index.scss'
import project1 from '../../assets/project/home-p1.png'


import React from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import YoutubeEmbed from '../YoutubeEmbed'

const Projects = () => {
  return (
    <>
    <div className='container projects-page'>

      <div className='project-display'>

      <FontAwesomeIcon className='leftBtn' icon={faCircleArrowLeft} />
      <FontAwesomeIcon className='rightBtn' icon={faCircleArrowRight} />
                    
        
        <ul>
          <li>
            <a>
              <YoutubeEmbed embedId="HSKMM8RTmK8"/>
              <div className="content-holder">
                  <div className='description'>
                    Helloo HellooHellooHellooH
                    ellooHellooHell
                    ooHellooHellooHellooHelloo
                    HellooHellooHellooHellooHelloo
                    HellooHelloo
                    HellooHellooHellooHellooHellooHell
                    ooHellooHellooHelloo
                    HellooHellooHellooHellooHelloo
                    HellooHellooHellooHellooHellooHel
                    looHellooHelloo
                    HellooHellooHellooHelloo
                  </div>

                  <div className='out-links'>
                    <a className='source'>
                      <span>live</span>  
                      <FontAwesomeIcon icon={faGlobe}/> 
                    </a>

                    <a className='source'>
                      <span>source</span>  
                      <FontAwesomeIcon icon={faGithub}/>
                    </a>

                    
  
                  </div>
              </div>
            </a>
          </li>
        </ul>
          
          
      </div>

    </div>
    <Loader type='pacman'/>
    </>
    

    
  )
}

export default Projects