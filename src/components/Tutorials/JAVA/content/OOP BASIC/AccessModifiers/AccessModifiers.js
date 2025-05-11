// AccessModifiers.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './AccessModifiers.css';

function AccessModifiers() {
  const publicModifierExample = 
    `public class Student {
    public String name;      // Accessible from anywhere
    public int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void display() {  // Public method
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Can be accessed from any other class
Student student = new Student("John", 20);
student.display();`;

  const privateModifierExample = 
    `public class BankAccount {
    private double balance;    // Only accessible within this class
    private String accountNumber;
    
    public BankAccount(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }
    
    private void validateAmount(double amount) {  // Private method
        if (amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
    }
    
    public void deposit(double amount) {
        validateAmount(amount);  // Private method called within class
        balance += amount;
    }
}`;

  const protectedModifierExample = 
    `// Base class
public class Animal {
    protected String name;    // Accessible in subclasses
    protected int age;
    
    protected void eat() {    // Protected method
        System.out.println(name + " is eating");
    }
}

// Subclass
public class Dog extends Animal {
    public void displayInfo() {
        // Can access protected members
        System.out.println("Name: " + name);  // Accessing protected field
        eat();  // Calling protected method
    }
}`;

  const defaultModifierExample = 
    `// In file: Calculator.java
class Calculator {           // Default access (package-private)
    int add(int a, int b) { // Default access method
        return a + b;
    }
}

// In same package: MathOperations.java
class MathOperations {
    void performCalculation() {
        Calculator calc = new Calculator();  // Accessible within same package
        int result = calc.add(5, 3);
    }
}

// In different package: OtherClass.java
// Will not compile - Cannot access Calculator class`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Access Modifiers
      </div>

      <h1 className="content-title">Access Modifiers in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Access modifiers in Java control the visibility and accessibility of classes, 
          methods, and fields. They are fundamental to encapsulation and help in 
          implementing data hiding.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#access-levels">Access Levels Overview</a></li>
          <li><a href="#public">Public Access Modifier</a></li>
          <li><a href="#private">Private Access Modifier</a></li>
          <li><a href="#protected">Protected Access Modifier</a></li>
          <li><a href="#default">Default (Package-Private) Access</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="access-levels">
        <h2>Access Levels Overview</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Modifier</th>
                <th>Class</th>
                <th>Package</th>
                <th>Subclass</th>
                <th>World</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>public</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>protected</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✗</td>
              </tr>
              <tr>
                <td>default</td>
                <td>✓</td>
                <td>✓</td>
                <td>✗</td>
                <td>✗</td>
              </tr>
              <tr>
                <td>private</td>
                <td>✓</td>
                <td>✗</td>
                <td>✗</td>
                <td>✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="public">
        <h2>Public Access Modifier</h2>
        <p>
          The public modifier makes the member accessible from any other class, regardless 
          of package location.
        </p>
        <CodeBlock initialCode={publicModifierExample} />
        <div className="feature-box">
          <h3>Key Points:</h3>
          <ul>
            <li>Accessible from anywhere</li>
            <li>Provides least encapsulation</li>
            <li>Suitable for APIs and public interfaces</li>
            <li>Used for class interfaces and public APIs</li>
          </ul>
        </div>
      </section>

      <section id="private">
        <h2>Private Access Modifier</h2>
        <p>
          Private members are only accessible within the declaring class, providing the 
          highest level of encapsulation.
        </p>
        <CodeBlock initialCode={privateModifierExample} />
        <div className="warning-box">
          <h3>Important Considerations:</h3>
          <ul>
            <li>Only accessible within same class</li>
            <li>Provides maximum encapsulation</li>
            <li>Not inherited by subclasses</li>
            <li>Typically used for internal implementation details</li>
          </ul>
        </div>
      </section>

      <section id="protected">
        <h2>Protected Access Modifier</h2>
        <p>
          Protected members are accessible within the same package and by subclasses in 
          any package.
        </p>
        <CodeBlock initialCode={protectedModifierExample} />
        <div className="info-box">
          <h3>Usage Scenarios:</h3>
          <ul>
            <li>When subclasses need access</li>
            <li>For inheritance-related functionality</li>
            <li>Balancing encapsulation and inheritance</li>
            <li>Supporting framework extensibility</li>
          </ul>
        </div>
      </section>

      <section id="default">
        <h2>Default (Package-Private) Access</h2>
        <p>
          When no access modifier is specified, the member has package-private access, 
          making it accessible only within the same package.
        </p>
        <CodeBlock initialCode={defaultModifierExample} />
        <div className="feature-box">
          <h3>Characteristics:</h3>
          <ul>
            <li>Accessible only within same package</li>
            <li>No modifier keyword required</li>
            <li>Useful for package-level components</li>
            <li>Intermediate level of encapsulation</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Use Private by Default:</strong>
              Start with private access and increase visibility only when needed
            </li>
            <li>
              <strong>Encapsulation:</strong>
              Make fields private and provide public methods for access
            </li>
            <li>
              <strong>Interface Access:</strong>
              Keep interfaces public and implementation details private
            </li>
            <li>
              <strong>Package Organization:</strong>
              Group related classes in packages and use package-private access
            </li>
          </ul>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Over-exposure</h3>
            <p>Making members more accessible than necessary</p>
          </div>
          <div className="pitfall-card">
            <h3>Protected Misuse</h3>
            <p>Using protected when package-private would suffice</p>
          </div>
          <div className="pitfall-card">
            <h3>Public Fields</h3>
            <p>Exposing mutable fields as public</p>
          </div>
          <div className="pitfall-card">
            <h3>Default Access</h3>
            <p>Unintentionally using default access</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/static-members" className="prev-link">
          ← Previous: Static Members
        </Link>
        <Link to="/tutorials/java/inheritance" className="next-link">
          Next: Inheritance →
        </Link>
      </div>
    </div>
  );
}

export default AccessModifiers;
