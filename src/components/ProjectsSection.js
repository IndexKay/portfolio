import React from "react";
import Card from "./Card.js";

const projects = [
  {
    type: "development",
    title: "NASA HUNCH Software",
    description:
      "Developed a GUI for astronauts to conduct experiments on the International Space Station.",
    icon: 'fa-solid fa-flask',
    tags: [ 'Python', 'Kivy', 'JSON'],
    color: '#3B82F6'
  },
  {
    type: "development",
    title: "Smart-Watch Operating System",
    description:
      "Built a functional prototype OS with Wi-Fi, Bluetooth, and NFC capabilities.",
    icon: '',
    tags: ['Python', 'C', 'Adobe Illustrator'],
    color: '#16A34A'
  },
  {
    type: "development",
    title: "Project Management Tool",
    description:
      "Created a full-stack application for managing client data, quotes, calendars, and support tickets.",
    icon: '',
    tags: ['React', 'Remix.js', 'MongoDB'],
    color: '#dd47d3'
  },
  {
    type: "development",
    title: "AI Virtual Assistant",
    description:
      "Developed a JARVIS-inspired virtual assistant with real-time speech-to-text, natural language processing, and human-like text-to-speech capabilities",
    icon: '',
    tags: [ 'Python', 'Ollama', 'Whisper', 'CromaDB', 'Postgresql'],
    color: '#58A6FF'
  },
]

function ProjectSection() {
    const [type, setType] = React.useState('development')

    const handleChange = (e) => {
        setType(e.target.value);
    }

    return(
        <section id="projects-section">
            <div>
              <h1 className="title">Featured Projects</h1>
              <p className="desc"> A selection of my recent work across development and design </p>
            </div>
            
            <div class="radio-input">
                <label>
                    <input 
                        value="development" 
                        name="type" 
                        type="radio"
                        checked={type === 'development'}
                        onChange={handleChange}
                    />
                    <span>Development</span>
                </label>
                <label>
                    <input 
                        value="design" 
                        name="type" 
                        type="radio"
                        checked={type === 'design'}
                        onChange={handleChange}
                    />
                    <span>Design</span>
                </label>
                <span class="selection"></span>
            </div>

            <div className="content">
              {projects.map((project)=>(
                <Card title={project.title} description={project.description} icon={project.icon} tags={project.tags} color={project.color}/>
              ))}
            </div>

        </section>
    )
}

export default ProjectSection;