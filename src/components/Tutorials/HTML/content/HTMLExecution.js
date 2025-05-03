// src/components/Tutorials/HTML/content/HTMLExecution.js
import React from "react";
import { Link } from "react-router-dom";
import "./IntroContent.css";

function HTMLExecution() {
  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorials">Tutorials</Link> › <Link to="/tutorials/html">HTML</Link> › Execution
      </div>

      <h1 className="content-title">HTML Execution</h1>

      <section className="content-section">
        <h2>Creating Your First HTML File</h2>
        <div className="key-points">
          <h3>Steps:</h3>
          <ol>
            <li>Open your text editor (VS Code)</li>
            <li>Create a new file with .html extension (e.g., index.html)</li>
            <li>Write your HTML code</li>
            <li>Save the file</li>
            <li>Open in a web browser</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h2>Basic HTML Template</h2>
        <div className="code-block">
          <pre>
            <code>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`}
            </code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2>Running HTML Files</h2>
        <p>There are several ways to run HTML files:</p>
        
        <div className="key-points">
          <h3>Method 1: Direct Browser Opening</h3>
          <ul>
            <li>Double-click the HTML file</li>
            <li>Right-click and select "Open with" your preferred browser</li>
            <li>Drag and drop the file into your browser window</li>
          </ul>
        </div>

        <div className="key-points">
          <h3>Method 2: Using Live Server (Recommended)</h3>
          <ul>
            <li>Install Live Server extension in VS Code</li>
            <li>Right-click in the HTML file</li>
            <li>Select "Open with Live Server"</li>
          </ul>
        </div>
      </section>

      <div className="note-box">
        <strong>Pro Tip:</strong> Using Live Server is recommended as it automatically 
        refreshes the page whenever you save changes to your HTML file.
      </div>

      <div className="navigation-links">
        <Link to="/tutorials/html/installation" className="prev-link">
          ← Previous: Installation
        </Link>
        <Link to="/tutorials/html/page-structure" className="next-link">
          Next: Page Structure →
        </Link>
      </div>
    </div>
  );
}

export default HTMLExecution;
