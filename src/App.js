import './App.css';
import TitleContainer from './containers/TitleContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ContactContainer from './containers/ContactContainer'

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
