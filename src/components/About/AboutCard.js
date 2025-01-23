import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Sagar Giradkar </span>
          from <span className="purple"> Pune, India.</span>
          <br />
          I am currently pursuing a Bachelor's of Engineering in Information Technology at PVGCOET Pune.
          <br />
          I am passionate about developing innovative solutions, with a keen interest in fronend , backend development and AI-based tools.
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
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Sagar</footer>
      </blockquote>
    </Card.Body>
  </Card>
  
  );
}

export default AboutCard;
