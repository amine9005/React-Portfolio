import './index.scss'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import db from '../../firebase'
import { useParams } from 'react-router'
import YoutubeEmbed from '../YoutubeEmbed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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

  const carousel = document.querySelector('.carousel')

  let isDragStart = false
  let prevPageX = null
  let prevScrollLeft = null

  const dragStart = (e) =>{
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft

  }
  
  const dragEnd = () => {
    isDragStart = false
  }

  const dragging = (e) => {
    if(!isDragStart) {
      return
    }
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft =  prevScrollLeft - positionDiff
  }

  if (carousel) {
    carousel.addEventListener("mousedown",dragStart)
    carousel.addEventListener("mousemove",dragging)
    carousel.addEventListener("mouseup",dragEnd)
  }

  
  const firstImg = carousel ? carousel.querySelectorAll("img")[0] : null
  let firstImgWidth = firstImg? firstImg.clientWidth + 18 : null

  const left = document.querySelector(".arrow-left")
  const right = document.querySelector(".arrow-right")

  const showHideIcon = () => {
    if (carousel){
      let scrollWidth = carousel.scrollWidth - carousel.clientWidth
      console.log("Scroll Width: "+scrollWidth)
      left.style.display = carousel.scrollLeft === 0 ? "none" : "block"
      let image = document.querySelector(".carousel-img")
      right.style.display = carousel.scrollLeft >= (scrollWidth - 30) ? "none": "block"

      console.log("Scroll Left: "+(carousel.scrollLeft - 1))

      
    
    }
  }


  function movePictures(id){
    carousel.scrollLeft += id==='left'? -firstImgWidth:firstImgWidth 
    showHideIcon()
  }



  return (

    <div className='container project-page' >
         {project ? 
         <div className='display'>
            {isPicture ? 
            
            <div className='left_panel'>
              <img className='left_panel' src={  require("../../"+selected)} alt={selected}/>
            </div>
            :
            <div className='left_panel'>
              <YoutubeEmbed  embedId="NVXgPsK_eTw"/>
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
            <FontAwesomeIcon id='left' icon={faCircleArrowLeft} className='arrow-left'
              onClick={(event) => movePictures('left')}
            />
            <div className='carousel' >
              
              <img className='carousel-img' src={  require("../../"+project.image1)} alt={project.image1}
                onClick={(event) => updateLeftPanel(project.image1,true)}
              />
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
              <img src={  require("../../"+project.image1)} alt={project.image1}/>
            </div>
          <FontAwesomeIcon id='right' icon={faCircleArrowRight} className='arrow-right'
            onClick={(event)=>movePictures('right')}
          />
            
          </div>
          
        :''}    
    </div>
  )
}

export default ProjectPage