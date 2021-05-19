import React from 'react'
import './SkillsContainer.css'
import skills from '../../data/skills'
import SkillCard from '../../components/SkillCard'

export default function SkillsContainer() {
    return (
        <div className='skills-container'>
            <h1>Tech Skills</h1>
            <div className='skills-list'>
                {skills.map((skill, index) => 
                    <SkillCard
                        key={index}
                        name={skill.name}
                        icon={skill.icon}
                        size={skill.size}
                    />
                )}
            </div>
        </div>
    )
}
