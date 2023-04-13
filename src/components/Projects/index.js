import './index.scss'


import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
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
          <Link className='linker' to={'/project/'+project.id}>

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