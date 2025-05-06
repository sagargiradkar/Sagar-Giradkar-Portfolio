// src/components/Tutorials/Java/content/JavaBasicSyntax.js
import React from "react";
import { Link } from "react-router-dom";
import "./JavaBasicSyntax";

function JavaBasicSyntax() {
    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorials">Tutorials</Link> › <Link to="/tutorials/java">Java</Link> › Basic Syntax
            </div>

            <h1 className="content-title">Java Basic Syntax</h1>

            <section className="content-section">
                <h2>Understanding Java Syntax</h2>
                <p>
                    Java syntax is the set of rules that define how a Java program is written and interpreted.
                    Understanding these rules is essential for writing Java code that compiles and runs correctly.
                </p>
                <p>
                    Let's explore the fundamental elements of Java syntax that form the building blocks of any Java program.
                </p>
            </section>

            <section className="content-section">
                <h2>Your First Java Program</h2>
                <p>
                    Let's start with the traditional "Hello, World!" program to understand basic Java structure:
                </p>
                <pre>
                    <code>
                        {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
                    </code>
                </pre>
                <p>Let's break down this program:</p>
                <ul>
                    <li><strong>public class HelloWorld</strong> - Declares a class named HelloWorld. In Java, everything is defined within classes.</li>
                    <li><strong>public static void main(String[] args)</strong> - The main method that serves as the entry point for the program.</li>
                    <li><strong>System.out.println("Hello, World!")</strong> - Prints the text "Hello, World!" to the console.</li>
                </ul>
            </section>

            <section className="content-section">
                <h2>Java Case Sensitivity</h2>
                <p>
                    Java is case-sensitive, which means <code>HelloWorld</code> and <code>helloworld</code> are considered
                    different identifiers. This applies to all identifiers in Java, including class names, method names, and variables.
                </p>
                <div className="note-box">
                    <strong>Important:</strong> Class names in Java should start with an uppercase letter by convention, while
                    method and variable names should start with a lowercase letter.
                </div>
            </section>

            <section className="content-section">
                <h2>Java Identifiers</h2>
                <p>
                    Identifiers are names given to classes, methods, variables, etc. Here are the rules for valid Java identifiers:
                </p>
                <ul>
                    <li>Must begin with a letter (A-Z or a-z), currency character ($), or underscore (_).</li>
                    <li>After the first character, can include digits (0-9).</li>
                    <li>Cannot use reserved keywords as identifiers.</li>
                    <li>Cannot include spaces or special characters like !, @, #, etc.</li>
                </ul>
                <p>Examples of valid identifiers:</p>
                <pre>
                    <code>
                        {`count
$value
_name
firstName
student2
MAX_SIZE`}
                    </code>
                </pre>
            </section>

            <section className="content-section">
                <h2>Java Keywords</h2>
                <p>
                    Keywords are reserved words that have special meaning in Java. You cannot use these words as identifiers.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="5">Java Keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>abstract</td>
                            <td>assert</td>
                            <td>boolean</td>
                            <td>break</td>
                            <td>byte</td>
                        </tr>
                        <tr>
                            <td>case</td>
                            <td>catch</td>
                            <td>char</td>
                            <td>class</td>
                            <td>const</td>
                        </tr>
                        <tr>
                            <td>continue</td>
                            <td>default</td>
                            <td>do</td>
                            <td>double</td>
                            <td>else</td>
                        </tr>
                        <tr>
                            <td>enum</td>
                            <td>extends</td>
                            <td>final</td>
                            <td>finally</td>
                            <td>float</td>
                        </tr>
                        <tr>
                            <td>for</td>
                            <td>if</td>
                            <td>implements</td>
                            <td>import</td>
                            <td>instanceof</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>interface</td>
                            <td>long</td>
                            <td>native</td>
                            <td>new</td>
                        </tr>
                        <tr>
                            <td>package</td>
                            <td>private</td>
                            <td>protected</td>
                            <td>public</td>
                            <td>return</td>
                        </tr>
                        <tr>
                            <td>short</td>
                            <td>static</td>
                            <td>strictfp</td>
                            <td>super</td>
                            <td>switch</td>
                        </tr>
                        <tr>
                            <td>synchronized</td>
                            <td>this</td>
                            <td>throw</td>
                            <td>throws</td>
                            <td>transient</td>
                        </tr>
                        <tr>
                            <td>try</td>
                            <td>void</td>
                            <td>volatile</td>
                            <td>while</td>
                            <td>var</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="content-section">
                <h2>Java Statements</h2>
                <p>
                    A statement is a complete unit of execution in Java that performs an action.
                    Each statement in Java should end with a semicolon (;).
                </p>
                <pre>
                    <code>
                        {`int age = 25;            // Variable declaration statement
System.out.println(age);  // Method invocation statement
age++;                    // Increment statement`}
                    </code>
                </pre>
            </section>

            <section className="content-section">
                <h2>Java Blocks</h2>
                <p>
                    A block in Java is a group of statements enclosed within curly braces { }. Blocks define the scope of variables
                    and are used in classes, methods, and control flow statements.
                </p>
                <pre>
                    <code>
                        {`{
    int x = 10;  // Variable x is only accessible within this block
    System.out.println(x);
}
// x is not accessible here`}
                    </code>
                </pre>
            </section>

            <section className="content-section">
                <h2>Java Comments</h2>
                <p>
                    Comments are non-executable statements that make your code more readable. Java supports three types of comments:
                </p>
                <pre>
                    <code>
                        {`// This is a single-line comment

/* This is a 
   multi-line comment */

/**
 * This is a documentation comment (Javadoc)
 * @author Harry
 * @version 1.0
 */`}
                    </code>
                </pre>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/java-execution" className="prev-link">
                    ← Previous: Java Execution
                </Link>
                <Link to="/tutorials/java/java-variables" className="next-link">
                    Next: Java Variables →
                </Link>
            </div>
        </div>
    );
}

export default JavaBasicSyntax;