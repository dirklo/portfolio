import React, { Component } from 'react'
import './IntroContainer.css'

export default class IntroContainer extends Component {
    render() {
        return (
            <div className="intro-container">
                <p id="top">-Introduction-</p>
                <p id="middle">Full-Stack<br/>Web Developer</p>
                <p id="bottom">Creative web product designer, with experience in React/Redux, Ruby on Rails, NodeJS/Express, Python, HTML5, CSS3</p>
                <a href="http://nowhere.com">My Story &gt;</a>
            </div>
        )
    }
}
