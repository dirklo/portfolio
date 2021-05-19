import React from 'react'
import './EducationCard.css'

export default function EducationCard({ course }) {
    return (
        <div className='education-card'>
            <div className="icon">
                <img src={course.icon} alt={course.name} height={course.height} />
            </div>
            <h2>{course.name}</h2>
            <h3>{course.location}</h3>
            <h3>{course.subtitle}</h3>
            <p>{course.startDate} to {course.endDate}</p>
            <p>{course.description}</p>
        </div>
    )
}
