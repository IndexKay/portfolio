import React from "react";
import Typewriter from 'typewriter-effect';

const Titles = [
    "Full Stack Developer & UI Designer",
    "Frontend Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Web Developer",
];
const bio = "My name is Kavin Lajara, I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your vision into reality.";

function LandingSection() {

    return(
        <section id="landing-section">
            <div className="content">
                <div className="tag">
                    Available for Professional Work
                </div>
                <h1 className='title'>
                    <Typewriter
                        options={{
                            strings: Titles,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                
                <p className="bio">{bio}</p>
                <div className="btn-container">
                    <button className="btn1">Get in touch</button>
                    <button className="btn2">View my work</button>
                </div>
            </div>
        
            <div className="pfp">
                <img src={require('../assets/imgs/pfp_3.jpg')} alt='pfp'/>
            </div>

        </section>
    );
}

export default LandingSection;