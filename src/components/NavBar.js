import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <Router>
                    <HashLink 
                        smooth
                        to='#projects'
                    >
                        Projects
                    </HashLink>
                <a href='#resume'>Resume</a>
                    <HashLink 
                        smooth
                        to='#contact'
                    >
                        Contact
                    </HashLink>
                </Router>
            </div>
        )
    }
}
