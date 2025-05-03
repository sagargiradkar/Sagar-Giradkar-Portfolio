// JavaInstallationPost.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import javaInstallImg from "../../../../Assets/Blogs/javaBlogs.png";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./JavaInstallationPost.css";

function JavaInstallationPost() {
  const CodeBlock = ({ code, language = "bash" }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    const formattedCode = code.trim();

    return (
      <div className="code-editor">
        <div className="code-header">
          <span>{language}</span>
          <button
            className="copy-button"
            onClick={() => copyToClipboard(formattedCode)}
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? <FaCheck style={{ color: "#4CAF50" }} /> : <FaCopy />}
          </button>
        </div>
        <pre className="code-content">
          <code>{formattedCode}</code>
        </pre>
      </div>
    );
  };

  const verifyJavaCode = `java -version`;

  const setPathCode = `setx JAVA_HOME "C:\Program Files\Java\jdk-17"
setx PATH "%PATH%;%JAVA_HOME%\bin"`;

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-content">
        <div className="blog-featured-image">
          <img src={javaInstallImg} alt="Java Installation on Windows" />
        </div>

        <div className="blog-header">
          <h1>How to Install Java on Windows: A Complete Guide</h1>
          <div className="blog-subtitle">
            <p className="italics">
              "A step-by-step guide to installing Java Development Kit (JDK) on Windows
              and setting up your development environment properly."
            </p>
          </div>
        </div>

        <div className="blog-meta">
          <span>By Sagar Giradkar</span>
          <span>Updated: 1 May 2025</span>
          <span>Reading Time: 15 minutes</span>
        </div>

        <div className="blog-main-content">
          <section className="introduction">
            <h2>Introduction</h2>
            <p>
              Java is one of the most popular programming languages, used for developing
              a wide range of applications. This guide will walk you through the process
              of installing Java on your Windows system and setting up the necessary
              environment variables.
            </p>
          </section>

          <section className="prerequisites">
            <h2>Prerequisites</h2>
            <div className="requirement-card">
              <h4>System Requirements</h4>
              <ul>
                <li>Windows 10 or later</li>
                <li>Administrator access</li>
                <li>Minimum 4GB RAM (8GB recommended)</li>
                <li>1GB free disk space</li>
                <li>Stable internet connection</li>
              </ul>
            </div>
          </section>

          <section className="installation-steps">
            <h2>Installation Steps</h2>

            <div className="step-card">
              <h3>Step 1: Download JDK</h3>
              <ol>
                <li>Visit the official Oracle website or OpenJDK</li>
                <li>Choose the latest JDK version (e.g., JDK 17 LTS)</li>
                <li>Select Windows x64 Installer</li>
                <li>Accept the license agreement</li>
                <li>Download the installer</li>
              </ol>
            </div>

            <div className="step-card">
              <h3>Step 2: Run the Installer</h3>
              <ol>
                <li>Locate the downloaded installer (.exe file)</li>
                <li>Right-click and "Run as administrator"</li>
                <li>Follow the installation wizard</li>
                <li>Choose installation directory (default recommended)</li>
                <li>Wait for installation to complete</li>
              </ol>
            </div>

            <div className="step-card">
              <h3>Step 3: Set Environment Variables</h3>
              <p>Set JAVA_HOME and update PATH using Command Prompt (Admin):</p>
              <CodeBlock code={setPathCode} />
            </div>
          </section>

          <section className="verification">
            <h2>Verify Installation</h2>
            <p>Open Command Prompt and type:</p>
            <CodeBlock code={verifyJavaCode} />
            <p>You should see output showing the installed Java version.</p>
          </section>

          <section className="troubleshooting">
            <h2>Common Issues and Troubleshooting</h2>
            
            <div className="issue-card">
              <h4>'java' is not recognized</h4>
              <p>
                If you see this error, ensure that:
                <ul>
                  <li>JAVA_HOME is correctly set</li>
                  <li>PATH includes Java bin directory</li>
                  <li>System has been restarted after installation</li>
                </ul>
              </p>
            </div>

            <div className="issue-card">
              <h4>Multiple Java Versions</h4>
              <p>
                If you have multiple Java versions installed:
                <ul>
                  <li>Update JAVA_HOME to point to desired version</li>
                  <li>Verify version-specific commands (java-17, java-11)</li>
                  <li>Consider using a version management tool</li>
                </ul>
              </p>
            </div>
          </section>

          <section className="best-practices">
            <h2>Best Practices</h2>

            <div className="practice-card">
              <h4>Regular Updates</h4>
              <p>Keep Java updated to get the latest security patches and features.</p>
            </div>

            <div className="practice-card">
              <h4>Version Management</h4>
              <p>Consider using tools like SDKMAN or JEnv for managing multiple Java versions.</p>
            </div>

            <div className="practice-card">
              <h4>Security</h4>
              <p>Only download Java from official sources to avoid security risks.</p>
            </div>
          </section>

          <section className="next-steps">
            <h2>Next Steps</h2>
            <div className="next-steps-content">
              <p>Now that Java is installed, you can:</p>
              <ul>
                <li>Set up an Integrated Development Environment (IDE)</li>
                <li>Learn Java programming basics</li>
                <li>Try creating your first Java program</li>
                <li>Explore Java frameworks and libraries</li>
              </ul>
            </div>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              Congratulations! You've successfully installed Java on your Windows system.
              Remember to keep your Java installation updated and refer to the troubleshooting
              section if you encounter any issues. Happy coding!
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
}

export default JavaInstallationPost;
