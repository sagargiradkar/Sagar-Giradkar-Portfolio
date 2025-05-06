// src/components/Tutorials/Java/content/BASIC CONCEPTS/JavaDataTypes/JavaDataTypes.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaDataTypes.css';

function JavaDataTypes() {
    const primitiveTypesCode = `// Integer Types
byte byteNum = 127;          // -128 to 127
short shortNum = 32767;      // -32,768 to 32,767
int intNum = 2147483647;     // -2^31 to 2^31-1
long longNum = 9223372036854775807L;  // -2^63 to 2^63-1

// Floating-Point Types
float floatNum = 3.14f;      // 32-bit precision
double doubleNum = 3.14159;  // 64-bit precision

// Character Type
char letter = 'A';           // 16-bit Unicode character

// Boolean Type
boolean isTrue = true;       // true or false`;

    const referenceTypesCode = `// String
String name = "John Doe";

// Array
int[] numbers = {1, 2, 3, 4, 5};

// Class
class Person {
    String name;
    int age;
}
Person person = new Person();

// Interface
interface Drawable {
    void draw();
}`;

    const typeConversionCode = `// Implicit Conversion (Widening)
int smallNum = 100;
long bigNum = smallNum;  // Automatically converts int to long

// Explicit Conversion (Narrowing)
double pi = 3.14159;
int piInt = (int) pi;    // Explicitly converts double to int

// String Conversion
String strNum = "123";
int num = Integer.parseInt(strNum);  // String to int
String str = Integer.toString(num);  // int to String`;

    const arrayExampleCode = `// One-dimensional array
int[] numbers = new int[5];
numbers[0] = 1;
numbers[1] = 2;

// Array initialization
String[] fruits = {"Apple", "Banana", "Orange"};

// Multi-dimensional array
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Data Types
            </div>

            <h1 className="content-title">Java Data Types</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Overview</h2>
                <div className="type-overview">
                    <div className="type-category">
                        <h3>Primitive Types</h3>
                        <p>Basic data types built into the language</p>
                    </div>
                    <div className="type-category">
                        <h3>Reference Types</h3>
                        <p>Complex types that reference objects</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Primitive Data Types</h2>
                <div className="primitive-types">
                    <div className="type-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Range</th>
                                    <th>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>byte</td>
                                    <td>8 bits</td>
                                    <td>-128 to 127</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>short</td>
                                    <td>16 bits</td>
                                    <td>-32,768 to 32,767</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>int</td>
                                    <td>32 bits</td>
                                    <td>-2^31 to 2^31-1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>long</td>
                                    <td>64 bits</td>
                                    <td>-2^63 to 2^63-1</td>
                                    <td>0L</td>
                                </tr>
                                <tr>
                                    <td>float</td>
                                    <td>32 bits</td>
                                    <td>±3.4e−038 to ±3.4e+038</td>
                                    <td>0.0f</td>
                                </tr>
                                <tr>
                                    <td>double</td>
                                    <td>64 bits</td>
                                    <td>±1.7e−308 to ±1.7e+308</td>
                                    <td>0.0d</td>
                                </tr>
                                <tr>
                                    <td>char</td>
                                    <td>16 bits</td>
                                    <td>0 to 65,535</td>
                                    <td>'\u0000'</td>
                                </tr>
                                <tr>
                                    <td>boolean</td>
                                    <td>1 bit</td>
                                    <td>true or false</td>
                                    <td>false</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CodeBlock initialCode={primitiveTypesCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Reference Data Types</h2>
                <div className="reference-types">
                    <div className="type-grid">
                        <div className="type-card">
                            <h3>String</h3>
                            <p>Sequence of characters</p>
                        </div>
                        <div className="type-card">
                            <h3>Arrays</h3>
                            <p>Collection of similar type elements</p>
                        </div>
                        <div className="type-card">
                            <h3>Classes</h3>
                            <p>User-defined blueprint for objects</p>
                        </div>
                        <div className="type-card">
                            <h3>Interfaces</h3>
                            <p>Abstract type that defines behavior</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={referenceTypesCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Type Conversion</h2>
                <div className="type-conversion">
                    <div className="conversion-types">
                        <div className="conversion-card">
                            <h3>Implicit Conversion</h3>
                            <p>Automatic type conversion without data loss</p>
                        </div>
                        <div className="conversion-card">
                            <h3>Explicit Conversion</h3>
                            <p>Manual type casting with potential data loss</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={typeConversionCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Arrays</h2>
                <div className="arrays-section">
                    <div className="array-types">
                        <div className="array-card">
                            <h3>Single Dimension</h3>
                            <p>Linear collection of elements</p>
                        </div>
                        <div className="array-card">
                            <h3>Multi Dimension</h3>
                            <p>Array of arrays (matrix)</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={arrayExampleCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>Choose Appropriate Types</h3>
                        <p>Use the smallest data type that can safely handle your data</p>
                    </div>
                    <div className="practice-card">
                        <h3>Consider Memory</h3>
                        <p>Be mindful of memory usage when working with arrays and objects</p>
                    </div>
                    <div className="practice-card">
                        <h3>Handle Conversions Carefully</h3>
                        <p>Be aware of potential data loss during type conversion</p>
                    </div>
                    <div className="practice-card">
                        <h3>Use Constants</h3>
                        <p>Use final keyword for values that shouldn't change</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/variables" className="prev-link">
                    ← Previous: Variables
                </Link>
                <Link to="/tutorials/java/operators" className="next-link">
                    Next: Operators →
                </Link>
            </div>
        </div>
    );
}

export default JavaDataTypes;
