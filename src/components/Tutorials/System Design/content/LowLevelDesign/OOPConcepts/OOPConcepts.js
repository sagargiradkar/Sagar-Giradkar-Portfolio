// src/components/Tutorials/SystemDesign/content/LowLevelDesign/OOPConcepts/OOPConcepts.js

import React from "react";
import { Link } from "react-router-dom";
import "./OOPConcepts.css";
import CodeBlock from "./CodeBlock";

function OOPConcepts() {
    const encapsulationExample = `
// Encapsulation Example
public class BankAccount {
    private double balance;  // Private field
    private String accountNumber;
    private String accountHolder;
    
    public BankAccount(String accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0;
    }
    
    // Public methods to access and modify private fields
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            throw new IllegalArgumentException("Invalid deposit amount");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            throw new IllegalArgumentException("Invalid withdrawal amount");
        }
    }
}`;

    const inheritanceExample = `
// Inheritance Example
// Base class
public abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    public abstract void start();
    public abstract void stop();
    
    public String getInfo() {
        return year + " " + brand + " " + model;
    }
}

// Derived class
public class Car extends Vehicle {
    private int numberOfDoors;
    
    public Car(String brand, String model, int year, int doors) {
        super(brand, model, year);
        this.numberOfDoors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine starting...");
    }
    
    @Override
    public void stop() {
        System.out.println("Car engine stopping...");
    }
    
    public void honk() {
        System.out.println("Beep beep!");
    }
}`;

    const polymorphismExample = `
// Polymorphism Example
// Interface
public interface Shape {
    double calculateArea();
    double calculatePerimeter();
}

// Implementation classes
public class Circle implements Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle implements Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (width + height);
    }
}

// Usage example
public class ShapeCalculator {
    public void printShapeInfo(Shape shape) {
        System.out.println("Area: " + shape.calculateArea());
        System.out.println("Perimeter: " + shape.calculatePerimeter());
    }
}`;

    const abstractionExample = `
// Abstraction Example
// Abstract class
public abstract class DatabaseConnection {
    protected String connectionString;
    protected boolean isConnected;
    
    public abstract void connect();
    public abstract void disconnect();
    public abstract void executeQuery(String query);
    
    public boolean isConnected() {
        return isConnected;
    }
}

// Concrete implementation
public class MySQLConnection extends DatabaseConnection {
    public MySQLConnection(String connectionString) {
        this.connectionString = connectionString;
    }
    
    @Override
    public void connect() {
        // MySQL specific connection logic
        System.out.println("Connecting to MySQL database...");
        isConnected = true;
    }
    
    @Override
    public void disconnect() {
        // MySQL specific disconnection logic
        System.out.println("Disconnecting from MySQL database...");
        isConnected = false;
    }
    
    @Override
    public void executeQuery(String query) {
        if (!isConnected) {
            throw new IllegalStateException("Not connected to database");
        }
        System.out.println("Executing MySQL query: " + query);
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/systemdesign">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/systemdesign/lowleveldesign">Low Level Design</Link>{" "}
                <span>›</span> OOP Concepts
            </div>

            <h1 className="content-title">Object-Oriented Programming Concepts</h1>
            <p className="last-updated">Last Updated: 13 May, 2025</p>

            <div className="concepts-intro">
                <p>
                    Object-Oriented Programming (OOP) is a programming paradigm based on the
                    concept of "objects" that contain data and code. OOP uses several core
                    concepts to organize software design around data, rather than functions
                    and logic.
                </p>
            </div>

            <section className="content-section" id="encapsulation">
                <h2>Encapsulation</h2>
                <div className="concept-explanation">
                    <p>
                        Encapsulation is the bundling of data and the methods that operate on
                        that data within a single unit or object, keeping the internal details
                        hidden from the outside world.
                    </p>
                    <div className="key-points">
                        <h3>Key Benefits:</h3>
                        <ul>
                            <li>Data hiding and abstraction</li>
                            <li>Better control over data access</li>
                            <li>Ability to change internal implementation</li>
                            <li>Protection of data integrity</li>
                        </ul>
                    </div>
                    <div className="example-block">
                        <h3>Example Implementation:</h3>
                        <CodeBlock initialCode={encapsulationExample} />
                        <div className="example-explanation">
                            <p>
                                In this example, the BankAccount class demonstrates encapsulation
                                by:
                            </p>
                            <ul>
                                <li>Making fields private (balance, accountNumber, accountHolder)</li>
                                <li>Providing public methods for controlled access</li>
                                <li>Implementing validation in methods</li>
                                <li>Hiding implementation details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section" id="inheritance">
                <h2>Inheritance</h2>
                <div className="concept-explanation">
                    <p>
                        Inheritance is a mechanism that allows a class to inherit properties
                        and methods from another class, supporting code reuse and establishing
                        relationships between classes.
                    </p>
                    <div className="key-points">
                        <h3>Key Benefits:</h3>
                        <ul>
                            <li>Code reusability</li>
                            <li>Method overriding</li>
                            <li>Establishment of class hierarchies</li>
                            <li>Polymorphic behavior</li>
                        </ul>
                    </div>
                    <div className="example-block">
                        <h3>Example Implementation:</h3>
                        <CodeBlock initialCode={inheritanceExample} />
                        <div className="example-explanation">
                            <p>
                                This example shows inheritance through:
                            </p>
                            <ul>
                                <li>Abstract base class (Vehicle)</li>
                                <li>Concrete derived class (Car)</li>
                                <li>Method overriding</li>
                                <li>Use of 'super' keyword</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section" id="polymorphism">
                <h2>Polymorphism</h2>
                <div className="concept-explanation">
                    <p>
                        Polymorphism allows objects of different classes to be treated as
                        objects of a common base class, enabling different implementations of
                        methods for different classes.
                    </p>
                    <div className="key-points">
                        <h3>Types of Polymorphism:</h3>
                        <ul>
                            <li>Compile-time (Method Overloading)</li>
                            <li>Runtime (Method Overriding)</li>
                            <li>Interface-based</li>
                            <li>Ad-hoc polymorphism</li>
                        </ul>
                    </div>
                    <div className="example-block">
                        <h3>Example Implementation:</h3>
                        <CodeBlock initialCode={polymorphismExample} />
                        <div className="example-explanation">
                            <p>
                                This example demonstrates polymorphism through:
                            </p>
                            <ul>
                                <li>Common interface (Shape)</li>
                                <li>Multiple implementations (Circle, Rectangle)</li>
                                <li>Polymorphic method calls</li>
                                <li>Interface-based programming</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section" id="abstraction">
                <h2>Abstraction</h2>
                <div className="concept-explanation">
                    <p>
                        Abstraction is the process of hiding complex implementation details
                        and showing only the necessary features of an object.
                    </p>
                    <div className="key-points">
                        <h3>Key Benefits:</h3>
                        <ul>
                            <li>Reduced complexity</li>
                            <li>Implementation hiding</li>
                            <li>Focus on essential features</li>
                            <li>Better maintainability</li>
                        </ul>
                    </div>
                    <div className="example-block">
                        <h3>Example Implementation:</h3>
                        <CodeBlock initialCode={abstractionExample} />
                        <div className="example-explanation">
                            <p>
                                This example shows abstraction through:
                            </p>
                            <ul>
                                <li>Abstract class (DatabaseConnection)</li>
                                <li>Abstract methods</li>
                                <li>Concrete implementation</li>
                                <li>Implementation hiding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section" id="best-practices">
                <h2>Best Practices</h2>
                <div className="best-practices-grid">
                    <div className="practice-card">
                        <h3>Class Design</h3>
                        <ul>
                            <li>Keep classes focused and cohesive</li>
                            <li>Follow single responsibility principle</li>
                            <li>Use meaningful names</li>
                            <li>Keep inheritance hierarchies shallow</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Encapsulation</h3>
                        <ul>
                            <li>Use private fields</li>
                            <li>Provide controlled access</li>
                            <li>Validate input data</li>
                            <li>Hide implementation details</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Inheritance Usage</h3>
                        <ul>
                            <li>Favor composition over inheritance</li>
                            <li>Use interfaces appropriately</li>
                            <li>Override methods carefully</li>
                            <li>Document inheritance relationships</li>
                        </ul>
                    </div>

                    <div className="practice-card">
                        <h3>Code Organization</h3>
                        <ul>
                            <li>Group related classes</li>
                            <li>Use packages effectively</li>
                            <li>Maintain consistent style</li>
                            <li>Document public APIs</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link
                    to="/tutorials/systemdesign/lowleveldesign/solid-principles"
                    className="next-link"
                >
                    Next: SOLID Principles →
                </Link>
            </div>
        </div>
    );
}

export default OOPConcepts;
