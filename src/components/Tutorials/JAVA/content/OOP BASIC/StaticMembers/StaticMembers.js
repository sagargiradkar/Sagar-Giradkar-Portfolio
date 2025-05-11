// StaticMembers.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './StaticMembers.css';

function StaticMembers() {
  const staticVariableExample = 
    `public class Student {
    // Static variable shared by all instances
    private static int totalStudents = 0;
    
    // Instance variables
    private String name;
    private int id;
    
    public Student(String name) {
        this.name = name;
        // Increment total students when new object is created
        totalStudents++;
        this.id = totalStudents;
    }
    
    // Static method to get total students
    public static int getTotalStudents() {
        return totalStudents;
    }
}

// Usage
Student s1 = new Student("John");
Student s2 = new Student("Jane");
System.out.println("Total Students: " + Student.getTotalStudents()); // Output: 2`;

  const staticMethodExample = 
    `public class MathUtils {
    // Static method - can be called without creating object
    public static int square(int number) {
        return number * number;
    }
    
    public static double PI = 3.14159;
    
    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }
}

// Usage
int squared = MathUtils.square(5);
double area = MathUtils.calculateCircleArea(3.0);`;

  const staticBlockExample = 
    `public class DatabaseConfig {
    private static String url;
    private static String username;
    private static String password;
    
    // Static initialization block
    static {
        try {
            // Load configuration from file or environment
            url = "jdbc:mysql://localhost:3306/mydb";
            username = "admin";
            password = "secure123";
            // Initialize database connection
            System.out.println("Database configuration loaded");
        } catch (Exception e) {
            System.err.println("Failed to load database configuration");
        }
    }
    
    public static String getUrl() {
        return url;
    }
}`;

  const staticNestedClassExample = 
    `public class OuterClass {
    private static int outerStaticVar = 10;
    private int instanceVar = 20;
    
    // Static nested class
    public static class StaticNestedClass {
        public void display() {
            // Can access static members of outer class
            System.out.println(outerStaticVar);
            
            // Cannot access instance members
            // System.out.println(instanceVar); // Error!
        }
    }
}

// Usage
OuterClass.StaticNestedClass nestedObj = new OuterClass.StaticNestedClass();
nestedObj.display();`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Static Members
      </div>

      <h1 className="content-title">Static Members in Java</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="introduction">
        <p>
          Static members in Java belong to the class rather than specific instances. They include 
          static variables, methods, blocks, and nested classes. Static members are shared across 
          all instances of a class and can be accessed without creating an object.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#static-variables">Static Variables</a></li>
          <li><a href="#static-methods">Static Methods</a></li>
          <li><a href="#static-blocks">Static Blocks</a></li>
          <li><a href="#static-nested-classes">Static Nested Classes</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="static-variables">
        <h2>Static Variables</h2>
        <p>
          Static variables (also known as class variables) are shared by all instances of a class. 
          They are initialized only once when the class is loaded into memory.
        </p>
        <CodeBlock initialCode={staticVariableExample} />
        <div className="feature-box">
          <h3>Characteristics of Static Variables:</h3>
          <ul>
            <li>Shared among all instances</li>
            <li>Initialized when class loads</li>
            <li>Can be accessed without object creation</li>
            <li>Memory efficient</li>
          </ul>
        </div>
      </section>

      <section id="static-methods">
        <h2>Static Methods</h2>
        <p>
          Static methods belong to the class and can be called without creating an instance. 
          They can only directly access other static members.
        </p>
        <CodeBlock initialCode={staticMethodExample} />
        <div className="warning-box">
          <h3>Limitations of Static Methods:</h3>
          <ul>
            <li>Cannot access non-static members directly</li>
            <li>Cannot use 'this' keyword</li>
            <li>Cannot be overridden (though they can be hidden)</li>
          </ul>
        </div>
      </section>

      <section id="static-blocks">
        <h2>Static Blocks</h2>
        <p>
          Static blocks are used for static initialization. They run when the class is first 
          loaded, before any static methods are called and before any instances are created.
        </p>
        <CodeBlock initialCode={staticBlockExample} />
        <div className="info-box">
          <h3>Use Cases for Static Blocks:</h3>
          <ul>
            <li>Initialize static variables</li>
            <li>Load configuration settings</li>
            <li>Register drivers</li>
            <li>Perform one-time setup operations</li>
          </ul>
        </div>
      </section>

      <section id="static-nested-classes">
        <h2>Static Nested Classes</h2>
        <p>
          Static nested classes are static members of their enclosing class. They can be 
          instantiated without an instance of the enclosing class.
        </p>
        <CodeBlock initialCode={staticNestedClassExample} />
        <div className="comparison-box">
          <h3>Static vs Non-Static Nested Classes:</h3>
          <table>
            <thead>
              <tr>
                <th>Static Nested Class</th>
                <th>Inner Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Can only access static members of outer class</td>
                <td>Can access all members of outer class</td>
              </tr>
              <tr>
                <td>No reference to outer class instance</td>
                <td>Has reference to outer class instance</td>
              </tr>
              <tr>
                <td>More memory efficient</td>
                <td>Requires outer class instance</td>
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
              <strong>Use Static for Utility Methods:</strong>
              Methods that don't require instance state should be static
            </li>
            <li>
              <strong>Constants:</strong>
              Declare constants as static final variables
            </li>
            <li>
              <strong>Memory Management:</strong>
              Be cautious with static variables as they stay in memory
            </li>
            <li>
              <strong>Thread Safety:</strong>
              Consider thread safety when using static variables
            </li>
          </ul>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>Memory Leaks</h3>
            <p>Static variables stay in memory until class is unloaded</p>
          </div>
          <div className="pitfall-card">
            <h3>Thread Safety Issues</h3>
            <p>Static variables are shared across threads</p>
          </div>
          <div className="pitfall-card">
            <h3>Testing Difficulties</h3>
            <p>Static members can make testing more challenging</p>
          </div>
          <div className="pitfall-card">
            <h3>Overuse</h3>
            <p>Using static members where instance members would be more appropriate</p>
          </div>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/this-keyword" className="prev-link">
          ← Previous: This Keyword
        </Link>
        <Link to="/tutorials/java/inheritance" className="next-link">
          Next: Inheritance →
        </Link>
      </div>
    </div>
  );
}

export default StaticMembers;
