import React from 'react'
import './EducationContainer.css'
import EducationCard from '../../components/EducationCard'
import education from '../../data/education'

export default function EducationContainer() {
    return (
        <div className='education-container'>
            <h1>Education</h1>
            <div className="education-list">
                {education.map((course, index) => 
                    <EducationCard 
                        key={index}
                        course={course}
                    />
                )}
            </div>
        </div>
    )
}
