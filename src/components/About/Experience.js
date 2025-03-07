import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Assuming Particle is a component for background effects
import ExperienceCard from "./ExperienceCard"; // Assuming this is where individual experience cards are rendered

import realListLogo from "../../Assets/company/realListLogo.png";
import GS_logo_Black from "../../Assets/company/GS_logo_Black.png";
import argyleEnigma from "../../Assets/company/argyleEnigma.png";
import smileComputerLogo from "../../Assets/company/smileLogo.png"
// Experience data moved to the same file
const experiences = [
  {
    "title": "Full Stack Developer Intern",
    "companyName": "Smile Computer Education, Bhandara",
    "icon": smileComputerLogo,
    "iconBg": "#E5A663",
    "date": "December 2024 - Present",
    "points": [
      "Designed, developed, and maintained a dynamic website for the education institute, enhancing online presence and student engagement.",
      "Built and deployed an Android application to provide seamless access to courses, schedules, and educational resources.",
      "Developed a robust admin panel to manage student records, course details, and other administrative tasks efficiently.",
      "Implemented responsive UI/UX designs, ensuring a smooth user experience across devices.",
      "Integrated database management for secure and optimized data storage.",
      "Utilized modern web technologies (e.g., HTML, CSS, JavaScript, React, Node.js, or others based on your stack).",
      "Ensured scalability and security of applications with best practices in authentication and data handling."
    ]
  }

  ,
  {
    title: "React-Native Full Stack Developer Intern",
    companyName: "Real List.Ai Technologies, Bengaluru",
    icon: realListLogo,
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
    companyName: "Girl Script Summer of Code, Pune, India",
    icon: GS_logo_Black,
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
    companyName: "Argyle Enigma Tech Lab, Ahmedabad",
    icon: argyleEnigma,
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
        <Row style={{ justifyContent: "center", padding: "1px" }}>
          <Col
            md={12}
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
            {experiences.map(({
              title,
              companyName,
              icon,
              iconBg,
              date,
              points
            }, index) => (
              <React.Fragment key={index}>
                <ExperienceCard
                  title={title}
                  companyName={companyName}
                  icon={icon}
                  iconBg={iconBg}
                  date={date}
                  points={points}
                />
              </React.Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
