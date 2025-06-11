import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons";

import * as Yup from 'yup';
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

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
  const { onOpen } = useAlertContext();
 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit('/', values);
      console.log(values);
      onOpen(response.type, response.message);
      if(response.type === 'success'){
        values = {
          ...values,
          firstName: '',
          email: '',
          type: '',
          comment: ''
        }
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      type: Yup.string()
        .required('Required'),
      comment: Yup.string()
        .required('Required')
    }),
  });

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

  return (
    <section id="contact-section">
      <h1 className="title">Get In Touch</h1>
      <p className="desc">Have a project in mind or want to collaborate? Feel free to reach out!</p>

      <div className="content">
        <form onSubmit={formik.handleSubmit}>
           <div class="input-container">
              <label for="name" class="name">Name</label>
              <input 
                placeholder="Your name"
                name="firstName" 
                type="text" 
                class="input"
                onChange={formik.handleChange}
                value={formik.getFieldProps.firstName}
                required
              />
              <div class="underline"></div>
            </div>

            <div class="input-container">
              <label for="email" class="email">Email</label>
              <input 
                placeholder="your.email@example.com"
                name="email"
                type="text" 
                class="input"
                onChange={formik.handleChange}
                value={formik.getFieldProps.email}
                required
              />
              <div class="underline"></div>
            </div>

            <div class="input-container">
              <label for="subject" class="subject">Subject</label>
              <input 
                placeholder="What's this about"
                name="type" 
                type="text" 
                class="input"
                onChange={formik.handleChange}
                value={formik.getFieldProps.type}
                required
              />
              <div class="underline"></div>
            </div>

            <div class="input-container">
              <label for="message" class="message">Message</label>
              <input 
                placeholder="Tell me about your reason for contact..."
                name="comment"
                type="textarea" 
                class="input"
                onChange={formik.handleChange}
                value={formik.getFieldProps.comment}
                required
              />
            </div>

            <button className="btn" type="submit">
              {isLoading ? (
                <svg viewBox="25 25 50 50" className="loader">
                  <circle r="20" cy="50" cx="50"></circle>
                </svg>
              ):(
                <>Submit</>
              )}
            </button>
        </form>

        <div className="info">
          <SyntaxHighlighter language="javascript" style={codeTheme} className='code'>
            {desc}
          </SyntaxHighlighter>
          <div className="contact">
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
              <div>
                <h4>Email</h4>
                <a href="">lajara.kavin@gmail.com</a>
              </div>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="icon"/>
              <div>
                <h4>Phone</h4>
                <a href="">+1 (203) 212-4876</a>
              </div>
            </div>

            <div>
              <FontAwesomeIcon icon={faLocationDot} className="icon"/>
              <div>
                <h4>Location</h4>
                <p>Bridgeport, CT</p>
              </div>
            </div>
          </div>
          <div className="links">
            <h4>Connect with me</h4>
            <div>
              <a href=""><FontAwesomeIcon icon={faGithub} className="icon"/></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactMeSection;