// src/components/Tutorials/Java/content/JavaLoops/JavaLoops.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaLoops.css';

function JavaLoops() {
    const forLoopCode = `// Basic for loop
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}

// For loop with multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i: " + i + ", j: " + j);
}

// Enhanced for loop (for-each)
String[] fruits = {"Apple", "Banana", "Orange"};
for (String fruit : fruits) {
    System.out.println(fruit);
}`;

    const whileLoopCode = `// While loop
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}

// Do-while loop
int num = 1;
do {
    System.out.println("Number: " + num);
    num *= 2;
} while (num <= 16);`;

    const nestedLoopCode = `// Nested for loops (creating a pattern)
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}

// Output:
// *
// * *
// * * *
// * * * *
// * * * * *`;

    const controlStatementsCode = `// Break statement
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;    // Exit loop when i equals 5
    }
    System.out.println(i);
}

// Continue statement
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue; // Skip iteration when i equals 2
    }
    System.out.println(i);
}

// Label with break
outer: for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer; // Exit both loops
        }
        System.out.println("i: " + i + ", j: " + j);
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Loops
            </div>

            <h1 className="content-title">Java Loops</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Overview</h2>
                <div className="loops-overview">
                    <p>
                        Loops in Java allow you to execute a block of code repeatedly based on a condition.
                        Java provides several types of loops to handle different iteration scenarios.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>For Loop</h2>
                <div className="loop-types">
                    <div className="loop-grid">
                        <div className="loop-card">
                            <h3>Basic For Loop</h3>
                            <p>Traditional loop with initialization, condition, and update statement</p>
                        </div>
                        <div className="loop-card">
                            <h3>Enhanced For Loop</h3>
                            <p>Simplified iteration over arrays and collections</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={forLoopCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>While Loops</h2>
                <div className="while-section">
                    <div className="loop-grid">
                        <div className="loop-card">
                            <h3>While Loop</h3>
                            <p>Executes code while condition is true</p>
                        </div>
                        <div className="loop-card">
                            <h3>Do-While Loop</h3>
                            <p>Executes code at least once, then checks condition</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={whileLoopCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Nested Loops</h2>
                <div className="nested-section">
                    <div className="nested-info">
                        <div className="info-card">
                            <h3>Loop Within Loop</h3>
                            <p>Used for working with multi-dimensional data structures and patterns</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={nestedLoopCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Control Statements</h2>
                <div className="control-section">
                    <div className="control-grid">
                        <div className="control-card">
                            <h3>break</h3>
                            <p>Exits the loop immediately</p>
                        </div>
                        <div className="control-card">
                            <h3>continue</h3>
                            <p>Skips the current iteration</p>
                        </div>
                        <div className="control-card">
                            <h3>labels</h3>
                            <p>Control nested loop execution</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={controlStatementsCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>Choose the Right Loop</h3>
                        <p>Select the appropriate loop type for your use case</p>
                    </div>
                    <div className="practice-card">
                        <h3>Avoid Infinite Loops</h3>
                        <p>Ensure proper loop termination conditions</p>
                    </div>
                    <div className="practice-card">
                        <h3>Loop Performance</h3>
                        <p>Consider efficiency when working with large datasets</p>
                    </div>
                    <div className="practice-card">
                        <h3>Clear Iterator Names</h3>
                        <p>Use meaningful names for loop variables</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/controlflow" className="prev-link">
                    ← Previous: Control Flow
                </Link>
                <Link to="/tutorials/java/arrays" className="next-link">
                    Next: Arrays →
                </Link>
            </div>
        </div>
    );
}

export default JavaLoops;
