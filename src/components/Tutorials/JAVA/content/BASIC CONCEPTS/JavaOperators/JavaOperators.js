// src/components/Tutorials/Java/content/JavaOperators/JavaOperators.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaOperators.css';

function JavaOperators() {
    const arithmeticCode = `// Arithmetic Operators
int a = 10, b = 5;

int sum = a + b;      // Addition: 15
int diff = a - b;     // Subtraction: 5
int product = a * b;  // Multiplication: 50
int quotient = a / b; // Division: 2
int remainder = a % b;// Modulus: 0

// Increment and Decrement
int x = 5;
x++;    // Post-increment: x = 6
++x;    // Pre-increment: x = 7
x--;    // Post-decrement: x = 6
--x;    // Pre-decrement: x = 5`;

    const relationalCode = `// Relational Operators
int a = 10, b = 5;

boolean isEqual = a == b;        // false
boolean isNotEqual = a != b;     // true
boolean isGreater = a > b;       // true
boolean isLess = a < b;          // false
boolean isGreaterEqual = a >= b; // true
boolean isLessEqual = a <= b;    // false`;

    const logicalCode = `// Logical Operators
boolean x = true, y = false;

boolean andResult = x && y;  // false (AND)
boolean orResult = x || y;   // true (OR)
boolean notResult = !x;      // false (NOT)

// Short-circuit evaluation
boolean result = (x && y) || (!x && y);  // false`;

    const assignmentCode = `// Assignment Operators
int a = 10;

a += 5;   // a = a + 5  (15)
a -= 3;   // a = a - 3  (12)
a *= 2;   // a = a * 2  (24)
a /= 4;   // a = a / 4  (6)
a %= 4;   // a = a % 4  (2)

// Chained assignment
int x, y, z;
x = y = z = 100;  // All variables get value 100`;

    const bitwiseCode = `// Bitwise Operators
int a = 5;  // Binary: 0101
int b = 3;  // Binary: 0011

int andOp = a & b;   // Bitwise AND: 0001 (1)
int orOp = a | b;    // Bitwise OR: 0111 (7)
int xorOp = a ^ b;   // Bitwise XOR: 0110 (6)
int notOp = ~a;      // Bitwise NOT: 1010 (-6)
int leftShift = a << 1;   // Left shift: 1010 (10)
int rightShift = a >> 1;  // Right shift: 0010 (2)`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Operators
            </div>

            <h1 className="content-title">Java Operators</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Overview</h2>
                <div className="operator-overview">
                    <p>
                        Java operators are special symbols that perform operations on variables and values.
                        They are used to perform arithmetic, assign values, compare values, and perform logical operations.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>Arithmetic Operators</h2>
                <div className="operator-section">
                    <div className="operator-grid">
                        <div className="operator-card">
                            <span className="operator-symbol">+</span>
                            <h3>Addition</h3>
                            <p>Adds two values</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">-</span>
                            <h3>Subtraction</h3>
                            <p>Subtracts right from left</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">*</span>
                            <h3>Multiplication</h3>
                            <p>Multiplies two values</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">/</span>
                            <h3>Division</h3>
                            <p>Divides left by right</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">%</span>
                            <h3>Modulus</h3>
                            <p>Returns division remainder</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={arithmeticCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Relational Operators</h2>
                <div className="operator-section">
                    <div className="operator-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Operator</th>
                                    <th>Description</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>==</td>
                                    <td>Equal to</td>
                                    <td>a == b</td>
                                </tr>
                                <tr>
                                    <td>!=</td>
                                    <td>Not equal to</td>
                                    <td>a != b</td>
                                </tr>
                                <tr>
                                    <td>&gt;</td>
                                    <td>Greater than</td>
                                    <td>a &gt; b</td>
                                </tr>
                                <tr>
                                    <td>&lt;</td>
                                    <td>Less than</td>
                                    <td>a &lt; b</td>
                                </tr>
                                <tr>
                                    <td>&gt;=</td>
                                    <td>Greater than or equal to</td>
                                    <td>a &gt;= b</td>
                                </tr>
                                <tr>
                                    <td>&lt;=</td>
                                    <td>Less than or equal to</td>
                                    <td>a &lt;= b</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <CodeBlock initialCode={relationalCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Logical Operators</h2>
                <div className="operator-section">
                    <div className="operator-grid">
                        <div className="operator-card">
                            <span className="operator-symbol">&&</span>
                            <h3>Logical AND</h3>
                            <p>True if both operands are true</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">||</span>
                            <h3>Logical OR</h3>
                            <p>True if either operand is true</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">!</span>
                            <h3>Logical NOT</h3>
                            <p>Inverts the operand's value</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={logicalCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Assignment Operators</h2>
                <div className="operator-section">
                    <div className="operator-grid">
                        <div className="operator-card">
                            <span className="operator-symbol">=</span>
                            <h3>Simple Assignment</h3>
                            <p>Assigns right to left</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">+=</span>
                            <h3>Add AND</h3>
                            <p>Adds and assigns</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">-=</span>
                            <h3>Subtract AND</h3>
                            <p>Subtracts and assigns</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">*=</span>
                            <h3>Multiply AND</h3>
                            <p>Multiplies and assigns</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">/=</span>
                            <h3>Divide AND</h3>
                            <p>Divides and assigns</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={assignmentCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Bitwise Operators</h2>
                <div className="operator-section">
                    <div className="operator-grid">
                        <div className="operator-card">
                            <span className="operator-symbol">&</span>
                            <h3>Bitwise AND</h3>
                            <p>Binary AND operation</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">|</span>
                            <h3>Bitwise OR</h3>
                            <p>Binary OR operation</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">^</span>
                            <h3>Bitwise XOR</h3>
                            <p>Binary XOR operation</p>
                        </div>
                        <div className="operator-card">
                            <span className="operator-symbol">~</span>
                            <h3>Bitwise NOT</h3>
                            <p>Binary complement</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={bitwiseCode} />
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/datatypes" className="prev-link">
                    ← Previous: Data Types
                </Link>
                <Link to="/tutorials/java/controlflow" className="next-link">
                    Next: Control Flow →
                </Link>
            </div>
        </div>
    );
}

export default JavaOperators;
