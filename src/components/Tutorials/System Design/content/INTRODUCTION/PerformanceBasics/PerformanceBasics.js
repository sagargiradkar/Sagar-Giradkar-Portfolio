// src/components/Tutorials/SystemDesign/content/Introduction/PerformanceBasics/PerformanceBasics.js

import React from "react";
import { Link } from "react-router-dom";
import "./PerformanceBasics.css";
import CodeBlock from "./CodeBlock";

function PerformanceBasics() {
    const cachingExample = `
// Performance optimization with caching
@Service
public class ProductService {
    private final Cache<String, Product> cache;
    private final ProductRepository repository;

    public Product getProduct(String id) {
        // Try to get from cache first
        Product product = cache.get(id);
        
        if (product == null) {
            // Cache miss - get from database
            product = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Product not found"));
            
            // Store in cache for future requests
            cache.put(id, product);
        }
        
        return product;
    }
}`;

    const queryOptimizationExample = `
-- Poor performing query
SELECT * FROM orders o 
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.status = 'COMPLETED';

-- Optimized query with proper indexing
SELECT o.id, o.date, p.name, oi.quantity
FROM orders o 
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.status = 'COMPLETED'
INDEX idx_orders_status (status);`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
                Performance Basics
            </div>

            <h1 className="content-title">Performance Basics</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="performance-intro">
                <p>
                    Performance optimization is crucial for creating responsive and efficient
                    systems. Understanding key performance concepts helps in building
                    scalable applications.
                </p>
            </div>

            <div className="table-of-content">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#metrics">Performance Metrics</a></li>
                    <li><a href="#optimization">Optimization Techniques</a></li>
                    <li><a href="#caching">Caching Strategies</a></li>
                    <li><a href="#database">Database Performance</a></li>
                    <li><a href="#frontend">Frontend Performance</a></li>
                    <li><a href="#monitoring">Performance Monitoring</a></li>
                </ul>
            </div>

            <section id="metrics" className="content-section">
                <h2>Performance Metrics</h2>
                <div className="metrics-grid">
                    <div className="metric-card">
                        <h3>Latency</h3>
                        <p>Time taken to respond to a request</p>
                        <ul>
                            <li>Network latency</li>
                            <li>Processing time</li>
                            <li>Database queries</li>
                            <li>External service calls</li>
                        </ul>
                    </div>

                    <div className="metric-card">
                        <h3>Throughput</h3>
                        <p>Number of requests processed per unit time</p>
                        <ul>
                            <li>Requests per second</li>
                            <li>Transactions per second</li>
                            <li>Data transfer rate</li>
                        </ul>
                    </div>

                    <div className="metric-card">
                        <h3>Resource Utilization</h3>
                        <p>System resource usage</p>
                        <ul>
                            <li>CPU usage</li>
                            <li>Memory usage</li>
                            <li>Disk I/O</li>
                            <li>Network bandwidth</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="optimization" className="content-section">
                <h2>Optimization Techniques</h2>
                <div className="techniques-container">
                    <div className="technique-section">
                        <h3>Code Level Optimization</h3>
                        <ul>
                            <li>Algorithmic efficiency</li>
                            <li>Memory management</li>
                            <li>Thread pooling</li>
                            <li>Async programming</li>
                        </ul>
                    </div>

                    <div className="technique-section">
                        <h3>System Level Optimization</h3>
                        <ul>
                            <li>Load balancing</li>
                            <li>Caching strategies</li>
                            <li>Connection pooling</li>
                            <li>Resource scaling</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="caching" className="content-section">
                <h2>Caching Strategies</h2>
                <div className="caching-content">
                    <div className="caching-types">
                        <h3>Common Caching Patterns</h3>
                        <ul>
                            <li>In-memory caching</li>
                            <li>Distributed caching</li>
                            <li>CDN caching</li>
                            <li>Browser caching</li>
                        </ul>
                    </div>

                    <div className="example-block">
                        <h3>Caching Implementation Example:</h3>
                        <CodeBlock initialCode={cachingExample} />
                    </div>
                </div>
            </section>

            <section id="database" className="content-section">
                <h2>Database Performance</h2>
                <div className="database-content">
                    <div className="optimization-tips">
                        <h3>Query Optimization</h3>
                        <ul>
                            <li>Proper indexing</li>
                            <li>Query planning</li>
                            <li>Denormalization</li>
                            <li>Connection pooling</li>
                        </ul>
                    </div>

                    <div className="example-block">
                        <h3>Query Optimization Example:</h3>
                        <CodeBlock initialCode={queryOptimizationExample} />
                    </div>
                </div>
            </section>

            <section id="frontend" className="content-section">
                <h2>Frontend Performance</h2>
                <div className="frontend-grid">
                    <div className="frontend-card">
                        <h3>Loading Performance</h3>
                        <ul>
                            <li>Code splitting</li>
                            <li>Lazy loading</li>
                            <li>Asset optimization</li>
                            <li>Compression</li>
                        </ul>
                    </div>

                    <div className="frontend-card">
                        <h3>Runtime Performance</h3>
                        <ul>
                            <li>Virtual DOM optimization</li>
                            <li>Memoization</li>
                            <li>Event delegation</li>
                            <li>Debouncing/Throttling</li>
                        </ul>
                    </div>

                    <div className="frontend-card">
                        <h3>Rendering Performance</h3>
                        <ul>
                            <li>Critical rendering path</li>
                            <li>Paint optimization</li>
                            <li>Layout thrashing prevention</li>
                            <li>Animation performance</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="monitoring" className="content-section">
                <h2>Performance Monitoring</h2>
                <div className="monitoring-grid">
                    <div className="monitoring-card">
                        <h3>Tools</h3>
                        <ul>
                            <li>APM solutions</li>
                            <li>Profilers</li>
                            <li>Logging systems</li>
                            <li>Metrics collectors</li>
                        </ul>
                    </div>

                    <div className="monitoring-card">
                        <h3>Key Indicators</h3>
                        <ul>
                            <li>Response time</li>
                            <li>Error rates</li>
                            <li>Resource usage</li>
                            <li>User experience metrics</li>
                        </ul>
                    </div>

                    <div className="monitoring-card">
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Regular monitoring</li>
                            <li>Alert setup</li>
                            <li>Trend analysis</li>
                            <li>Performance testing</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="performance-checklist">
                <h2>Performance Optimization Checklist</h2>
                <div className="checklist-grid">
                    <div className="checklist-card">
                        <h3>Backend Checklist</h3>
                        <ul>
                            <li>Implement caching</li>
                            <li>Optimize database queries</li>
                            <li>Use connection pooling</li>
                            <li>Configure load balancing</li>
                            <li>Enable compression</li>
                        </ul>
                    </div>

                    <div className="checklist-card">
                        <h3>Frontend Checklist</h3>
                        <ul>
                            <li>Minimize bundle size</li>
                            <li>Optimize images</li>
                            <li>Implement lazy loading</li>
                            <li>Use CDN</li>
                            <li>Enable browser caching</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navigation-links">
                <Link to="/tutorials/systemdesign/reliability" className="next-link">
                    Next: System Reliability →
                </Link>
            </div>
        </div>
    );
}

export default PerformanceBasics;
