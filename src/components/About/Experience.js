import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Assuming Particle is a component for background effects
import ExperienceCard from "./ExperienceCard"; // Assuming this is where individual experience cards are rendered

import realListLogo from "../../Assets/company/realListLogo.png";
import GS_logo_Black from "../../Assets/company/GS_logo_Black.png";
import argyleEnigma from "../../Assets/company/argyleEnigma.png";

// Experience data moved to the same file
const experiences = [
  {
    title: "React-Native Full Stack Developer Intern",
    companyName: "Real List.Ai Technologies,Benguluru",
    icon: realListLogo, // You should import the logo image for the icon
    iconBg: "#383E56",
    date: "July 2024 - October 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed a cross-platform mobile app with React Native, enhancing UI and boosting data retrieval by 40% using Express.js & Node.js for over 5,000 active users.",
    ],
  },
  {
    title: "React Native Developer Intern",
    companyName: "Girl Script Summer of Code , Pune , India",
    icon: GS_logo_Black, // You should import the logo image for the icon
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Developing and maintaining applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Designed a healthcare app UI using React Native, improving user engagement and reducing support queries by 30%.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Argyle Enigma Tech Lab , Ahmedabad",
    icon: argyleEnigma, // You should import the logo image for the icon
    iconBg: "#383E56",
    date: "October 2023 - April 2024",
    points: [
      "Developed and deployed RESTful APIs for the Fili: Financial Literacy app, showcasing React Native skills and app publishing on Google Play.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Utilized JIRA for project management, ensuring efficient task tracking.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                color: "#fff",
              }}
            >
              My Professional <strong className="purple">Experience</strong>
            </h1>

            {/* Render Experience Cards from the experiences array */}
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <ExperienceCard {...experience} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
