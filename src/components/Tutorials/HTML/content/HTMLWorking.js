// src/components/Tutorials/HTML/content/HTMLWorking.js
import React from "react";
import { Link } from "react-router-dom";
import "./IntroContent.css";

function HTMLWorking() {
  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorials">Tutorials</Link> › <Link to="/tutorials/html">HTML</Link> › HTML Working
      </div>

      <h1 className="content-title">HTML Working</h1>

      <section className="content-section">
        <h2>Frontend vs Backend</h2>
        <p>
          You must have heard of frontend and backend. Frontend refers to the visible part 
          of a website or app that users interact with, like the tables, images, and buttons. 
          It's built using languages like HTML, CSS, and JavaScript. The backend, on the other 
          hand, handles behind-the-scenes operations like storing and processing data when users 
          interact with the frontend. It uses languages like Python, Ruby, and Java. In essence, 
          frontend is what users see, while backend manages the functionality.
        </p>
      </section>

      <section className="content-section">
        <h2>How do websites work?</h2>
        <p>
          When we want to access any information on the internet, we search for it using a web browser. 
          The web browser retrieves the content from web servers, where it is stored in the form of HTML documents.
        </p>
        <p>
          An HTML document is created by writing code with specific tags in a code editor of your choice. 
          The document is then saved with the '.html' extension. Once saved, the browser interprets the 
          HTML document, reads it, and renders the web page.
        </p>
      </section>

      <section className="content-section">
        <h2>What is a Web Browser?</h2>
        <p>
          A web browser is a program that understands HTML tags and renders them in a human-readable format 
          that is easily viewable by people visiting the website. Developers write code in HTML because it's 
          a straightforward way to instruct the web browser on what to display. In the next section, I'll 
          show you how to set up VS Code for writing your own HTML code and rendering it in a web browser.
        </p>
      </section>

      <section className="content-section">
        <h2>What is an HTML Document?</h2>
        <p>
          An HTML document is a text document saved with the '.html' or '.htm' extension, containing text 
          and specific tags enclosed in '&lt; &gt;'. These tags provide the necessary instructions for configuring 
          the web page. The tags themselves are standardized and fixed. The structure of an HTML document 
          will be explained later in this HTML tutorial.
        </p>
      </section>

      <section className="content-section">
        <h2>What is a Rendered Page?</h2>
        <p>
          The rendered page is the output screen of our HTML Document which is the page displayed on the browser.
        </p>
      </section>

      <section className="content-section">
        <h2>How does a basic website work?</h2>
        <div className="key-points">
          <ul>
            <li>Web Browser(client) requests websites like www.codewithharry.com from the web server.</li>
            <li>Web server in return sends HTML, CSS, and JavaScript files to it.</li>
            <li>HTML, CSS, and JavaScript files are parsed by a web browser which is responsible for showing you a beautiful website.</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>How does a browser work?</h2>
        <p>
          A web browser plays a crucial role in parsing and rendering HTML code to the client. 
          A web browser is a complex program that performs many tasks behind the scenes. Here's a summary:
        </p>
        <div className="key-points">
          <ul>
            <li>A browser is an application that reads HTML documents and displays them as web pages. 
                Browsers can't access the content directly from where it's stored; this is where servers come into play.</li>
            <li>A server acts as an intermediary, listening to browser requests and fulfilling them by 
                delivering the HTML document to the browser.</li>
            <li>Web browsers perform two main tasks: parsing and rendering.</li>
            <li>During the parsing stage, the browser receives raw bytes, which are converted into characters. 
                These characters are then converted into tokens, which in turn are transformed into nodes. 
                These nodes are organized into a tree-like data structure known as the DOM (Document Object Model).</li>
            <li>Once the DOM tree is constructed, the browser moves on to the rendering stage. At this point, 
                each node in the DOM tree is rendered and displayed on the screen.</li>
          </ul>
        </div>

        <div className="note-box">
          <strong>Note:</strong> Don't worry about how the browser exactly works just yet. Rather focus on 
          learning HTML. In the next tutorial, we will install VS Code and some extensions for writing our HTML code.
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/html/introduction" className="prev-link">
          ← Previous: Introduction
        </Link>
        <Link to="/tutorials/html/installation" className="next-link">
          Next: Installation →
        </Link>
      </div>
    </div>
  );
}

export default HTMLWorking;
