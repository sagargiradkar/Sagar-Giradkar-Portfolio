// src/components/Tutorials/SystemDesign/content/Introduction/SystemRequirements/SystemRequirements.js

import React from "react";
import { Link } from "react-router-dom";
import "./SystemRequirements.css";
import CodeBlock from "./CodeBlock";

function SystemRequirements() {
    const requirementsExample = `
// Requirements Documentation Example
{
  "project": "E-Commerce Platform",
  "version": "1.0",
  "requirements": {
    "functional": {
      "user_management": {
        "registration": {
          "required_fields": ["email", "password", "name"],
          "validation_rules": {
            "email": "valid email format",
            "password": "min 8 chars, 1 uppercase, 1 number"
          }
        },
        "authentication": {
          "methods": ["email/password", "OAuth2"],
          "session_duration": "24 hours"
        }
      },
      "product_management": {
        "catalog": {
          "search": "full-text search with filters",
          "pagination": "20 items per page"
        }
      }
    },
    "non_functional": {
      "performance": {
        "response_time": "< 200ms",
        "throughput": "1000 requests/second"
      },
      "availability": "99.9%",
      "scalability": "horizontal scaling support"
    }
  }
}`;

    const userStoryExample = `
// User Story Template
{
  "story": {
    "as_a": "registered customer",
    "i_want_to": "save items to my wishlist",
    "so_that": "I can purchase them later",
    
    "acceptance_criteria": [
      "Can add items from product page",
      "Can remove items from wishlist",
      "Can move items to shopping cart",
      "Wishlist persists across sessions",
      "Maximum 50 items in wishlist"
    ],
    
    "technical_considerations": [
      "Database schema updates needed",
      "Redis caching for fast retrieval",
      "User session management",
      "Stock status validation"
    ]
  }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
                System Requirements
            </div>

            <h1 className="content-title">System Requirements</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="table-of-content">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#types">Types of Requirements</a></li>
                    <li><a href="#gathering">Requirements Gathering</a></li>
                    <li><a href="#documentation">Documentation</a></li>
                    <li><a href="#analysis">Requirements Analysis</a></li>
                    <li><a href="#validation">Validation & Verification</a></li>
                    <li><a href="#best-practices">Best Practices</a></li>
                </ul>
            </div>

            <section id="introduction" className="content-section">
                <h2>Introduction</h2>
                <p>
                    System requirements are the foundation of any successful software project.
                    They define what the system should do, how it should perform, and what
                    constraints it must operate within.
                </p>
                <div className="info-box">
                    <h3>Why Requirements Matter</h3>
                    <ul>
                        <li>Provide clear project direction</li>
                        <li>Enable accurate estimation</li>
                        <li>Prevent scope creep</li>
                        <li>Ensure stakeholder alignment</li>
                        <li>Guide design decisions</li>
                    </ul>
                </div>
            </section>

            <section id="types" className="content-section">
                <h2>Types of Requirements</h2>
                <div className="requirements-grid">
                    <div className="requirement-card">
                        <h3>Functional Requirements</h3>
                        <p>Define what the system should do</p>
                        <ul>
                            <li>User features</li>
                            <li>Business logic</li>
                            <li>Data processing</li>
                            <li>System interactions</li>
                        </ul>
                    </div>

                    <div className="requirement-card">
                        <h3>Non-Functional Requirements</h3>
                        <p>Define how the system should perform</p>
                        <ul>
                            <li>Performance metrics</li>
                            <li>Security requirements</li>
                            <li>Scalability needs</li>
                            <li>Reliability standards</li>
                        </ul>
                    </div>

                    <div className="requirement-card">
                        <h3>Business Requirements</h3>
                        <p>Define business objectives</p>
                        <ul>
                            <li>Strategic goals</li>
                            <li>Market needs</li>
                            <li>Revenue targets</li>
                            <li>Compliance needs</li>
                        </ul>
                    </div>

                    <div className="requirement-card">
                        <h3>Technical Requirements</h3>
                        <p>Define implementation constraints</p>
                        <ul>
                            <li>Technology stack</li>
                            <li>Infrastructure needs</li>
                            <li>Integration points</li>
                            <li>Technical constraints</li>
                        </ul>
                    </div>
                </div>

                <div className="example-block">
                    <h3>Requirements Documentation Example:</h3>
                    <CodeBlock initialCode={requirementsExample} />
                </div>
            </section>

            <section id="gathering" className="content-section">
                <h2>Requirements Gathering</h2>
                <div className="process-steps">
                    <div className="step">
                        <h3>1. Stakeholder Interviews</h3>
                        <ul>
                            <li>Identify key stakeholders</li>
                            <li>Conduct structured interviews</li>
                            <li>Document expectations</li>
                            <li>Resolve conflicts</li>
                        </ul>
                    </div>

                    <div className="step">
                        <h3>2. User Stories</h3>
                        <ul>
                            <li>Create user personas</li>
                            <li>Write user stories</li>
                            <li>Define acceptance criteria</li>
                            <li>Prioritize stories</li>
                        </ul>
                    </div>

                    <div className="step">
                        <h3>3. Workshops</h3>
                        <ul>
                            <li>Facilitate group sessions</li>
                            <li>Use brainstorming techniques</li>
                            <li>Create process flows</li>
                            <li>Document decisions</li>
                        </ul>
                    </div>
                </div>

                <div className="example-block">
                    <h3>User Story Example:</h3>
                    <CodeBlock initialCode={userStoryExample} />
                </div>
            </section>

            <section id="documentation" className="content-section">
                <h2>Documentation</h2>
                <div className="documentation-tips">
                    <h3>Key Documentation Components:</h3>
                    <ul>
                        <li>Requirements Specification Document (SRS)</li>
                        <li>Use Case Diagrams</li>
                        <li>Process Flows</li>
                        <li>Data Models</li>
                        <li>API Specifications</li>
                        <li>System Constraints</li>
                    </ul>
                </div>
            </section>

            <section id="analysis" className="content-section">
                <h2>Requirements Analysis</h2>
                <div className="analysis-checklist">
                    <h3>Analysis Checklist:</h3>
                    <div className="checklist-grid">
                        <div className="checklist-item">
                            <h4>Completeness</h4>
                            <p>Are all necessary requirements captured?</p>
                        </div>
                        <div className="checklist-item">
                            <h4>Consistency</h4>
                            <p>Are requirements conflict-free?</p>
                        </div>
                        <div className="checklist-item">
                            <h4>Feasibility</h4>
                            <p>Can requirements be implemented?</p>
                        </div>
                        <div className="checklist-item">
                            <h4>Testability</h4>
                            <p>Can requirements be verified?</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="validation" className="content-section">
                <h2>Validation & Verification</h2>
                <div className="validation-methods">
                    <h3>Validation Methods:</h3>
                    <ul>
                        <li>Peer Reviews</li>
                        <li>Prototyping</li>
                        <li>User Acceptance Testing</li>
                        <li>Requirements Traceability</li>
                    </ul>
                </div>
            </section>

            <section id="best-practices" className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices-grid">
                    <div className="practice-card">
                        <h3>Clear Communication</h3>
                        <p>Use simple, unambiguous language</p>
                    </div>
                    <div className="practice-card">
                        <h3>Regular Reviews</h3>
                        <p>Schedule periodic requirement reviews</p>
                    </div>
                    <div className="practice-card">
                        <h3>Version Control</h3>
                        <p>Track requirement changes</p>
                    </div>
                    <div className="practice-card">
                        <h3>Prioritization</h3>
                        <p>Use MoSCoW or similar methods</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/systemdesign/design-process" className="next-link">
                    Next: Design Process →
                </Link>
            </div>
        </div>
    );
}

export default SystemRequirements;
