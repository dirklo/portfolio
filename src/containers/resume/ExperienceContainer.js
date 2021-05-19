import React from 'react'
import './ExperienceContainer.css'
import ExperienceCard from '../../components/ExperienceCard'
import experience from '../../data/experience'

export default function ExperienceContainer() {
    return (
        <div className='experience-container'>
            <h1>Professional Experience</h1>
            <div className="experience-list">
                {experience.map((job, index) => 
                    <ExperienceCard 
                        key={index}
                        job={job}
                    />
                )}
            </div>
        </div>
    )
}
