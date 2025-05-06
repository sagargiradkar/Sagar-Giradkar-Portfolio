// src/components/Tutorials/Java/content/JavaStrings/JavaStrings.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaStrings.css';

function JavaStrings() {
    const stringCreationCode = `// String creation
String str1 = "Hello World";              // String literal
String str2 = new String("Hello World");  // String object

// String concatenation
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;  // Using + operator

// StringBuilder for efficient string manipulation
StringBuilder builder = new StringBuilder();
builder.append("Hello ")
       .append("World ")
       .append(2023);
String result = builder.toString();`;

    const stringMethodsCode = `String text = "Hello World";

// Common string methods
int length = text.length();           // 11
char first = text.charAt(0);          // 'H'
String upper = text.toUpperCase();    // "HELLO WORLD"
String lower = text.toLowerCase();    // "hello world"

// Substring operations
String sub = text.substring(0, 5);    // "Hello"
boolean starts = text.startsWith("He");// true
boolean ends = text.endsWith("ld");   // true

// Finding and replacing
int index = text.indexOf("World");    // 6
String newText = text.replace("World", "Java"); // "Hello Java"

// Trimming and splitting
String spacedText = "  Hello World  ";
String trimmed = spacedText.trim();   // "Hello World"
String[] words = text.split(" ");     // ["Hello", "World"]`;

    const stringComparisonCode = `String str1 = "Hello";
String str2 = "Hello";
String str3 = new String("Hello");

// Comparison using ==
boolean comparison1 = (str1 == str2);      // true (same reference)
boolean comparison2 = (str1 == str3);      // false (different reference)

// Comparison using equals()
boolean equals1 = str1.equals(str2);       // true
boolean equals2 = str1.equals(str3);       // true

// Case-insensitive comparison
boolean equalsIgnoreCase = 
    "hello".equalsIgnoreCase("HELLO");     // true

// Comparing string order
int compare = "apple".compareTo("banana");  // negative value`;

    const stringBuilderCode = `// StringBuilder usage
StringBuilder builder = new StringBuilder();

// Appending values
builder.append("Hello")
       .append(" ")
       .append("World");

// Inserting at position
builder.insert(5, "!");    // "Hello! World"

// Deleting characters
builder.delete(5, 6);      // "Hello World"

// Reversing string
builder.reverse();         // "dlroW olleH"

// Converting to string
String result = builder.toString();

// Capacity management
builder.setLength(0);      // Clear StringBuilder
builder.ensureCapacity(100); // Ensure minimum capacity`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Strings
            </div>

            <h1 className="content-title">Java Strings</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Overview</h2>
                <div className="strings-overview">
                    <p>
                        Strings in Java are immutable sequences of characters. Java provides robust support
                        for string manipulation through the String class and related utilities like
                        StringBuilder for more efficient string operations.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>String Creation and Concatenation</h2>
                <div className="string-creation">
                    <div className="creation-grid">
                        <div className="creation-card">
                            <h3>String Literals</h3>
                            <p>Direct string creation using quotes</p>
                        </div>
                        <div className="creation-card">
                            <h3>String Objects</h3>
                            <p>Creation using new keyword</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={stringCreationCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>String Methods</h2>
                <div className="methods-grid">
                    <div className="method-card">
                        <h3>Basic Operations</h3>
                        <p>Length, case conversion, character access</p>
                    </div>
                    <div className="method-card">
                        <h3>Searching</h3>
                        <p>Find substrings and characters</p>
                    </div>
                    <div className="method-card">
                        <h3>Manipulation</h3>
                        <p>Substring, replace, trim operations</p>
                    </div>
                    <div className="method-card">
                        <h3>Splitting</h3>
                        <p>Convert strings to arrays</p>
                    </div>
                </div>
                <CodeBlock initialCode={stringMethodsCode} />
            </section>

            <section className="content-section">
                <h2>String Comparison</h2>
                <div className="comparison-section">
                    <div className="comparison-info">
                        <div className="info-card">
                            <h3>Comparison Methods</h3>
                            <p>Different ways to compare strings and their implications</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={stringComparisonCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>StringBuilder</h2>
                <div className="builder-section">
                    <div className="builder-grid">
                        <div className="builder-card">
                            <h3>Mutable Strings</h3>
                            <p>Efficient string manipulation</p>
                        </div>
                        <div className="builder-card">
                            <h3>Performance</h3>
                            <p>Better memory usage for multiple operations</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={stringBuilderCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>String Pool Usage</h3>
                        <p>Understanding string internment and memory implications</p>
                    </div>
                    <div className="practice-card">
                        <h3>StringBuilder vs String</h3>
                        <p>Choose the right tool for string manipulation</p>
                    </div>
                    <div className="practice-card">
                        <h3>Proper Comparison</h3>
                        <p>Use equals() for string comparison instead of ==</p>
                    </div>
                    <div className="practice-card">
                        <h3>Memory Management</h3>
                        <p>Be mindful of string immutability and memory usage</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/arrays" className="prev-link">
                    ← Previous: Arrays
                </Link>
                <Link to="/tutorials/java/methods" className="next-link">
                    Next: Methods →
                </Link>
            </div>
        </div>
    );
}

export default JavaStrings;
