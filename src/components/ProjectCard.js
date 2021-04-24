import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <div className='title'>
                <img 
                    src={props.titleImg.url} 
                    alt={props.title} 
                    height={props.titleImg.height}
                />
            </div>
            <div className='techs-list'>
                {props.techs.map(tech => 
                    <img
                        key={tech.name} 
                        src={tech.img} 
                        alt={tech.name}
                        height={tech.height}
                    />
                )}
            </div>
            <div className='links-list'>
                {props.links.map(link => 
                    <a 
                        key={link.type}
                        href={link.url} 
                        rel='noreferrer' 
                        target='_blank'
                    >
                        {link.type}
                    </a>)
                }
            </div>
        </div>
    )
}

export default ProjectCard