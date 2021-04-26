import './App.css';
import React, { Component } from 'react'
import TitleContainer from './containers/title/TitleContainer'
import ProjectsContainer from './containers/projects/ProjectsContainer'
import ContactContainer from './containers/contact/ContactContainer'

class App extends Component {
  componentDidMount() {
    document.title = "Rick Moore Portfolio"
  }

  render() {
    return (
      <div className="App">
        <TitleContainer />
        <ProjectsContainer />
        <ContactContainer />
      </div>
    );
  }
}

export default App;
