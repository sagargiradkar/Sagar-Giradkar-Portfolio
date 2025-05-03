// src/components/Tutorials/TutorialPost.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./TutorialPage.css";

function TutorialPage() {
  const { slug } = useParams();

  // This would typically come from your backend or CMS
  const tutorialContent = {
    title: "JavaScript Fundamentals",
    content: `
# JavaScript Fundamentals

## Variables and Data Types

\`\`\`javascript
// Variable declaration
let name = "John";
const age = 30;
var isStudent = true;

// Data types
const number = 42;
const string = "Hello";
const boolean = true;
const array = [1, 2, 3];
const object = { key: "value" };
\`\`\`

## Functions

\`\`\`javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`
    `,
  };

  return (
    <Container fluid className="tutorial-post-section">
      <Container>
        <Row>
          <Col md={8} className="tutorial-content">
            <h1>{tutorialContent.title}</h1>
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {tutorialContent.content}
            </ReactMarkdown>
          </Col>
          <Col md={4} className="tutorial-sidebar">
            <div className="sidebar-widget">
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#variables">Variables and Data Types</a></li>
                <li><a href="#functions">Functions</a></li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h3>Related Tutorials</h3>
              <ul>
                <li><a href="#">JavaScript Arrays</a></li>
                <li><a href="#">JavaScript Objects</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TutorialPage;
