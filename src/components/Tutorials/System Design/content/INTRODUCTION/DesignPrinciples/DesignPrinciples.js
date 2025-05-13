// src/components/Tutorials/SystemDesign/content/Introduction/DesignPrinciples/DesignPrinciples.js

import React from "react";
import { Link } from "react-router-dom";
import "./DesignPrinciples.css";
import CodeBlock from "./CodeBlock";

function DesignPrinciples() {
    const solidExample = `
// Single Responsibility Principle Example
// Bad Example
class User {
    public void saveUser(User user) { /* ... */ }
    public void sendEmail(String content) { /* ... */ }
    public void generateReport() { /* ... */ }
}

// Good Example
class User {
    public void saveUser(User user) { /* ... */ }
}

class EmailService {
    public void sendEmail(String content) { /* ... */ }
}

class ReportGenerator {
    public void generateReport() { /* ... */ }
}`;

    const openClosedExample = `
// Open-Closed Principle Example
// Bad Example
class Rectangle {
    public double width;
    public double height;
}

class AreaCalculator {
    public double calculateArea(Rectangle rectangle) {
        return rectangle.width * rectangle.height;
    }
    // Adding new shape requires modifying this class
}

// Good Example
interface Shape {
    double calculateArea();
}

class Rectangle implements Shape {
    private double width;
    private double height;
    
    public double calculateArea() {
        return width * height;
    }
}

class Circle implements Shape {
    private double radius;
    
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}`;

    const dryExample = `
// DRY Principle Example
// Bad Example (Violating DRY)
class OrderProcessor {
    public void processOrder(Order order) {
        // Validate order
        if (order.getItems() == null || order.getItems().isEmpty()) {
            throw new ValidationException("Order must have items");
        }
        if (order.getCustomer() == null) {
            throw new ValidationException("Order must have customer");
        }
        
        // Process payment
        PaymentService.process(order);
    }
    
    public void saveOrder(Order order) {
        // Duplicate validation logic
        if (order.getItems() == null || order.getItems().isEmpty()) {
            throw new ValidationException("Order must have items");
        }
        if (order.getCustomer() == null) {
            throw new ValidationException("Order must have customer");
        }
        
        // Save order
        Database.save(order);
    }
}

// Good Example (Following DRY)
class OrderProcessor {
    private void validateOrder(Order order) {
        if (order.getItems() == null || order.getItems().isEmpty()) {
            throw new ValidationException("Order must have items");
        }
        if (order.getCustomer() == null) {
            throw new ValidationException("Order must have customer");
        }
    }
    
    public void processOrder(Order order) {
        validateOrder(order);
        PaymentService.process(order);
    }
    
    public void saveOrder(Order order) {
        validateOrder(order);
        Database.save(order);
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign">System Design</Link> <span>›</span>{" "}
                Design Principles
            </div>

            <h1 className="content-title">Design Principles</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="table-of-content">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#solid">SOLID Principles</a></li>
                    <li><a href="#dry">DRY Principle</a></li>
                    <li><a href="#kiss">KISS Principle</a></li>
                    <li><a href="#yagni">YAGNI Principle</a></li>
                    <li><a href="#composition">Composition Over Inheritance</a></li>
                    <li><a href="#separation">Separation of Concerns</a></li>
                    <li><a href="#best-practices">Best Practices</a></li>
                </ul>
            </div>

            <section id="solid" className="content-section">
                <h2>SOLID Principles</h2>
                <div className="principles-grid">
                    <div className="principle-card">
                        <h3>Single Responsibility</h3>
                        <p>A class should have only one reason to change</p>
                        <div className="example-block">
                            <CodeBlock initialCode={solidExample} />
                        </div>
                    </div>

                    <div className="principle-card">
                        <h3>Open-Closed</h3>
                        <p>Open for extension, closed for modification</p>
                        <div className="example-block">
                            <CodeBlock initialCode={openClosedExample} />
                        </div>
                    </div>

                    <div className="principle-card">
                        <h3>Liskov Substitution</h3>
                        <p>Derived classes must be substitutable for their base classes</p>
                    </div>

                    <div className="principle-card">
                        <h3>Interface Segregation</h3>
                        <p>Clients shouldn't depend on interfaces they don't use</p>
                    </div>

                    <div className="principle-card">
                        <h3>Dependency Inversion</h3>
                        <p>Depend on abstractions, not concretions</p>
                    </div>
                </div>
            </section>

            <section id="dry" className="content-section">
                <h2>DRY (Don't Repeat Yourself)</h2>
                <div className="principle-explanation">
                    <p>
                        Every piece of knowledge must have a single, unambiguous, authoritative
                        representation within a system.
                    </p>
                    <div className="example-block">
                        <CodeBlock initialCode={dryExample} />
                    </div>
                </div>
            </section>

            <section id="kiss" className="content-section">
                <h2>KISS (Keep It Simple, Stupid)</h2>
                <div className="principles-list">
                    <h3>Key Aspects:</h3>
                    <ul>
                        <li>Avoid unnecessary complexity</li>
                        <li>Choose simple solutions over clever ones</li>
                        <li>Make code easy to understand</li>
                        <li>Minimize moving parts</li>
                    </ul>
                </div>
            </section>

            <section id="yagni" className="content-section">
                <h2>YAGNI (You Aren't Gonna Need It)</h2>
                <div className="principles-list">
                    <h3>Implementation Guidelines:</h3>
                    <ul>
                        <li>Don't add functionality until necessary</li>
                        <li>Avoid speculative features</li>
                        <li>Focus on current requirements</li>
                        <li>Reduce maintenance overhead</li>
                    </ul>
                </div>
            </section>

            <section id="composition" className="content-section">
                <h2>Composition Over Inheritance</h2>
                <div className="principle-explanation">
                    <p>
                        Favor object composition over class inheritance to achieve better
                        flexibility and avoid tight coupling.
                    </p>
                    <div className="benefits-list">
                        <h3>Benefits:</h3>
                        <ul>
                            <li>More flexible design</li>
                            <li>Better encapsulation</li>
                            <li>Easier testing</li>
                            <li>Runtime behavior modification</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="separation" className="content-section">
                <h2>Separation of Concerns</h2>
                <div className="principle-explanation">
                    <p>
                        Divide your program into distinct sections, each addressing a separate
                        concern.
                    </p>
                    <div className="concerns-examples">
                        <h3>Common Separations:</h3>
                        <ul>
                            <li>Presentation / UI</li>
                            <li>Business Logic</li>
                            <li>Data Access</li>
                            <li>Error Handling</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="best-practices" className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices-grid">
                    <div className="practice-card">
                        <h3>Code Review</h3>
                        <ul>
                            <li>Review for principle violations</li>
                            <li>Ensure consistency</li>
                            <li>Share knowledge</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Documentation</h3>
                        <ul>
                            <li>Document design decisions</li>
                            <li>Explain principle applications</li>
                            <li>Keep documentation updated</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Testing</h3>
                        <ul>
                            <li>Unit test each component</li>
                            <li>Integration testing</li>
                            <li>Test for flexibility</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Refactoring</h3>
                        <ul>
                            <li>Regular code review</li>
                            <li>Identify violations</li>
                            <li>Incremental improvements</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/systemdesign/design-patterns" className="next-link">
                    Next: Design Patterns →
                </Link>
            </div>
        </div>
    );
}

export default DesignPrinciples;
