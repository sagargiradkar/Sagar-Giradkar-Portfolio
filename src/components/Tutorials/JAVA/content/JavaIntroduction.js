// src/components/Tutorials/Java/content/JavaIntroduction.js
import React from "react";
import { Link } from "react-router-dom";
import "./IntroContent.css";

function JavaIntroduction() {
  return (
    <div className="content-wrapper">
      <div className="content-breadcrumb">
        <Link to="/tutorials">Tutorials</Link> › <Link to="/tutorials/java">Java</Link> › Introduction
      </div>

      <h1 className="content-title">Java Introduction</h1>

      <div className="learning-timeline">
        <h2>Learning Timeline</h2>
        <ul>
          <li><strong>High School students and younger:</strong> Around 40-50 days</li>
          <li><strong>Those beyond High School:</strong> Around 30-40 days</li>
          <li><strong>College students and above:</strong> Around 20-30 days</li>
        </ul>
      </div>

      <div className="author-intro">
        <p>
          Welcome to this comprehensive Java tutorial. Before we dive into the vast world of Java programming,
          I want to set clear expectations about the learning journey ahead.
        </p>
        <p>
          My name is Harry (the same CodeWithHarry guy from YouTube), and today I'm writing this comprehensive 
          Java tutorial for all of you. Let's begin our journey into Java programming!
        </p>
      </div>

      <section className="content-section">
        <h2>What is Java?</h2>
        <p>
          Java is a high-level, class-based, object-oriented programming language developed by Sun Microsystems 
          (now owned by Oracle) in 1995. It was created by James Gosling and his team and was originally designed 
          for interactive television, but it was too advanced for the digital cable television industry at the time.
        </p>
        <p>
          The language was initially called "Oak" after an oak tree that stood outside Gosling's office. It was later 
          renamed "Java" after the coffee, which is why its logo is a cup of coffee.
        </p>

        <div className="key-points">
          <h3>In a nutshell:</h3>
          <ul>
            <li>Java is a versatile, platform-independent programming language.</li>
            <li>Java follows the "Write Once, Run Anywhere" (WORA) principle, meaning that compiled Java code can run on all platforms that support Java without recompilation.</li>
            <li>Java is one of the most popular programming languages in the world, used for developing desktop applications, web applications, mobile applications, games, and much more.</li>
            <li>The latest long-term support (LTS) version is Java 21, released in September 2023.</li>
          </ul>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/tutorials/java/java-working" className="next-link">
          Next: Java Working →
        </Link>
      </div>
    </div>
  );
}

export default JavaIntroduction;
