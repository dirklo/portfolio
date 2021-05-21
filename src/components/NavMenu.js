import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'
import './NavMenu.css'

let timer;

export default function NavMenu(props) {

    const [active, setActive] = useState(false)

    const handleMenuClick = () =>  {
        setActive(true)
        timer = setTimeout(() => props.setHidePage(true), 1000)
        console.log('in timeout ' + timer)
    }

    const handleClick = () => {
        console.log('in click ' + timer)
        clearTimeout(timer)
        setActive(false)
        props.setHidePage(false)
    }

    return (
        <>
            <div 
                className={props.loading ? 'nav-menu-button loading' : 'nav-menu-button'}
                onClick={() => handleMenuClick()}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                <Router>
                    <div className={active ? "nav-menu show" : "nav-menu hide"}>
                        <HashLink 
                            to='#projects'
                            onClick={() => {
                                handleClick()
                                console.log('in button ' + timer)
                            }}
                        >
                            Projects
                        </HashLink>
                        <HashLink 
                            to='#story'
                            onClick={() => handleClick()}
                        >
                            About Me
                        </HashLink>
                        <HashLink 
                            to='#resume'
                            onClick={() => handleClick()}
                        >
                            Resume
                        </HashLink>
                        <HashLink 
                            to='#contact'
                            onClick={() => handleClick()}
                        >
                            Contact
                        </HashLink>
                    </div>
                </Router>
        </>
    )
}
