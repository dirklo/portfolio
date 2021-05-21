import './App.css';
import React, { useState, useEffect } from 'react'
import TitleContainer from './containers/title/TitleContainer'
import ProjectsContainer from './containers/projects/ProjectsContainer'
import StoryContainer from './containers/story/StoryContainer'
import ResumeContainer from './containers/resume/ResumeContainer'
import ContactContainer from './containers/contact/ContactContainer'
import { css } from "@emotion/core"
import PropagateLoader from "react-spinners/PropagateLoader"
import OnImagesLoaded from 'react-on-images-loaded'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'

const override = css(`
  display: block;
  margin: 0 auto;
  border-color: red;
`);

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ hidePage, setHidePage ] = useState(false)

  useEffect(() => { 
    document.title = "Rick Moore Portfolio"
  }, [])

  return (
    <OnImagesLoaded 
        onLoaded={() => setLoading(false)}
      >
      <div className="App">
        {loading ?
            <div className="loader">
              <PropagateLoader color='gold' loading={loading} css={override} size={20} />
            </div>
          : null
        }
          <nav className="navbar-wrapper">
            <NavBar />
          </nav>
          <nav className="navmenu-wrapper">
            <NavMenu setHidePage={() => setHidePage(!hidePage)}/>
          </nav>
          {
            !hidePage ?
              <>
                <TitleContainer loading={loading} />
                <ProjectsContainer loading={loading}/>
                <StoryContainer loading={loading}/>
                <ResumeContainer loading={loading}/>
                <ContactContainer loading={loading}/>
              </>
            :null
          }
      </div>
    </OnImagesLoaded>
  )
}

export default App;
