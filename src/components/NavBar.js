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
                    <HashLink 
                        smooth
                        to='#resume'
                    >
                        Resume
                    </HashLink>
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
