import './App.css';
import React, { useState } from 'react'
import TitleContainer from './containers/title/TitleContainer'
import ProjectsContainer from './containers/projects/ProjectsContainer'
import StoryContainer from './containers/story/StoryContainer'
import ResumeContainer from './containers/resume/ResumeContainer'
import ContactContainer from './containers/contact/ContactContainer'
import VideoContainer from './containers/video/VideoContainer'
import { css } from "@emotion/core"
import PropagateLoader from "react-spinners/PropagateLoader"
import OnImagesLoaded from 'react-on-images-loaded'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'
import BlogContainer from './containers/blog/BlogContainer';
import MetaTags from 'react-meta-tags'

const override = css(`
  display: block;
  margin: 0 auto;
  border-color: red;
`);

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ hidePage, setHidePage ] = useState(false)

  return (
    <>
      <MetaTags>
              <title>Rick Moore Portfolio</title>
              <meta name="description" content="Development Portfolio for Rick Moore." />
              <meta property="og:title" content="Right Moore Portfolio" />
              <meta property="og:image" content="./img/logo.png" />
      </MetaTags>
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
              <NavBar loading={loading}/>
            </nav>
            <nav className="navmenu-wrapper">
              <NavMenu setHidePage={(bool) => setHidePage(bool)} loading={loading}/>
            </nav>
            {
              !hidePage ?
                <>
                  <TitleContainer loading={loading} />
                  <VideoContainer loading={loading} />
                  <ProjectsContainer loading={loading}/>
                  <BlogContainer loading={loading} />
                  <StoryContainer loading={loading}/>
                  <ResumeContainer loading={loading}/>
                  <ContactContainer loading={loading}/>
                </>
              :null
            }
        </div>
      </OnImagesLoaded>
    </>
  )
}

export default App;
