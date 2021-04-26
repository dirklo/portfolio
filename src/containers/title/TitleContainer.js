import './TitleContainer.css'
import mainPortrait from '../../img/mainportrait.png'
import SocialContainer from './SocialContainer'
import IntroContainer from './IntroContainer'
import NavBar from '../../components/NavBar'
import React, { useEffect } from 'react'
import Rellax from "rellax";

export default function TitleContainer() {
    useEffect(() => {
        new Rellax(".slow", {
            speed: -5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, []);
    return (
        <div className="title_container slow">
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
