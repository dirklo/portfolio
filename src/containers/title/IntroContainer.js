import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom';
import './IntroContainer.css'
import ArrowRight from '@material-ui/icons/ArrowRight'

function IntroContainer() {
    return (
        <div className="intro-container">
            <p id="top">-Introduction-</p>
            <p id="middle">Full-Stack<br/>Web Developer</p>
            <p id="bottom">Creative web product designer, with experience in React/Redux, Ruby on Rails, NodeJS/Express, Python, HTML5, CSS3</p>
            <br />
            <br />
            <Router>
                <HashLink 
                    smooth
                    to='#story'
                >
                    My Story<ArrowRight />
                </HashLink>
            </Router>
        </div>
    )
}

export default IntroContainer