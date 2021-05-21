import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'
import './NavMenu.css'

export default function NavMenu(props) {

    const [active, setActive] = useState(false)

    const handleClick = (e) => {
        setActive(false)
        props.setHidePage()
    }

    return (
        <>
            <div 
                className='nav-menu-button'
                onClick={() => {
                    setActive(!active)
                    setTimeout(() => props.setHidePage(), 1000)
                    
                }}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                <Router>
                    <div className={active ? "nav-menu show" : "nav-menu hide"}>
                        <HashLink 
                            to='#projects'
                            onClick={(e) => handleClick(e)}
                        >
                            Projects
                        </HashLink>
                        <HashLink 
                            to='#story'
                            onClick={(e) => handleClick(e)}
                        >
                            About Me
                        </HashLink>
                        <HashLink 
                            to='#resume'
                            onClick={(e) => handleClick(e)}
                        >
                            Resume
                        </HashLink>
                        <HashLink 
                            to='#contact'
                            onClick={(e) => handleClick(e)}
                        >
                            Contact
                        </HashLink>
                    </div>
                </Router>
        </>
    )
}
