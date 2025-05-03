// src/components/Tutorials/HTML/content/HTMLInstallation.js
import React from "react";
import { Link } from "react-router-dom";
import "./IntroContent.css";

function HTMLInstallation() {
  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorials">Tutorials</Link> › <Link to="/tutorials/html">HTML</Link> › Installation
      </div>

      <h1 className="content-title">HTML Installation & Setup</h1>

      <section className="content-section">
        <h2>Required Tools</h2>
        <p>
          To start working with HTML, you'll need two basic tools:
        </p>
        <div className="key-points">
          <ul>
            <li>A Text Editor (to write HTML code)</li>
            <li>A Web Browser (to view HTML pages)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>Recommended Text Editors</h2>
        <div className="key-points">
          <h3>Popular Options:</h3>
          <ul>
            <li><strong>Visual Studio Code</strong> - Free, feature-rich, and widely used</li>
            <li><strong>Sublime Text</strong> - Fast and lightweight</li>
            <li><strong>Atom</strong> - Open-source and customizable</li>
            <li><strong>Notepad++</strong> - Simple and efficient</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>Installing Visual Studio Code</h2>
        <p>We recommend Visual Studio Code for beginners. Here's how to install it:</p>
        
        <ol>
          <li>Visit <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a></li>
          <li>Download the version for your operating system</li>
          <li>Run the installer</li>
          <li>Follow the installation wizard</li>
        </ol>

        <div className="note-box">
          <strong>Recommended Extensions for HTML:</strong>
          <ul>
            <li>Live Server</li>
            <li>HTML Snippets</li>
            <li>Auto Close Tag</li>
            <li>HTML CSS Support</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>Web Browsers</h2>
        <p>
          Any modern web browser will work for viewing HTML pages. Popular options include:
        </p>
        <ul>
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Microsoft Edge</li>
          <li>Safari</li>
        </ul>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/html/html-working" className="prev-link">
          ← Previous: HTML Working
        </Link>
        <Link to="/tutorials/html/execution" className="next-link">
          Next: HTML Execution →
        </Link>
      </div>
    </div>
  );
}

export default HTMLInstallation;
