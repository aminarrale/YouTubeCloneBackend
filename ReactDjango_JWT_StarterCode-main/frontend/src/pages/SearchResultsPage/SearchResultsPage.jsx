import React, { useState } from 'react';
import axios from 'axios';



const SearchResultsPage = (props) => {
    function handleSubmit(videoId){
        let newVideoId = videoId
        props.submitVideoInfo(newVideoId)
    }
    
    console.log('search page videos', props.videos)
    return(
        <div className='container'>
            <div className='row'>
                {props.videos.map((video) => (
                    <div className='col-sm-3 top-buffer' key={video.id.videoId} onClick={() =>{handleSubmit(video.id.videoId)}}>
                        <VideoCard video={video} />
                    </div>
                
                ))}
                
            </div>
        </div>
    )
}

export default SearchResultsPage