// TypeCasting.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './TypeCasting.css';

function TypeCasting() {
  const wideningExample = 
    `// Widening Type Casting (Automatic)
int myInt = 100;
long myLong = myInt;    // Automatic casting: int to long
float myFloat = myLong; // Automatic casting: long to float
double myDouble = myFloat; // Automatic casting: float to double

System.out.println("Int value: " + myInt);      // Output: 100
System.out.println("Long value: " + myLong);    // Output: 100
System.out.println("Float value: " + myFloat);  // Output: 100.0
System.out.println("Double value: " + myDouble); // Output: 100.0`;

  const narrowingExample = 
    `// Narrowing Type Casting (Manual)
double myDouble = 9.78d;
float myFloat = (float) myDouble;  // Manual casting: double to float
long myLong = (long) myFloat;      // Manual casting: float to long
int myInt = (int) myLong;          // Manual casting: long to int

System.out.println("Double value: " + myDouble); // Output: 9.78
System.out.println("Float value: " + myFloat);   // Output: 9.78
System.out.println("Long value: " + myLong);     // Output: 9
System.out.println("Int value: " + myInt);       // Output: 9`;

  const objectCastingExample = 
    `// Object Type Casting
class Animal { }
class Dog extends Animal {
    void bark() {
        System.out.println("Woof!");
    }
}

Animal animal = new Dog(); // Upcasting (implicit)
Dog dog = (Dog) animal;    // Downcasting (explicit)
dog.bark();               // Output: Woof!`;

  const typeCastingPrecisionExample = 
    `// Precision Loss Example
int largeNumber = 123456789;
float floatNumber = largeNumber; // Might lose precision
System.out.println("Original int: " + largeNumber);
System.out.println("After float conversion: " + floatNumber);
System.out.println("Back to int: " + (int)floatNumber);`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Type Casting
      </div>

      <h1 className="content-title">Type Casting in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="content-section">
        <p>
          Type casting in Java is the process of converting a value from one data type to another. 
          Java provides two types of casting: Widening (automatic) casting and Narrowing (manual) casting.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#type-casting-intro">Introduction to Type Casting</a></li>
          <li><a href="#widening-casting">Widening (Automatic) Casting</a></li>
          <li><a href="#narrowing-casting">Narrowing (Manual) Casting</a></li>
          <li><a href="#object-casting">Object Type Casting</a></li>
          <li><a href="#precision-issues">Precision Issues</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="type-casting-intro">
        <h2>Introduction to Type Casting</h2>
        <p>
          Type casting is necessary when you want to assign a value of one primitive data type to another type.
          In Java, type casting can be done in two ways:
        </p>
        <ul className="casting-types">
          <li>
            <strong>Widening Casting (Automatic)</strong> - Converting a smaller type to a larger type
            <code>byte → short → int → long → float → double</code>
          </li>
          <li>
            <strong>Narrowing Casting (Manual)</strong> - Converting a larger type to a smaller type
            <code>double → float → long → int → short → byte</code>
          </li>
        </ul>
      </section>

      <section id="widening-casting">
        <h2>Widening (Automatic) Casting</h2>
        <p>
          Widening casting is done automatically when passing a smaller size type to a larger size type.
          This is also known as implicit casting.
        </p>
        <CodeBlock initialCode={wideningExample} />
        <div className="note-box">
          <p>
            <strong>Note:</strong> Widening casting is safe as there is no risk of losing data.
          </p>
        </div>
      </section>

      <section id="narrowing-casting">
        <h2>Narrowing (Manual) Casting</h2>
        <p>
          Narrowing casting must be done manually by placing the type in parentheses in front of the value.
          This is also known as explicit casting.
        </p>
        <CodeBlock initialCode={narrowingExample} />
        <div className="warning-box">
          <p>
            <strong>Warning:</strong> Narrowing casting can lead to loss of data as you're forcing a larger 
            type into a smaller type container.
          </p>
        </div>
      </section>

      <section id="object-casting">
        <h2>Object Type Casting</h2>
        <p>
          In addition to primitive type casting, Java also supports object type casting, which is used with 
          object references. This is commonly used with inheritance relationships.
        </p>
        <CodeBlock initialCode={objectCastingExample} />
        <div className="casting-diagram">
          <h3>Object Casting Types:</h3>
          <ul>
            <li><strong>Upcasting:</strong> Converting a subclass reference to a superclass reference</li>
            <li><strong>Downcasting:</strong> Converting a superclass reference to a subclass reference</li>
          </ul>
        </div>
      </section>

      <section id="precision-issues">
        <h2>Precision Issues</h2>
        <p>
          When performing type casting, especially with floating-point numbers, you need to be aware of 
          potential precision loss.
        </p>
        <CodeBlock initialCode={typeCastingPrecisionExample} />
      </section>

      <section id="best-practices">
        <h2>Best Practices for Type Casting</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Check Before Casting:</strong> Always ensure that the casting operation is safe and 
              necessary.
            </li>
            <li>
              <strong>Use instanceof:</strong> When casting objects, use the instanceof operator to check 
              type compatibility before casting.
            </li>
            <li>
              <strong>Avoid Unnecessary Casting:</strong> Use appropriate data types from the start to 
              minimize the need for casting.
            </li>
            <li>
              <strong>Be Careful with Numeric Casting:</strong> Be aware of potential data loss when 
              casting between numeric types.
            </li>
          </ul>
        </div>
      </section>

      <section className="practice-examples">
        <h2>Practice Examples</h2>
        <div className="example-table">
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Int to Double</td>
                <td><code>double d = 5;</code></td>
                <td>5.0</td>
              </tr>
              <tr>
                <td>Double to Int</td>
                <td><code>int i = (int)5.7;</code></td>
                <td>5</td>
              </tr>
              <tr>
                <td>String to Int</td>
                <td><code>Integer.parseInt("123");</code></td>
                <td>123</td>
              </tr>
              <tr>
                <td>Int to String</td>
                <td><code>String.valueOf(123);</code></td>
                <td>"123"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/data-types" className="prev-link">
          ← Previous: Data Types
        </Link>
        <Link to="/tutorials/java/operators" className="next-link">
          Next: Operators →
        </Link>
      </div>
    </div>
  );
}

export default TypeCasting;
