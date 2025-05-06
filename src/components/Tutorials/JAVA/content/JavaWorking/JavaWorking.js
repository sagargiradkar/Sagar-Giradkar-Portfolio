// src/components/Tutorials/Java/content/JavaWorking.js

import React from "react";
import { Link } from "react-router-dom";
import "./JavaWorking.css";
import CodeBlock from './CodeBlock';

function JavaWorking() {
  const compilationExample = 
    `// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Compile: javac HelloWorld.java
// Run: java HelloWorld`;

  const jvmExample = 
    `class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> How Java Works
      </div>

      <h1 className="content-title">How Java Works</h1>
      <p className="last-updated">Last Updated: 05 May, 2025</p>

      <div className="learning-objectives">
        <h2>Learning Objectives</h2>
        <ul>
          <li>Understand Java's compilation and execution process</li>
          <li>Learn about JVM architecture</li>
          <li>Explore Java bytecode</li>
          <li>Comprehend JIT compilation</li>
        </ul>
      </div>

      <section className="content-section">
        <h2>Java's Working Process</h2>
        <p>
          Java follows a unique "Write Once, Run Anywhere" approach through a 
          combination of compilation and interpretation. Let's understand the 
          complete process of how Java code works.
        </p>

        <div className="note-box">
          <strong>Important Note:</strong> Java's execution process involves 
          multiple steps, making it different from purely compiled languages 
          like C++ or interpreted languages like Python.
        </div>
      </section>

      <section id="compilation-process">
        <h2>Java Compilation Process</h2>
        <p>
          The Java compilation process converts source code (.java files) into 
          bytecode (.class files). Here's a simple example:
        </p>
        <CodeBlock initialCode={compilationExample} />
        
        <h3>Steps in Compilation:</h3>
        <ol>
          <li>
            <strong>Parsing:</strong> The compiler reads the source code and 
            checks for syntax errors.
          </li>
          <li>
            <strong>Symbol Resolution:</strong> Validates all references and 
            identifiers.
          </li>
          <li>
            <strong>Type Checking:</strong> Ensures type safety and compatibility.
          </li>
          <li>
            <strong>Bytecode Generation:</strong> Creates platform-independent 
            bytecode.
          </li>
        </ol>
      </section>

      <section id="jvm-architecture">
        <h2>JVM Architecture</h2>
        <p>
          The Java Virtual Machine (JVM) is the cornerstone of Java's platform 
          independence. It consists of several components:
        </p>

        <div className="architecture-diagram">
          <h3>JVM Components:</h3>
          <ul>
            <li>Class Loader Subsystem</li>
            <li>Runtime Data Areas</li>
            <li>Execution Engine</li>
            <li>Native Method Interface</li>
          </ul>
        </div>

        <div className="key-points">
          <h3>Key Functions of JVM:</h3>
          <ul>
            <li>Loading, linking, and initializing Java classes and interfaces</li>
            <li>Memory management and garbage collection</li>
            <li>Execution of bytecode</li>
            <li>Providing runtime environment</li>
          </ul>
        </div>
      </section>

      <section id="bytecode-execution">
        <h2>Bytecode Execution</h2>
        <p>
          Let's look at how Java executes bytecode through an example:
        </p>
        <CodeBlock initialCode={jvmExample} />

        <div className="note-box">
          <strong>Technical Note:</strong> The JVM uses Just-In-Time (JIT) 
          compilation to optimize frequently executed code portions, improving 
          performance.
        </div>
      </section>

      <section id="memory-management">
        <h2>Memory Management in Java</h2>
        <h3>Java Memory Areas:</h3>
        <ul>
          <li>
            <strong>Heap Memory:</strong> Object storage and instance variables
          </li>
          <li>
            <strong>Stack Memory:</strong> Method execution and local variables
          </li>
          <li>
            <strong>Method Area:</strong> Class structure and static variables
          </li>
          <li>
            <strong>PC Registers:</strong> Thread execution tracking
          </li>
          <li>
            <strong>Native Method Stack:</strong> Native method information
          </li>
        </ul>
      </section>

      <section id="garbage-collection">
        <h2>Garbage Collection</h2>
        <p>
          Java's automatic memory management system includes garbage collection, 
          which:
        </p>
        <ul>
          <li>Identifies and removes unused objects</li>
          <li>Prevents memory leaks</li>
          <li>Manages heap memory efficiently</li>
        </ul>

        <div className="warning-box">
          <strong>Warning:</strong> While garbage collection is automatic, 
          understanding memory management is crucial for writing efficient Java 
          applications.
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices-list">
          <ul>
            <li>Always close resources properly using try-with-resources</li>
            <li>Avoid creating unnecessary objects</li>
            <li>Use appropriate access modifiers</li>
            <li>Follow Java naming conventions</li>
            <li>Handle exceptions appropriately</li>
          </ul>
        </div>
      </section>

      <section id="common-issues">
        <h2>Common Issues and Solutions</h2>
        <div className="issues-table">
          <table>
            <thead>
              <tr>
                <th>Issue</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ClassNotFoundException</td>
                <td>Check classpath and class name</td>
              </tr>
              <tr>
                <td>OutOfMemoryError</td>
                <td>Increase heap size or optimize code</td>
              </tr>
              <tr>
                <td>StackOverflowError</td>
                <td>Check for infinite recursion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/introduction" className="prev-link">
          ← Previous: Introduction to Java
        </Link>
        <Link to="/tutorials/java/variables" className="next-link">
          Next: Java Variables →
        </Link>
      </div>
    </div>
  );
}

export default JavaWorking;
