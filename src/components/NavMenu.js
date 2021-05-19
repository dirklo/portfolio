import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'
import './NavMenu.css'

export default function NavMenu() {

    const [active, setActive] = useState(false)
    return (
        <>
            <div 
                className='nav-menu-button'
                onClick={() => setActive(!active)}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                <Router>
                    <div className={active ? "nav-menu show" : "nav-menu hide"}>
                        <HashLink 
                            smooth
                            to='#projects'
                            onClick={() => setActive(false)}
                        >
                            Projects
                        </HashLink>
                        <HashLink 
                            smooth
                            to='#story'
                            onClick={() => setActive(false)}
                        >
                            About Me
                        </HashLink>
                        <HashLink 
                            smooth
                            to='#resume'
                            onClick={() => setActive(false)}
                        >
                            Resume
                        </HashLink>
                        <HashLink 
                            smooth
                            to='#contact'
                            onClick={() => setActive(false)}
                        >
                            Contact
                        </HashLink>
                    </div>
                </Router>
        </>
    )
}
