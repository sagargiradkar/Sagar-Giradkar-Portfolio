// src/components/Tutorials/SystemDesign/content/Introduction/ScalabilityBasics/ScalabilityBasics.js

import React from "react";
import { Link } from "react-router-dom";
import "./ScalabilityBasics.css";
import CodeBlock from "./CodeBlock";

function ScalabilityBasics() {
    const loadBalancerExample = `
# Nginx Load Balancer Configuration Example
upstream backend_servers {
    least_conn;                 # Load balancing algorithm
    server backend1.app.com;    # Backend server 1
    server backend2.app.com;    # Backend server 2
    server backend3.app.com;    # Backend server 3
}

server {
    listen 80;
    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`;

    const cachingExample = `
// Redis Caching Example
public class UserService {
    private final RedisTemplate<String, User> redisTemplate;
    private final UserRepository userRepository;
    
    public User getUserById(String userId) {
        // Try to get from cache first
        User cachedUser = redisTemplate.opsForValue().get("user:" + userId);
        
        if (cachedUser != null) {
            return cachedUser;
        }
        
        // If not in cache, get from database
        User user = userRepository.findById(userId);
        
        // Store in cache for future requests
        redisTemplate.opsForValue().set("user:" + userId, user, 1, TimeUnit.HOURS);
        
        return user;
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
                Scalability Basics
            </div>

            <h1 className="content-title">Scalability Basics</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="table-of-content">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#introduction">Introduction to Scalability</a></li>
                    <li><a href="#types">Types of Scalability</a></li>
                    <li><a href="#techniques">Scaling Techniques</a></li>
                    <li><a href="#load-balancing">Load Balancing</a></li>
                    <li><a href="#caching">Caching Strategies</a></li>
                    <li><a href="#database">Database Scaling</a></li>
                    <li><a href="#monitoring">Monitoring and Metrics</a></li>
                </ul>
            </div>

            <section id="introduction" className="content-section">
                <h2>Introduction to Scalability</h2>
                <div className="concept-intro">
                    <p>
                        Scalability is a system's ability to handle increased load by adapting
                        its resource capacity. It's crucial for maintaining performance as user
                        demand grows.
                    </p>

                    <div className="key-metrics">
                        <h3>Key Performance Metrics</h3>
                        <ul>
                            <li>Response Time</li>
                            <li>Throughput</li>
                            <li>Resource Utilization</li>
                            <li>Cost Efficiency</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="types" className="content-section">
                <h2>Types of Scalability</h2>
                <div className="scaling-types-grid">
                    <div className="scaling-card">
                        <h3>Vertical Scaling (Scale Up)</h3>
                        <div className="card-content">
                            <h4>Characteristics:</h4>
                            <ul>
                                <li>Adding more power to existing machines</li>
                                <li>Upgrading CPU, RAM, or storage</li>
                                <li>Easier to implement</li>
                                <li>Hardware limitations</li>
                            </ul>
                            <div className="pros-cons">
                                <div className="pros">
                                    <h4>Pros:</h4>
                                    <ul>
                                        <li>Simple to implement</li>
                                        <li>No application changes</li>
                                        <li>Lower complexity</li>
                                    </ul>
                                </div>
                                <div className="cons">
                                    <h4>Cons:</h4>
                                    <ul>
                                        <li>Hardware limits</li>
                                        <li>Higher costs</li>
                                        <li>Single point of failure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="scaling-card">
                        <h3>Horizontal Scaling (Scale Out)</h3>
                        <div className="card-content">
                            <h4>Characteristics:</h4>
                            <ul>
                                <li>Adding more machines</li>
                                <li>Distributing load</li>
                                <li>More complex implementation</li>
                                <li>Better fault tolerance</li>
                            </ul>
                            <div className="pros-cons">
                                <div className="pros">
                                    <h4>Pros:</h4>
                                    <ul>
                                        <li>Theoretically unlimited</li>
                                        <li>Better fault tolerance</li>
                                        <li>Cost-effective</li>
                                    </ul>
                                </div>
                                <div className="cons">
                                    <h4>Cons:</h4>
                                    <ul>
                                        <li>More complex</li>
                                        <li>Network overhead</li>
                                        <li>Data consistency challenges</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="techniques" className="content-section">
                <h2>Scaling Techniques</h2>
                <div className="techniques-grid">
                    <div className="technique-card">
                        <h3>Microservices</h3>
                        <p>Breaking application into smaller, independent services</p>
                        <ul>
                            <li>Independent scaling</li>
                            <li>Technology flexibility</li>
                            <li>Easier maintenance</li>
                        </ul>
                    </div>

                    <div className="technique-card">
                        <h3>Containerization</h3>
                        <p>Using containers for consistent deployment</p>
                        <ul>
                            <li>Resource efficiency</li>
                            <li>Quick deployment</li>
                            <li>Environment consistency</li>
                        </ul>
                    </div>

                    <div className="technique-card">
                        <h3>Cloud Services</h3>
                        <p>Leveraging cloud infrastructure</p>
                        <ul>
                            <li>Auto-scaling</li>
                            <li>Pay-as-you-go</li>
                            <li>Global distribution</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="load-balancing" className="content-section">
                <h2>Load Balancing</h2>
                <div className="load-balancing-content">
                    <p>
                        Load balancing distributes incoming traffic across multiple servers to
                        ensure no single server bears too much load.
                    </p>

                    <div className="algorithms">
                        <h3>Common Algorithms:</h3>
                        <ul>
                            <li>Round Robin</li>
                            <li>Least Connections</li>
                            <li>Weighted Round Robin</li>
                            <li>IP Hash</li>
                        </ul>
                    </div>

                    <div className="example-block">
                        <h3>Load Balancer Configuration Example:</h3>
                        <CodeBlock initialCode={loadBalancerExample} />
                    </div>
                </div>
            </section>

            <section id="caching" className="content-section">
                <h2>Caching Strategies</h2>
                <div className="caching-content">
                    <div className="caching-types">
                        <h3>Types of Caching:</h3>
                        <ul>
                            <li>Client-side Caching</li>
                            <li>CDN Caching</li>
                            <li>Application Caching</li>
                            <li>Database Caching</li>
                        </ul>
                    </div>

                    <div className="example-block">
                        <h3>Caching Implementation Example:</h3>
                        <CodeBlock initialCode={cachingExample} />
                    </div>
                </div>
            </section>

            <section id="database" className="content-section">
                <h2>Database Scaling</h2>
                <div className="database-scaling">
                    <div className="scaling-method">
                        <h3>Vertical Scaling</h3>
                        <ul>
                            <li>Upgrading database hardware</li>
                            <li>Adding more CPU/RAM</li>
                            <li>Storage optimization</li>
                        </ul>
                    </div>

                    <div className="scaling-method">
                        <h3>Horizontal Scaling</h3>
                        <ul>
                            <li>Sharding</li>
                            <li>Replication</li>
                            <li>Read replicas</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="monitoring" className="content-section">
                <h2>Monitoring and Metrics</h2>
                <div className="monitoring-grid">
                    <div className="monitoring-card">
                        <h3>Key Metrics</h3>
                        <ul>
                            <li>CPU Usage</li>
                            <li>Memory Usage</li>
                            <li>Response Times</li>
                            <li>Error Rates</li>
                        </ul>
                    </div>

                    <div className="monitoring-card">
                        <h3>Tools</h3>
                        <ul>
                            <li>Prometheus</li>
                            <li>Grafana</li>
                            <li>New Relic</li>
                            <li>Datadog</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/systemdesign/performance" className="next-link">
                    Next: Performance Optimization →
                </Link>
            </div>
        </div>
    );
}

export default ScalabilityBasics;
