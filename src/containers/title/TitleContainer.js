import React from 'react'
import './TitleContainer.css'
import mainPortrait from '../../img/mainportrait.png'
import logo from '../../img/logo.png'
import SocialContainer from './SocialContainer'
import IntroContainer from './IntroContainer'
// import NavBar from '../../components/NavBar'
// import NavMenu from '../../components/NavMenu'
// import Rellax from "rellax";

export default function TitleContainer(props) {

    // useEffect(() => {
    //     new Rellax(".slow", {
    //         speed: -5,
    //         center: false,
    //         wrapper: null,
    //         round: true,
    //         vertical: true,
    //         horizontal: false
    //     });
    // }, []);
    return (
        <div className={props.loading ? 'title-container loading' : 'title-container'} >
            <h1>Rick Moore</h1>
            <img src={mainPortrait} id="main-portrait" alt="main portrait" />
            <img src={logo} id="logo" alt="logo" />
            <div id="diamond"></div>
            <div id="diamond2"></div>
            <div id="rect1"></div>
            <SocialContainer />
            <IntroContainer />
        </div>
    )
}
