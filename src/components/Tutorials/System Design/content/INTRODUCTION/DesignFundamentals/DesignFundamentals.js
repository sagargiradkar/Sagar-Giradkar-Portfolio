// src/components/Tutorials/SystemDesign/content/Introduction/DesignFundamentals/DesignFundamentals.js

import React from "react";
import { Link } from "react-router-dom";
import "./DesignFundamentals.css";
import CodeBlock from "./CodeBlock";

function DesignFundamentals() {
    const scaleExample = `
// Load Balancer Configuration Example
upstream backend_servers {
    least_conn;  # Load balancing method
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`;

    const reliabilityExample = `
// Circuit Breaker Pattern Implementation
public class CircuitBreaker {
    private int failureThreshold;
    private int resetTimeout;
    private int failureCount;
    private long lastFailureTime;
    private State state;

    public enum State {
        CLOSED, OPEN, HALF_OPEN
    }

    public CircuitBreaker(int failureThreshold, int resetTimeout) {
        this.failureThreshold = failureThreshold;
        this.resetTimeout = resetTimeout;
        this.state = State.CLOSED;
        this.failureCount = 0;
    }

    public boolean isAllowed() {
        if (state == State.CLOSED) {
            return true;
        }

        if (state == State.OPEN) {
            if (System.currentTimeMillis() - lastFailureTime >= resetTimeout) {
                state = State.HALF_OPEN;
                return true;
            }
            return false;
        }

        return true; // HALF_OPEN state allows one request
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
                Design Fundamentals
            </div>

            <h1 className="content-title">Design Fundamentals</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="table-of-content">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#core-principles">Core Design Principles</a></li>
                    <li><a href="#scalability">Scalability</a></li>
                    <li><a href="#reliability">Reliability</a></li>
                    <li><a href="#availability">Availability</a></li>
                    <li><a href="#maintainability">Maintainability</a></li>
                    <li><a href="#performance">Performance</a></li>
                    <li><a href="#security">Security</a></li>
                    <li><a href="#cost">Cost Optimization</a></li>
                </ul>
            </div>

            <section id="core-principles" className="content-section">
                <h2>Core Design Principles</h2>
                <p>
                    System design fundamentals are the building blocks that guide the creation
                    of robust, scalable, and maintainable systems. These principles help
                    architects and developers make informed decisions throughout the design
                    process.
                </p>
                <div className="note-box">
                    <p>
                        <strong>Key Insight:</strong> Good system design balances various
                        trade-offs between different fundamental aspects while meeting business
                        requirements.
                    </p>
                </div>
            </section>

            <section id="scalability" className="content-section">
                <h2>Scalability</h2>
                <p>
                    Scalability is a system's ability to handle increased load while
                    maintaining performance. There are two main types of scaling:
                </p>

                <div className="concept-grid">
                    <div className="concept-card">
                        <h3>Vertical Scaling (Scale Up)</h3>
                        <ul>
                            <li>Adding more power to existing machines</li>
                            <li>Upgrading CPU, RAM, or storage</li>
                            <li>Simpler but has hardware limits</li>
                        </ul>
                    </div>

                    <div className="concept-card">
                        <h3>Horizontal Scaling (Scale Out)</h3>
                        <ul>
                            <li>Adding more machines to system</li>
                            <li>Distributing load across servers</li>
                            <li>More complex but highly scalable</li>
                        </ul>
                    </div>
                </div>

                <div className="example-block">
                    <h3>Load Balancer Configuration Example:</h3>
                    <CodeBlock initialCode={scaleExample} />
                </div>
            </section>

            <section id="reliability" className="content-section">
                <h2>Reliability</h2>
                <p>
                    Reliability ensures a system performs its intended functions consistently
                    and can handle and recover from failures gracefully.
                </p>

                <div className="feature-list">
                    <h3>Key Reliability Patterns:</h3>
                    <ul>
                        <li>Circuit Breakers</li>
                        <li>Retry Mechanisms</li>
                        <li>Fallback Responses</li>
                        <li>Redundancy</li>
                        <li>Data Replication</li>
                    </ul>
                </div>

                <div className="example-block">
                    <h3>Circuit Breaker Pattern Example:</h3>
                    <CodeBlock initialCode={reliabilityExample} />
                </div>
            </section>

            <section id="availability" className="content-section">
                <h2>Availability</h2>
                <p>
                    Availability is the percentage of time a system is operational and
                    accessible to users.
                </p>

                <div className="availability-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Availability Level</th>
                                <th>Downtime per Year</th>
                                <th>Suitable For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>99.9% (Three Nines)</td>
                                <td>8.76 hours</td>
                                <td>Internal tools</td>
                            </tr>
                            <tr>
                                <td>99.99% (Four Nines)</td>
                                <td>52.56 minutes</td>
                                <td>Business applications</td>
                            </tr>
                            <tr>
                                <td>99.999% (Five Nines)</td>
                                <td>5.26 minutes</td>
                                <td>Critical systems</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="maintainability" className="content-section">
                <h2>Maintainability</h2>
                <p>
                    Maintainability refers to the ease with which a system can be modified,
                    updated, and debugged over time.
                </p>

                <div className="maintainability-aspects">
                    <div className="aspect">
                        <h3>Operability</h3>
                        <p>Make it easy for operations teams to manage the system</p>
                    </div>
                    <div className="aspect">
                        <h3>Simplicity</h3>
                        <p>Keep the system as simple as possible to understand</p>
                    </div>
                    <div className="aspect">
                        <h3>Evolvability</h3>
                        <p>Make it easy to make changes to the system</p>
                    </div>
                </div>
            </section>

            <section id="performance" className="content-section">
                <h2>Performance</h2>
                <div className="performance-metrics">
                    <h3>Key Performance Metrics:</h3>
                    <ul>
                        <li>Latency: Time to respond to requests</li>
                        <li>Throughput: Number of requests handled</li>
                        <li>Resource Utilization: CPU, memory, network usage</li>
                        <li>Response Time: End-to-end request processing time</li>
                    </ul>
                </div>
            </section>

            <section id="security" className="content-section">
                <h2>Security</h2>
                <div className="security-principles">
                    <h3>Core Security Principles:</h3>
                    <ul>
                        <li>Authentication: Verifying identity</li>
                        <li>Authorization: Managing access rights</li>
                        <li>Encryption: Protecting data</li>
                        <li>Audit Logging: Tracking system activities</li>
                        <li>Input Validation: Preventing attacks</li>
                    </ul>
                </div>
            </section>

            <section id="cost" className="content-section">
                <h2>Cost Optimization</h2>
                <p>
                    Cost optimization involves balancing system requirements with financial
                    constraints.
                </p>
                <div className="cost-strategies">
                    <h3>Optimization Strategies:</h3>
                    <ul>
                        <li>Right-sizing resources</li>
                        <li>Using managed services</li>
                        <li>Implementing caching</li>
                        <li>Optimizing data transfer</li>
                        <li>Automatic scaling</li>
                    </ul>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/systemdesign/architectural-patterns" className="next-link">
                    Next: Architectural Patterns →
                </Link>
            </div>
        </div>
    );
}

export default DesignFundamentals;
