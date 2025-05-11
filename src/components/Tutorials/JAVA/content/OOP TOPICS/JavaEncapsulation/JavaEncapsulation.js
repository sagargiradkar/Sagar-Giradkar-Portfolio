// JavaEncapsulation.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaEncapsulation.css';

function JavaEncapsulation() {
  const basicEncapsulationExample = 
    `public class BankAccount {
    // Private fields
    private double balance;
    private String accountNumber;
    private String accountHolder;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0;
    }
    
    // Public methods (getters and setters)
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
}`;

  const dataValidationExample = 
    `public class Employee {
    private String name;
    private int age;
    private double salary;
    
    // Constructor
    public Employee(String name, int age, double salary) {
        setName(name);
        setAge(age);
        setSalary(salary);
    }
    
    // Getter and Setter with validation
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name.trim();
    }
    
    public void setAge(int age) {
        if (age < 18 || age > 65) {
            throw new IllegalArgumentException("Age must be between 18 and 65");
        }
        this.age = age;
    }
    
    public void setSalary(double salary) {
        if (salary < 0) {
            throw new IllegalArgumentException("Salary cannot be negative");
        }
        this.salary = salary;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getSalary() { return salary; }
}`;

  const immutableClassExample = 
    `public final class ImmutablePerson {
    private final String name;
    private final int age;
    private final List<String> hobbies;
    
    public ImmutablePerson(String name, int age, List<String> hobbies) {
        this.name = name;
        this.age = age;
        // Create defensive copy of mutable object
        this.hobbies = new ArrayList<>(hobbies);
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public List<String> getHobbies() {
        // Return defensive copy
        return new ArrayList<>(hobbies);
    }
}`;

  const bestPracticesExample = 
    `public class Product {
    // Use meaningful names for fields
    private String productId;
    private String name;
    private double price;
    private int stockQuantity;
    
    // Group related fields and methods
    // Constructor
    public Product(String productId, String name, double price) {
        this.productId = productId;
        this.name = name;
        setPrice(price);  // Use setter for validation
        this.stockQuantity = 0;
    }
    
    // Price-related methods
    public double getPrice() {
        return price;
    }
    
    private void setPrice(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        this.price = price;
    }
    
    // Stock-related methods
    public void addStock(int quantity) {
        if (quantity > 0) {
            this.stockQuantity += quantity;
        }
    }
    
    public boolean removeStock(int quantity) {
        if (quantity > 0 && stockQuantity >= quantity) {
            stockQuantity -= quantity;
            return true;
        }
        return false;
    }
    
    // Basic getters
    public String getProductId() { return productId; }
    public String getName() { return name; }
    public int getStockQuantity() { return stockQuantity; }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Encapsulation
      </div>

      <h1 className="content-title">Encapsulation in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Encapsulation is one of the fundamental principles of Object-Oriented Programming 
          that bundles data and the methods that operate on that data within a single unit 
          or object, keeping the data safe from outside interference and misuse.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#basic-encapsulation">Basic Encapsulation</a></li>
          <li><a href="#data-validation">Data Validation</a></li>
          <li><a href="#immutable-objects">Immutable Objects</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
          <li><a href="#common-pitfalls">Common Pitfalls</a></li>
        </ul>
      </div>

      <section id="basic-encapsulation">
        <h2>Basic Encapsulation</h2>
        <p>
          Basic encapsulation involves making fields private and providing public methods 
          to access and modify the data.
        </p>
        <CodeBlock initialCode={basicEncapsulationExample} />
        <div className="feature-box">
          <h3>Key Components:</h3>
          <ul>
            <li>Private fields to hide data</li>
            <li>Public methods to access data</li>
            <li>Controlled access to internal state</li>
            <li>Data hiding and protection</li>
          </ul>
        </div>
      </section>

      <section id="data-validation">
        <h2>Data Validation</h2>
        <p>
          Encapsulation allows for data validation before modifying object state.
        </p>
        <CodeBlock initialCode={dataValidationExample} />
        <div className="info-box">
          <h3>Benefits of Validation:</h3>
          <ul>
            <li>Ensures data integrity</li>
            <li>Prevents invalid states</li>
            <li>Centralizes validation logic</li>
            <li>Maintains business rules</li>
          </ul>
        </div>
      </section>

      <section id="immutable-objects">
        <h2>Immutable Objects</h2>
        <p>
          Creating immutable objects is a strong form of encapsulation.
        </p>
        <CodeBlock initialCode={immutableClassExample} />
        <div className="warning-box">
          <h3>Immutability Rules:</h3>
          <ul>
            <li>Declare class as final</li>
            <li>Make all fields private and final</li>
            <li>Don't provide setters</li>
            <li>Create defensive copies of mutable objects</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <CodeBlock initialCode={bestPracticesExample} />
        <div className="best-practices">
          <ul>
            <li>
              <strong>Declare Fields as Private:</strong>
              Always make instance variables private
            </li>
            <li>
              <strong>Provide Controlled Access:</strong>
              Use getters and setters appropriately
            </li>
            <li>
              <strong>Validate Input:</strong>
              Add validation in setters
            </li>
            <li>
              <strong>Use Meaningful Names:</strong>
              Choose clear and descriptive names
            </li>
          </ul>
        </div>
      </section>

      <section id="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Exposing Internal State</h3>
            <p>Returning references to mutable objects</p>
          </div>
          <div className="pitfall-card">
            <h3>Public Fields</h3>
            <p>Declaring fields as public</p>
          </div>
          <div className="pitfall-card">
            <h3>Missing Validation</h3>
            <p>Not validating input in setters</p>
          </div>
          <div className="pitfall-card">
            <h3>Overexposure</h3>
            <p>Creating unnecessary getters/setters</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Benefits of Encapsulation</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Data Hiding</h3>
            <p>Protects internal implementation details</p>
          </div>
          <div className="benefit-card">
            <h3>Flexibility</h3>
            <p>Can change implementation without affecting clients</p>
          </div>
          <div className="benefit-card">
            <h3>Maintainability</h3>
            <p>Easier to maintain and modify code</p>
          </div>
          <div className="benefit-card">
            <h3>Reusability</h3>
            <p>Promotes code reuse and modularity</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/abstraction" className="prev-link">
          ← Previous: Abstraction
        </Link>
        <Link to="/tutorials/java/interfaces" className="next-link">
          Next: Interfaces →
        </Link>
      </div>
    </div>
  );
}

export default JavaEncapsulation;
