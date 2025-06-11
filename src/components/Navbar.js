import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "Kavin: lajara.kavin@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/IndexKay",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kavin-lajara/",
  },
  {
    icon: faInstagram,
    url: "https://www.linkedin.com",
  },
];

function Navbar() {

    const handleClick = (anchor) => {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    return(
        <nav>
            <img src="/logo.svg" alt="Kavin Lajara logo" className="logo"/>

            <div className="links">
              <a href='#landing' onClick={() => handleClick('landing')}>Home</a>
              <a href='#aboutMe' onClick={() => handleClick('aboutMe')}>About</a>
              <a href='#projects' onClick={() => handleClick('projects')}>Projects</a>
              <a href='#contact' onClick={() => handleClick('contact')}>Contact</a>
            </div>

            <div className="socials">
              {socials.map((social, index) => (
                <a href={social.url} key={index}> 
                  <FontAwesomeIcon icon={social.icon} className="icon"/>
                </a>
              ))}
            </div>
            
        </nav>
    )
}

export default Navbar;