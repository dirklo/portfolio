import React from 'react'
import './StoryContainer.css'
import StoryCard from '../../components/StoryCard'
import stories from '../../data/stories'

export default function StoryContainer(props) {
    return (
        <div 
            className={props.loading ? 'story-container loading' : 'story-container'}
            id="story"
        >
            {stories.map((story, index) => <StoryCard
                key={index}
                content={story.content}
                image={story.image}
                direction={story.direction}
            />)}
        </div>
    )
}
