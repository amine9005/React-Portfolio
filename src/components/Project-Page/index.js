import './index.scss'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import db from '../../firebase'
import { useParams } from 'react-router'
import YoutubeEmbed from '../YoutubeEmbed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'reactjs-popup/dist/index.css';
import ModalImage from "react-modal-image";


const ProjectPage = () => {

  const [projects , setProjects] = useState([])
  const [project , setProject] = useState()
  const [selected,setSelected] = useState()
  const [isPicture,setIsPicture] = useState(false)
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

  function updateLeftPanel(path,is_picture){
    setIsPicture(is_picture)
    setSelected(path)
  }

  


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (

    <div className='container project-page' >
         {project ? 
         <div className='display'>
            {isPicture ? 
            
            <div className='left_panel'>

              <ModalImage
                className='smallImg'
                small={require("../../"+selected)}
                large={require("../../"+selected)}
                hideZoom={true}
                hideDownload={true}
              />
              
            </div>
            : 
            <div className='left_panel'>
              <YoutubeEmbed  embedId={selected? selected:project.YoutubeLink}/>
            </div>
            }
            
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
                        <span>
                          {element}
                        </span>
                        
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
          <div >
            <Carousel className="carousel" responsive={responsive}>
              <img  src={  require("../../"+project.vidPic)} alt={project.vidPic} 
              onClick={(event) => updateLeftPanel(project.YoutubeLink,false)}/>

              {project.Link2 ? 
                
                <img  src={  require("../../"+project.vidPic)} alt={project.vidPic} 
                onClick={(event) => updateLeftPanel(project.YoutubeLink2,false)}/>
              :null} 

              <img  src={  require("../../"+project.image1)} alt={project.image1} 
              onClick={(event) => updateLeftPanel(project.image1,true)}/>

              {
                project.images.map((image) => (
                  <img  src={  require("../../"+image)} alt={image} 
                  onClick={(event) => updateLeftPanel(image,true)}/>
                ))
              }
              
            </Carousel>
          </div>
          
        :''}    
    </div>
  )
}

export default ProjectPage