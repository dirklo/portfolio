import React from 'react'
import './VideoContainer.css'

export default function VideoContainer({ loading }) {

    return (
        <div className={ loading ? 'video-container loading' : 'video-container'}>
            <iframe 
                src='https://www.loom.com/embed/5cfd74fa95a34fccab76bf16078cd5f6'
                frameBorder='0'
                allowFullScreen
                title='video'
            >
            </iframe>
        </div>
    )
}
