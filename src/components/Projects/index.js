import './index.scss'


import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import YoutubeEmbed from '../YoutubeEmbed'
import db from '../../firebase'
import { collection, onSnapshot } from '@firebase/firestore'
import { Link } from 'react-router-dom'


const Projects =  () => {

  const [projects , setProjects] = useState([])

  useEffect( () => {
    onSnapshot(collection(db,"Projects") , (snapshot) => {
      setProjects(snapshot.docs.map((doc) => doc.data()))
    } )
  })


  
  return (
    <>
    <div className='container projects-page'>

      <div className='project-display'> 
      <ul>

      {projects.map((project) => (

        <li>
          <Link className='linker' to='/'>

            {/* <YoutubeEmbed embedId={project.YoutubeLink}/> */}

            <img src={  require("../../"+project.image1)} alt={project.image1}/>
            <div className='grid-container'>

              <div className='top-container'>
                <p className='title'>{project.title}</p>
                <p className='date'>{project.date}</p>
              </div>

              <p className='tags'> 
                <span className='tag'>{project.tag1}</span>
                <span className='tag'>{project.tag2}</span>
                <span className='tag'>{project.tag3}</span>
              </p>
              
              
              
            </div>
            {/* <div className="content-holder">
                <div className='description'>
                  {project.description}
                </div>

                <div className='out-links'>
                  { project.isLive &&
                    <a target='_blank' href={project.liveLink} className='source'>
                      <span>live</span>  
                      <FontAwesomeIcon icon={faGlobe}/> 
                    </a>
                  }
                  
                  <a target='_blank' href={project.source} className='source'>
                    <span>source</span>  
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </div>
            </div> */}
          </Link>
        </li>
        
      ))}

        </ul>  
      </div>

    </div>
    <Loader type='pacman'/>
    </>
    

    
  )
}

export default Projects