import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Sagar Giradkar, a passionate software developer with
              experience in building full-stack applications using technologies
              like
              <i>
                <b className="purple">
                  {" "}
                  React.js, Node.js, Spring Boot, and MongoDB.{" "}
                </b>
              </i>
              <br />
              <br />I enjoy creating solutions for real-world problems,
              including
              <b className="purple">
                {" "}
                innovative web and mobile applications.{" "}
              </b>
              My recent projects include a healthcare app, an e-learning
              platform, and an e-waste sorting system leveraging collaborative
              robots and AI.
              <br />
              <br />
              My technical interests include developing{" "}
              <b className="purple">RESTful APIs</b>, working with modern
              frameworks like
              <b className="purple"> React Native, Spring Framework,</b>
              and exploring <b className="purple">AI and robotics. </b>
              <br />
              <br />
              Whenever possible, I love to apply my skills to impactful projects
              that bridge technology with real-world needs.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sagargiradkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sagar-giradkar-b21581234/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sagar_giradkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                 <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
