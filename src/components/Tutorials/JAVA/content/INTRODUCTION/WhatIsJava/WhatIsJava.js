import React from "react";
import { Link } from "react-router-dom";
import "./WhatIsJava.css";
import CodeBlock from './CodeBlock';

function WhatIsJava() {
  const initialCode =
    `public class HelloWorld {
    public static void main(String[] args) {
        // This is a simple Java program
        System.out.println("Hello, Java World!");
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> What is Java
      </div>

      <h1 className="content-title">What is Java?</h1>
      <p className="last-updated">Last Updated: 05 May, 2025</p>

      <section className="content-section">
        <p>
          Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems (now owned by Oracle) and released in 1995. Java is known for its "Write Once, Run Anywhere" (WORA) capability, meaning compiled Java code can run on all platforms that support Java without recompilation.
        </p>
        <p>
          As one of the world's most popular programming languages, Java powers a wide variety of applications including web applications, mobile apps (Android), enterprise software, scientific applications, and more. Java combines the best features of its predecessors while eliminating their more complex aspects, making it accessible to a broad range of developers.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#java-definition">Java Definition</a></li>
          <li><a href="#java-origins">Origins of Java</a></li>
          <li>
            <a href="#core-principles">Core Principles of Java</a>
            <ul>
              <li>Platform Independence</li>
              <li>Object-Oriented Design</li>
              <li>Simplicity and Familiarity</li>
              <li>Memory Management</li>
            </ul>
          </li>
          <li><a href="#java-architecture">Java Architecture</a></li>
          <li><a href="#java-applications">Applications of Java</a></li>
          <li><a href="#java-example">Simple Java Example</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>

      <section id="java-definition">
        <h2>Java Definition</h2>
        <p>
          Java is a robust, secure, high-level programming language that follows the object-oriented programming paradigm. It was designed with the primary goal of being platform-independent – a feature achieved through the Java Virtual Machine (JVM), which allows Java programs to run on any device or operating system that has a JVM installed.
        </p>
        <p>
          Java's syntax is heavily influenced by C and C++, but it eliminates many of their complexities and unsafe features. For instance, Java doesn't support direct memory manipulation through pointers, which helps prevent many security issues and memory leaks common in C/C++ programs.
        </p>
        <div className="note-box">
          <p>
            <strong>Note:</strong> The name "Java" was inspired by the coffee from the Indonesian island of Java, which is why the language's logo is a cup of coffee.
          </p>
        </div>
      </section>

      <section id="java-origins">
        <h2>Origins of Java</h2>
        <p>
          Java began as a project called "Oak" in 1991 when James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project at Sun Microsystems. The language was initially designed for interactive television, but it was too advanced for the digital cable television industry at the time.
        </p>
        <p>
          The project was renamed "Java" in 1995 after a chance encounter between the development team at a local coffee shop. The first public implementation was Java 1.0, released in 1996, promising "Write Once, Run Anywhere" functionality with free runtime environments on popular platforms.
        </p>
        <p>
          In 2009, Oracle Corporation acquired Sun Microsystems and took ownership of Java. Under Oracle's stewardship, Java has continued to evolve with regular updates and new features, maintaining its position as one of the world's most widely used programming languages.
        </p>
      </section>

      <section id="core-principles">
        <h2>Core Principles of Java</h2>
        <p>Java was built on several fundamental principles:</p>
        <ul>
          <li><strong>Platform Independence:</strong> Java's "Write Once, Run Anywhere" philosophy means that compiled Java code (bytecode) can run on any device equipped with a Java Virtual Machine.</li>
          <li><strong>Object-Oriented Design:</strong> Java is built around the concept of objects containing data and methods, encouraging well-structured and modular code.</li>
          <li><strong>Simplicity and Familiarity:</strong> Java's syntax is similar to C/C++, making it easier for programmers familiar with these languages to transition to Java.</li>
          <li><strong>Memory Management:</strong> Java includes automatic memory management through garbage collection, eliminating the need for manual memory allocation and deallocation.</li>
          <li><strong>Security:</strong> Java's security features include a strong type system, bytecode verification, and a security manager for defining access rules.</li>
          <li><strong>Multithreading:</strong> Built-in support for multithreaded programming allows developers to build applications that can perform multiple tasks simultaneously.</li>
        </ul>
      </section>

      <section id="java-architecture">
        <h2>Java Architecture</h2>
        <p>
          Java's architecture consists of three key components:
        </p>
        <ol>
          <li><strong>Java Development Kit (JDK):</strong> A software development environment used for developing Java applications. It includes the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (javac), an archiver (jar), a documentation generator (javadoc), and other tools needed for Java development.</li>
          <li><strong>Java Runtime Environment (JRE):</strong> The runtime environment that provides the minimum requirements for executing a Java application. It consists of the Java Virtual Machine (JVM), core classes, and supporting files.</li>
          <li><strong>Java Virtual Machine (JVM):</strong> An abstract machine that provides a runtime environment to execute Java bytecode. JVM is the cornerstone of Java's platform independence.</li>
        </ol>
        <p>
          When a Java program is compiled, it is converted into bytecode, a highly optimized set of instructions designed to be executed by the JVM. The JVM then interprets this bytecode at runtime, converting it into machine code specific to the host platform.
        </p>
      </section>

      <section id="java-applications">
        <h2>Applications of Java</h2>
        <p>
          Java's versatility makes it suitable for a wide range of applications:
        </p>
        <ul>
          <li><strong>Enterprise Applications:</strong> Java Enterprise Edition (Java EE) is widely used for developing large-scale, distributed, and robust enterprise applications.</li>
          <li><strong>Mobile Applications:</strong> Java is the primary language for Android app development.</li>
          <li><strong>Web Applications:</strong> Java technologies like JSP, Servlets, and frameworks like Spring and Hibernate are popular for building web applications.</li>
          <li><strong>Scientific Applications:</strong> Java's precision and reliability make it suitable for scientific computing applications.</li>
          <li><strong>Big Data Technologies:</strong> Many big data processing frameworks like Hadoop and Spark are written in Java.</li>
          <li><strong>IoT Devices:</strong> Java's platform independence makes it an excellent choice for Internet of Things applications.</li>
          <li><strong>Gaming:</strong> Java is used in the development of both mobile and desktop games.</li>
        </ul>
      </section>

      <section id="java-example">
        <h2>Simple Java Example</h2>
        <p>
          Below is a simple Java program that demonstrates some basic features of the language:
        </p>
        <CodeBlock initialCode={initialCode} />
        <p>
          This program demonstrates:
        </p>
        <ul>
          <li>A class definition (<code>HelloWorld</code>)</li>
          <li>The main method, which is the entry point of the program</li>
          <li>A comment showing Java's syntax for comments</li>
          <li>Output to the console using <code>System.out.println()</code></li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Java continues to be one of the most popular programming languages in the world due to its platform independence, security, robustness, and extensive ecosystem of libraries and frameworks. While newer languages have emerged, Java's continued evolution ensures it remains relevant for modern software development.
        </p>
        <p>
          Whether you're developing web applications, mobile apps, enterprise systems, or scientific applications, Java provides a powerful, flexible, and mature platform that can meet a wide range of development needs.
        </p>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/java-history" className="next-link">
          Next: Java History →
        </Link>
      </div>
    </div>
  );
}

export default WhatIsJava;