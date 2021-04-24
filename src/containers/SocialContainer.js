import React from 'react'
import './SocialContainer.css'
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'

function SocialContainer() {
    return (
        <div className="social-container">
            <a 
                href="https://github.com/dirklo" 
                target="_blank" 
                rel="noreferrer"
            >
                <img src={github} alt="github link" />
            </a>
            <a 
                href="https://www.linkedin.com/in/rick-moore-5b587a99/" 
                target="_blank" 
                rel="noreferrer"
            >
                <img src={linkedin} alt="linkedin link" />
            </a>
            <a 
                href="https://twitter.com/rickstachemoore" 
                target="_blank" 
                rel="noreferrer"
            >
                <img src={twitter} alt="twitter link" />
            </a>
        </div>
    )
}

export default SocialContainer
