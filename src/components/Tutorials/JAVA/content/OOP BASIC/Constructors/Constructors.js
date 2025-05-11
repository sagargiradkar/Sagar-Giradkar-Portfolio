// Constructors.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './Constructors.css';

function Constructors() {
  const defaultConstructorExample = 
    `public class Student {
    String name;
    int age;
    
    // Default Constructor
    public Student() {
        name = "Unknown";
        age = 0;
    }
}

// Creating object using default constructor
Student student = new Student();`;

  const parameterizedConstructorExample = 
    `public class Student {
    String name;
    int age;
    
    // Parameterized Constructor
    public Student(String n, int a) {
        name = n;
        age = a;
    }
}

// Creating object using parameterized constructor
Student student = new Student("John", 20);`;

  const constructorOverloadingExample = 
    `public class Student {
    String name;
    int age;
    String course;
    
    // Constructor 1
    public Student() {
        name = "Unknown";
        age = 0;
        course = "Not Assigned";
    }
    
    // Constructor 2
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.course = "Not Assigned";
    }
    
    // Constructor 3
    public Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}`;

  const copyConstructorExample = 
    `public class Student {
    String name;
    int age;
    
    // Normal Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Copy Constructor
    public Student(Student other) {
        this.name = other.name;
        this.age = other.age;
    }
}

// Usage
Student student1 = new Student("John", 20);
Student student2 = new Student(student1); // Creating copy`;

  const constructorChainingExample = 
    `public class Student {
    String name;
    int age;
    String course;
    
    // Base Constructor
    public Student() {
        this("Unknown", 0);
    }
    
    // Constructor with two parameters
    public Student(String name, int age) {
        this(name, age, "Not Assigned");
    }
    
    // Constructor with all parameters
    public Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Constructors
      </div>

      <h1 className="content-title">Constructors in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          A constructor in Java is a special method that is used to initialize objects. The constructor 
          is called when an object of a class is created. It can be used to set initial values for object 
          attributes.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#default-constructor">Default Constructor</a></li>
          <li><a href="#parameterized-constructor">Parameterized Constructor</a></li>
          <li><a href="#constructor-overloading">Constructor Overloading</a></li>
          <li><a href="#copy-constructor">Copy Constructor</a></li>
          <li><a href="#constructor-chaining">Constructor Chaining</a></li>
          <li><a href="#constructor-rules">Constructor Rules</a></li>
        </ul>
      </div>

      <section id="default-constructor">
        <h2>Default Constructor</h2>
        <p>
          If you don't create any constructor, Java creates a default constructor for you. You can also 
          create your own default constructor.
        </p>
        <CodeBlock initialCode={defaultConstructorExample} />
        <div className="note-box">
          <p>
            <strong>Note:</strong> The default constructor initializes instance variables with default 
            values (0, null, false).
          </p>
        </div>
      </section>

      <section id="parameterized-constructor">
        <h2>Parameterized Constructor</h2>
        <p>
          A constructor that accepts parameters is called a parameterized constructor. It's used to 
          provide different values to distinct objects.
        </p>
        <CodeBlock initialCode={parameterizedConstructorExample} />
        <div className="feature-box">
          <h3>Benefits:</h3>
          <ul>
            <li>Initialize object with custom values</li>
            <li>Create multiple objects with different states</li>
            <li>Enforce initialization requirements</li>
          </ul>
        </div>
      </section>

      <section id="constructor-overloading">
        <h2>Constructor Overloading</h2>
        <p>
          Java allows having multiple constructors in a class with different parameters. This is known 
          as constructor overloading.
        </p>
        <CodeBlock initialCode={constructorOverloadingExample} />
        <div className="warning-box">
          <p>
            <strong>Important:</strong> Each constructor must have a unique parameter list (different 
            number or types of parameters).
          </p>
        </div>
      </section>

      <section id="copy-constructor">
        <h2>Copy Constructor</h2>
        <p>
          A copy constructor creates a new object as a copy of an existing object. It's useful when you 
          need to create a new object with the same state as an existing object.
        </p>
        <CodeBlock initialCode={copyConstructorExample} />
        <div className="feature-box">
          <h3>Use Cases:</h3>
          <ul>
            <li>Creating deep copies of objects</li>
            <li>Cloning object state</li>
            <li>Backing up object state</li>
          </ul>
        </div>
      </section>

      <section id="constructor-chaining">
        <h2>Constructor Chaining</h2>
        <p>
          Constructor chaining is the process of calling one constructor from another constructor using 
          'this()' keyword.
        </p>
        <CodeBlock initialCode={constructorChainingExample} />
        <div className="note-box">
          <p>
            <strong>Note:</strong> The this() call must be the first statement in a constructor.
          </p>
        </div>
      </section>

      <section id="constructor-rules">
        <h2>Constructor Rules</h2>
        <div className="rules-grid">
          <div className="rule-card">
            <h3>Naming</h3>
            <p>Constructor name must be same as class name</p>
          </div>
          <div className="rule-card">
            <h3>Return Type</h3>
            <p>Constructors cannot have return type</p>
          </div>
          <div className="rule-card">
            <h3>Access Modifiers</h3>
            <p>Can use any access modifier</p>
          </div>
          <div className="rule-card">
            <h3>Static</h3>
            <p>Cannot be declared as static</p>
          </div>
        </div>
      </section>

      <section className="best-practices">
        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Initialize All Fields:</strong>
            Ensure all instance variables are properly initialized
          </li>
          <li>
            <strong>Parameter Validation:</strong>
            Validate constructor parameters before assigning
          </li>
          <li>
            <strong>Minimal Constructor:</strong>
            Keep constructors simple and focused
          </li>
          <li>
            <strong>Use this():</strong>
            Utilize constructor chaining to avoid code duplication
          </li>
          <li>
            <strong>Documentation:</strong>
            Document constructor behavior and parameters
          </li>
        </ul>
      </section>

      <div className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfall-list">
          <div className="pitfall">
            <h3>Recursive Constructor Call</h3>
            <p>Avoid calling this() recursively in constructors</p>
          </div>
          <div className="pitfall">
            <h3>Heavy Operations</h3>
            <p>Avoid complex operations in constructors</p>
          </div>
          <div className="pitfall">
            <h3>Overloading Confusion</h3>
            <p>Too many constructors can lead to confusion</p>
          </div>
        </div>
      </div>

      <div className="navigation-links">
        <Link to="/tutorials/java/classes" className="prev-link">
          ← Previous: Classes
        </Link>
        <Link to="/tutorials/java/methods" className="next-link">
          Next: Methods →
        </Link>
      </div>
    </div>
  );
}

export default Constructors;
