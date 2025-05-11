// JavaInheritance.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaInheritance.css';

function JavaInheritance() {
  const basicInheritanceExample = 
    `// Parent/Base class
public class Animal {
    protected String name;
    protected String species;
    
    public Animal(String name, String species) {
        this.name = name;
        this.species = species;
    }
    
    public void makeSound() {
        System.out.println("Some generic sound");
    }
}

// Child/Derived class
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name, "Canis lupus");  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
}`;

  const multiLevelInheritanceExample = 
    `public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println("Eating...");
    }
}

public class Mammal extends Animal {
    public void walk() {
        System.out.println("Walking...");
    }
}

public class Dog extends Mammal {
    public void bark() {
        System.out.println("Barking...");
    }
    
    // Can access methods from both parent classes
    public void doActions() {
        eat();    // From Animal
        walk();   // From Mammal
        bark();   // From Dog
    }
}`;

  const superKeywordExample = 
    `public class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

public class Car extends Vehicle {
    private int numDoors;
    
    public Car(String brand, int year, int numDoors) {
        super(brand, year);  // Call parent constructor
        this.numDoors = numDoors;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Number of doors: " + numDoors);
    }
}`;

  const finalKeywordExample = 
    `public final class FinalClass {
    // This class cannot be inherited
}

public class RegularClass {
    public final void finalMethod() {
        // This method cannot be overridden
    }
    
    public final int CONSTANT = 100;  // This value cannot be changed
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Inheritance
      </div>

      <h1 className="content-title">Inheritance in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Inheritance is a fundamental concept in Object-Oriented Programming that allows a 
          class to inherit properties and methods from another class. It promotes code 
          reusability and establishes a relationship between parent and child classes.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#basic-inheritance">Basic Inheritance</a></li>
          <li><a href="#types-inheritance">Types of Inheritance</a></li>
          <li><a href="#super-keyword">The 'super' Keyword</a></li>
          <li><a href="#method-overriding">Method Overriding</a></li>
          <li><a href="#final-keyword">The 'final' Keyword</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="basic-inheritance">
        <h2>Basic Inheritance</h2>
        <p>
          Basic inheritance involves creating a new class that is based on an existing class. 
          The new class inherits fields and methods from the existing class.
        </p>
        <CodeBlock initialCode={basicInheritanceExample} />
        <div className="feature-box">
          <h3>Key Concepts:</h3>
          <ul>
            <li>Parent class (superclass) provides common functionality</li>
            <li>Child class (subclass) inherits and can add specific features</li>
            <li>Use 'extends' keyword to establish inheritance</li>
            <li>Supports method overriding for customized behavior</li>
          </ul>
        </div>
      </section>

      <section id="types-inheritance">
        <h2>Types of Inheritance</h2>
        <p>
          Java supports different types of inheritance patterns to establish relationships 
          between classes.
        </p>
        <CodeBlock initialCode={multiLevelInheritanceExample} />
        <div className="inheritance-types">
          <h3>Supported Types:</h3>
          <div className="type-grid">
            <div className="type-card">
              <h4>Single Inheritance</h4>
              <p>Class inherits from one class</p>
            </div>
            <div className="type-card">
              <h4>Multilevel Inheritance</h4>
              <p>Class inherits from a child class</p>
            </div>
            <div className="type-card">
              <h4>Hierarchical Inheritance</h4>
              <p>Multiple classes inherit from one class</p>
            </div>
            <div className="type-card">
              <h4>Interface Inheritance</h4>
              <p>Class can implement multiple interfaces</p>
            </div>
          </div>
        </div>
      </section>

      <section id="super-keyword">
        <h2>The 'super' Keyword</h2>
        <p>
          The 'super' keyword is used to refer to the parent class members including 
          constructors, methods, and fields.
        </p>
        <CodeBlock initialCode={superKeywordExample} />
        <div className="info-box">
          <h3>Uses of 'super':</h3>
          <ul>
            <li>Call parent class constructor</li>
            <li>Access parent class methods</li>
            <li>Access parent class fields</li>
            <li>Must be first statement in constructor</li>
          </ul>
        </div>
      </section>

      <section id="method-overriding">
        <h2>Method Overriding</h2>
        <div className="warning-box">
          <h3>Rules for Method Overriding:</h3>
          <ul>
            <li>Method must have same name and parameters</li>
            <li>Return type must be same or covariant</li>
            <li>Access level can't be more restrictive</li>
            <li>Can't override static or final methods</li>
          </ul>
        </div>
      </section>

      <section id="final-keyword">
        <h2>The 'final' Keyword</h2>
        <p>
          The 'final' keyword can be used to prevent inheritance and method overriding.
        </p>
        <CodeBlock initialCode={finalKeywordExample} />
        <div className="feature-box">
          <h3>Uses of 'final':</h3>
          <ul>
            <li>Prevent class inheritance</li>
            <li>Prevent method overriding</li>
            <li>Create constants</li>
            <li>Improve performance</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>IS-A Relationship:</strong>
              Use inheritance only when there's a true IS-A relationship
            </li>
            <li>
              <strong>Code Reusability:</strong>
              Keep common code in parent classes
            </li>
            <li>
              <strong>Method Overriding:</strong>
              Use @Override annotation when overriding methods
            </li>
            <li>
              <strong>Constructor Chaining:</strong>
              Properly initialize parent class through constructors
            </li>
          </ul>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Deep Inheritance</h3>
            <p>Avoid deep inheritance hierarchies</p>
          </div>
          <div className="pitfall-card">
            <h3>Breaking Encapsulation</h3>
            <p>Don't expose internal details through inheritance</p>
          </div>
          <div className="pitfall-card">
            <h3>Incorrect Override</h3>
            <p>Ensure proper method signature when overriding</p>
          </div>
          <div className="pitfall-card">
            <h3>Fragile Base Class</h3>
            <p>Changes in base class can break derived classes</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/access-modifiers" className="prev-link">
          ← Previous: Access Modifiers
        </Link>
        <Link to="/tutorials/java/interfaces" className="next-link">
          Next: Interfaces →
        </Link>
      </div>
    </div>
  );
}

export default JavaInheritance;
