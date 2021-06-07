import React from 'react'
import './ExperienceCard.css'

export default function ExperienceCard({ job }) {
    return (
        <div className='experience-card'>
            <div>
                <img src={job.icon} alt={job.name} height={job.size} />
                <h2>{job.name}</h2>
                <h3><em>{job.position}</em></h3>
                <h3>{job.location}</h3>
                <span>{job.startDate} to {job.endDate}</span>
            </div>
            <ul>
                {job.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
            </ul>
        </div>
    )
}
