import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Mobile Footer - Only shown on small screens */}
      <div className="mobile-footer">
        <div className="mobile-footer-content">
          <h3>Designed and Developed by Sagar Giradkar</h3>
          <h3>Copyright © {year} Sagar Giradkar</h3>

          <ul className="mobile-social-icons">
            <li className="social-icon-item">
              <a
                href="https://github.com/sagargiradkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icon-item">
              <a
                href="https://twitter.com/sagargiradkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icon-item">
              <a
                href="https://www.linkedin.com/in/sagar-giradkar-b21581234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icon-item">
              <a
                href="https://www.instagram.com/sagar_giradkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Footer - Only shown on medium and large screens */}
      <div className="desktop-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Main</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              {/* <li><Link to="/experience">Experience</Link></li> */}
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
            </ul>
          </div>

          <div className="footer-column">
            <h3>Social</h3>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/sagargiradkar" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sagar-giradkar-b21581234/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn /> Linkedin
                </a>
              </li>
              {/* <li>
                <a href="https://www.instagram.com/sagar_giradkar" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram /> Instagram
                </a>
              </li> */}
              {/* <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook /> Facebook
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="footer-bottom desktop-only">
          <div className="copyright-row">
            <div className="copyright-col">
              <h3>Designed and Developed by Sagar Giradkar</h3>
            </div>
            <div className="copyright-col">
              <h3>Copyright © {year} Sagar Giradkar</h3>
            </div>
          </div>
          <p>Made with <span className="heart">❤️</span> and <span className="coffee">☕</span> in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;