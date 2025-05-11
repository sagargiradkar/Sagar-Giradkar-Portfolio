// Polymorphism.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './Polymorphism.css';

function JavaPolymorphism() {
  const compiletimePolymorphismExample = 
    `public class Calculator {
    // Method overloading examples
    public int add(int a, int b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}

// Using overloaded methods
Calculator calc = new Calculator();
System.out.println(calc.add(5, 3));         // calls first method
System.out.println(calc.add(5, 3, 2));      // calls second method
System.out.println(calc.add(5.5, 3.2));     // calls third method
System.out.println(calc.add("Hello", "World")); // calls fourth method`;

  const runtimePolymorphismExample = 
    `// Parent class
public class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

// Child classes
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// Using runtime polymorphism
Animal animal1 = new Dog();  // Animal reference but Dog object
Animal animal2 = new Cat();  // Animal reference but Cat object

animal1.makeSound();  // Output: Woof!
animal2.makeSound();  // Output: Meow!`;

  const abstractClassExample = 
    `// Abstract class
public abstract class Shape {
    abstract double calculateArea();  // Abstract method
    
    // Concrete method
    public void display() {
        System.out.println("Area: " + calculateArea());
    }
}

// Concrete classes
public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    double calculateArea() {
        return length * width;
    }
}`;

  const interfacePolymorphismExample = 
    `// Interface
public interface Drawable {
    void draw();
}

// Implementing classes
public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

public class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

// Using interface polymorphism
Drawable shape1 = new Circle();
Drawable shape2 = new Rectangle();

shape1.draw();  // Output: Drawing Circle
shape2.draw();  // Output: Drawing Rectangle`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Polymorphism
      </div>

      <h1 className="content-title">Polymorphism in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Polymorphism is one of the core concepts of Object-Oriented Programming that allows 
          objects to take multiple forms. In Java, polymorphism can be achieved in two ways: 
          compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#compile-time">Compile-time Polymorphism</a></li>
          <li><a href="#runtime">Runtime Polymorphism</a></li>
          <li><a href="#abstract-classes">Abstract Classes</a></li>
          <li><a href="#interfaces">Interface Polymorphism</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="compile-time">
        <h2>Compile-time Polymorphism (Method Overloading)</h2>
        <p>
          Compile-time polymorphism is achieved through method overloading where multiple 
          methods can have the same name but different parameters.
        </p>
        <CodeBlock initialCode={compiletimePolymorphismExample} />
        <div className="feature-box">
          <h3>Key Points:</h3>
          <ul>
            <li>Methods must have different parameter lists</li>
            <li>Can have different return types</li>
            <li>Resolved during compilation</li>
            <li>Also known as static polymorphism</li>
          </ul>
        </div>
      </section>

      <section id="runtime">
        <h2>Runtime Polymorphism (Method Overriding)</h2>
        <p>
          Runtime polymorphism is achieved through method overriding where a child class 
          provides a specific implementation of a method that is already defined in its 
          parent class.
        </p>
        <CodeBlock initialCode={runtimePolymorphismExample} />
        <div className="info-box">
          <h3>Important Concepts:</h3>
          <ul>
            <li>Based on inheritance</li>
            <li>Method signature must be same</li>
            <li>Resolved during runtime</li>
            <li>Also known as dynamic polymorphism</li>
          </ul>
        </div>
      </section>

      <section id="abstract-classes">
        <h2>Abstract Classes and Polymorphism</h2>
        <p>
          Abstract classes provide a way to create a common base class that contains some 
          common functionality while forcing inherited classes to implement other methods.
        </p>
        <CodeBlock initialCode={abstractClassExample} />
        <div className="warning-box">
          <h3>Abstract Class Rules:</h3>
          <ul>
            <li>Cannot be instantiated</li>
            <li>May contain abstract and concrete methods</li>
            <li>Must be extended to be used</li>
            <li>Subclasses must implement all abstract methods</li>
          </ul>
        </div>
      </section>

      <section id="interfaces">
        <h2>Interface Polymorphism</h2>
        <p>
          Interfaces provide another way to achieve polymorphism by defining a contract 
          that implementing classes must follow.
        </p>
        <CodeBlock initialCode={interfacePolymorphismExample} />
        <div className="feature-box">
          <h3>Interface Benefits:</h3>
          <ul>
            <li>Multiple interface implementation</li>
            <li>Loose coupling</li>
            <li>Better abstraction</li>
            <li>Easy to extend functionality</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Use Method Overloading Wisely:</strong>
              Keep overloaded methods consistent in behavior
            </li>
            <li>
              <strong>Favor Composition:</strong>
              Consider composition over inheritance when possible
            </li>
            <li>
              <strong>Follow LSP:</strong>
              Ensure derived classes can substitute base classes
            </li>
            <li>
              <strong>Use Interfaces:</strong>
              Program to interfaces rather than concrete implementations
            </li>
          </ul>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Overloading Confusion</h3>
            <p>Creating ambiguous overloaded methods</p>
          </div>
          <div className="pitfall-card">
            <h3>Type Checking</h3>
            <p>Excessive use of instanceof operator</p>
          </div>
          <div className="pitfall-card">
            <h3>Wrong Override</h3>
            <p>Missing @Override annotation</p>
          </div>
          <div className="pitfall-card">
            <h3>Deep Hierarchy</h3>
            <p>Creating deep inheritance hierarchies</p>
          </div>
        </div>
      </section>

      <div className="comparison-table">
        <h3>Polymorphism Types Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Compile-time</th>
              <th>Runtime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resolution Time</td>
              <td>Compile time</td>
              <td>Runtime</td>
            </tr>
            <tr>
              <td>Method Binding</td>
              <td>Static</td>
              <td>Dynamic</td>
            </tr>
            <tr>
              <td>Flexibility</td>
              <td>Less flexible</td>
              <td>More flexible</td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>Better</td>
              <td>Slightly slower</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="navigation-links">
        <Link to="/tutorials/java/inheritance" className="prev-link">
          ← Previous: Inheritance
        </Link>
        <Link to="/tutorials/java/abstraction" className="next-link">
          Next: Abstraction →
        </Link>
      </div>
    </div>
  );
}

export default JavaPolymorphism;
