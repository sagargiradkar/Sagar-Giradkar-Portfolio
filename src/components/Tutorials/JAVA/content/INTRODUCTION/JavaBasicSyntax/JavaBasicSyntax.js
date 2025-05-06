// src/components/Tutorials/Java/content/JavaBasicSyntax/JavaBasicSyntax.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaBasicSyntax.css';

function JavaBasicSyntax() {
    const basicStructureCode = `public class HelloWorld {
    public static void main(String[] args) {
        // Your code goes here
        System.out.println("Hello, World!");
    }
}`;

    const identifiersCode = `// Valid identifiers
int age;
String firstName;
double _value;
boolean isActive;

// Invalid identifiers
int 123number;     // Cannot start with number
String my name;    // Cannot contain space
double $price;     // $ not recommended
boolean class;     // Cannot use reserved keyword`;

    const dataTypesCode = `// Primitive Data Types
byte byteNum = 127;
short shortNum = 32767;
int intNum = 2147483647;
long longNum = 9223372036854775807L;
float floatNum = 3.14f;
double doubleNum = 3.14159;
char letter = 'A';
boolean isTrue = true;

// Reference Data Types
String text = "Hello, World!";
int[] numbers = {1, 2, 3, 4, 5};
ArrayList<String> list = new ArrayList<>();`;

    const variablesCode = `// Variable declaration and initialization
int number = 42;
String name = "John";

// Constants
final double PI = 3.14159;
final String COMPANY_NAME = "TechCorp";

// Type inference (Java 10+)
var count = 10;  // Type is inferred as int
var message = "Hello";  // Type is inferred as String`;

    const commentsCode = `// Single line comment

/* Multi-line comment
   This comment can span
   multiple lines */

/** Documentation comment (Javadoc)
 * @author Your Name
 * @version 1.0
 * @since 2025-05-05
 */`;

    const classStructureCode = `public class Person {
    // Instance variables (fields)
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Methods
    public void sayHello() {
        System.out.println("Hello, my name is " + name);
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Basic Syntax
            </div>

            <h1 className="content-title">Java Basic Syntax</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Basic Program Structure</h2>
                <div className="syntax-explanation">
                    <p>Every Java program starts with a class definition. Here's the basic structure:</p>
                    <CodeBlock initialCode={basicStructureCode} />
                    
                    <div className="key-components">
                        <h3>Key Components:</h3>
                        <ul>
                            <li><code>public class</code> - Class declaration</li>
                            <li><code>main method</code> - Program entry point</li>
                            <li><code>System.out.println()</code> - Output statement</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Identifiers</h2>
                <div className="identifier-rules">
                    <h3>Rules for Identifiers:</h3>
                    <ul>
                        <li>Must start with a letter, underscore, or dollar sign</li>
                        <li>Can contain letters, digits, underscores</li>
                        <li>Case-sensitive</li>
                        <li>No reserved keywords allowed</li>
                    </ul>
                    <CodeBlock initialCode={identifiersCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Data Types</h2>
                <div className="data-types">
                    <div className="data-types-grid">
                        <div className="type-category primitive">
                            <h3>Primitive Types</h3>
                            <ul>
                                <li>byte (8 bits)</li>
                                <li>short (16 bits)</li>
                                <li>int (32 bits)</li>
                                <li>long (64 bits)</li>
                                <li>float (32 bits)</li>
                                <li>double (64 bits)</li>
                                <li>char (16 bits)</li>
                                <li>boolean</li>
                            </ul>
                        </div>
                        <div className="type-category reference">
                            <h3>Reference Types</h3>
                            <ul>
                                <li>Classes</li>
                                <li>Interfaces</li>
                                <li>Arrays</li>
                                <li>Enums</li>
                            </ul>
                        </div>
                    </div>
                    <CodeBlock initialCode={dataTypesCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Variables</h2>
                <div className="variables">
                    <div className="variable-types">
                        <h3>Types of Variables:</h3>
                        <ul>
                            <li>Local Variables</li>
                            <li>Instance Variables (Fields)</li>
                            <li>Class Variables (Static Fields)</li>
                            <li>Constants (Final Variables)</li>
                        </ul>
                    </div>
                    <CodeBlock initialCode={variablesCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Comments</h2>
                <div className="comments">
                    <p>Java supports three types of comments:</p>
                    <CodeBlock initialCode={commentsCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Class Structure</h2>
                <div className="class-structure">
                    <p>A typical Java class contains:</p>
                    <ul>
                        <li>Fields (attributes)</li>
                        <li>Constructors</li>
                        <li>Methods</li>
                        <li>Nested classes and interfaces (optional)</li>
                    </ul>
                    <CodeBlock initialCode={classStructureCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Naming Conventions</h2>
                <div className="naming-conventions">
                    <div className="convention-card">
                        <h3>Classes</h3>
                        <p>Start with uppercase, use CamelCase</p>
                        <code>public class StudentRecord { }</code>
                    </div>
                    <div className="convention-card">
                        <h3>Methods</h3>
                        <p>Start with lowercase, use camelCase</p>
                        <code>public void calculateTotal() { }</code>
                    </div>
                    <div className="convention-card">
                        <h3>Variables</h3>
                        <p>Start with lowercase, use camelCase</p>
                        <code>int studentAge;</code>
                    </div>
                    <div className="convention-card">
                        <h3>Constants</h3>
                        <p>All uppercase, words separated by underscore</p>
                        <code>final int MAX_VALUE = 100;</code>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/execution" className="prev-link">
                    ← Previous: Java Execution
                </Link>
                <Link to="/tutorials/java/variables" className="next-link">
                    Next: Java Variables →
                </Link>
            </div>
        </div>
    );
}

export default JavaBasicSyntax;
