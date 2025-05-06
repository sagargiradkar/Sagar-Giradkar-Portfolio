// src/components/Tutorials/Java/content/BASIC CONCEPTS/JavaVariables/JavaVariables.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaVariables.css';

function JavaVariables() {
    const variableDeclarationCode = `// Variable declaration
int age;
String name;
double salary;

// Variable initialization
age = 25;
name = "John";
salary = 50000.50;

// Declaration and initialization in one line
int height = 180;
String country = "USA";
boolean isStudent = true;`;

    const constVariableCode = `// Constant (final) variable declaration
final double PI = 3.14159;
final String COMPANY_NAME = "TechCorp";
final int MAX_USERS = 1000;`;

    const variableScopesCode = `public class VariableScope {
    // Class/Instance variable
    private int instanceVar;
    
    // Static/Class variable
    private static int staticVar;
    
    public void method() {
        // Local variable
        int localVar = 10;
        
        // Block scope
        if (true) {
            int blockVar = 20;
            System.out.println(blockVar);
        }
        // blockVar is not accessible here
    }
}`;

    const namingConventionsCode = `// Correct variable names
int age;
String firstName;
double accountBalance;
boolean isActive;

// Incorrect variable names
int 123number;     // Cannot start with number
String first name; // Cannot contain space
double account$;   // Avoid special characters
boolean class;     // Cannot use reserved keyword`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Variables
            </div>

            <h1 className="content-title">Java Variables</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>What are Variables?</h2>
                <div className="variable-intro">
                    <p>
                        Variables are containers for storing data values. In Java, a variable is a 
                        memory location name that holds data of a specific type.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>Variable Declaration and Initialization</h2>
                <div className="declaration-examples">
                    <p>There are several ways to declare and initialize variables in Java:</p>
                    <CodeBlock initialCode={variableDeclarationCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Types of Variables</h2>
                <div className="variable-types-grid">
                    <div className="type-card">
                        <h3>Instance Variables</h3>
                        <ul>
                            <li>Declared inside class</li>
                            <li>Created when object is created</li>
                            <li>Can have access modifiers</li>
                            <li>Have default values</li>
                        </ul>
                    </div>

                    <div className="type-card">
                        <h3>Static Variables</h3>
                        <ul>
                            <li>Declared with static keyword</li>
                            <li>Shared across all instances</li>
                            <li>Created when class is loaded</li>
                            <li>One copy per class</li>
                        </ul>
                    </div>

                    <div className="type-card">
                        <h3>Local Variables</h3>
                        <ul>
                            <li>Declared inside methods</li>
                            <li>Must be initialized before use</li>
                            <li>No default values</li>
                            <li>Limited to method scope</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Constants (Final Variables)</h2>
                <div className="constants-example">
                    <p>Constants are variables whose value cannot be changed after initialization:</p>
                    <CodeBlock initialCode={constVariableCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Variable Scope</h2>
                <div className="scope-example">
                    <p>The scope of a variable determines its visibility and lifetime:</p>
                    <CodeBlock initialCode={variableScopesCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Naming Conventions</h2>
                <div className="naming-conventions">
                    <div className="conventions-rules">
                        <h3>Rules for Variable Names:</h3>
                        <ul>
                            <li>Must begin with a letter, underscore, or dollar sign</li>
                            <li>Can contain numbers, letters, underscores</li>
                            <li>Case-sensitive</li>
                            <li>No reserved keywords allowed</li>
                            <li>Follow camelCase convention</li>
                        </ul>
                    </div>
                    <CodeBlock initialCode={namingConventionsCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>Use Meaningful Names</h3>
                        <p>Choose descriptive names that indicate the purpose of the variable.</p>
                    </div>

                    <div className="practice-card">
                        <h3>Initialize Variables</h3>
                        <p>Always initialize variables before using them to avoid undefined behavior.</p>
                    </div>

                    <div className="practice-card">
                        <h3>Use Constants</h3>
                        <p>Use final keyword for values that shouldn't change during execution.</p>
                    </div>

                    <div className="practice-card">
                        <h3>Minimize Scope</h3>
                        <p>Declare variables in the smallest scope where they're needed.</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/syntax" className="prev-link">
                    ← Previous: Java Syntax
                </Link>
                <Link to="/tutorials/java/datatypes" className="next-link">
                    Next: Data Types →
                </Link>
            </div>
        </div>
    );
}

export default JavaVariables;
