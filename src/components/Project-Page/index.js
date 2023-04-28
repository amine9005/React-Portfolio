import './index.scss'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import db from '../../firebase'
import { useParams } from 'react-router'
import YoutubeEmbed from '../YoutubeEmbed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectPage = () => {

  const [projects , setProjects] = useState([])
  const [project , setProject] = useState()
  const {projectId} = useParams()

  useEffect( () => {
    onSnapshot(collection(db,"Projects") , async (snapshot) => {
      setProjects(snapshot.docs.map((doc) => doc.data()
      ))
      
      projects.forEach(pro => {
        
        if (pro.id === projectId){
          setProject(pro)
        }
      })
    } )
    
  })


  return (

    <div className='container project-page' >
         {project ? 
         <div className='display'>

            <div className='YT_video'>
              <YoutubeEmbed  embedId="NVXgPsK_eTw"/>
            </div>

            <div className='details' >
              <div className='title'>
                {project.title}
              </div>

              {project.isLive ? 
              <div >
                <a className='live' target="_blank" 
                    rel='noreferrer'
                    href={project.liveLink}
                    > 
                      Live
                      <FontAwesomeIcon icon={faGlobe} className='live'/>
                  </a>
                
              </div>
              :''}

              <div >
                <a className='live' target="_blank" 
                    rel='noreferrer'
                    href={project.source}
                    > 
                      Source
                      <FontAwesomeIcon icon={faGithub} className='live'/>
                  </a>
                
              </div>

              <div className='tags' >
                  {
                    project.techs.map((element) => (
                      <div className='tag'>
                        {element}
                      </div>
                    ))
                  }   
              </div>

              <div className='desc'>
                {project.description}
              </div>
            </div>

            

          </div>
              :''}  
          {project ? 
          <div className='wrapper'>
            <div className='carousel'>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>


            </div>
            
          </div>
          
        :''}    
    </div>
  )
}

export default ProjectPage