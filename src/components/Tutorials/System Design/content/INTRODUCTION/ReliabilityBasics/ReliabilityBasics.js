// src/components/Tutorials/SystemDesign/content/Introduction/ReliabilityBasics/ReliabilityBasics.js

import React from "react";
import { Link } from "react-router-dom";
import "./ReliabilityBasics.css";
import CodeBlock from "./CodeBlock";

function ReliabilityBasics() {
    const circuitBreakerExample = `
// Circuit Breaker Pattern Implementation
public class CircuitBreaker {
    private final int failureThreshold;
    private final long resetTimeout;
    private int failureCount;
    private long lastFailureTime;
    private State state;
    
    public enum State {
        CLOSED, OPEN, HALF_OPEN
    }
    
    public CircuitBreaker(int failureThreshold, long resetTimeout) {
        this.failureThreshold = failureThreshold;
        this.resetTimeout = resetTimeout;
        this.state = State.CLOSED;
        this.failureCount = 0;
    }
    
    public synchronized boolean allowRequest() {
        if (state == State.OPEN) {
            if (System.currentTimeMillis() - lastFailureTime >= resetTimeout) {
                state = State.HALF_OPEN;
                return true;
            }
            return false;
        }
        return true;
    }
    
    public synchronized void recordSuccess() {
        failureCount = 0;
        state = State.CLOSED;
    }
    
    public synchronized void recordFailure() {
        failureCount++;
        lastFailureTime = System.currentTimeMillis();
        
        if (failureCount >= failureThreshold) {
            state = State.OPEN;
        }
    }
}`;

    const retryPatternExample = `
// Retry Pattern Implementation
public class RetryHandler {
    private final int maxRetries;
    private final long delayMs;
    
    public RetryHandler(int maxRetries, long delayMs) {
        this.maxRetries = maxRetries;
        this.delayMs = delayMs;
    }
    
    public <T> T executeWithRetry(Supplier<T> operation) throws Exception {
        int attempts = 0;
        Exception lastException = null;
        
        while (attempts < maxRetries) {
            try {
                return operation.get();
            } catch (Exception e) {
                lastException = e;
                attempts++;
                
                if (attempts < maxRetries) {
                    Thread.sleep(delayMs * (long)Math.pow(2, attempts)); // Exponential backoff
                }
            }
        }
        
        throw lastException;
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
                Reliability Basics
            </div>

            <h1 className="content-title">Reliability Basics</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="reliability-intro">
                <p>
                    System reliability is the probability that a system will perform its
                    intended function under specified conditions for a specified period.
                    Understanding reliability concepts is crucial for building robust
                    systems.
                </p>
            </div>

            <section id="core-concepts" className="content-section">
                <h2>Core Concepts</h2>
                <div className="concepts-grid">
                    <div className="concept-card">
                        <h3>Fault Tolerance</h3>
                        <p>System's ability to continue operating despite failures</p>
                        <ul>
                            <li>Redundancy</li>
                            <li>Failover mechanisms</li>
                            <li>Error handling</li>
                            <li>Graceful degradation</li>
                        </ul>
                    </div>

                    <div className="concept-card">
                        <h3>High Availability</h3>
                        <p>System's ability to remain operational</p>
                        <ul>
                            <li>Load balancing</li>
                            <li>Clustering</li>
                            <li>Geographic distribution</li>
                            <li>Automated recovery</li>
                        </ul>
                    </div>

                    <div className="concept-card">
                        <h3>Disaster Recovery</h3>
                        <p>Ability to recover from catastrophic failures</p>
                        <ul>
                            <li>Backup strategies</li>
                            <li>Recovery procedures</li>
                            <li>Data replication</li>
                            <li>Business continuity</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="reliability-patterns" className="content-section">
                <h2>Reliability Patterns</h2>
                <div className="patterns-container">
                    <div className="pattern-section">
                        <h3>Circuit Breaker Pattern</h3>
                        <p>
                            Prevents system failure by stopping operations when a service is
                            unavailable
                        </p>
                        <div className="example-block">
                            <CodeBlock initialCode={circuitBreakerExample} />
                        </div>
                    </div>

                    <div className="pattern-section">
                        <h3>Retry Pattern</h3>
                        <p>
                            Handles temporary failures by retrying operations with exponential
                            backoff
                        </p>
                        <div className="example-block">
                            <CodeBlock initialCode={retryPatternExample} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="monitoring" className="content-section">
                <h2>Reliability Monitoring</h2>
                <div className="monitoring-grid">
                    <div className="monitoring-card">
                        <h3>Key Metrics</h3>
                        <ul>
                            <li>Mean Time Between Failures (MTBF)</li>
                            <li>Mean Time To Recovery (MTTR)</li>
                            <li>Error Rates</li>
                            <li>Service Level Agreements (SLA)</li>
                        </ul>
                    </div>

                    <div className="monitoring-card">
                        <h3>Monitoring Tools</h3>
                        <ul>
                            <li>Log aggregation systems</li>
                            <li>APM solutions</li>
                            <li>Alert management</li>
                            <li>Metrics dashboards</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="best-practices" className="content-section">
                <h2>Best Practices</h2>
                <div className="practices-grid">
                    <div className="practice-card">
                        <h3>Design Principles</h3>
                        <ul>
                            <li>Design for failure</li>
                            <li>Implement redundancy</li>
                            <li>Use health checks</li>
                            <li>Implement circuit breakers</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Testing Strategies</h3>
                        <ul>
                            <li>Chaos engineering</li>
                            <li>Load testing</li>
                            <li>Failover testing</li>
                            <li>Recovery testing</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Operational Excellence</h3>
                        <ul>
                            <li>Automated deployments</li>
                            <li>Continuous monitoring</li>
                            <li>Incident response</li>
                            <li>Post-mortem analysis</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="checklist" className="content-section">
                <h2>Reliability Checklist</h2>
                <div className="checklist-container">
                    <div className="checklist-card">
                        <h3>Design Phase</h3>
                        <ul>
                            <li>Identify single points of failure</li>
                            <li>Plan redundancy strategy</li>
                            <li>Define SLAs</li>
                            <li>Design monitoring strategy</li>
                        </ul>
                    </div>

                    <div className="checklist-card">
                        <h3>Implementation Phase</h3>
                        <ul>
                            <li>Implement error handling</li>
                            <li>Set up monitoring</li>
                            <li>Configure alerts</li>
                            <li>Implement failover mechanisms</li>
                        </ul>
                    </div>

                    <div className="checklist-card">
                        <h3>Operation Phase</h3>
                        <ul>
                            <li>Regular backups</li>
                            <li>Disaster recovery drills</li>
                            <li>Performance monitoring</li>
                            <li>Incident response planning</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/systemdesign/security" className="next-link">
                    Next: Security Basics →
                </Link>
            </div>
        </div>
    );
}

export default ReliabilityBasics;
