import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
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
              I'm <b className="purple">Sagar Giradkar</b>, a software developer from <b className="purple">Pune, India</b>, currently pursuing a Bachelor's in Information Technology at PVG's COET, Savitribai Phule Pune University.
              <br />
              <br />
              With a passion for innovation, I've worked on diverse projects in AI, full-stack development, and robotics — from building REST APIs and mobile apps to publishing research on AI-driven smart material handling systems.
              <br />
              <br />
              I have industry experience through internships at <b className="purple">Smile Computer Education, Real List AI Technologies, and Argyle Enigma Tech Labs</b>, where I developed Android apps, React Native projects, and enterprise RESTful services.
              <br />
              <br />
              My go-to tech stack includes:
              <i>
                <b className="purple"> React.js, React Native, Spring Boot, Node.js, Express.js, Java, JavaScript, MySQL, MongoDB, and Docker. </b>
              </i>
              <br />
              <br />
              Outside of tech, I enjoy playing games, traveling, and exploring new technologies that can solve meaningful problems.
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
