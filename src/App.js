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

const override = css(`
  display: block;
  margin: 0 auto;
  border-color: red;
`);

function App() {
  const [loading, setLoading ] = useState(true)

  useEffect(() => { 
    document.title = "Rick Moore Portfolio"
  }, [])

  return (
    <div className="App">
      <OnImagesLoaded 
        onLoaded={() => setLoading(false)}
      >
        {loading ?
            <div className="loader">
              <PropagateLoader color='gold' loading={loading} css={override} size={20} />
            </div>
          : null
        }
          <TitleContainer loading={loading} />
          <ProjectsContainer loading={loading}/>
          <StoryContainer loading={loading}/>
          <ResumeContainer loading={loading}/>
          <ContactContainer loading={loading}/>
      </OnImagesLoaded>
    </div>
  )
}

export default App;
