import React from 'react';


const CopyVideo = ({onAdd}) => {
    return (
        <div>
            <video 
            src="/assets/video-1.mp4"
            width="350" 
            height="200" 
            controls 
            autoPlay 
            >
            </video>
        </div>
    )
}

export default CopyVideo
