// src/components/Tutorials/SystemDesign/content/LowLevelDesign/SolidPrinciples/SolidPrinciples.js

import React from "react";
import { Link } from "react-router-dom";
import "./SolidPrinciples.css";
import CodeBlock from "./CodeBlock";

function SolidPrinciples() {
    const singleResponsibilityExample = `
// Single Responsibility Principle
// Bad Example
class Employee {
    public void calculatePay() { /* ... */ }
    public void saveToDatabase() { /* ... */ }
    public void generateReport() { /* ... */ }
    public void sendEmail() { /* ... */ }
}

// Good Example
class Employee {
    private String name;
    private double salary;
    // Employee data and basic methods
}

class PayrollCalculator {
    public double calculatePay(Employee employee) { /* ... */ }
}

class EmployeeRepository {
    public void save(Employee employee) { /* ... */ }
}

class ReportGenerator {
    public void generateReport(Employee employee) { /* ... */ }
}

class EmailService {
    public void sendEmail(String to, String content) { /* ... */ }
}`;

    const openClosedExample = `
// Open-Closed Principle
// Bad Example
class PaymentProcessor {
    public void processPayment(String paymentType) {
        if (paymentType.equals("CREDIT_CARD")) {
            // Process credit card payment
        } else if (paymentType.equals("PAYPAL")) {
            // Process PayPal payment
        } else if (paymentType.equals("BITCOIN")) {
            // Process Bitcoin payment
        }
    }
}

// Good Example
interface PaymentMethod {
    void processPayment(double amount);
}

class CreditCardPayment implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        // Process credit card payment
    }
}

class PayPalPayment implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        // Process PayPal payment
    }
}

class BitcoinPayment implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        // Process Bitcoin payment
    }
}

class PaymentProcessor {
    public void processPayment(PaymentMethod paymentMethod, double amount) {
        paymentMethod.processPayment(amount);
    }
}`;

    const liskovSubstitutionExample = `
// Liskov Substitution Principle
// Bad Example
class Bird {
    public void fly() {
        // Flying implementation
    }
}

class Penguin extends Bird {  // Penguins can't fly!
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}

// Good Example
interface FlyingBird {
    void fly();
}

interface SwimmingBird {
    void swim();
}

class Sparrow implements FlyingBird {
    @Override
    public void fly() {
        // Flying implementation
    }
}

class Penguin implements SwimmingBird {
    @Override
    public void swim() {
        // Swimming implementation
    }
}`;

    const interfaceSegregationExample = `
// Interface Segregation Principle
// Bad Example
interface Worker {
    void work();
    void eat();
    void sleep();
    void code();
    void test();
    void manage();
}

// Good Example
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

interface Sleepable {
    void sleep();
}

interface Programmer {
    void code();
    void test();
}

interface Manager {
    void manage();
}

class Developer implements Workable, Eatable, Sleepable, Programmer {
    @Override
    public void work() { /* ... */ }
    @Override
    public void eat() { /* ... */ }
    @Override
    public void sleep() { /* ... */ }
    @Override
    public void code() { /* ... */ }
    @Override
    public void test() { /* ... */ }
}`;

    const dependencyInversionExample = `
// Dependency Inversion Principle
// Bad Example
class EmailNotifier {
    public void sendEmail(String message) {
        // Send email implementation
    }
}

class UserService {
    private EmailNotifier emailNotifier = new EmailNotifier();
    
    public void register(User user) {
        // Register user
        emailNotifier.sendEmail("Welcome!");
    }
}

// Good Example
interface NotificationService {
    void sendNotification(String message);
}

class EmailNotifier implements NotificationService {
    @Override
    public void sendNotification(String message) {
        // Send email implementation
    }
}

class SMSNotifier implements NotificationService {
    @Override
    public void sendNotification(String message) {
        // Send SMS implementation
    }
}

class UserService {
    private final NotificationService notificationService;
    
    public UserService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
    
    public void register(User user) {
        // Register user
        notificationService.sendNotification("Welcome!");
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign/lowleveldesign">Low Level Design</Link>{" "}
                <span>›</span> SOLID Principles
            </div>

            <h1 className="content-title">SOLID Principles</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="solid-intro">
                <p>
                    SOLID is a mnemonic acronym for five design principles intended to make
                    object-oriented designs more understandable, flexible, and maintainable.
                </p>
            </div>

            <section className="content-section" id="single-responsibility">
                <h2>Single Responsibility Principle (SRP)</h2>
                <div className="principle-explanation">
                    <div className="principle-summary">
                        <p>
                            "A class should have one, and only one, reason to change."
                        </p>
                        <div className="key-points">
                            <h3>Benefits:</h3>
                            <ul>
                                <li>Easier to understand and maintain</li>
                                <li>Better testability</li>
                                <li>Reduced coupling</li>
                                <li>Better code organization</li>
                            </ul>
                        </div>
                    </div>
                    <div className="example-block">
                        <h3>Implementation Example:</h3>
                        <CodeBlock initialCode={singleResponsibilityExample} />
                    </div>
                </div>
            </section>

            <section className="content-section" id="open-closed">
                <h2>Open-Closed Principle (OCP)</h2>
                <div className="principle-explanation">
                    <div className="principle-summary">
                        <p>
                            "Software entities should be open for extension, but closed for
                            modification."
                        </p>
                        <div className="key-points">
                            <h3>Benefits:</h3>
                            <ul>
                                <li>Easy to add new functionality</li>
                                <li>Minimizes changes to existing code</li>
                                <li>Reduces risk of bugs</li>
                                <li>Better maintainability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="example-block">
                        <h3>Implementation Example:</h3>
                        <CodeBlock initialCode={openClosedExample} />
                    </div>
                </div>
            </section>

            <section className="content-section" id="liskov-substitution">
                <h2>Liskov Substitution Principle (LSP)</h2>
                <div className="principle-explanation">
                    <div className="principle-summary">
                        <p>
                            "Derived classes must be substitutable for their base classes."
                        </p>
                        <div className="key-points">
                            <h3>Benefits:</h3>
                            <ul>
                                <li>Better inheritance hierarchies</li>
                                <li>Improved code reusability</li>
                                <li>Better polymorphic behavior</li>
                                <li>Reduced unexpected behavior</li>
                            </ul>
                        </div>
                    </div>
                    <div className="example-block">
                        <h3>Implementation Example:</h3>
                        <CodeBlock initialCode={liskovSubstitutionExample} />
                    </div>
                </div>
            </section>

            <section className="content-section" id="interface-segregation">
                <h2>Interface Segregation Principle (ISP)</h2>
                <div className="principle-explanation">
                    <div className="principle-summary">
                        <p>
                            "Clients should not be forced to depend upon interfaces they do not
                            use."
                        </p>
                        <div className="key-points">
                            <h3>Benefits:</h3>
                            <ul>
                                <li>More focused interfaces</li>
                                <li>Better separation of concerns</li>
                                <li>Reduced coupling</li>
                                <li>Improved maintainability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="example-block">
                        <h3>Implementation Example:</h3>
                        <CodeBlock initialCode={interfaceSegregationExample} />
                    </div>
                </div>
            </section>

            <section className="content-section" id="dependency-inversion">
                <h2>Dependency Inversion Principle (DIP)</h2>
                <div className="principle-explanation">
                    <div className="principle-summary">
                        <p>
                            "Depend upon abstractions, not concretions."
                        </p>
                        <div className="key-points">
                            <h3>Benefits:</h3>
                            <ul>
                                <li>Reduced coupling</li>
                                <li>Better testability</li>
                                <li>Easier to modify</li>
                                <li>Better reusability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="example-block">
                        <h3>Implementation Example:</h3>
                        <CodeBlock initialCode={dependencyInversionExample} />
                    </div>
                </div>
            </section>

            <section className="content-section" id="best-practices">
                <h2>Best Practices</h2>
                <div className="practices-grid">
                    <div className="practice-card">
                        <h3>Application</h3>
                        <ul>
                            <li>Apply principles gradually</li>
                            <li>Consider trade-offs</li>
                            <li>Don't over-engineer</li>
                            <li>Keep context in mind</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Code Review</h3>
                        <ul>
                            <li>Check for SOLID violations</li>
                            <li>Look for improvement opportunities</li>
                            <li>Consider maintainability</li>
                            <li>Review dependencies</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Testing</h3>
                        <ul>
                            <li>Unit test each component</li>
                            <li>Test inheritance hierarchies</li>
                            <li>Verify interface contracts</li>
                            <li>Check substitutability</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Refactoring</h3>
                        <ul>
                            <li>Identify violations</li>
                            <li>Plan improvements</li>
                            <li>Refactor gradually</li>
                            <li>Maintain functionality</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link
                    to="/tutorials/systemdesign/lowleveldesign/design-patterns"
                    className="next-link"
                >
                    Next: Design Patterns →
                </Link>
            </div>
        </div>
    );
}

export default SolidPrinciples;
