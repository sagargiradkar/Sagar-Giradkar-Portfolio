// ClassesAndObjects.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './ClassesAndObjects.css';

function ClassesAndObjects() {
  const classExample = 
    `public class Car {
    // Instance Variables (attributes)
    private String brand;
    private String model;
    private int year;
    
    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Methods
    public void startEngine() {
        System.out.println("The " + brand + " " + model + " engine is starting!");
    }
    
    public void stopEngine() {
        System.out.println("The engine is stopping!");
    }
    
    // Getters and Setters
    public String getBrand() {
        return brand;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    // Other getters and setters...
}`;

  const objectExample = 
    `// Creating objects of Car class
Car myCar = new Car("Toyota", "Camry", 2022);
Car anotherCar = new Car("Honda", "Civic", 2023);

// Using object methods
myCar.startEngine();  // Output: The Toyota Camry engine is starting!
anotherCar.startEngine();  // Output: The Honda Civic engine is starting!

// Accessing object properties using getters
System.out.println(myCar.getBrand());  // Output: Toyota`;

  const constructorExample = 
    `public class Student {
    private String name;
    private int age;
    
    // Default constructor
    public Student() {
        name = "Unknown";
        age = 0;
    }
    
    // Parameterized constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Copy constructor
    public Student(Student other) {
        this.name = other.name;
        this.age = other.age;
    }
}`;

  const encapsulationExample = 
    `public class BankAccount {
    private double balance;  // private attribute
    private String accountNumber;
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Classes and Objects
      </div>

      <h1 className="content-title">Classes and Objects in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="content-section">
        <p>
          Classes and objects are the fundamental building blocks of Object-Oriented Programming (OOP) in Java. 
          A class is a blueprint or template for creating objects, while an object is an instance of a class.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#classes">Classes in Java</a></li>
          <li><a href="#objects">Objects in Java</a></li>
          <li><a href="#constructors">Constructors</a></li>
          <li><a href="#attributes-methods">Attributes and Methods</a></li>
          <li><a href="#encapsulation">Encapsulation</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="classes">
        <h2>Classes in Java</h2>
        <p>
          A class is a template or blueprint that defines the attributes and behaviors common to all objects 
          of a certain kind. It encapsulates data for the object and methods to manipulate that data.
        </p>
        <CodeBlock initialCode={classExample} />
        <div className="feature-list">
          <h3>Class Components:</h3>
          <ul>
            <li><strong>Attributes (Fields):</strong> Variables that store object data</li>
            <li><strong>Constructors:</strong> Special methods to initialize objects</li>
            <li><strong>Methods:</strong> Functions that define object behavior</li>
            <li><strong>Access Modifiers:</strong> Control access to class members</li>
          </ul>
        </div>
      </section>

      <section id="objects">
        <h2>Objects in Java</h2>
        <p>
          An object is an instance of a class. It represents a real-world entity and contains both data 
          and code. Objects are created using the 'new' keyword.
        </p>
        <CodeBlock initialCode={objectExample} />
        <div className="note-box">
          <p>
            <strong>Note:</strong> Each object has its own copy of instance variables but shares the same methods 
            defined in the class.
          </p>
        </div>
      </section>

      <section id="constructors">
        <h2>Constructors</h2>
        <p>
          Constructors are special methods used to initialize objects. They have the same name as the class 
          and are called when an object is created.
        </p>
        <CodeBlock initialCode={constructorExample} />
        <div className="constructor-types">
          <h3>Types of Constructors:</h3>
          <div className="type-grid">
            <div className="type-card">
              <h4>Default Constructor</h4>
              <p>Created by Java if no constructor is defined</p>
            </div>
            <div className="type-card">
              <h4>Parameterized Constructor</h4>
              <p>Accepts parameters to initialize object state</p>
            </div>
            <div className="type-card">
              <h4>Copy Constructor</h4>
              <p>Creates object by copying another object</p>
            </div>
          </div>
        </div>
      </section>

      <section id="attributes-methods">
        <h2>Attributes and Methods</h2>
        <div className="attributes-methods">
          <div className="subsection">
            <h3>Attributes</h3>
            <ul>
              <li>Instance Variables: Unique to each object</li>
              <li>Static Variables: Shared across all objects</li>
              <li>Final Variables: Constants that can't be changed</li>
            </ul>
          </div>
          <div className="subsection">
            <h3>Methods</h3>
            <ul>
              <li>Instance Methods: Operate on object data</li>
              <li>Static Methods: Independent of object state</li>
              <li>Accessor Methods: Getters</li>
              <li>Mutator Methods: Setters</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="encapsulation">
        <h2>Encapsulation</h2>
        <p>
          Encapsulation is the bundling of data and the methods that operate on that data within a single unit 
          or object, keeping the data private and providing public methods to access it.
        </p>
        <CodeBlock initialCode={encapsulationExample} />
        <div className="warning-box">
          <p>
            <strong>Best Practice:</strong> Always make instance variables private and provide public methods 
            to access and modify them when necessary.
          </p>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Class Naming:</strong>
              Use PascalCase for class names (e.g., BankAccount)
            </li>
            <li>
              <strong>Encapsulation:</strong>
              Keep instance variables private and provide public methods to access them
            </li>
            <li>
              <strong>Single Responsibility:</strong>
              Each class should have only one reason to change
            </li>
            <li>
              <strong>Constructor Initialization:</strong>
              Initialize all instance variables in constructors
            </li>
            <li>
              <strong>Method Naming:</strong>
              Use descriptive names that reflect the method's purpose
            </li>
          </ul>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/basics" className="prev-link">
          ← Previous: Java Basics
        </Link>
        <Link to="/tutorials/java/inheritance" className="next-link">
          Next: Inheritance →
        </Link>
      </div>
    </div>
  );
}

export default ClassesAndObjects;
