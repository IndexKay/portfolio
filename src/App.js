import './assets/css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";

const skillColors = [
  {skill: 'JavaScript', color: '#58A6FF'},
  {skill: 'React', color: '#60A5FA'},
  {skill: 'Remix.js', color: '#16f799'},
  {skill: 'Node.js', color: '#22C55E'},
  {skill: 'MongoDB', color: '#16A34A'},
  {skill: 'HTML5/CSS3', color: '#CD581A'},
  {skill: 'Python', color: '#3B82F6'},
  {skill: 'Kivy', color: '#3B62F6'},
  {skill: 'JSON', color: '#CD581A'},
  {skill: 'C', color: '#f3f716'},
  {skill: 'Ollama', color: '#dcdfde'},
  {skill: 'Whisper', color: '#abe2d0'},
  {skill: 'ChromaDB', color: '#55f82c'},
  {skill: 'Postgresql', color: '#2c9cf8'},
  {skill: 'Adobe Illustrator', color: '#CD581A'},
  {skill: 'UI Design', color: '#3B82F6'},
  {skill: 'UX Design', color: '#3A9231'},
  {skill: 'Figma', color: '#16A34A'},
  {skill: 'Wireframing', color: '#22C55E'},
  {skill: 'Photoshop', color: '#60A5FA'},
  {skill: 'Prototyping', color: '#6034FA'},
  {skill: 'Web Design', color: '#CD581A'},
]

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Navbar/>
          <LandingSection/>
          <AboutMeSection skillColors={skillColors}/>
          <ProjectSection skillColors={skillColors}/>
          <ContactMeSection/>
          <Alert/>
          <Footer/>
        </main>
      </AlertProvider>
    </ChakraProvider>
    
  );
}

export default App;
