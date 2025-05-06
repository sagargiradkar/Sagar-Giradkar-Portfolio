// src/components/Tutorials/Java/content/JavaArrays/JavaArrays.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaArrays.css';

function JavaArrays() {
    const declarationCode = `// Array declaration and initialization
int[] numbers = new int[5];           // Declaration with size
int[] initializedArray = {1, 2, 3, 4, 5};  // Declaration with values

// Alternative syntax
int numbers2[] = new int[5];          // C/C++ style declaration
int[] numbers3 = new int[] {1, 2, 3}; // Anonymous array`;

    const multiDimensionalCode = `// 2D Array declaration
int[][] matrix = new int[3][3];

// 2D Array initialization
int[][] matrix2 = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
matrix2[0][0] = 10;  // First row, first column
System.out.println(matrix2[1][2]);  // Second row, third column`;

    const arrayOperationsCode = `// Array operations
int[] numbers = {1, 2, 3, 4, 5};

// Traversing array
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Enhanced for loop
for (int num : numbers) {
    System.out.println(num);
}

// Array copying
int[] copyArray = new int[numbers.length];
System.arraycopy(numbers, 0, copyArray, 0, numbers.length);

// Arrays class methods
Arrays.sort(numbers);            // Sorting
Arrays.fill(numbers, 0);        // Filling
int position = Arrays.binarySearch(numbers, 3);  // Searching
boolean isEqual = Arrays.equals(numbers, copyArray);  // Comparing`;

    const jaggedArrayCode = `// Jagged array (array with different row lengths)
int[][] jaggedArray = new int[3][];
jaggedArray[0] = new int[3];
jaggedArray[1] = new int[4];
jaggedArray[2] = new int[2];

// Initialize jagged array
jaggedArray[0] = new int[] {1, 2, 3};
jaggedArray[1] = new int[] {4, 5, 6, 7};
jaggedArray[2] = new int[] {8, 9};`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Arrays
            </div>

            <h1 className="content-title">Java Arrays</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Overview</h2>
                <div className="arrays-overview">
                    <p>
                        Arrays in Java are fixed-size collections of elements of the same data type.
                        They provide a way to store multiple values in a single variable, with each element
                        accessed through an index.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>Array Declaration and Initialization</h2>
                <div className="array-types">
                    <div className="type-grid">
                        <div className="type-card">
                            <h3>Single Dimensional</h3>
                            <p>Basic array with one row of elements</p>
                        </div>
                        <div className="type-card">
                            <h3>Array Literals</h3>
                            <p>Initialize array with values</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={declarationCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Multi-Dimensional Arrays</h2>
                <div className="multidim-section">
                    <div className="dim-info">
                        <div className="info-card">
                            <h3>2D Arrays</h3>
                            <p>Arrays of arrays, creating a matrix structure</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={multiDimensionalCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Array Operations</h2>
                <div className="operations-grid">
                    <div className="operation-card">
                        <h3>Traversal</h3>
                        <p>Accessing array elements sequentially</p>
                    </div>
                    <div className="operation-card">
                        <h3>Copying</h3>
                        <p>Creating array duplicates</p>
                    </div>
                    <div className="operation-card">
                        <h3>Sorting</h3>
                        <p>Arranging elements in order</p>
                    </div>
                    <div className="operation-card">
                        <h3>Searching</h3>
                        <p>Finding elements in array</p>
                    </div>
                </div>
                <CodeBlock initialCode={arrayOperationsCode} />
            </section>

            <section className="content-section">
                <h2>Jagged Arrays</h2>
                <div className="jagged-section">
                    <div className="jagged-info">
                        <div className="info-card">
                            <h3>Variable Length Arrays</h3>
                            <p>2D arrays with different row lengths</p>
                        </div>
                    </div>
                    <CodeBlock initialCode={jaggedArrayCode} />
                </div>
            </section>

            <section className="content-section">
                <h2>Best Practices</h2>
                <div className="best-practices">
                    <div className="practice-card">
                        <h3>Bounds Checking</h3>
                        <p>Always verify array indices to prevent ArrayIndexOutOfBoundsException</p>
                    </div>
                    <div className="practice-card">
                        <h3>Array Size</h3>
                        <p>Consider memory limitations when creating large arrays</p>
                    </div>
                    <div className="practice-card">
                        <h3>Initialization</h3>
                        <p>Initialize arrays properly to avoid NullPointerException</p>
                    </div>
                    <div className="practice-card">
                        <h3>Use Collections</h3>
                        <p>Consider using ArrayList for dynamic size requirements</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Common Pitfalls</h2>
                <div className="pitfalls-grid">
                    <div className="pitfall-card">
                        <h3>Index Out of Bounds</h3>
                        <p>Accessing array elements beyond its length</p>
                    </div>
                    <div className="pitfall-card">
                        <h3>Null Arrays</h3>
                        <p>Using uninitialized array references</p>
                    </div>
                    <div className="pitfall-card">
                        <h3>Wrong Dimensions</h3>
                        <p>Incorrect multi-dimensional array access</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/loops" className="prev-link">
                    ← Previous: Loops
                </Link>
                <Link to="/tutorials/java/strings" className="next-link">
                    Next: Strings →
                </Link>
            </div>
        </div>
    );
}

export default JavaArrays;
