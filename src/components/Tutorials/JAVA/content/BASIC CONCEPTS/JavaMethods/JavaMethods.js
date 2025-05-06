// src/components/Tutorials/Java/content/JavaMethods/JavaMethods.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaMethods.css';

function JavaMethods() {
    const methodBasicsCode = `// Basic method declaration
public void greet() {
    System.out.println("Hello!");
}

// Method with parameters
public void greetPerson(String name) {
    System.out.println("Hello, " + name + "!");
}

// Method with return value
public int add(int a, int b) {
    return a + b;
}

// Method with multiple parameters
public double calculateAverage(double... numbers) {
    double sum = 0;
    for(double num : numbers) {
        sum += num;
    }
    return numbers.length > 0 ? sum / numbers.length : 0;
}`;

    const methodOverloadingCode = `public class Calculator {
    // Method overloading examples
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public String add(String a, String b) {
        return a + b;
    }
}`;

    const recursionCode = `// Factorial calculation using recursion
public int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Fibonacci sequence using recursion
public int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}`;

    const methodScopeCode = `public class ScopeExample {
    private int instanceVar = 10;  // Instance variable
    
    public void methodA() {
        int localVar = 20;  // Local variable
        System.out.println(instanceVar);  // Access instance variable
        System.out.println(localVar);     // Access local variable
    }
    
    public void methodB() {
        System.out.println(instanceVar);  // Can access instance variable
        // System.out.println(localVar);  // Cannot access localVar
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Methods
            </div>

            <h1 className="content-title">Java Methods</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Method Basics</h2>
                <div className="methods-overview">
                    <p>
                        Methods in Java are blocks of code that perform specific tasks. They are fundamental
                        to achieving code reusability and maintaining clean, organized code structure.
                    </p>
                    <div className="method-components">
                        <div className="component-card">
                            <h3>Method Declaration</h3>
                            <ul>
                                <li>Access modifier</li>
                                <li>Return type</li>
                                <li>Method name</li>
                                <li>Parameters (optional)</li>
                            </ul>
                        </div>
                    </div>
                    <CodeBlock initialCode={methodBasicsCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Method Overloading</h2>
                <div className="overloading-section">
                    <div className="overloading-info">
                        <h3>What is Method Overloading?</h3>
                        <p>
                            Method overloading allows multiple methods to have the same name but different
                            parameters. It's a form of compile-time polymorphism.
                        </p>
                    </div>
                    <div className="overloading-types">
                        <div className="type-card">
                            <h3>Parameter Number</h3>
                            <p>Different number of parameters</p>
                        </div>
                        <div className="type-card">
                            <h3>Parameter Type</h3>
                            <p>Different parameter types</p>
                        </div>
                        <div className="type-card">
                            <h3>Parameter Order</h3>
                            <p>Different parameter order</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={methodOverloadingCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Recursion</h2>
                <div className="recursion-section">
                    <div className="recursion-info">
                        <h3>Understanding Recursion</h3>
                        <p>
                            Recursion is a programming concept where a method calls itself to solve a problem
                            by breaking it down into smaller subproblems.
                        </p>
                    </div>
                    <div className="recursion-examples">
                        <div className="example-card">
                            <h3>Base Case</h3>
                            <p>Condition to stop recursion</p>
                        </div>
                        <div className="example-card">
                            <h3>Recursive Case</h3>
                            <p>Method calling itself</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={recursionCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Method Scope</h2>
                <div className="scope-section">
                    <div className="scope-types">
                        <div className="scope-card">
                            <h3>Instance Scope</h3>
                            <p>Variables accessible throughout the class</p>
                        </div>
                        <div className="scope-card">
                            <h3>Local Scope</h3>
                            <p>Variables accessible only within the method</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={methodScopeCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>Single Responsibility</h3>
                        <p>Each method should perform one specific task</p>
                    </div>
                    <div className="practice-card">
                        <h3>Meaningful Names</h3>
                        <p>Use descriptive method names that indicate their purpose</p>
                    </div>
                    <div className="practice-card">
                        <h3>Parameter Count</h3>
                        <p>Limit the number of parameters for better maintainability</p>
                    </div>
                    <div className="practice-card">
                        <h3>Documentation</h3>
                        <p>Use JavaDoc comments to document method behavior</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/strings" className="prev-link">
                    ← Previous: Strings
                </Link>
                <Link to="/tutorials/java/classes" className="next-link">
                    Next: Classes →
                </Link>
            </div>
        </div>
    );
}

export default JavaMethods;
