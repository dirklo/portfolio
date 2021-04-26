import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <div className="card__content">
                <div className="card__front">
                    <div className="bg-img">
                        <img src={props.bgImg.url} alt="project"/>
                    </div>
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
                </div>
                <div className='card__back'>
                    <h2>{props.title}</h2>  
                    <p className='card__body'>{props.description}</p>
                    <div className='bullets-list'>
                        <ul>
                            {props.bullets.map((bullet, index) =>
                                <li key={index}>{bullet}</li>
                            )}
                        </ul>
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
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard