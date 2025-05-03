// components/Blog/BlogPost/JavaScriptSetupPost/JavaScriptSetupPost.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import jsSetupImg from "../../../../Assets/Blogs/jsSetupImg.jpg";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./JavaScriptSetupPost.css";

function JavaScriptSetupPost() {
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

    return (
      <div className="code-editor">
        <div className="code-header">
          <span>{language}</span>
          <button
            className="copy-button"
            onClick={() => copyToClipboard(code.trim())}
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? <FaCheck style={{ color: "#4CAF50" }} /> : <FaCopy />}
          </button>
        </div>
        <pre className="code-content">
          <code>{code.trim()}</code>
        </pre>
      </div>
    );
  };

  const checkNodeVersion = `node --version
npm --version`;

  const createProjectCode = `mkdir my-js-project
cd my-js-project
npm init -y`;

  const installPackageCode = `# Install a package
npm install package-name

# Install a development dependency
npm install --save-dev package-name

# Example: Installing popular packages
npm install express
npm install --save-dev nodemon`;

  const runScriptCode = `# Add to package.json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}

# Run the script
npm run start
npm run dev`;

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-content">
        <div className="blog-featured-image">
          <img src={jsSetupImg} alt="JavaScript Development Setup" />
        </div>

        <div className="blog-header">
          <h1>How to Set Up JavaScript Development Environment</h1>
          <div className="blog-subtitle">
            <p className="italics">
              "A comprehensive guide to installing Node.js, npm, and setting up a
              professional JavaScript development environment."
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
              JavaScript is one of the most popular programming languages, used for both
              frontend and backend development. This guide will help you set up a complete
              JavaScript development environment using Node.js and npm (Node Package Manager).
            </p>
          </section>

          <section className="prerequisites">
            <h2>Prerequisites</h2>
            <div className="requirement-card">
              <h4>System Requirements</h4>
              <ul>
                <li>Windows 10+, macOS, or Linux</li>
                <li>At least 4GB RAM</li>
                <li>1GB free disk space</li>
                <li>Internet connection</li>
              </ul>
            </div>
          </section>

          <section className="installation">
            <h2>Installing Node.js and npm</h2>

            <div className="installation-steps">
              <h3>Step 1: Download Node.js</h3>
              <ol>
                <li>Visit the official <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js website</a></li>
                <li>Download the LTS (Long Term Support) version</li>
                <li>Choose the appropriate installer for your operating system</li>
              </ol>

              <div className="important-note">
                <h4>Important:</h4>
                <p>The Node.js installer includes npm (Node Package Manager) automatically!</p>
              </div>
            </div>

            <div className="installation-steps">
              <h3>Step 2: Install Node.js</h3>
              <ol>
                <li>Run the downloaded installer</li>
                <li>Follow the installation wizard</li>
                <li>Accept the default settings (recommended)</li>
                <li>Allow the installer to add Node.js to your PATH</li>
              </ol>
            </div>

            <h3>Step 3: Verify Installation</h3>
            <p>Open your terminal/command prompt and run:</p>
            <CodeBlock code={checkNodeVersion} />
          </section>

          <section className="project-setup">
            <h2>Setting Up a JavaScript Project</h2>

            <h3>Creating a New Project</h3>
            <p>Create a new project directory and initialize it:</p>
            <CodeBlock code={createProjectCode} />

            <div className="tip-card">
              <h4>Pro Tip:</h4>
              <p>
                The package.json file created by 'npm init' contains your project
                configuration and dependencies.
              </p>
            </div>

            <h3>Installing Dependencies</h3>
            <p>Install packages using npm:</p>
            <CodeBlock code={installPackageCode} />

            <h3>Running Scripts</h3>
            <p>Add and run npm scripts:</p>
            <CodeBlock code={runScriptCode} language="json" />
          </section>

          <section className="ide-setup">
            <h2>IDE Setup</h2>
            
            <div className="ide-card">
              <h4>Visual Studio Code (Recommended)</h4>
              <ol>
                <li>Download and install <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a></li>
                <li>Install recommended extensions:
                  <ul>
                    <li>ESLint - JavaScript linting</li>
                    <li>Prettier - Code formatting</li>
                    <li>JavaScript (ES6) code snippets</li>
                    <li>Live Server - Development server</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="best-practices">
            <h2>Best Practices</h2>

            <div className="practice-card">
              <h4>Version Control</h4>
              <p>Initialize Git and create a .gitignore file for node_modules</p>
            </div>

            <div className="practice-card">
              <h4>Code Quality</h4>
              <p>Set up ESLint and Prettier for consistent code style</p>
            </div>

            <div className="practice-card">
              <h4>Package Management</h4>
              <p>Keep your dependencies updated and use package-lock.json</p>
            </div>
          </section>

          <section className="troubleshooting">
            <h2>Common Issues and Solutions</h2>

            <div className="issue-card">
              <h4>Permission Errors</h4>
              <p>
                On Unix-based systems, you might need to use sudo for global installations:
                <code>sudo npm install -g package-name</code>
              </p>
            </div>

            <div className="issue-card">
              <h4>Node not found</h4>
              <p>
                Ensure Node.js is properly added to your PATH. Try restarting your
                terminal or computer after installation.
              </p>
            </div>
          </section>

          <section className="additional-tools">
            <h2>Additional Development Tools</h2>

            <div className="tool-card">
              <h4>Browser DevTools</h4>
              <p>Learn to use Chrome/Firefox Developer Tools for debugging</p>
            </div>

            <div className="tool-card">
              <h4>Package Management</h4>
              <p>Consider using yarn as an alternative to npm</p>
            </div>

            <div className="tool-card">
              <h4>Version Management</h4>
              <p>Use nvm (Node Version Manager) for managing multiple Node.js versions</p>
            </div>
          </section>

          <section className="next-steps">
            <h2>Next Steps</h2>
            <div className="next-steps-content">
              <p>After setting up your environment, you can:</p>
              <ul>
                <li>Learn JavaScript fundamentals</li>
                <li>Explore popular frameworks (React, Vue, Angular)</li>
                <li>Build your first web application</li>
                <li>Practice with coding challenges</li>
              </ul>
            </div>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              Congratulations! You now have a professional JavaScript development
              environment set up. Remember to keep your tools updated and explore the
              vast ecosystem of JavaScript libraries and frameworks.
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
}

export default JavaScriptSetupPost;
