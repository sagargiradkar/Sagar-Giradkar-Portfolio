// src/components/Tutorials/Java/content/JavaControlFlow/JavaControlFlow.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaControlFlow.css';

function JavaControlFlow() {
    const ifElseCode = `// Simple if statement
if (age >= 18) {
    System.out.println("You are an adult");
}

// if-else statement
if (score >= 60) {
    System.out.println("You passed!");
} else {
    System.out.println("You failed.");
}

// if-else-if ladder
if (grade >= 90) {
    System.out.println("A Grade");
} else if (grade >= 80) {
    System.out.println("B Grade");
} else if (grade >= 70) {
    System.out.println("C Grade");
} else {
    System.out.println("D Grade");
}`;

    const switchCode = `int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    default:
        System.out.println("Weekend");
}`;

    const ternaryCode = `// Ternary operator
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";

// Nested ternary operator
int score = 85;
String result = (score >= 90) ? "Excellent" 
              : (score >= 80) ? "Good" 
              : (score >= 70) ? "Fair" 
              : "Poor";`;

    const nestedIfCode = `if (age >= 18) {
    if (hasLicense) {
        if (hasCar) {
            System.out.println("You can drive");
        } else {
            System.out.println("You need a car");
        }
    } else {
        System.out.println("You need a license");
    }
} else {
    System.out.println("You must be 18 or older");
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Control Flow
            </div>

            <h1 className="content-title">Java Control Flow</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Overview</h2>
                <div className="control-flow-overview">
                    <p>
                        Control flow statements determine the order in which program statements are executed.
                        They allow you to control the flow of program execution based on conditions and make decisions.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>if-else Statements</h2>
                <div className="if-else-section">
                    <div className="control-flow-grid">
                        <div className="flow-card">
                            <h3>Simple if</h3>
                            <p>Executes code block if condition is true</p>
                        </div>
                        <div className="flow-card">
                            <h3>if-else</h3>
                            <p>Provides alternative execution path</p>
                        </div>
                        <div className="flow-card">
                            <h3>if-else-if</h3>
                            <p>Tests multiple conditions in sequence</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={ifElseCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>switch Statement</h2>
                <div className="switch-section">
                    <div className="switch-features">
                        <div className="feature-card">
                            <h3>Multiple Cases</h3>
                            <p>Tests a variable against multiple values</p>
                        </div>
                        <div className="feature-card">
                            <h3>Break Statement</h3>
                            <p>Exits the switch block after matching case</p>
                        </div>
                        <div className="feature-card">
                            <h3>Default Case</h3>
                            <p>Handles unmatched values</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={switchCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Ternary Operator</h2>
                <div className="ternary-section">
                    <div className="ternary-explanation">
                        <h3>Syntax</h3>
                        <p>condition ? expression1 : expression2</p>
                        <ul>
                            <li>Shorthand for if-else</li>
                            <li>Returns one of two values</li>
                            <li>Can be nested (though not recommended for readability)</li>
                        </ul>
                    </div>
                    <CodeBlock initialCode={ternaryCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Nested Control Structures</h2>
                <div className="nested-section">
                    <div className="nested-info">
                        <div className="info-card">
                            <h3>Nesting Levels</h3>
                            <p>Control structures can be nested within each other</p>
                        </div>
                        <div className="info-card">
                            <h3>Best Practices</h3>
                            <p>Limit nesting depth for better readability</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={nestedIfCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>Use Braces</h3>
                        <p>Always use curly braces, even for single statements</p>
                    </div>
                    <div className="practice-card">
                        <h3>Keep it Simple</h3>
                        <p>Avoid deep nesting of control structures</p>
                    </div>
                    <div className="practice-card">
                        <h3>Break and Continue</h3>
                        <p>Use break and continue statements wisely</p>
                    </div>
                    <div className="practice-card">
                        <h3>Default Cases</h3>
                        <p>Always include default cases in switch statements</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/operators" className="prev-link">
                    ← Previous: Operators
                </Link>
                <Link to="/tutorials/java/loops" className="next-link">
                    Next: Loops →
                </Link>
            </div>
        </div>
    );
}

export default JavaControlFlow;
