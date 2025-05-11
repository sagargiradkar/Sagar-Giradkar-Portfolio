// JavaInterfaces.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaInterfaces.css';

function JavaInterfaces() {
  const basicInterfaceExample = 
    `// Basic interface definition
public interface Drawable {
    void draw();  // abstract method
    
    // default method (Java 8+)
    default void resize() {
        System.out.println("Resizing...");
    }
    
    // static method (Java 8+)
    static void printInfo() {
        System.out.println("Drawable interface");
    }
}

// Implementing the interface
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
    
    // Optional: override default method
    @Override
    public void resize() {
        System.out.println("Resizing Rectangle");
    }
}`;

  const multipleInterfacesExample = 
    `public interface Movable {
    void moveUp();
    void moveDown();
    void moveLeft();
    void moveRight();
}

public interface Resizable {
    void resize(int width, int height);
}

// Implementing multiple interfaces
public class GameCharacter implements Movable, Resizable {
    private int x, y;
    private int width, height;
    
    @Override
    public void moveUp() {
        y--;
    }
    
    @Override
    public void moveDown() {
        y++;
    }
    
    @Override
    public void moveLeft() {
        x--;
    }
    
    @Override
    public void moveRight() {
        x++;
    }
    
    @Override
    public void resize(int width, int height) {
        this.width = width;
        this.height = height;
    }
}`;

  const functionalInterfaceExample = 
    `// Functional interface (Single Abstract Method)
@FunctionalInterface
public interface Calculable {
    double calculate(double x, double y);
}

// Using lambda expressions with functional interface
public class Calculator {
    public static void main(String[] args) {
        // Addition
        Calculable add = (x, y) -> x + y;
        
        // Multiplication
        Calculable multiply = (x, y) -> x * y;
        
        // Using the interfaces
        System.out.println(add.calculate(5, 3));      // 8.0
        System.out.println(multiply.calculate(5, 3)); // 15.0
    }
}`;

  const defaultMethodsExample = 
    `public interface Vehicle {
    void start();
    void stop();
    
    // Default method
    default void horn() {
        System.out.println("Beep!");
    }
    
    // Static method
    static int getWheelCount(String vehicleType) {
        switch(vehicleType.toLowerCase()) {
            case "car": return 4;
            case "motorcycle": return 2;
            default: return 0;
        }
    }
}

public class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car starting");
    }
    
    @Override
    public void stop() {
        System.out.println("Car stopping");
    }
    
    // Optional: override default method
    @Override
    public void horn() {
        System.out.println("Car horn: Honk!");
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Interfaces
      </div>

      <h1 className="content-title">Interfaces in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          An interface in Java is a blueprint of a class that contains abstract methods, 
          default methods, and static methods. It is used to achieve abstraction and 
          multiple inheritance in Java.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#basic-interface">Basic Interface</a></li>
          <li><a href="#multiple-interfaces">Multiple Interfaces</a></li>
          <li><a href="#functional-interfaces">Functional Interfaces</a></li>
          <li><a href="#default-methods">Default Methods</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="basic-interface">
        <h2>Basic Interface</h2>
        <p>
          A basic interface defines a contract that implementing classes must follow.
        </p>
        <CodeBlock initialCode={basicInterfaceExample} />
        <div className="feature-box">
          <h3>Key Characteristics:</h3>
          <ul>
            <li>All methods are public and abstract by default</li>
            <li>Can contain default and static methods (Java 8+)</li>
            <li>All fields are public, static, and final</li>
            <li>Cannot be instantiated</li>
          </ul>
        </div>
      </section>

      <section id="multiple-interfaces">
        <h2>Multiple Interfaces</h2>
        <p>
          Java allows a class to implement multiple interfaces, enabling a form of 
          multiple inheritance.
        </p>
        <CodeBlock initialCode={multipleInterfacesExample} />
        <div className="info-box">
          <h3>Benefits:</h3>
          <ul>
            <li>Achieve multiple inheritance</li>
            <li>Define common behavior across unrelated classes</li>
            <li>Create modular and flexible code</li>
            <li>Support polymorphism</li>
          </ul>
        </div>
      </section>

      <section id="functional-interfaces">
        <h2>Functional Interfaces</h2>
        <p>
          Functional interfaces have exactly one abstract method and can be used with 
          lambda expressions.
        </p>
        <CodeBlock initialCode={functionalInterfaceExample} />
        <div className="warning-box">
          <h3>Important Points:</h3>
          <ul>
            <li>Must have exactly one abstract method</li>
            <li>Can have default and static methods</li>
            <li>Annotated with @FunctionalInterface</li>
            <li>Used for lambda expressions</li>
          </ul>
        </div>
      </section>

      <section id="default-methods">
        <h2>Default Methods</h2>
        <p>
          Default methods allow interfaces to have method implementations.
        </p>
        <CodeBlock initialCode={defaultMethodsExample} />
        <div className="feature-box">
          <h3>Advantages:</h3>
          <ul>
            <li>Add new methods without breaking existing code</li>
            <li>Provide optional functionality</li>
            <li>Enable interface evolution</li>
            <li>Reduce code duplication</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Keep Interfaces Focused:</strong>
              Follow Interface Segregation Principle
            </li>
            <li>
              <strong>Use Meaningful Names:</strong>
              Name interfaces based on behavior
            </li>
            <li>
              <strong>Document API:</strong>
              Provide clear documentation for interface methods
            </li>
            <li>
              <strong>Default Methods:</strong>
              Use sparingly and only when necessary
            </li>
          </ul>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Interface Pollution</h3>
            <p>Too many methods in a single interface</p>
          </div>
          <div className="pitfall-card">
            <h3>Default Method Abuse</h3>
            <p>Overusing default methods</p>
          </div>
          <div className="pitfall-card">
            <h3>Poor Naming</h3>
            <p>Unclear or misleading interface names</p>
          </div>
          <div className="pitfall-card">
            <h3>Missing Documentation</h3>
            <p>Inadequate method documentation</p>
          </div>
        </div>
      </section>

      <section className="interface-types">
        <h2>Types of Interfaces</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Normal Interface</h3>
            <p>Contains multiple abstract methods</p>
          </div>
          <div className="type-card">
            <h3>Functional Interface</h3>
            <p>Contains single abstract method</p>
          </div>
          <div className="type-card">
            <h3>Marker Interface</h3>
            <p>Contains no methods (e.g., Serializable)</p>
          </div>
          <div className="type-card">
            <h3>Mixed Interface</h3>
            <p>Contains both default and abstract methods</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/encapsulation" className="prev-link">
          ← Previous: Encapsulation
        </Link>
        <Link to="/tutorials/java/exceptions" className="next-link">
          Next: Exceptions →
        </Link>
      </div>
    </div>
  );
}

export default JavaInterfaces;
