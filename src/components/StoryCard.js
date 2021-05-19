import React from 'react'
import { useInView } from 'react-intersection-observer'
import './StoryCard.css'

export default function StoryCard(props) {

    const [ ref, inView ] = useInView({
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px',
        triggerOnce: true
    })
   

    return (
        <>
            {props.direction === 'right' ? 
                <div className={inView ? "story-card" : "story-card offscreen right"} 
                    ref={ref}
                >
                    <img src={props.image} alt="" className="icon" />
                    <div className="content">{props.content}</div>
                </div>
            :
                <div className={inView ? "story-card" : "story-card offscreen left"}  
                    ref={ref}
                >
                    <div className="content">{props.content}</div>
                    <img src={props.image} alt="" className="icon" />
                </div>    
            }
        </>
    )
}
