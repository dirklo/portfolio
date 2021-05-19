import React from 'react'
import './SkillCard.css'

export default function SkillCard(props) {
    return (
        <div className='skill-card'>
            <img src={props.icon} alt={props.name} height={props.size}/>
            <h2>{props.name}</h2>
        </div> 
    )
}
