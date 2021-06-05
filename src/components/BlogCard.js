import React from 'react'
import './BlogCard.css'

export default function BlogCard({ post }) {
    return (
        <div className='blog-card'>
            <h2>{post.title}</h2>
            <h3>{post.pubDate.split(' ')[0]}</h3>
            <img src={post.thumbnail} alt={post.title}/>
            <a href={post.link}>Read more...</a>
        </div>
    )
}
