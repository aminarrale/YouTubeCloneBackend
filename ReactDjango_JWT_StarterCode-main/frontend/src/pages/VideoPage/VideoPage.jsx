import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const VideoPlayer = (props) => {
    return(
        <div className='video-player'>
            <iframe style={{height:"60vh", width:"60 vw"}} className="iframe" src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0"></iframe>
        </div>
    )
} 

export default VideoPlayer