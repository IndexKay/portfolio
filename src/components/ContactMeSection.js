import React, {useEffect} from "react";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import useSubmit from "../hooks/useSubmit";

const desc = `
// Let's work together
const Contact = {
email: 'lajara.kavin@gmail.com',
phone: '+1 (203) 212-4876',
location: 'Bridgeport, CT',
availability: 'Open to freelance & full-time opportunities',
response_time: 'Usually within 24 hours'
};
`


const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();

  const codeTheme = {
    ...nightOwl,
    backgroundColor: '#000'
  };

  return (
    <section id="contact-section">
      <h1 className="title">Get In Touch</h1>
      <p className="desc">Have a project in mind or want to collaborate? Feel free to reach out!</p>

      <div className="content">
        <form>
           <div class="input-container">
              <label for="name" class="name">Name</label>
              <input placeholder="Your name" type="text" class="input"/>
              <div class="underline"></div>
            </div>

            <div class="input-container">
              <label for="email" class="email">Email</label>
              <input placeholder="your.email@example.com" type="text" class="input"/>
              <div class="underline"></div>
            </div>

            <div class="input-container">
              <label for="subject" class="subject">Subject</label>
              <input placeholder="What's this about" type="text" class="input"/>
              <div class="underline"></div>
            </div>

            <div class="input-container">
              <label for="message" class="message">Message</label>
              <input placeholder="Tell me about your reason for contact..." type="textarea" class="input"/>
            </div>

            <button className="btn" type="submit">
              Submit
            </button>
        </form>

        <div className="info">
          <SyntaxHighlighter language="javascript" style={codeTheme} className='code'>
            {desc}
          </SyntaxHighlighter>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope}/>
          </div>
          <div className="links">

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactMeSection;