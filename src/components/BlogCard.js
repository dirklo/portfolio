import React from 'react'
import './BlogCard.css'

export default function BlogCard({ post }) {

    function parseDate(date) {
        const newDate = new Date(date)
        return newDate.toDateString()
    }

    return (
        <div className='blog-card'>
            <h3>{parseDate(post.pubDate)}</h3>
            <h2>{post.title}</h2>
            <img src={post.thumbnail} alt={post.title}/>
            <a href={post.link} target='blank'>Read Full Article</a>
        </div>
    )
}
