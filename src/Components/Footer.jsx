/**
 * Footer component
 *
 * Rodapé com informações de contato e redes sociais
 */
import React from "react";

const Footer = (props) => {
  const {
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <footer className="footer" style={{ backgroundColor: primaryColor }}>
      <div className="footer-container">
        <div className="footer-socials">
          {email && (
            <a href={`mailto:${email}`} title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          )}
          {gitHub && (
            <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
          )}
          {instagram && (
            <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
          {linkedIn && (
            <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          )}
          {medium && (
            <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer" title="Medium">
              <i className="fa-brands fa-medium"></i>
            </a>
          )}
          {twitter && (
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" title="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          )}
          {youTube && (
            <a href={`https://www.youtube.com/@${youTube}`} target="_blank" rel="noopener noreferrer" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          )}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 {name} - Desenvolvedor Web & DevSecOps</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
