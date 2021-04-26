import './App.css';
import TitleContainer from './containers/title/TitleContainer'
import ProjectsContainer from './containers/projects/ProjectsContainer'
import ContactContainer from './containers/contact/ContactContainer'

function App() {
  return (
    <div className="App">
      <TitleContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
