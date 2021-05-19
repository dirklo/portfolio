import React from 'react'
import './ExperienceCard.css'

export default function ExperienceCard({ job }) {
    return (
        <div className='experience-card'>
            <img src={job.icon} alt={job.name} height={job.size} />
            <h2>{job.name}</h2>
            <h3>{job.position}</h3>
            <h3>{job.location}</h3>
            <ul>
                {job.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
            </ul>
            <p>{job.startDate} to {job.endDate}</p>
        </div>
    )
}
