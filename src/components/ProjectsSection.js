import React from "react";
import Card from "./Card.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faCodeBranch, faBarsProgress, faRobot } from "@fortawesome/free-solid-svg-icons";

const def_projects = {
  name: 'development',
  list: [
    {
      title: "NASA HUNCH Software",
      description:
        "Developed a GUI for astronauts to conduct experiments on the International Space Station.",
      icon: faFlask,
      tags: [ 'Python', 'Kivy', 'JSON'],
    },
    {
      title: "Smart-Watch Operating System",
      description:
        "Built a functional prototype OS with Wi-Fi, Bluetooth, and NFC capabilities.",
      icon: faCodeBranch,
      tags: ['Python', 'C', 'Adobe Illustrator'],
    },
    {
      title: "Project Management Tool",
      description:
        "Created a full-stack application for managing client data, quotes, calendars, and support tickets.",
      icon: faBarsProgress,
      tags: ['React', 'Remix.js', 'MongoDB'],
    },
    {
      title: "AI Virtual Assistant",
      description:
        "Developed a JARVIS-inspired virtual assistant with real-time speech-to-text, natural language processing, and human-like text-to-speech capabilities",
      icon: faRobot,
      tags: [ 'Python', 'Ollama', 'Whisper', 'ChromaDB', 'Postgresql'],
    },
  ]
}

function reducer(state, action) {
    switch(action.type) {
        case 'development': {
            return {
                ...def_projects
            };
        }
        case 'design': {
            return {
                name: 'design',
                list: [
                  {
                    title: "Mobile App UI Design",
                    description:
                      "A clean and modern UI design for a fitness tracking mobile application.",
                    icon: faFlask,
                    tags: [ 'Figma', 'UI Design', 'Prototyping'],
                  },
                  {
                    title: "Website Redesign",
                    description:
                      "Complete redesign of an e-learning platform with improved UX and modern visual design.",
                    icon: faCodeBranch,
                    tags: ['Web Design', 'UX Design', 'Figma'],
                  },
                ]
            };
        }
    }
}



function ProjectSection({ skillColors }) {
    const [category, dispatch] = React.useReducer(reducer, def_projects);

    const handleChange = (e) => {
      dispatch({type: e.target.value});
    }

    return(
        <section id="projects-section">
            <div>
              <h1 className="title">Featured Projects</h1>
              <p className="desc">A selection of my recent work across development and design</p>
            </div>
            
            <div class="radio-input">
                <label>
                    <input 
                        value="development" 
                        name="category" 
                        type="radio"
                        checked={category.name==='development'}
                        onChange={handleChange}
                    />
                    <span>Development</span>
                </label>
                <label>
                    <input 
                        value="design"
                        name="category"
                        type="radio"
                        checked={category.name==='design'}
                        onChange={handleChange}
                    />
                    <span>Design</span>
                </label>
                <span class="selection"></span>
            </div>

            <div className="content">
              {category.list.map((project)=>(
                <Card title={project.title} description={project.description} icon={project.icon} tags={project.tags} colors={skillColors}/>
              ))}
            </div>

        </section>
    )
}

export default ProjectSection;