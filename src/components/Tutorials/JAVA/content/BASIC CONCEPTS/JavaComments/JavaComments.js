// JavaComments.js
import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaComments.css';

function JavaComments() {
  const singleLineExample = 
    `// This is a single-line comment
String name = "John"; // This is an end-of-line comment`;

  const multiLineExample = 
    `/* This is a multi-line comment
   It can span across multiple lines
   You can write as many lines as you want
   Until you close it with */
String address = "123 Main St";`;

  const documentationExample = 
    `/**
 * This is a documentation comment (Javadoc)
 * @author John Doe
 * @version 1.0
 * @since 2025-05-11
 */
public class Person {
    /**
     * This method returns the person's full name
     * @param firstName the person's first name
     * @param lastName the person's last name
     * @return the concatenated full name
     */
    public String getFullName(String firstName, String lastName) {
        return firstName + " " + lastName;
    }
}`;

  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
        <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Java Comments
      </div>

      <h1 className="content-title">Java Comments</h1>
      <p className="last-updated">Last Updated: 11 May, 2025</p>

      <section className="content-section">
        <p>
          Comments in Java are explanatory statements that help make the code more readable and understandable. 
          They are ignored by the Java compiler and are meant for anyone who is reading the source code.
        </p>
      </section>

      <div className="table-of-content">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#types-of-comments">Types of Comments</a></li>
          <li><a href="#single-line-comments">Single-line Comments</a></li>
          <li><a href="#multi-line-comments">Multi-line Comments</a></li>
          <li><a href="#documentation-comments">Documentation Comments</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </div>

      <section id="types-of-comments">
        <h2>Types of Comments in Java</h2>
        <p>
          Java supports three types of comments:
        </p>
        <ul>
          <li>Single-line comments (//)</li>
          <li>Multi-line comments (/* */)</li>
          <li>Documentation comments (/** */)</li>
        </ul>
      </section>

      <section id="single-line-comments">
        <h2>Single-line Comments</h2>
        <p>
          Single-line comments start with two forward slashes (//) and continue until the end of the line. 
          They are useful for short explanations.
        </p>
        <CodeBlock initialCode={singleLineExample} />
        <div className="note-box">
          <p>
            <strong>Note:</strong> Single-line comments can also be used at the end of a code line.
          </p>
        </div>
      </section>

      <section id="multi-line-comments">
        <h2>Multi-line Comments</h2>
        <p>
          Multi-line comments start with /* and end with */. They can span multiple lines and are useful 
          for longer explanations.
        </p>
        <CodeBlock initialCode={multiLineExample} />
        <div className="warning-box">
          <p>
            <strong>Warning:</strong> Multi-line comments cannot be nested. A comment starting with /* must end 
            with */ before another can begin.
          </p>
        </div>
      </section>

      <section id="documentation-comments">
        <h2>Documentation Comments (Javadoc)</h2>
        <p>
          Documentation comments are special comments that start with /** and end with */. They are used to 
          generate documentation for Java code and support special tags.
        </p>
        <CodeBlock initialCode={documentationExample} />
        <h3>Common Javadoc Tags</h3>
        <table className="javadoc-tags">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>@param</td>
              <td>Describes a method parameter</td>
            </tr>
            <tr>
              <td>@return</td>
              <td>Describes the return value</td>
            </tr>
            <tr>
              <td>@author</td>
              <td>Specifies the author of the code</td>
            </tr>
            <tr>
              <td>@version</td>
              <td>Specifies the version of the code</td>
            </tr>
            <tr>
              <td>@since</td>
              <td>Specifies when this functionality was added</td>
            </tr>
            <tr>
              <td>@throws</td>
              <td>Describes exceptions that may be thrown</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="best-practices">
        <h2>Best Practices for Java Comments</h2>
        <div className="best-practices">
          <ul>
            <li>
              <strong>Be Clear and Concise:</strong> Write comments that are easy to understand and avoid unnecessary verbosity.
            </li>
            <li>
              <strong>Explain Why, Not What:</strong> Focus on explaining why something is done rather than what is being done (the code already shows what).
            </li>
            <li>
              <strong>Keep Comments Updated:</strong> Always update comments when you modify the corresponding code.
            </li>
            <li>
              <strong>Use Proper Grammar:</strong> Write comments with proper spelling, punctuation, and grammar.
            </li>
            <li>
              <strong>Avoid Obvious Comments:</strong> Don't write comments for self-explanatory code.
            </li>
            <li>
              <strong>Document Public APIs:</strong> Always use Javadoc comments for public classes and methods.
            </li>
          </ul>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/java-syntax" className="prev-link">
          ← Previous: Java Syntax
        </Link>
        <Link to="/tutorials/java/java-variables" className="next-link">
          Next: Java Variables →
        </Link>
      </div>
    </div>
  );
}

export default JavaComments;
