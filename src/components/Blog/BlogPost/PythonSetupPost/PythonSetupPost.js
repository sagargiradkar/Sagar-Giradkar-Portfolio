// components/Blog/BlogPost/PythonSetupPost/PythonSetupPost.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import pythonSetupImg from "../../../../Assets/Blogs/pythonSetupImg.jpg";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./PythonSetupPost.css";

function PythonSetupPost() {
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

  const checkPythonVersion = `python --version
# or
python3 --version`;

  const createVenvCode = `# Windows
python -m venv myenv

# macOS/Linux
python3 -m venv myenv`;

  const activateVenvCode = `# Windows
myenv\\Scripts\\activate

# macOS/Linux
source myenv/bin/activate`;

  const installPackagesCode = `pip install package_name

# Example
pip install requests
pip install pandas numpy matplotlib

# Install from requirements.txt
pip install -r requirements.txt`;

  const createRequirementsCode = `pip freeze > requirements.txt`;

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-content">
        <div className="blog-featured-image">
          <img src={pythonSetupImg} alt="Python Setup and Virtual Environment" />
        </div>

        <div className="blog-header">
          <h1>How to Download Python and Set Up a Virtual Environment</h1>
          <div className="blog-subtitle">
            <p className="italics">
              "A comprehensive guide to installing Python and creating isolated development
              environments for your projects using virtual environments."
            </p>
          </div>
        </div>

        <div className="blog-meta">
          <span>By Sagar Giradkar</span>
          <span>Updated: {new Date().toLocaleDateString()}</span>
        </div>

        <div className="blog-main-content">
          <section className="introduction">
            <h2>Introduction</h2>
            <p>
              Python is a versatile programming language, but managing different projects
              with different dependencies can be challenging. This guide will walk you
              through installing Python and setting up virtual environments to keep your
              projects isolated and organized.
            </p>
          </section>

          <section className="python-installation">
            <h2>Installing Python</h2>
            
            <div className="installation-steps">
              <h3>Step 1: Download Python</h3>
              <ol>
                <li>Visit the official <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python website</a></li>
                <li>Click on "Download Python" for the latest version</li>
                <li>Choose the appropriate installer for your operating system</li>
              </ol>

              <div className="important-note">
                <h4>Important:</h4>
                <p>When installing on Windows, make sure to check "Add Python to PATH"!</p>
              </div>
            </div>

            <h3>Step 2: Verify Installation</h3>
            <p>Open your terminal/command prompt and run:</p>
            <CodeBlock code={checkPythonVersion} />
          </section>

          <section className="virtual-environment">
            <h2>Setting Up a Virtual Environment</h2>
            
            <h3>What is a Virtual Environment?</h3>
            <p>
              A virtual environment is an isolated Python environment that allows you to:
            </p>
            <ul>
              <li>Install packages specific to your project</li>
              <li>Avoid conflicts between project dependencies</li>
              <li>Maintain different versions of packages for different projects</li>
              <li>Keep your global Python installation clean</li>
            </ul>

            <h3>Creating a Virtual Environment</h3>
            <p>Navigate to your project directory and run:</p>
            <CodeBlock code={createVenvCode} />

            <h3>Activating the Virtual Environment</h3>
            <p>Use the appropriate command for your operating system:</p>
            <CodeBlock code={activateVenvCode} />
            
            <div className="tip-card">
              <h4>Pro Tip:</h4>
              <p>
                You'll know your virtual environment is active when you see its name
                in parentheses before your command prompt: (myenv)
              </p>
            </div>
          </section>

          <section className="package-management">
            <h2>Managing Packages</h2>

            <h3>Installing Packages</h3>
            <p>With your virtual environment activated, you can install packages:</p>
            <CodeBlock code={installPackagesCode} />

            <h3>Creating Requirements File</h3>
            <p>Save your project dependencies to a file:</p>
            <CodeBlock code={createRequirementsCode} />
          </section>

          <section className="best-practices">
            <h2>Best Practices</h2>

            <div className="practice-card">
              <h4>Version Control</h4>
              <p>Add your virtual environment folder (myenv) to .gitignore</p>
            </div>

            <div className="practice-card">
              <h4>Requirements File</h4>
              <p>Always maintain an updated requirements.txt for your projects</p>
            </div>

            <div className="practice-card">
              <h4>Environment Names</h4>
              <p>Use descriptive names for your virtual environments</p>
            </div>
          </section>

          <section className="troubleshooting">
            <h2>Common Issues and Solutions</h2>

            <div className="issue-card">
              <h4>"Python not found" Error</h4>
              <p>
                Make sure Python is added to your system's PATH environment variable.
                On Windows, you might need to reinstall Python with "Add to PATH" checked.
              </p>
            </div>

            <div className="issue-card">
              <h4>Permission Errors</h4>
              <p>
                On Unix-based systems, you might need to use 'sudo' for global installations.
                However, it's better to use virtual environments instead.
              </p>
            </div>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              Virtual environments are essential for Python development. They help maintain
              clean, isolated environments for your projects and make dependency management
              much easier. Start using them early in your Python journey!
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
}

export default PythonSetupPost;
