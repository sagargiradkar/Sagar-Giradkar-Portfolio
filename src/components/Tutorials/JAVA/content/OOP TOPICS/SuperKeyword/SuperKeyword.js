// SuperKeyword.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './SuperKeyword.css';

function SuperKeyword() {
  const superConstructorExample = 
    `public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Dog extends Animal {
    private String breed;
    
    // Using super() to call parent constructor
    public Dog(String name, int age, String breed) {
        super(name, age);  // Must be first statement
        this.breed = breed;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age + ", Breed: " + breed);
    }
}`;

  const superMethodExample = 
    `public class Animal {
    public void makeSound() {
        System.out.println("Some animal sound");
    }
    
    public void eat() {
        System.out.println("Animal is eating");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        super.makeSound();  // Call parent method
        System.out.println("Woof! Woof!");
    }
    
    @Override
    public void eat() {
        System.out.println("Dog is eating bones");
        super.eat();  // Call parent method
    }
}`;

  const superFieldExample = 
    `public class Vehicle {
    protected int maxSpeed = 120;
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
}

public class Car extends Vehicle {
    private int maxSpeed = 180;  // Shadows parent's maxSpeed
    
    public Car(String brand) {
        super(brand);
    }
    
    public void displaySpeeds() {
        System.out.println("Car max speed: " + maxSpeed);
        System.out.println("Vehicle max speed: " + super.maxSpeed);
    }
    
    public String getBrandInfo() {
        return "Brand: " + super.brand;  // Accessing parent's field
    }
}`;

  const commonUsageExample = 
    `public class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);  // Constructor chaining
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        super.draw();  // Call parent's method
        System.out.println("Drawing a " + color + " circle with radius " + radius);
    }
    
    // Method to demonstrate multiple uses of super
    public void display() {
        super.draw();  // Call parent's method
        System.out.println("Color from parent: " + super.color);  // Access parent's field
        this.draw();   // Call current class method
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Super Keyword
      </div>

      <h1 className="content-title">Super Keyword in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          The super keyword in Java is used to refer to the immediate parent class object. 
          It can be used to call parent class methods, access parent class fields, and invoke 
          parent class constructor.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#super-constructor">Super with Constructors</a></li>
          <li><a href="#super-methods">Super with Methods</a></li>
          <li><a href="#super-fields">Super with Fields</a></li>
          <li><a href="#common-usage">Common Usage Patterns</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="super-constructor">
        <h2>Super with Constructors</h2>
        <p>
          The super() call is used to invoke the parent class constructor.
        </p>
        <CodeBlock initialCode={superConstructorExample} />
        <div className="feature-box">
          <h3>Key Points:</h3>
          <ul>
            <li>Must be first statement in constructor</li>
            <li>Used for constructor chaining</li>
            <li>Implicit call if not specified</li>
            <li>Can pass arguments to parent constructor</li>
          </ul>
        </div>
      </section>

      <section id="super-methods">
        <h2>Super with Methods</h2>
        <p>
          Use super to call parent class methods, especially when overriding.
        </p>
        <CodeBlock initialCode={superMethodExample} />
        <div className="info-box">
          <h3>When to Use:</h3>
          <ul>
            <li>Extend parent method behavior</li>
            <li>Access overridden methods</li>
            <li>Maintain parent functionality</li>
            <li>Implement polymorphic behavior</li>
          </ul>
        </div>
      </section>

      <section id="super-fields">
        <h2>Super with Fields</h2>
        <p>
          Access parent class fields using super keyword.
        </p>
        <CodeBlock initialCode={superFieldExample} />
        <div className="warning-box">
          <h3>Important Considerations:</h3>
          <ul>
            <li>Used to avoid field shadowing</li>
            <li>Access protected/public parent fields</li>
            <li>Differentiate between local and parent fields</li>
            <li>Cannot access private parent fields</li>
          </ul>
        </div>
      </section>

      <section id="common-usage">
        <h2>Common Usage Patterns</h2>
        <p>
          Common scenarios where super keyword is typically used.
        </p>
        <CodeBlock initialCode={commonUsageExample} />
        <div className="best-practices">
          <h3>Common Patterns:</h3>
          <ul>
            <li>
              <strong>Constructor Chaining:</strong>
              Initialize parent state
            </li>
            <li>
              <strong>Method Extension:</strong>
              Add functionality to parent methods
            </li>
            <li>
              <strong>Field Access:</strong>
              Access shadowed fields
            </li>
            <li>
              <strong>Mixed Usage:</strong>
              Combine different super uses
            </li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>Do's</h3>
            <ul>
              <li>Call super() first in constructor</li>
              <li>Use super when extending behavior</li>
              <li>Document super usage clearly</li>
              <li>Use super to avoid ambiguity</li>
            </ul>
          </div>
          <div className="practice-card">
            <h3>Don'ts</h3>
            <ul>
              <li>Use super in static context</li>
              <li>Overuse super unnecessarily</li>
              <li>Call super() after other statements</li>
              <li>Access private parent members</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Constructor Order</h3>
            <p>Not calling super() first in constructor</p>
          </div>
          <div className="pitfall-card">
            <h3>Static Context</h3>
            <p>Trying to use super in static methods</p>
          </div>
          <div className="pitfall-card">
            <h3>Visibility Issues</h3>
            <p>Attempting to access private members</p>
          </div>
          <div className="pitfall-card">
            <h3>Unnecessary Usage</h3>
            <p>Using super when not needed</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/inheritance" className="prev-link">
          ← Previous: Inheritance
        </Link>
        <Link to="/tutorials/java/this-keyword" className="next-link">
          Next: This Keyword →
        </Link>
      </div>
    </div>
  );
}

export default SuperKeyword;
