// src/components/Tutorials/HTML/content/HTMLIntroduction.js
import React from "react";
import { Link } from "react-router-dom";
import "./IntroContent.css";

function HTMLIntroduction() {
  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorials">Tutorials</Link> › <Link to="/tutorials/html">HTML</Link> › Introduction
      </div>

      <h1 className="content-title">HTML Introduction</h1>

      <div className="learning-timeline">
        <h2>Learning Timeline</h2>
        <ul>
          <li><strong>High School students and younger:</strong> Around 25 days</li>
          <li><strong>Those beyond High School:</strong> Around 20 days</li>
          <li><strong>College students and above:</strong> Around 10-20 days</li>
        </ul>
      </div>

      <div className="author-intro">
        <p>
          You may be wondering why I'm discussing these timelines. It's important for me to set expectations 
          before you start your journey of learning HTML with me.
        </p>
        <p>
          My name is Harry (the same CodeWithHarry guy from YouTube), and today I'm writing this comprehensive 
          HTML tutorial for all of you. Let's jump right into HTML!
        </p>
      </div>

      <section className="content-section">
        <h2>What is HTML?</h2>
        <p>
          HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating 
          web pages. It's a markup language used to structure content on the web, defining elements like 
          headings, paragraphs, links, and images.
        </p>
        <p>
          In layman's terms, HTML is like the skeleton of a website. It's a set of instructions that tells 
          a web browser how to display text, images, videos, and other elements on a webpage.
        </p>

        <div className="key-points">
          <h3>In a nutshell:</h3>
          <ul>
            <li>HTML is the language of the web, used to create websites.</li>
            <li>HTML defines the barebone structure or layout of web pages that we see on the Internet.</li>
            <li>HTML consists of a set of tags contained within an HTML document, and the associated files typically have either a .html or .htm extension.</li>
            <li>There are several versions of HTML, with HTML5 being the most recent version.</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>Features of HTML</h2>
        <ul>
          <li>It is platform-independent. For example, Chrome displays the same pages identically across different operating systems such as Mac, Linux, and Windows.</li>
          <li>Images, videos, and audio can be added to a web page (For example - YouTube shows videos on their website).</li>
          <li>HTML is a markup language and not a programming language.</li>
          <li>It can be integrated with other languages like CSS, JavaScript, etc. to show interactive (or dynamic) web pages.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Why the Term HyperText & Markup Language?</h2>
        <p>
          The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.' 
          'Hypertext' refers to the linking of text with other documents, while 'markup language' denotes a 
          language that utilizes a specific set of tags.
        </p>
        <div className="note-box">
          <strong>Note:</strong> Tags are meaningful texts enclosed in angle braces, like '&lt;...&gt;'. 
          For example, the tag. Each tag has a unique meaning and significance in building an HTML page, 
          and it can influence the web page in various ways.
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/html/html-working" className="next-link">
          Next: HTML Working →
        </Link>
      </div>
    </div>
  );
}

export default HTMLIntroduction;
