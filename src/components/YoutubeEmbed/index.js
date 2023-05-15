import React from 'react'
import './index.scss'

import ProtoTypes from 'prop-types'

const YoutubeEmbed = ({embedId}) => {
  return (
    <div className='video-responsive'>
        
        <iframe 
            width='800px'
            height='300px'
            // src={`https://www.youtube.com/embed/${embedId}`}
            src={`https://drive.google.com/file/d/${embedId}/preview`}
            
            allowFullScreen
            title='Embeded Youtube Video'
        />
    </div>
  )
}
YoutubeEmbed.prototype = {
    embedId: ProtoTypes.string.isRequired
}


export default YoutubeEmbed