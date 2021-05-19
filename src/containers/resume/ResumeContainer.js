import React from 'react'
import './ResumeContainer.css'

export default function ResumeContainer(props) {
    return (
        <div 
            className={props.loading ? 'resume-container loading' : 'resume-container'}
            id="resume"
        >
            THIS IS RESUME CONTAINER
        </div>
    )
}
