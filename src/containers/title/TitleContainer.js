import './TitleContainer.css'
import mainPortrait from '../../img/mainportrait.png'
import SocialContainer from './SocialContainer'
import IntroContainer from './IntroContainer'
import NavBar from '../../components/NavBar'
import React from 'react'

export default function TitleContainer() {
    return (
        <div className="title_container">
            <h1>Rick Moore</h1>
            <img src={mainPortrait} id="main-portrait" alt="main portrait" />
            <div id="rect1"></div>
            <div id="diamond" className='slow'></div>
            <div id="diamond2" className='slower'></div>
            <SocialContainer />
            <IntroContainer />
            <NavBar />
        </div>
    )
}


