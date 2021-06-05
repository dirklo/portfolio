import React, { useState, useEffect } from 'react'
import './BlogContainer.css'
import BlogCard from '../../components/BlogCard'

export default function BlogContainer() {
    const [ blogPosts, setBlogPosts ] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dirklo')
        .then(res => res.json())
        .then(json => {
            setBlogPosts(json.items.slice(0, 4))
        })
    }, [])

    return (
        <div className='blog-container'>
            <h1>My Recent Publications</h1>
            <br/>
            <div className="blog-list">
                {blogPosts.map((post, index) => 
                    <BlogCard key={index} post={post} />
                )}
            </div>
        </div>
    )
}
