// src/components/Tutorials/Java/content/JavaIntroduction.js

import React from "react";
import { Link } from "react-router-dom";
import "./JavaIntroduction.css";
import CodeBlock from './CodeBlock';
function JavaIntroduction() {
  const initialCode =
    `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;
  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Introduction
      </div>

      <h1 className="content-title">Introduction to Java</h1>
      <p className="last-updated">Last Updated:  05 May, 2025</p>

      <section className="content-section">
        <p>
          Java is a class-based, object-oriented programming language that is
          designed to have as few implementation dependencies as possible. It
          is intended to let application developers Write Once and Run Anywhere
          (WORA), meaning that compiled Java code can run on all platforms that
          support Java without the need for recompilation. Java was developed
          by James Gosling at Sun Microsystems Inc. in May 1995 and later
          acquired by Oracle Corporation and is widely used for developing
          applications for desktop, web, and mobile devices.
        </p>
        <p>
          Java is known for its simplicity, robustness, and security features,
          making it a popular choice for enterprise-level applications. Java
          applications are compiled to byte code that can run on any Java
          Virtual Machine. The syntax of Java is similar to C/C++.
        </p>
        <p>
          Java makes writing, compiling, and debugging programming easy. It
          helps to create reusable code and modular programs.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#history-of-java">History of Java</a></li>
          <li>
            <a href="#key-features-of-java">Key Features of Java</a>
            <ul>
              <li>Platform Independent</li>
              <li>Object-Oriented Programming</li>
              <li>Simplicity</li>
              <li>Robustness</li>
              <li>Security</li>
              <li>Distributed</li>
              <li>Multithreading</li>
              <li>Portability</li>
              <li>High Performance</li>
            </ul>
          </li>
          <li><a href="#how-java-code-executes">How Java Code Executes?</a></li>
          <li><a href="#essential-terminologies">Essential Java Terminologies</a></li>
          <li><a href="#advantages-and-disadvantages">Advantages and Disadvantages</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </div>

      <section id="history-of-java">
        <h2>History of Java</h2>
        <p>
          The journey of Java began in 1991 when James Gosling, Mike Sheridan,
          and Patrick Naughton, a team of engineers at Sun Microsystems known
          as the "Green Team," set out to create a language initially called
          "Oak." Oak was later renamed Java, inspired by Java coffee, and was
          first publicly released in 1996 as Java 1.0.
        </p>
        <p>
          Over the years, Java evolved significantly. In 1997, Sun Microsystems
          aimed to formalize Java through the ISO standards body but eventually
          withdrew from the process. A major milestone occurred in 2006 when
          Sun Microsystems released a large portion of Java Virtual Machine
          (JVM) as free, open-source software.
        </p>
        <p>
          Today, Java remains a cornerstone of modern software development.
        </p>
      </section>

      <section id="key-features-of-java">
        <h2>Key Features of Java</h2>
        <p>Java's key features include:</p>
        <ul>
          <li><strong>Platform Independent:</strong> Compiled Java code can run on any platform.</li>
          <li><strong>Object-Oriented Programming:</strong> Promotes the use of objects and classes.</li>
          <li><strong>Simplicity:</strong> Easy-to-learn syntax similar to C/C++.</li>
          <li><strong>Robustness:</strong> Reliable and error-resistant.</li>
          <li><strong>Security:</strong> Designed with security in mind, such as no pointers.</li>
          <li><strong>Distributed:</strong> Supports distributed applications.</li>
          <li><strong>Multithreading:</strong> Supports concurrent execution of code.</li>
          <li><strong>Portability:</strong> WORA (Write Once, Run Anywhere).</li>
          <li><strong>High Performance:</strong> Optimized with JIT (Just-In-Time) compilation.</li>
        </ul>
      </section>

      <section id="how-java-code-executes">
        <h2>How Java Code Executes?</h2>
        <p>
          Java code execution involves three main steps:
        </p>
        <ol>
          <li><strong>Creating the Program:</strong> Java programs are written and saved with a <code>.java</code> extension.</li>
          <li><strong>Compiling the Program:</strong> The Java compiler converts the source code into bytecode, stored in a <code>.class</code> file.</li>
          <li><strong>Running the Program:</strong> The JVM executes the compiled bytecode.</li>
        </ol>

      </section>
      <section id="example-program">
        <h2>Example Program:</h2>
        <CodeBlock initialCode={initialCode} />
      </section>
      <section id="essential-terminologies">
        <h2>Essential Java Terminologies</h2>
        <dl>
          <dt><strong>Java Virtual Machine (JVM):</strong></dt>
          <dd>Responsible for executing Java bytecode and ensuring platform independence.</dd>
          <dt><strong>Bytecode:</strong></dt>
          <dd>Intermediate representation of Java code, platform-independent.</dd>
          <dt><strong>Java Development Kit (JDK):</strong></dt>
          <dd>A complete toolkit for Java development, including the compiler and runtime environment.</dd>
          <dt><strong>Java Runtime Environment (JRE):</strong></dt>
          <dd>Allows Java programs to run but cannot compile code.</dd>
        </dl>
      </section>

      <section id="advantages-and-disadvantages">
        <h2>Advantages and Disadvantages</h2>
        <h3>Advantages:</h3>
        <ul>
          <li>Platform independence</li>
          <li>Object-oriented features</li>
          <li>Secure and robust</li>
          <li>Large community support</li>
          <li>Suitable for enterprise applications</li>
        </ul>
        <h3>Disadvantages:</h3>
        <ul>
          <li>Can be slower than native languages like C++</li>
          <li>Higher memory usage due to automatic memory management</li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Java is a robust and versatile language that has stood the test of time. With its simplicity, portability, and extensive library ecosystem, it is a great choice for developing solid, scalable applications.
        </p>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/java-working" className="next-link">
          Next: Java Working →
        </Link>
      </div>
    </div>
  );
}

export default JavaIntroduction;
