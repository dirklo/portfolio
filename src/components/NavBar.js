import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <a href='#projects'>Projects</a>
                <a href='#resume'>Resume</a>
                <a href='#contact'>Contact</a>
            </div>
        )
    }
}
