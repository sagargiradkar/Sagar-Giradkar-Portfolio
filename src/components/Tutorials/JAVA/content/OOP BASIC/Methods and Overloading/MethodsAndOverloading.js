// MethodsAndOverloading.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './MethodsAndOverloading.css';

function MethodsAndOverloading() {
  const basicMethodExample = 
    `public class Calculator {
    // Method with return type and parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method with no return type (void)
    public void displayMessage() {
        System.out.println("Hello from Calculator!");
    }
    
    // Method with return type but no parameters
    public double getPi() {
        return 3.14159;
    }
}

// Using the methods
Calculator calc = new Calculator();
int sum = calc.add(5, 3);        // returns 8
calc.displayMessage();           // prints message
double pi = calc.getPi();        // returns 3.14159`;

  const methodOverloadingExample = 
    `public class Calculator {
    // Method with two int parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded method with three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded method with double parameters
    public double add(double a, double b) {
        return a + b;
    }
    
    // Overloaded method with different parameter types
    public String add(String a, String b) {
        return a + b;
    }
}

// Using overloaded methods
Calculator calc = new Calculator();
int sum1 = calc.add(5, 3);           // calls first method
int sum2 = calc.add(5, 3, 2);        // calls second method
double sum3 = calc.add(5.5, 3.2);    // calls third method
String text = calc.add("Hello", "World");  // calls fourth method`;

  const staticMethodExample = 
    `public class MathUtils {
    // Static method
    public static int square(int number) {
        return number * number;
    }
    
    // Instance method
    public int cube(int number) {
        return number * number * number;
    }
}

// Using static vs instance methods
int squared = MathUtils.square(5);    // Static method called directly
MathUtils utils = new MathUtils();
int cubed = utils.cube(5);           // Instance method needs object`;

  const recursiveMethodExample = 
    `public class Factorial {
    public int calculateFactorial(int n) {
        // Base case
        if (n == 0 || n == 1) {
            return 1;
        }
        // Recursive case
        return n * calculateFactorial(n - 1);
    }
}

// Using recursive method
Factorial fact = new Factorial();
int result = fact.calculateFactorial(5);  // Returns 120`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Methods and Overloading
      </div>

      <h1 className="content-title">Methods and Method Overloading in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Methods are blocks of code that perform specific tasks. Method overloading allows 
          multiple methods to have the same name but different parameters. This enables more 
          flexible and readable code.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#basic-methods">Basic Methods</a></li>
          <li><a href="#method-overloading">Method Overloading</a></li>
          <li><a href="#static-methods">Static vs Instance Methods</a></li>
          <li><a href="#recursive-methods">Recursive Methods</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="basic-methods">
        <h2>Basic Methods</h2>
        <p>
          Methods are fundamental building blocks in Java that encapsulate a sequence of 
          instructions. They can accept parameters and return values.
        </p>
        <CodeBlock initialCode={basicMethodExample} />
        <div className="method-components">
          <h3>Components of a Method:</h3>
          <ul>
            <li><strong>Access Modifier:</strong> Controls method visibility (public, private, etc.)</li>
            <li><strong>Return Type:</strong> Specifies the type of value returned</li>
            <li><strong>Method Name:</strong> Identifier for the method</li>
            <li><strong>Parameters:</strong> Input values (optional)</li>
            <li><strong>Method Body:</strong> Actual implementation</li>
          </ul>
        </div>
      </section>

      <section id="method-overloading">
        <h2>Method Overloading</h2>
        <p>
          Method overloading allows you to define multiple methods with the same name but 
          different parameter lists. The compiler determines which method to call based on 
          the arguments provided.
        </p>
        <CodeBlock initialCode={methodOverloadingExample} />
        <div className="overloading-rules">
          <h3>Rules for Method Overloading:</h3>
          <ul>
            <li>Methods must have different parameter lists</li>
            <li>Return type alone is not sufficient for overloading</li>
            <li>Parameter names alone do not constitute overloading</li>
            <li>Can have different return types if parameter lists differ</li>
          </ul>
        </div>
      </section>

      <section id="static-methods">
        <h2>Static vs Instance Methods</h2>
        <p>
          Static methods belong to the class itself, while instance methods belong to objects 
          of the class. Understanding this difference is crucial for proper method design.
        </p>
        <CodeBlock initialCode={staticMethodExample} />
        <div className="comparison-table">
          <h3>Static vs Instance Methods:</h3>
          <table>
            <thead>
              <tr>
                <th>Static Methods</th>
                <th>Instance Methods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Belong to class</td>
                <td>Belong to object</td>
              </tr>
              <tr>
                <td>Called using class name</td>
                <td>Called using object reference</td>
              </tr>
              <tr>
                <td>Cannot access instance members</td>
                <td>Can access all members</td>
              </tr>
              <tr>
                <td>Memory efficient</td>
                <td>Requires object creation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="recursive-methods">
        <h2>Recursive Methods</h2>
        <p>
          Recursive methods are methods that call themselves. They're useful for solving 
          problems that can be broken down into smaller, similar sub-problems.
        </p>
        <CodeBlock initialCode={recursiveMethodExample} />
        <div className="recursion-notes">
          <h3>Key Points about Recursion:</h3>
          <ul>
            <li>Must have a base case to prevent infinite recursion</li>
            <li>Each recursive call should work towards the base case</li>
            <li>Can be memory intensive for deep recursion</li>
            <li>Often provides elegant solutions to complex problems</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Naming Conventions:</strong>
              Use verb-noun combinations that clearly describe the method's purpose
            </li>
            <li>
              <strong>Single Responsibility:</strong>
              Each method should perform one specific task
            </li>
            <li>
              <strong>Parameter Count:</strong>
              Limit the number of parameters (typically no more than 3-4)
            </li>
            <li>
              <strong>Method Length:</strong>
              Keep methods relatively short and focused
            </li>
            <li>
              <strong>Documentation:</strong>
              Add clear JavaDoc comments for public methods
            </li>
          </ul>
        </div>
      </section>

      <section className="common-mistakes">
        <h2>Common Mistakes to Avoid</h2>
        <div className="mistakes-grid">
          <div className="mistake-card">
            <h3>Overloading Confusion</h3>
            <p>Don't create overloaded methods that can cause ambiguous calls</p>
          </div>
          <div className="mistake-card">
            <h3>Poor Method Names</h3>
            <p>Avoid generic names that don't clearly indicate purpose</p>
          </div>
          <div className="mistake-card">
            <h3>Side Effects</h3>
            <p>Methods should have predictable behavior without unexpected side effects</p>
          </div>
          <div className="mistake-card">
            <h3>Return Type Consistency</h3>
            <p>Maintain consistent return types in related methods</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/constructors" className="prev-link">
          ← Previous: Constructors
        </Link>
        <Link to="/tutorials/java/inheritance" className="next-link">
          Next: Inheritance →
        </Link>
      </div>
    </div>
  );
}

export default MethodsAndOverloading;
