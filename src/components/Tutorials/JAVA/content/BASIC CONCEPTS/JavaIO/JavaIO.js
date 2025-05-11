// JavaIO.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaIO.css';

function JavaIO() {
  const scannerExample = 
    `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Hello " + name + "! You are " + age + " years old.");
        
        scanner.close(); // Always close the scanner when done
    }
}`;

  const bufferReaderExample = 
    `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(
            new InputStreamReader(System.in));
        
        System.out.print("Enter a line of text: ");
        String line = reader.readLine();
        
        System.out.println("You entered: " + line);
        
        reader.close(); // Close the reader when done
    }
}`;

  const fileIOExample = 
    `import java.io.*;

public class FileIOExample {
    public static void main(String[] args) {
        // Writing to a file
        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write("Hello, this is written to a file!");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Reading from a file
        try {
            FileReader reader = new FileReader("output.txt");
            BufferedReader buffReader = new BufferedReader(reader);
            String line = buffReader.readLine();
            System.out.println("Read from file: " + line);
            buffReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`;

  const printWriterExample = 
    `import java.io.PrintWriter;

public class PrintWriterExample {
    public static void main(String[] args) {
        try {
            PrintWriter writer = new PrintWriter(System.out);
            writer.println("Hello, World!");
            writer.printf("Formatted number: %d%n", 42);
            writer.printf("Formatted float: %.2f%n", 3.14159);
            writer.flush(); // Ensure all data is written
            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Input/Output Operations
      </div>

      <h1 className="content-title">Java Input/Output Operations</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="content-section">
        <p>
          Java provides various ways to handle input and output operations. These operations are fundamental 
          for interacting with users, files, and other data streams.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#basic-io">Basic I/O Streams</a></li>
          <li><a href="#scanner-class">Scanner Class</a></li>
          <li><a href="#buffered-reader">BufferedReader</a></li>
          <li><a href="#file-io">File I/O</a></li>
          <li><a href="#print-writer">PrintWriter</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="basic-io">
        <h2>Basic I/O Streams</h2>
        <p>
          Java provides several standard streams for I/O operations:
        </p>
        <ul className="io-streams">
          <li><strong>System.out</strong> - Standard output stream (printing to console)</li>
          <li><strong>System.in</strong> - Standard input stream (reading from keyboard)</li>
          <li><strong>System.err</strong> - Standard error stream (error output)</li>
        </ul>
        <div className="note-box">
          <p>
            <strong>Note:</strong> These streams are automatically available and don't need to be opened 
            explicitly.
          </p>
        </div>
      </section>

      <section id="scanner-class">
        <h2>Scanner Class</h2>
        <p>
          The Scanner class is a simple and convenient way to read input. It can parse primitive types 
          and strings using regular expressions.
        </p>
        <CodeBlock initialCode={scannerExample} />
        <div className="feature-list">
          <h3>Scanner Features:</h3>
          <ul>
            <li>Can read different data types (int, double, String, etc.)</li>
            <li>Provides methods like nextInt(), nextDouble(), nextLine()</li>
            <li>Can parse tokens from a string</li>
            <li>Supports regular expressions</li>
          </ul>
        </div>
      </section>

      <section id="buffered-reader">
        <h2>BufferedReader</h2>
        <p>
          BufferedReader provides efficient reading of characters, arrays, and lines. It's more efficient 
          than Scanner for reading large amounts of data.
        </p>
        <CodeBlock initialCode={bufferReaderExample} />
        <div className="comparison-box">
          <h3>BufferedReader vs Scanner:</h3>
          <table>
            <thead>
              <tr>
                <th>BufferedReader</th>
                <th>Scanner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>More efficient for large data</td>
                <td>More convenient for parsing</td>
              </tr>
              <tr>
                <td>Synchronized (thread-safe)</td>
                <td>Not synchronized</td>
              </tr>
              <tr>
                <td>Larger buffer size</td>
                <td>Smaller buffer size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="file-io">
        <h2>File I/O</h2>
        <p>
          Java provides several classes for handling file input and output operations.
        </p>
        <CodeBlock initialCode={fileIOExample} />
        <div className="warning-box">
          <p>
            <strong>Warning:</strong> Always close file resources in a finally block or use 
            try-with-resources to prevent resource leaks.
          </p>
        </div>
      </section>

      <section id="print-writer">
        <h2>PrintWriter</h2>
        <p>
          PrintWriter offers advanced formatting capabilities for output operations.
        </p>
        <CodeBlock initialCode={printWriterExample} />
        <div className="feature-list">
          <h3>PrintWriter Features:</h3>
          <ul>
            <li>Formatted output using printf()</li>
            <li>Auto-flushing capability</li>
            <li>No need to handle IOExceptions</li>
            <li>Platform-independent line separators</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices for I/O Operations</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Resource Management:</strong>
              Always close I/O resources properly using try-with-resources or finally blocks.
            </li>
            <li>
              <strong>Exception Handling:</strong>
              Implement proper exception handling for I/O operations.
            </li>
            <li>
              <strong>Buffer Usage:</strong>
              Use buffered streams for better performance with large data.
            </li>
            <li>
              <strong>Character Encoding:</strong>
              Specify character encoding explicitly when dealing with text files.
            </li>
          </ul>
        </div>
      </section>

      <section className="common-patterns">
        <h2>Common I/O Patterns</h2>
        <div className="pattern-table">
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Recommended Class</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Console Input</td>
                <td>Scanner</td>
                <td>Interactive user input</td>
              </tr>
              <tr>
                <td>File Reading</td>
                <td>BufferedReader</td>
                <td>Large text files</td>
              </tr>
              <tr>
                <td>File Writing</td>
                <td>BufferedWriter</td>
                <td>Writing large text data</td>
              </tr>
              <tr>
                <td>Formatted Output</td>
                <td>PrintWriter</td>
                <td>Formatted text output</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/variables" className="prev-link">
          ← Previous: Variables
        </Link>
        <Link to="/tutorials/java/control-statements" className="next-link">
          Next: Control Statements →
        </Link>
      </div>
    </div>
  );
}

export default JavaIO;
