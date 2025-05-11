// JavaAbstraction.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaAbstraction.css';

function JavaAbstraction() {
  const abstractClassExample = 
    `// Abstract class
public abstract class Vehicle {
    private String brand;
    
    // Abstract methods (no implementation)
    public abstract void start();
    public abstract void stop();
    
    // Concrete method
    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    public String getBrand() {
        return brand;
    }
}

// Concrete class
public class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car starting - Insert key and turn ignition");
    }
    
    @Override
    public void stop() {
        System.out.println("Car stopping - Turn off engine");
    }
}

// Concrete class
public class ElectricBike extends Vehicle {
    @Override
    public void start() {
        System.out.println("Bike starting - Push power button");
    }
    
    @Override
    public void stop() {
        System.out.println("Bike stopping - Hold power button");
    }
}`;

  const interfaceExample = 
    `// Interface definition
public interface PaymentProcessor {
    void processPayment(double amount);
    boolean verifyPayment();
    void generateReceipt();
    
    // Default method (Java 8+)
    default void cancelPayment() {
        System.out.println("Payment cancelled");
    }
}

// Implementation class
public class CreditCardPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment: $" + amount);
    }
    
    @Override
    public boolean verifyPayment() {
        // Payment verification logic
        return true;
    }
    
    @Override
    public void generateReceipt() {
        System.out.println("Generating credit card receipt");
    }
}

// Another implementation
public class PayPalPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
    }
    
    @Override
    public boolean verifyPayment() {
        // PayPal verification logic
        return true;
    }
    
    @Override
    public void generateReceipt() {
        System.out.println("Generating PayPal receipt");
    }
}`;

  const encapsulationExample = 
    `public class BankAccount {
    private double balance;
    private String accountNumber;
    private String accountHolder;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0;
    }
    
    // Public methods to interact with private data
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
    
    public double getBalance() {
        return balance;
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Abstraction
      </div>

      <h1 className="content-title">Abstraction in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Abstraction is a fundamental principle of Object-Oriented Programming that focuses 
          on hiding implementation details and showing only functionality to the user. 
          Java supports abstraction through abstract classes and interfaces.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#abstract-classes">Abstract Classes</a></li>
          <li><a href="#interfaces">Interfaces</a></li>
          <li><a href="#abstraction-encapsulation">Abstraction vs Encapsulation</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
          <li><a href="#common-pitfalls">Common Pitfalls</a></li>
        </ul>
      </div>

      <section id="abstract-classes">
        <h2>Abstract Classes</h2>
        <p>
          Abstract classes provide a common base class that contains shared code while 
          forcing inherited classes to implement abstract methods.
        </p>
        <CodeBlock initialCode={abstractClassExample} />
        <div className="feature-box">
          <h3>Key Features:</h3>
          <ul>
            <li>Can have both abstract and concrete methods</li>
            <li>Cannot be instantiated</li>
            <li>Can have constructors and static methods</li>
            <li>Can have instance variables</li>
          </ul>
        </div>
      </section>

      <section id="interfaces">
        <h2>Interfaces</h2>
        <p>
          Interfaces define a contract that implementing classes must follow, providing 
          pure abstraction.
        </p>
        <CodeBlock initialCode={interfaceExample} />
        <div className="info-box">
          <h3>Interface Characteristics:</h3>
          <ul>
            <li>All methods are public and abstract by default</li>
            <li>Can have default and static methods (Java 8+)</li>
            <li>All fields are public, static, and final</li>
            <li>Can implement multiple interfaces</li>
          </ul>
        </div>
      </section>

      <section id="abstraction-encapsulation">
        <h2>Abstraction vs Encapsulation</h2>
        <p>
          While both concepts are related to hiding details, they serve different purposes.
        </p>
        <CodeBlock initialCode={encapsulationExample} />
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Abstraction</th>
                <th>Encapsulation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hides implementation details</td>
                <td>Hides data and methods</td>
              </tr>
              <tr>
                <td>Focuses on what object does</td>
                <td>Focuses on how object does it</td>
              </tr>
              <tr>
                <td>Achieved through interfaces and abstract classes</td>
                <td>Achieved through access modifiers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Choose the Right Tool:</strong>
              Use interfaces for defining contracts and abstract classes for shared implementation
            </li>
            <li>
              <strong>Keep it Simple:</strong>
              Don't create unnecessary abstractions
            </li>
            <li>
              <strong>Interface Segregation:</strong>
              Create small, focused interfaces rather than large ones
            </li>
            <li>
              <strong>Documentation:</strong>
              Clearly document the purpose and usage of abstract types
            </li>
          </ul>
        </div>
      </section>

      <section id="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Over-abstraction</h3>
            <p>Creating unnecessary abstract layers</p>
          </div>
          <div className="pitfall-card">
            <h3>Interface Pollution</h3>
            <p>Too many methods in a single interface</p>
          </div>
          <div className="pitfall-card">
            <h3>Wrong Abstraction</h3>
            <p>Choosing abstract class when interface would be better</p>
          </div>
          <div className="pitfall-card">
            <h3>Leaky Abstraction</h3>
            <p>Implementation details leaking through abstraction</p>
          </div>
        </div>
      </section>

      <section className="decision-guide">
        <h2>When to Use What?</h2>
        <div className="guide-grid">
          <div className="guide-card">
            <h3>Use Abstract Class When:</h3>
            <ul>
              <li>You want to share code among several related classes</li>
              <li>You expect classes to have common methods or fields</li>
              <li>You want to declare non-public members</li>
              <li>You need to provide a default implementation</li>
            </ul>
          </div>
          <div className="guide-card">
            <h3>Use Interface When:</h3>
            <ul>
              <li>You want to define a contract</li>
              <li>You need multiple inheritance</li>
              <li>You want to specify behavior of a data type</li>
              <li>You want to decouple implementation from definition</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/polymorphism" className="prev-link">
          ← Previous: Polymorphism
        </Link>
        <Link to="/tutorials/java/encapsulation" className="next-link">
          Next: Encapsulation →
        </Link>
      </div>
    </div>
  );
}

export default JavaAbstraction;
