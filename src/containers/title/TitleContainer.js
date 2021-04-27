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
        <div className="title_container">
            <h1>Rick Moore</h1>
            <img src={mainPortrait} id="main-portrait" alt="main portrait" />
            <div id="diamond"></div>
            <div id="diamond2"></div>
            <div id="rect1"></div>
            <SocialContainer />
            <IntroContainer />
            <NavBar />
        </div>
    )
}
