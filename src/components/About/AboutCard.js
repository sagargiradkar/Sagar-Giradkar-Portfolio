import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sagar Giradkar</span> from <span className="purple">Pune, India</span>.
            <br />
            I am currently pursuing a Bachelor's degree in Information Technology at PVG's College of Engineering and Technology under Savitribai Phule Pune University.
            <br />
            I have completed internships in full-stack and mobile development roles at companies like Argyle Enigma Tech Labs, Real List AI Technologies, and Smile Computer Education.
            <br />
            I'm passionate about developing innovative, real-world solutions and have hands-on experience in frontend, backend, and AI-powered systems.
            <br />
            I’ve worked on projects such as a smart robotic system using computer vision and an e-learning platform, and contributed to a Scopus-indexed research paper in AI and robotics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and frameworks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Sagar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
