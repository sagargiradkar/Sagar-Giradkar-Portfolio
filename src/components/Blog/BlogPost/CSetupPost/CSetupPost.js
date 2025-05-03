// components/Blog/BlogPost/CSetupPost/CSetupPost.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import cSetupImg from "../../../../Assets/Blogs/cSetupImg.jpg";
import mingwInstallImg from "../../../../Assets/Blogs/mingw.jpg";
import vsCodeCImg from "../../../../Assets/Blogs/vscode.jpg";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./CSetupPost.css";

function CSetupPost() {
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

  const checkGccVersion = `gcc --version`;

  const helloWorldCode = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;

  const compileCode = `gcc program.c -o program
./program  // On Windows: program.exe`;

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-content">
        <div className="blog-featured-image">
          <img src={cSetupImg} alt="C Programming Setup on Windows" />
        </div>

        <div className="blog-header">
          <h1>How to Install C Programming Environment on Windows</h1>
          <div className="blog-subtitle">
            <p className="italics">
              "A step-by-step guide to setting up a C programming environment on Windows
              using MinGW and VS Code"
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
              Setting up a C programming environment on Windows requires a few essential
              tools: a compiler (MinGW-w64), an IDE or text editor (VS Code), and some
              configuration. This guide will walk you through the complete setup process.
            </p>
          </section>

          <section className="prerequisites">
            <h2>Prerequisites</h2>
            <div className="requirement-card">
              <h4>System Requirements</h4>
              <ul>
                <li>Windows 10 or later</li>
                <li>At least 2GB RAM</li>
                <li>1GB free disk space</li>
                <li>Internet connection</li>
                <li>Administrator access</li>
              </ul>
            </div>
          </section>

          <section className="installation">
            <h2>Installing MinGW-w64 (C Compiler)</h2>

            <div className="installation-steps">
              <h3>Step 1: Download MinGW-w64</h3>
              <ol>
                <li>Visit the <a href="https://sourceforge.net/projects/mingw-w64/files/" target="_blank" rel="noopener noreferrer">MinGW-w64 SourceForge page</a></li>
                <li>Download the latest version installer</li>
                <li>Choose the following options during installation:
                  <ul>
                    <li>Version: Latest (e.g., 8.1.0)</li>
                    <li>Architecture: x86_64</li>
                    <li>Threads: posix</li>
                    <li>Exception: seh</li>
                  </ul>
                </li>
              </ol>

              <div className="image-container">
                <img src={mingwInstallImg} alt="MinGW Installation Options" />
                <p className="image-caption">MinGW Installation Settings</p>
              </div>
            </div>

            <div className="installation-steps">
              <h3>Step 2: Set Up Environment Variables</h3>
              <ol>
                <li>Open Windows Search and type "Environment Variables"</li>
                <li>Click "Edit the system environment variables"</li>
                <li>Click "Environment Variables" button</li>
                <li>Under "System Variables", find and select "Path"</li>
                <li>Click "New" and add the MinGW bin directory path:
                  <code>C:\mingw64\bin</code></li>
                <li>Click "OK" on all windows to save</li>
              </ol>

              <div className="important-note">
                <h4>Important:</h4>
                <p>Restart your computer after setting environment variables!</p>
              </div>
            </div>

            <h3>Step 3: Verify Installation</h3>
            <p>Open Command Prompt and run:</p>
            <CodeBlock code={checkGccVersion} />
          </section>

          <section className="ide-setup">
            <h2>Setting Up Visual Studio Code</h2>
            
            <div className="ide-steps">
              <h3>Step 1: Install VS Code</h3>
              <ol>
                <li>Download <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
                <li>Run the installer with default settings</li>
              </ol>

              <h3>Step 2: Install C/C++ Extensions</h3>
              <ol>
                <li>Open VS Code</li>
                <li>Go to Extensions (Ctrl+Shift+X)</li>
                <li>Search for and install:
                  <ul>
                    <li>C/C++ (by Microsoft)</li>
                    <li>Code Runner (optional)</li>
                  </ul>
                </li>
              </ol>

              <div className="image-container">
                <img src={vsCodeCImg} alt="VS Code C/C++ Extension" />
                <p className="image-caption">VS Code C/C++ Extension</p>
              </div>
            </div>
          </section>

          <section className="first-program">
            <h2>Creating Your First C Program</h2>

            <div className="program-steps">
              <h3>Hello World Program</h3>
              <p>Create a new file named <code>hello.c</code> and add this code:</p>
              <CodeBlock code={helloWorldCode} language="c" />

              <h3>Compiling and Running</h3>
              <p>Open terminal in VS Code (Ctrl+`) and run:</p>
              <CodeBlock code={compileCode} />
            </div>

            <div className="tip-card">
              <h4>Pro Tip:</h4>
              <p>
                Use Code Runner extension to compile and run with a single click
                (Ctrl+Alt+N)
              </p>
            </div>
          </section>

          <section className="configuration">
            <h2>VS Code Configuration</h2>

            <div className="config-card">
              <h4>tasks.json</h4>
              <p>Configure build tasks for C programs:</p>
              <CodeBlock 
                code={`{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "cppbuild",
      "label": "C/C++: gcc.exe build active file",
      "command": "C:\\mingw64\\bin\\gcc.exe",
      "args": [
        "-g",
        "\${file}",
        "-o",
        "\${fileDirname}\\\\"
      ],
      "options": {
        "cwd": "\${fileDirname}"
      },
      "problemMatcher": [
        "$gcc"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}`} 
                language="json"
              />
            </div>
          </section>

          <section className="troubleshooting">
            <h2>Common Issues and Solutions</h2>

            <div className="issue-card">
              <h4>'gcc' is not recognized</h4>
              <p>
                Ensure MinGW is properly added to PATH and you've restarted your
                computer. Double-check the environment variable path.
              </p>
            </div>

            <div className="issue-card">
              <h4>Permission Denied</h4>
              <p>
                Run VS Code as administrator or check file permissions in your
                working directory.
              </p>
            </div>
          </section>

          <section className="best-practices">
            <h2>Best Practices</h2>

            <div className="practice-card">
              <h4>Project Organization</h4>
              <p>Keep your C files organized in separate project folders</p>
            </div>

            <div className="practice-card">
              <h4>File Naming</h4>
              <p>Use meaningful names for your C files and avoid spaces</p>
            </div>

            <div className="practice-card">
              <h4>Regular Backups</h4>
              <p>Use version control (Git) for your projects</p>
            </div>
          </section>

          <section className="next-steps">
            <h2>Next Steps</h2>
            <div className="next-steps-content">
              <p>After setting up your C programming environment:</p>
              <ul>
                <li>Learn C fundamentals</li>
                <li>Practice with simple programs</li>
                <li>Explore debugging techniques</li>
                <li>Join C programming communities</li>
              </ul>
            </div>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              You now have a complete C programming environment set up on your Windows
              system. You can start writing, compiling, and running C programs using
              industry-standard tools.
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
}

export default CSetupPost;
