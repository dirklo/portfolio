import React, { Component } from 'react'
import './TitleContainer.css'
import mainPortrait from '../img/mainportrait.png'
import SocialContainer from './SocialContainer'
import IntroContainer from './IntroContainer'

export default class TitleContainer extends Component {
    render() {
        return (
            <div className="title_container">
                <h1>Rick Moore</h1>
                <img src={mainPortrait} id="main-portrait" alt="main portrait" />
                <SocialContainer />
                <IntroContainer />
            </div>
        )
    }
}
