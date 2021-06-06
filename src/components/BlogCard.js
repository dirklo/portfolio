import React from 'react'
import './BlogCard.css'
import dayjs from 'dayjs'

export default function BlogCard({ post }) {

    return (
        <div className='blog-card'>
            <h3>{dayjs(post.pubDate).format('MMMM D, YYYY')}</h3>
            <h2>{post.title}</h2>
            <img src={post.thumbnail} alt={post.title}/>
            <a href={post.link} target='blank'>Read Full Article</a>
        </div>
    )
}
