// src/components/Tutorials/Java/content/JavaFeatures/JavaFeatures.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaFeatures.css';

function JavaFeatures() {
    const objectOrientedExample = `class Animal {
    private String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}`;

    const platformIndependentExample = `// Compile once
javac HelloWorld.java

// Run anywhere with JVM
java HelloWorld  // Windows
java HelloWorld  // Linux
java HelloWorld  // macOS`;

    const securityExample = `// Security Manager Example
SecurityManager securityManager = System.getSecurityManager();
if (securityManager == null) {
    System.setSecurityManager(new SecurityManager());
}

// Access Control Example
try {
    FilePermission perm = new FilePermission("file.txt", "read");
    AccessController.checkPermission(perm);
    // Read file
} catch (SecurityException e) {
    System.out.println("Access denied!");
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Features
            </div>

            <h1 className="content-title">Java Features</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Core Features Overview</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📦</div>
                        <h3>Object-Oriented</h3>
                        <p>Everything in Java is an object, following OOP principles</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌐</div>
                        <h3>Platform Independent</h3>
                        <p>Write Once, Run Anywhere (WORA)</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure</h3>
                        <p>Built-in security features and sandbox environment</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🧵</div>
                        <h3>Multithreaded</h3>
                        <p>Support for concurrent programming</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Object-Oriented Programming</h2>
                <div className="feature-details">
                    <div className="feature-principles">
                        <h3>Key OOP Principles:</h3>
                        <ul>
                            <li>
                                <strong>Encapsulation:</strong> Bundling data and methods together
                            </li>
                            <li>
                                <strong>Inheritance:</strong> Creating new classes based on existing ones
                            </li>
                            <li>
                                <strong>Polymorphism:</strong> Different forms of the same method
                            </li>
                            <li>
                                <strong>Abstraction:</strong> Hiding complex implementation details
                            </li>
                        </ul>
                    </div>
                    <CodeBlock initialCode={objectOrientedExample} />
                </div>
            </section>

            <section className="content-section">
                <h2>Platform Independence</h2>
                <div className="feature-details">
                    <div className="platform-independence">
                        <h3>How it Works:</h3>
                        <div className="process-flow">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <p>Write Java Code</p>
                            </div>
                            <div className="arrow">→</div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <p>Compile to Bytecode</p>
                            </div>
                            <div className="arrow">→</div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <p>Run on JVM</p>
                            </div>
                        </div>
                    </div>
                    <CodeBlock initialCode={platformIndependentExample} />
                </div>
            </section>

            <section className="content-section">
                <h2>Security Features</h2>
                <div className="feature-details">
                    <div className="security-features">
                        <h3>Security Mechanisms:</h3>
                        <ul>
                            <li>Security Manager</li>
                            <li>Access Controller</li>
                            <li>Class Loader Architecture</li>
                            <li>Bytecode Verification</li>
                        </ul>
                    </div>
                    <CodeBlock initialCode={securityExample} />
                </div>
            </section>

            <section className="content-section">
                <h2>Additional Features</h2>
                <div className="additional-features">
                    <div className="feature-row">
                        <div className="feature-item">
                            <h3>Robust</h3>
                            <ul>
                                <li>Strong type checking</li>
                                <li>Exception handling</li>
                                <li>Memory management</li>
                            </ul>
                        </div>
                        <div className="feature-item">
                            <h3>High Performance</h3>
                            <ul>
                                <li>JIT compilation</li>
                                <li>Optimized bytecode</li>
                                <li>Efficient memory usage</li>
                            </ul>
                        </div>
                    </div>
                    <div className="feature-row">
                        <div className="feature-item">
                            <h3>Distributed</h3>
                            <ul>
                                <li>Network programming support</li>
                                <li>RMI capabilities</li>
                                <li>Distributed computing</li>
                            </ul>
                        </div>
                        <div className="feature-item">
                            <h3>Dynamic</h3>
                            <ul>
                                <li>Runtime linking</li>
                                <li>Dynamic class loading</li>
                                <li>Reflection API</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Latest Features</h2>
                <div className="latest-features">
                    <div className="version-features">
                        <h3>Java 17 LTS Features</h3>
                        <ul>
                            <li>Sealed Classes</li>
                            <li>Pattern Matching</li>
                            <li>Record Classes</li>
                            <li>Text Blocks</li>
                        </ul>
                    </div>
                    <div className="version-features">
                        <h3>Upcoming Features</h3>
                        <ul>
                            <li>Project Loom</li>
                            <li>Project Valhalla</li>
                            <li>Project Panama</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/history" className="prev-link">
                    ← Previous: Java History
                </Link>
                <Link to="/tutorials/java/environment" className="next-link">
                    Next: Java Environment →
                </Link>
            </div>
        </div>
    );
}

export default JavaFeatures;
