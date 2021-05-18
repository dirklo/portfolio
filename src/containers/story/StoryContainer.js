import React from 'react'
import './StoryContainer.css'
import StoryCard from '../../components/StoryCard'
import stories from '../../data/stories'

export default function StoryContainer() {
    return (
        <div className="story-container"
            id="story"
        >
            {stories.map(story => <StoryCard 
                content={story.content}
                image={story.image}
                direction={story.direction}
            />)}
        </div>
    )
}
