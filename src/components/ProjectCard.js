import React from 'react'
import { useInView } from 'react-intersection-observer'
import './ProjectCard.css'

function ProjectCard(props) {

    const { ref, inView, entry } = useInView({
        threshold: 0,
        rootMargin: '500px 1000px 0px 0px',
        triggerOnce: true
    })

    return (
        <div
            ref={ref} 
            className={inView ? 'project-card' : 'project-card offscreen'}>
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