

function Footer() {

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
        <footer>
            <img src="/logo.svg" alt="Kavin Lajara logo" className="logo"/>

            <div className="links">
              <a href='#landing' onClick={() => handleClick('landing')}>Home</a>
              <a href='#aboutMe' onClick={() => handleClick('aboutMe')}>About</a>
              <a href='#projects' onClick={() => handleClick('projects')}>Projects</a>
              <a href='#contact' onClick={() => handleClick('contact')}>Contact</a>
            </div>

            <p className="copy-rights">
              © 2025 John Doe. All rights reserved
            </p>
            
        </footer>
    )
}

export default Footer;