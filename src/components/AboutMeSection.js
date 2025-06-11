import React, { Children } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const def_Position = {
    name: 'developer',
    skills: [
        {skill: 'JavaScript', exp_lvl: 80},
        {skill: 'React', exp_lvl: 70},
        {skill: 'Node.js', exp_lvl: 60},
        {skill: 'MongoDB', exp_lvl: 70},
        {skill: 'HTML5/CSS3', exp_lvl: 100},
        {skill: 'Python', exp_lvl: 80},
    ],
    desc: `
// About me as a developer
const Developer = {
    name: 'Kavin lajara',
    title: 'Full Stack Developer',
    experience: '2+ years',
    skills: [
    'JavaScript', 'React', 'HTML5/CSS3',
    'Node.js', 'MongoDB', 'Python'
    ],
    code() {
    return 'Clean, efficient, and scalable solutions';
    }
}
`
};

function reducer(state, action) {
    switch(action.type) {
        case 'developer': {
            return {
                ...def_Position
            };
        }
        case 'designer': {
            return {
                name: 'designer',
                skills: [
                    {skill: 'Adobe Illustrator', exp_lvl: 80},
                    {skill: 'UI Design', exp_lvl: 70},
                    {skill: 'Figma', exp_lvl: 60},
                    {skill: 'Wireframing', exp_lvl: 70},
                    {skill: 'Photoshop', exp_lvl: 20},
                ],
                desc: `
// About me as a designer
const Designer = {
    name: 'Kavin lajara',
    title: 'UI/UX & Graphic Designer',
    experience: '4+ years',
    skills: [
    'Figma', 'Prototyping', 'Photoshop',
    'Illustrator', 'UI Design', 'Branding',
    'Wireframing'
    ],
    design() {
    return 'Beautiful, intuitive, and user-centered interfaces';
    }
}
`
            };
        }
    }
}

function AboutMeSection({ skillColors }){

    const [position, dispatch] = React.useReducer(reducer, def_Position);

    const codeTheme = {
        ...nightOwl,
        "pre[class*=\"language-\"]": {
          "color": "white",
          "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
          "textAlign": "left",
          "whiteSpace": "pre",
          "wordSpacing": "normal",
          "wordBreak": "normal",
          "wordWrap": "normal",
          "lineHeight": "1.5",
          "fontSize": "1em",
          "MozTabSize": "4",
          "OTabSize": "4",
          "tabSize": "4",
          "WebkitHyphens": "none",
          "MozHyphens": "none",
          "msHyphens": "none",
          "hyphens": "none",
          "padding": "1em",
          "margin": "0.5em 0",
          "overflow": "auto",
          "background": "linear-gradient(to right, #161B21, #202a36)"
        }
    
      };

    const handleChange = (e) => {
        dispatch({ type: e.target.value });
    }

    const colorFinder = (skillName) =>{
        const obj = skillColors.find(({ skill }) => skill === skillName)
        return obj.color;
    }

    return(
        <section id='aboutMe-section'>
            <h1 className="title">About Me</h1>

            <div class="radio-input">
                <label>
                    <input 
                        value="developer" 
                        name="position" 
                        type="radio"
                        checked={position.name==='developer'}
                        onChange={handleChange}/>
                    <span>Developer</span>
                </label>
                <label>
                    <input 
                        value="designer" 
                        name="position" 
                        type="radio"
                        checked={position.name==='designer'} 
                        onChange={handleChange}/>
                    <span>Designer</span>
                </label>
                <span class="selection"></span>
            </div>

            <div className="content">
                <SyntaxHighlighter language="javascript" style={codeTheme} className='code'>
                    {position.desc}
                </SyntaxHighlighter>

                <div className="info">
                    <div className="skills">
                        {position.skills.map((skill) => (
                            <div className="item" style={{color: colorFinder(skill.skill), borderColor: colorFinder(skill.skill)}}>
                                {skill.skill}
                            </div>  
                        ))}
                    </div>

                    <div className="levels">
                        <h2>Experience Levels</h2>
                        {position.skills.map((skill) => (
                            <div className="item">
                                <h4>{skill.skill}</h4>
                                <div class="meter">
                                    <span style={{width:`${skill.exp_lvl}%`}}><span class="progress" style={{background: colorFinder(skill.skill)}}></span></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p>I'm a passionate full stack developer and UI/graphic designer with a strong focus on creating seamless, user-friendly experiences. With over 5 years of experience, I've worked on a variety of projects from e-commerce platforms to complex web applications.</p>
                    <p>My approach combines technical expertise with creative problem-solving, allowing me to build solutions that are not only functional but also visually appealing and intuitive to use.</p>
                </div>
            </div>

        </section>
    )
}

export default AboutMeSection;