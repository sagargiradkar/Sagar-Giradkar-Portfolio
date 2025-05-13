// src/components/Tutorials/SystemDesign/content/Introduction/TypesOfDesign/TypesOfDesign.js

import React from "react";
import { Link } from "react-router-dom";
import "./TypesOfDesign.css";
import CodeBlock from "./CodeBlock"; // Adjust the import path as needed

function TypesOfDesign() {
  const lldExample = `
public class ShoppingCart {
    private List<Item> items;
    private double total;
    
    public ShoppingCart() {
        items = new ArrayList<>();
        total = 0.0;
    }
    
    public void addItem(Item item) {
        items.add(item);
        total += item.getPrice();
    }
    
    public void removeItem(Item item) {
        items.remove(item);
        total -= item.getPrice();
    }
}`;

  const hldExample = `
// High Level System Architecture
{
  "e-commerce-system": {
    "frontend": {
      "web-client": ["React", "Redux"],
      "mobile-client": ["React Native"]
    },
    "backend": {
      "services": {
        "user-service": "handles authentication and user management",
        "product-service": "manages product catalog",
        "order-service": "processes orders",
        "payment-service": "handles payments"
      },
      "databases": {
        "user-db": "PostgreSQL",
        "product-db": "MongoDB",
        "order-db": "PostgreSQL"
      },
      "caching": "Redis",
      "message-queue": "Kafka"
    }
  }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
        Types of System Design
      </div>

      <h1 className="content-title">Types of System Design</h1>
      <p className="last-updated">Last Updated: 13 May, 2025</p>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#lld">Low Level Design (LLD)</a></li>
          <li><a href="#hld">High Level Design (HLD)</a></li>
          <li><a href="#comparison">LLD vs HLD Comparison</a></li>
          <li><a href="#when-to-use">When to Use Each</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="introduction" className="content-section">
        <h2>Introduction</h2>
        <p>
          System design can be broadly categorized into two main types: Low Level
          Design (LLD) and High Level Design (HLD). Each serves a different
          purpose and addresses different aspects of system architecture.
        </p>
      </section>

      <section id="lld" className="content-section">
        <h2>Low Level Design (LLD)</h2>
        <p>
          Low Level Design focuses on the detailed component-level design of a
          system. It deals with the actual implementation details and coding
          aspects.
        </p>

        <div className="feature-list">
          <h3>Key Aspects of LLD:</h3>
          <ul>
            <li>Class diagrams and relationships</li>
            <li>Interface definitions</li>
            <li>Implementation details</li>
            <li>Data structures and algorithms</li>
            <li>Code organization and modularity</li>
          </ul>
        </div>

        <div className="example-block">
          <h3>LLD Example:</h3>
          <CodeBlock initialCode={lldExample} />
        </div>
      </section>

      <section id="hld" className="content-section">
        <h2>High Level Design (HLD)</h2>
        <p>
          High Level Design provides a broader system architecture view, focusing
          on the overall structure and interaction between system components.
        </p>

        <div className="feature-list">
          <h3>Key Aspects of HLD:</h3>
          <ul>
            <li>System architecture and components</li>
            <li>Database design</li>
            <li>Technology stack selection</li>
            <li>Communication protocols</li>
            <li>Scalability and performance considerations</li>
          </ul>
        </div>

        <div className="example-block">
          <h3>HLD Example:</h3>
          <CodeBlock initialCode={hldExample} />
        </div>
      </section>

      <section id="comparison" className="content-section">
        <h2>LLD vs HLD Comparison</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Low Level Design</th>
                <th>High Level Design</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus</td>
                <td>Component implementation</td>
                <td>System architecture</td>
              </tr>
              <tr>
                <td>Scope</td>
                <td>Individual components</td>
                <td>Entire system</td>
              </tr>
              <tr>
                <td>Audience</td>
                <td>Developers</td>
                <td>Architects, Stakeholders</td>
              </tr>
              <tr>
                <td>Detail Level</td>
                <td>Very detailed</td>
                <td>Abstract overview</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="when-to-use" className="content-section">
        <h2>When to Use Each</h2>
        <div className="note-box">
          <p>
            <strong>Tip:</strong> The choice between LLD and HLD depends on your
            project phase and audience.
          </p>
        </div>

        <h3>Use LLD when:</h3>
        <ul>
          <li>Implementing specific components</li>
          <li>Defining class structures</li>
          <li>Working on code-level decisions</li>
          <li>Documenting implementation details</li>
        </ul>

        <h3>Use HLD when:</h3>
        <ul>
          <li>Planning system architecture</li>
          <li>Making technology choices</li>
          <li>Defining component interactions</li>
          <li>Discussing with stakeholders</li>
        </ul>
      </section>

      <section id="best-practices" className="content-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <h3>For LLD:</h3>
          <ul>
            <li>Follow SOLID principles</li>
            <li>Use appropriate design patterns</li>
            <li>Maintain code modularity</li>
            <li>Document class relationships</li>
          </ul>

          <h3>For HLD:</h3>
          <ul>
            <li>Consider scalability</li>
            <li>Plan for future growth</li>
            <li>Focus on system boundaries</li>
            <li>Document integration points</li>
          </ul>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/systemdesign/design-fundamentals" className="next-link">
          Next: Design Fundamentals →
        </Link>
      </div>
    </div>
  );
}

export default TypesOfDesign;
