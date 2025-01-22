import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import razorpay from "../../Assets/Projects/project1.png";
import poshinda from "../../Assets/Projects/project2.png"
import hotstar from "../../Assets/Projects/project3.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={razorpay}
              isBlog={false}
              title="Razorpay Clone Website UI"
              description="Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite."
              ghLink="https://github.com/sagargiradkar/Razorpay-Clone"
              demoLink="https://razorpayclonesagar.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poshinda}
              isBlog={false}
              title="Poshinda.co"
              description="Welcome to Poshinda.co, an agriculture product trading company founded by four dedicated farmer sons. We are committed to bringing the pure essence of nature and soil directly to you. Our journey started in the fertile lands where we learned the value of hard work, dedication, and sustainable farming practices."
              ghLink="https://github.com/sagargiradkar/shopping-cart"
              demoLink="https://shopping-cart-tan-delta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotstar}
              isBlog={false}
              title="Hotstar Website Clone Website UI"
              description="Disney + Hotstar is an Indian subscription video on-demand over-the-top streaming service owned by The Walt Disney Company India and operated by Disney Streaming ."
              ghLink="https://github.com/sagargiradkar/Disney-Hostar-website"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
