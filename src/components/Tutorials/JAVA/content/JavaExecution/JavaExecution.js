// src/components/Tutorials/Java/content/JavaExecution/JavaExecution.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaExecution.css';

function JavaExecution() {
    const compileExample = `// Compile
javac HelloWorld.java

// Run
java HelloWorld`;

    const programExample = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

    const compilationProcessExample = `// Source File: Example.java
public class Example {
    public static void main(String[] args) {
        int number = 42;
        System.out.println("The number is: " + number);
    }
}

// Compile: javac Example.java
// Creates: Example.class (bytecode)
// Run: java Example`;

    const commandLineArgsExample = `public class CommandLineArgs {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);
        
        for(int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Java Execution Process
            </div>

            <h1 className="content-title">Java Execution Process</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section overview">
                <h2>Overview</h2>
                <div className="execution-diagram">
                    <div className="diagram-step">
                        <div className="step-icon">📝</div>
                        <div className="step-title">Source Code</div>
                        <div className="step-description">.java file</div>
                    </div>
                    <div className="diagram-arrow">→</div>
                    <div className="diagram-step">
                        <div className="step-icon">🔨</div>
                        <div className="step-title">Compilation</div>
                        <div className="step-description">javac</div>
                    </div>
                    <div className="diagram-arrow">→</div>
                    <div className="diagram-step">
                        <div className="step-icon">📊</div>
                        <div className="step-title">Bytecode</div>
                        <div className="step-description">.class file</div>
                    </div>
                    <div className="diagram-arrow">→</div>
                    <div className="diagram-step">
                        <div className="step-icon">⚙️</div>
                        <div className="step-title">JVM</div>
                        <div className="step-description">Execution</div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Basic Compilation and Execution</h2>
                <div className="basic-execution">
                    <p>Here's a simple example of compiling and running a Java program:</p>
                    <CodeBlock initialCode={programExample} />
                    <p>To compile and run this program, use these commands:</p>
                    <CodeBlock initialCode={compileExample} />
                </div>

                <div className="info-box">
                    <h3>💡 Important Note</h3>
                    <p>The file name must match the public class name with a .java extension.</p>
                </div>
            </section>

            <section className="content-section">
                <h2>Compilation Process in Detail</h2>
                <div className="compilation-steps">
                    <h3>Step 1: Source Code to Bytecode</h3>
                    <CodeBlock initialCode={compilationProcessExample} />
                    
                    <div className="process-details">
                        <h4>During Compilation:</h4>
                        <ul>
                            <li>Syntax checking</li>
                            <li>Type checking</li>
                            <li>Bytecode generation</li>
                            <li>Optimization</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JVM Execution</h2>
                <div className="jvm-execution">
                    <div className="execution-steps">
                        <div className="execution-step">
                            <h3>1. Class Loading</h3>
                            <p>Loading the compiled .class file into memory</p>
                        </div>
                        <div className="execution-step">
                            <h3>2. Bytecode Verification</h3>
                            <p>Ensuring code safety and correctness</p>
                        </div>
                        <div className="execution-step">
                            <h3>3. Just-In-Time Compilation</h3>
                            <p>Converting bytecode to native machine code</p>
                        </div>
                        <div className="execution-step">
                            <h3>4. Execution</h3>
                            <p>Running the optimized code</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Command Line Arguments</h2>
                <p>Java programs can accept command line arguments through the main method:</p>
                <CodeBlock initialCode={commandLineArgsExample} />
                
                <div className="example-box">
                    <h3>Running with Arguments:</h3>
                    <code>java CommandLineArgs arg1 arg2 arg3</code>
                </div>
            </section>

            <section className="content-section">
                <h2>Common Execution Issues</h2>
                <div className="issues-grid">
                    <div className="issue-card">
                        <h5>ClassNotFoundException</h5>
                        <p>Occurs when JVM can't find the specified class</p>
                        <div className="solution">
                            <strong>Solution:</strong> Check classpath and class name
                        </div>
                    </div>
                    
                    <div className="issue-card">
                        <h5>NoClassDefFoundError</h5>
                        <p>Class was present during compilation but missing during runtime</p>
                        <div className="solution">
                            <strong>Solution:</strong> Verify all required classes are available
                        </div>
                    </div>
                    
                    <div className="issue-card">
                        <h5>MainMethodNotFoundException</h5>
                        <p>No valid main method found in the class</p>
                        <div className="solution">
                            <strong>Solution:</strong> Ensure correct main method signature
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <ul>
                        <li>Always compile with -Xlint for additional warnings</li>
                        <li>Use appropriate memory settings for large applications</li>
                        <li>Handle command line arguments safely</li>
                        <li>Implement proper error handling</li>
                        <li>Follow naming conventions strictly</li>
                    </ul>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/installation" className="prev-link">
                    ← Previous: Java Installation
                </Link>
                <Link to="/tutorials/java/variables" className="next-link">
                    Next: Java Variables →
                </Link>
            </div>
        </div>
    );
}

export default JavaExecution;
