import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Main</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            {/* <li><Link to="/project">Projects</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/resume">Resume</Link></li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Learn</h3>
          <ul className="footer-links">
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            {/* <li><Link to="/refund">Refund</Link></li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Social</h3>
          <ul className="footer-social-links">
            <li>
              <a href="https://github.com/sagargiradkar" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sagargiradkar" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter (X)
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube /> YouTube
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with <span className="heart">❤️</span> and <span className="coffee">☕</span> in India</p>
      </div>
    </footer>
  );
}

export default Footer;
