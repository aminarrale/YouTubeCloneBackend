import { DATA } from "../../localData"
import React, { useState } from 'react';
import VideoCard from "../VideoCard/VideoCard";




const RelatedVideos = (props) =>{  



  function handleSubmit(videoId){
    let newVideoId = videoId
    props.submitVideoInfo(newVideoId)
  }

    return(
      <div>
      <h4>Related Videos</h4>
      <div className="container">
        <div className="row">
          {props.relatedVideos &&
            props.relatedVideos.map((video) => (
             <div className="row top-buffer" key={video.id.videoId} onClick={()=>{handleSubmit(video.id.videoId)}}>
               <VideoCard video={video} />
              </div> 
             ))}
        </div>
      </div>
    </div>
        )
}
export default RelatedVideos