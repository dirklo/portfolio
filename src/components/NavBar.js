import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css'

function NavBar(props) {
    return (
        <div className={props.loading ? "nav-bar loading" : "nav-bar"}>
            <Router>
                <HashLink 
                    smooth
                    to='#projects'
                >
                    Projects
                </HashLink>
                <HashLink 
                    smooth
                    to='#story'
                >
                    About Me
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

export default NavBar
