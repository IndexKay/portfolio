import './assets/css/App.css';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectsSection';

function App() {
  return (
    <main>
      <Navbar/>
      <LandingSection/>
      <AboutMeSection/>
      <ProjectSection/>
    </main>
  );
}

export default App;
