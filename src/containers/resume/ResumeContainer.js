import React from 'react'
import './ResumeContainer.css'
import SkillsContainer from './SkillsContainer'
import EducationContainer from './EducationContainer'
import ExperienceContainer from './ExperienceContainer'

export default function ResumeContainer(props) {
    return (
        <div 
            className={props.loading ? 'resume-container loading' : 'resume-container'}
            id="resume"
        >
            <SkillsContainer />
            <ExperienceContainer />
            <EducationContainer />
        </div>
    )
}
