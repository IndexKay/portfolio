import React, { Children } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const def_Position = {
    name: 'developer',
    skills: [
        {skill: 'JavaScript', exp_lvl: 80, color: '#58A6FF'},
        {skill: 'React', exp_lvl: 70, color: '#60A5FA'},
        {skill: 'Node.js', exp_lvl: 60, color: '#22C55E'},
        {skill: 'MongoDB', exp_lvl: 70, color: '#16A34A'},
        {skill: 'HTML5/CSS3', exp_lvl: 100, color: '#CD581A'},
        {skill: 'Python', exp_lvl: 80, color: '#3B82F6'},
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
                    {skill: 'Illustrator', exp_lvl: 80, color: '#CD581A'},
                    {skill: 'UI Design', exp_lvl: 70, color: '#3B82F6'},
                    {skill: 'Figma', exp_lvl: 60, color: '#16A34A'},
                    {skill: 'Wireframing', exp_lvl: 70, color: '#22C55E'},
                    {skill: 'Photoshop', exp_lvl: 20, color: '#60A5FA'},
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

function AboutMeSection(){

    const [position, dispatch] = React.useReducer(reducer, def_Position);

    const handleChange = (e) => {
        dispatch({ type: e.target.value });
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
                <SyntaxHighlighter language="javascript" style={nightOwl} className='code'>
                    {position.desc}
                </SyntaxHighlighter>

                <div className="info">
                    <div className="skills">
                        {position.skills.map((skill) => (
                            <div className="item" style={{color: skill.color, borderColor: skill.color}}>
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
                                    <span style={{width:`${skill.exp_lvl}%`}}><span class="progress" style={{background: skill.color}}></span></span>
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