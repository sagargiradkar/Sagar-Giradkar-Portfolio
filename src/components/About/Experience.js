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
      "Developed a robust admin panel to manage student records, course details, and administrative tasks efficiently.",
      "Implemented responsive UI/UX designs, ensuring a smooth user experience across devices.",
      "Integrated database management for secure and optimized data storage.",
      "Utilized modern web technologies including React.js, Node.js, Express.js, and MongoDB for full-stack development.",
      "Ensured scalability and security of applications with best practices in authentication, data encryption, and performance optimization."
    ]
  },
  {
    "title": "React-Native Full Stack Developer Intern",
    "companyName": "Real List.Ai Technologies, Bengaluru",
    "icon": realListLogo,
    "iconBg": "#383E56",
    "date": "July 2024 - October 2024",
    "points": [
      "Developed a cross-platform mobile app with React Native, utilizing React component-based architecture for efficient UI.",
      "Built RESTful APIs with Express.js & Node.js, optimizing data retrieval by 40% and enhancing the user experience for over 5,000 active users.",
      "Implemented responsive design and ensured cross-browser compatibility for web applications.",
      "Integrated authentication mechanisms for secure user login and data access.",
      "Collaborated with cross-functional teams including designers, product managers, and developers to create high-quality products.",
      "Participated in code reviews, providing constructive feedback to improve code quality and maintainability."
    ]
  },
  {
    "title": "React Native Developer Intern",
    "companyName": "Girl Script Summer of Code, Pune, India",
    "icon": GS_logo_Black,
    "iconBg": "#E6DEDD",
    "date": "May 2024 - August 2024",
    "points": [
      "Developed and maintained applications using React Native, focusing on performance optimization and seamless user experience.",
      "Designed a healthcare app UI using React Native, improving user engagement and reducing support queries by 30%.",
      "Implemented RESTful APIs and integrated backend services for real-time data synchronization.",
      "Collaborated with designers and developers in an open-source environment, contributing to scalable and user-friendly applications.",
      "Participated in code reviews and provided constructive feedback to ensure clean and efficient code implementation."
    ]
  },
  {
    "title": "Software Engineering Intern",
    "companyName": "Argyle Enigma Tech Lab, Ahmedabad",
    "icon": argyleEnigma,
    "iconBg": "#383E56",
    "date": "October 2023 - April 2024",
    "points": [
      "Developed and deployed RESTful APIs for the Fili: Financial Literacy app, enhancing financial education accessibility.",
      "Published the Fili app on the Google Play Store, ensuring smooth user experience and scalability.",
      "Designed and managed a relational database using SQL, optimizing query performance and ensuring data security.",
      "Implemented JWT-based authentication for secure user login and data access.",
      "Utilized JIRA for project management, efficiently tracking daily task progress and ensuring smooth project execution.",
      "Collaborated with cross-functional teams including designers, product managers, and developers to create high-quality software solutions.",
      "Participated in code reviews, contributing to high-quality, maintainable code."
    ]
  }
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
