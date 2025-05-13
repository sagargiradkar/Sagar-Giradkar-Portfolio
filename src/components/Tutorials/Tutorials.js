// src/components/Tutorials/Tutorials.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import html5Icon from "../../Assets/Tutorials/html.webp"
import css3iIon from "../../Assets/Tutorials/css.webp"
import javascriptIcon from "../../Assets/Tutorials/js.webp"
import pythonIcon from "../../Assets/Tutorials/python.webp"
import cIcon from "../../Assets/Tutorials/c.webp"
import reactIcon from "../../Assets/Tutorials/reactjs.webp"
import javaIcon from "../../Assets/Tutorials/java.webp"
import cppIcon from "../../Assets/Tutorials/cpp.webp"
import systemDesignIcon from "../../Assets/Tutorials/system-integration.png"
import Footer from "../../components/Footer"
import { useNavigate } from "react-router-dom";

function Tutorials() {
  const navigate = useNavigate();

  const handleStartLearning = (tutorialType) => {
    // Remove special characters and spaces, convert to lowercase
    const route = tutorialType
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '')
      .replace(/\s+/g, '');

    console.log(`Navigating to: /tutorial/${route}`); // For debugging
    navigate(`/tutorial/${route}`);
  };

  const tutorialData = [
    {
      id: "java-tutorial",
      title: "Java Tutorial",
      icon: javaIcon,
      description: "Java is a programming language, created in 1995. More than 3 billion devices run...",
      color: "#007396"
    },
    {
      id: "system-design",
      title: "System Design Tutorial",
      icon: systemDesignIcon,
      description: "System Design is the process of designing the architecture, components, and interfaces for a system to satisfy specified requirements. It covers both Low-Level Design (LLD) and High-Level Design (HLD).",
      color: "#2C3E50"
    }
    ,
    {
      id: "html-tutorial",
      title: "HTML Tutorial",
      icon: html5Icon,
      description: "The word hypertext markup language is composed of the words 'hypertext' and 'mar...",
      color: "#E44D26"
    },
    {
      id: "css-tutorial",
      title: "CSS Tutorial",
      icon: css3iIon,
      description: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be ...",
      color: "#264DE4"
    },
    {
      id: "js-tutorial",
      title: "JavaScript Tutorial",
      icon: javascriptIcon,
      description: "JavaScript is a lightweight, cross-platform, OOP language.",
      color: "#F7DF1E"
    },
    {
      id: "python-tutorial",
      title: "Python Tutorial",
      icon: pythonIcon,
      description: "Python is a high-level, interpreted, general-purpose programming language.",
      color: "#306998"
    },
    {
      id: "c-tutorial",
      title: "C Tutorial",
      icon: cIcon,
      description: "C language is considered as the mother language of all programming languages. It...",
      color: "#5C6BC0"
    },
    {
      id: "react-tutorial",
      title: "React JS Tutorial",
      icon: reactIcon,
      description: "React is an open-source front-end JavaScript library. This series will cover Rea...",
      color: "#61DAFB"
    },

    {
      id: "cpp-tutorial",
      title: "C++ Tutorial",
      icon: cppIcon,
      description: "C++ is a cross-platform language that can be used to create high-performance app...",
      color: "#00599C"
    }
  ];

  return (
    <>
      <Container fluid className="tutorial-section">
        <h1 className="text-center text-white">Tutorials</h1>
        <Container>
          <Row>
            {tutorialData.map((tutorial) => (
              <Col xl={3} lg={3} md={6} xs={12} className="tutorial-card" key={tutorial.id}>
                <div className="tutorial-card-view">
                  <div className="tutorial-icon-container">
                    <img src={tutorial.icon} alt={tutorial.title} className="tutorial-icon" />
                  </div>
                  <h3 className="tutorial-name">{tutorial.title}</h3>
                  <p className="tutorial-description">{tutorial.description}</p>
                  <button
                    className="tutorial-btn"
                    onClick={() => handleStartLearning(tutorial.title)}
                  >
                    Start Learning !
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

      </Container>
      <Footer /></>

  );
}

export default Tutorials;
