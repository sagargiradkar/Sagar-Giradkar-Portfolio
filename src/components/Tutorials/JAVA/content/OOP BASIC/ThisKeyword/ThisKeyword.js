// ThisKeyword.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './ThisKeyword.css';

function ThisKeyword() {
  const basicThisExample = 
    `public class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        // Using 'this' to refer to instance variables
        this.name = name;
        this.age = age;
    }
    
    public void display() {
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
    }
}`;

  const methodInvocationExample = 
    `public class Student {
    private String name;
    private int age;
    
    public void setData(String name, int age) {
        // Using 'this' to call another method
        this.setName(name);
        this.setAge(age);
    }
    
    private void setName(String name) {
        this.name = name;
    }
    
    private void setAge(int age) {
        this.age = age;
    }
}`;

  const constructorChainingExample = 
    `public class Student {
    private String name;
    private int age;
    private String course;
    
    // Default constructor
    public Student() {
        // Using 'this()' to call another constructor
        this("Unknown", 0);
    }
    
    // Constructor with two parameters
    public Student(String name, int age) {
        // Chaining to constructor with three parameters
        this(name, age, "Not Assigned");
    }
    
    // Constructor with three parameters
    public Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}`;

  const returningThisExample = 
    `public class ChainedMethods {
    private int value;
    
    // Method returning 'this' for method chaining
    public ChainedMethods increment() {
        this.value++;
        return this;
    }
    
    public ChainedMethods add(int n) {
        this.value += n;
        return this;
    }
    
    public void display() {
        System.out.println("Value: " + this.value);
    }
}

// Using method chaining
ChainedMethods obj = new ChainedMethods();
obj.increment().add(5).increment().display();`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> This Keyword
      </div>

      <h1 className="content-title">The 'this' Keyword in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          The 'this' keyword in Java is a reference variable that refers to the current object. 
          It is used to differentiate between instance variables and parameters, call methods, 
          and enable constructor chaining.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#basic-usage">Basic Usage of 'this'</a></li>
          <li><a href="#method-invocation">Method Invocation with 'this'</a></li>
          <li><a href="#constructor-chaining">Constructor Chaining</a></li>
          <li><a href="#method-chaining">Method Chaining</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="basic-usage">
        <h2>Basic Usage of 'this'</h2>
        <p>
          The most common use of 'this' keyword is to distinguish between instance variables 
          and parameters with the same name.
        </p>
        <CodeBlock initialCode={basicThisExample} />
        <div className="use-cases">
          <h3>Common Use Cases:</h3>
          <ul>
            <li>Referring to instance variables</li>
            <li>Avoiding naming conflicts</li>
            <li>Making code more readable</li>
            <li>Explicitly showing variable scope</li>
          </ul>
        </div>
      </section>

      <section id="method-invocation">
        <h2>Method Invocation with 'this'</h2>
        <p>
          'this' can be used to call methods within the same class, making the code more 
          explicit and clear.
        </p>
        <CodeBlock initialCode={methodInvocationExample} />
        <div className="info-box">
          <h3>Key Points:</h3>
          <ul>
            <li>Explicit method calls within the same class</li>
            <li>Helps in method organization</li>
            <li>Useful for delegation patterns</li>
          </ul>
        </div>
      </section>

      <section id="constructor-chaining">
        <h2>Constructor Chaining</h2>
        <p>
          'this()' can be used to call another constructor in the same class, enabling 
          constructor chaining.
        </p>
        <CodeBlock initialCode={constructorChainingExample} />
        <div className="warning-box">
          <h3>Important Rules:</h3>
          <ul>
            <li>'this()' must be the first statement in constructor</li>
            <li>Only one 'this()' call per constructor</li>
            <li>Prevents constructor code duplication</li>
            <li>Helps maintain constructor hierarchy</li>
          </ul>
        </div>
      </section>

      <section id="method-chaining">
        <h2>Method Chaining</h2>
        <p>
          Returning 'this' from methods allows method chaining, creating more fluent and 
          readable code.
        </p>
        <CodeBlock initialCode={returningThisExample} />
        <div className="feature-box">
          <h3>Benefits of Method Chaining:</h3>
          <ul>
            <li>More readable and fluent code</li>
            <li>Reduced number of statements</li>
            <li>Improved code aesthetics</li>
            <li>Common in builder patterns</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Explicit Usage:</strong>
              Use 'this' when it improves code clarity
            </li>
            <li>
              <strong>Consistent Naming:</strong>
              Use consistent parameter names even when using 'this'
            </li>
            <li>
              <strong>Constructor Chaining:</strong>
              Use 'this()' to reduce code duplication in constructors
            </li>
            <li>
              <strong>Method Chaining:</strong>
              Return 'this' when it makes the API more fluent
            </li>
          </ul>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Static Context</h3>
            <p>Cannot use 'this' in static methods</p>
          </div>
          <div className="pitfall-card">
            <h3>Constructor Recursion</h3>
            <p>Avoid recursive constructor calls using 'this()'</p>
          </div>
          <div className="pitfall-card">
            <h3>Unnecessary Usage</h3>
            <p>Don't use 'this' when there's no ambiguity</p>
          </div>
          <div className="pitfall-card">
            <h3>Complex Chaining</h3>
            <p>Avoid excessive method chaining</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/methods" className="prev-link">
          ← Previous: Methods
        </Link>
        <Link to="/tutorials/java/inheritance" className="next-link">
          Next: Inheritance →
        </Link>
      </div>
    </div>
  );
}

export default ThisKeyword;
