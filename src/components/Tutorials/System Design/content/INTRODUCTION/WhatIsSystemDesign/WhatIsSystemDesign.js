// src/components/Tutorials/SystemDesign/content/Introduction/WhatIsSystemDesign/WhatIsSystemDesign.js

import React from "react";
import { Link } from "react-router-dom";
import "./WhatIsSystemDesign.css";
import CodeBlock from './CodeBlock';

function WhatIsSystemDesign() {
  const systemArchitectureExample = `
{
  "system": {
    "frontend": {
      "web": "React.js",
      "mobile": "React Native"
    },
    "backend": {
      "api": "RESTful Services",
      "microservices": ["User Service", "Payment Service", "Order Service"]
    },
    "database": {
      "primary": "PostgreSQL",
      "cache": "Redis"
    },
    "infrastructure": {
      "loadBalancer": "Nginx",
      "cloud": "AWS"
    }
  }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span> What is System Design
      </div>

      <h1 className="content-title">What is System Design?</h1>
      <p className="last-updated">Last Updated: 13 May, 2025</p>

      <section className="content-section">
        <p>
          System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It is a crucial phase in software development that transforms user requirements into a detailed blueprint for implementation.
        </p>
        <p>
          System Design encompasses both High-Level Design (HLD) and Low-Level Design (LLD), addressing everything from broad architectural decisions to specific implementation details. It's essential for creating scalable, reliable, and maintainable software systems.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#system-design-definition">System Design Definition</a></li>
          <li><a href="#design-types">Types of System Design</a></li>
          <li>
            <a href="#core-components">Core Components</a>
            <ul>
              <li>Architecture</li>
              <li>Components</li>
              <li>Interfaces</li>
              <li>Data Design</li>
            </ul>
          </li>
          <li><a href="#design-principles">Design Principles</a></li>
          <li><a href="#design-process">The Design Process</a></li>
          <li><a href="#system-example">System Design Example</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>

      <section id="system-design-definition">
        <h2>System Design Definition</h2>
        <p>
          System Design is the art and science of building large-scale systems that are scalable, reliable, and maintainable. It involves making strategic decisions about the system's architecture, components, and their interactions while considering various trade-offs in terms of performance, cost, and complexity.
        </p>
        <div className="note-box">
          <p>
            <strong>Note:</strong> System Design is not just about writing code; it's about making architectural decisions that will shape how the system evolves and scales over time.
          </p>
        </div>
      </section>

      <section id="design-types">
        <h2>Types of System Design</h2>
        <p>System Design is typically divided into two main categories:</p>
        <ul>
          <li>
            <strong>High-Level Design (HLD):</strong> Focuses on the overall system architecture, including:
            <ul>
              <li>System architecture and components</li>
              <li>Data flow and interactions</li>
              <li>Database design</li>
              <li>Technology stack selection</li>
            </ul>
          </li>
          <li>
            <strong>Low-Level Design (LLD):</strong> Deals with the detailed implementation, including:
            <ul>
              <li>Class diagrams and relationships</li>
              <li>Interface definitions</li>
              <li>Component-level design</li>
              <li>Algorithm design</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="core-components">
        <h2>Core Components</h2>
        <p>A well-designed system typically includes these core components:</p>
        <ul>
          <li><strong>Frontend:</strong> User interface and client-side logic</li>
          <li><strong>Backend:</strong> Server-side business logic and processing</li>
          <li><strong>Database:</strong> Data storage and retrieval systems</li>
          <li><strong>APIs:</strong> Communication interfaces between components</li>
          <li><strong>Infrastructure:</strong> Hardware and cloud resources</li>
          <li><strong>Security:</strong> Authentication and authorization systems</li>
        </ul>
      </section>

      <section id="design-principles">
        <h2>Design Principles</h2>
        <p>
          Effective system design follows several key principles:
        </p>
        <ul>
          <li><strong>Scalability:</strong> The ability to handle growing amounts of work</li>
          <li><strong>Reliability:</strong> Consistent performance under stress</li>
          <li><strong>Maintainability:</strong> Easy to modify and maintain</li>
          <li><strong>Security:</strong> Protection against threats and vulnerabilities</li>
          <li><strong>Cost-effectiveness:</strong> Efficient use of resources</li>
        </ul>
      </section>

      <section id="design-process">
        <h2>The Design Process</h2>
        <p>
          The system design process typically follows these steps:
        </p>
        <ol>
          <li><strong>Requirements Gathering:</strong> Understanding user needs and system constraints</li>
          <li><strong>Architecture Selection:</strong> Choosing the appropriate system architecture</li>
          <li><strong>Component Design:</strong> Designing individual system components</li>
          <li><strong>Interface Design:</strong> Defining component interactions</li>
          <li><strong>Data Design:</strong> Planning data storage and flow</li>
          <li><strong>Security Planning:</strong> Implementing security measures</li>
          <li><strong>Performance Optimization:</strong> Ensuring system efficiency</li>
        </ol>
      </section>

      <section id="system-example">
        <h2>System Design Example</h2>
        <p>
          Here's a simplified example of a system architecture in JSON format:
        </p>
        <CodeBlock initialCode={systemArchitectureExample} />
        <p>
          This example shows:
        </p>
        <ul>
          <li>Frontend and backend separation</li>
          <li>Microservices architecture</li>
          <li>Database strategy with caching</li>
          <li>Infrastructure components</li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          System Design is a critical skill for software engineers, especially those working on large-scale applications. It requires understanding various technologies, architectures, and trade-offs while considering factors like scalability, reliability, and maintainability.
        </p>
        <p>
          Success in system design comes from experience, understanding patterns, and learning from real-world systems. As you progress through this tutorial, you'll learn about different aspects of system design and how to apply them in practical scenarios.
        </p>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/systemdesign/types-of-design" className="next-link">
          Next: Types of System Design →
        </Link>
      </div>
    </div>
  );
}

export default WhatIsSystemDesign;
