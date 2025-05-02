// components/Blog/BlogPost/CppSetupPost/CppSetupPost.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../../Particle";
import cppSetupImg from "../../../../Assets/Blogs/cpp-setup.jpg";
import mingwInstallImg from "../../../../Assets/Blogs/mingw.jpg";
import vsCodeCppImg from "../../../../Assets/Blogs/vscode.jpg";
import cppDebugImg from "../../../../Assets/Blogs/cpp-debug.jpg";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./CppSetupPost.css";

function CppSetupPost() {
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

  const checkGppVersion = `g++ --version`;

  const helloWorldCode = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`;

  const compileCode = `g++ program.cpp -o program
./program  // On Windows: program.exe`;

  const propertiesJson = `{
  "configurations": [
    {
      "name": "Win32",
      "includePath": [
        "\${workspaceFolder}/**"
      ],
      "defines": [
        "_DEBUG",
        "UNICODE",
        "_UNICODE"
      ],
      "compilerPath": "C:\\mingw64\\bin\\g++.exe",
      "cStandard": "c17",
      "cppStandard": "c++17",
      "intelliSenseMode": "windows-gcc-x64"
    }
  ],
  "version": 4
}`;

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-content">
        <div className="blog-featured-image">
          <img src={cppSetupImg} alt="C++ Programming Setup on Windows" />
        </div>

        <div className="blog-header">
          <h1>Complete Guide to Installing C++ Development Environment on Windows</h1>
          <div className="blog-subtitle">
            <p className="italics">
              "A comprehensive guide to setting up a modern C++ development environment
              with MinGW-w64, VS Code, and essential extensions"
            </p>
          </div>
        </div>

        <div className="blog-meta">
          <span>By Sagar Giradkar</span>
          <span>Updated: {new Date().toLocaleDateString()}</span>
          <span>Reading Time: 15 minutes</span>
        </div>

        <div className="blog-main-content">
          <section className="introduction">
            <h2>Introduction</h2>
            <p>
              Setting up a C++ development environment on Windows requires several
              components working together: a compiler, an IDE, and proper configuration.
              This guide will walk you through installing and configuring everything
              you need for C++ development.
            </p>
          </section>

          <section className="prerequisites">
            <h2>Prerequisites</h2>
            <div className="requirement-card">
              <h4>System Requirements</h4>
              <ul>
                <li>Windows 10 or Windows 11</li>
                <li>At least 4GB RAM (8GB recommended)</li>
                <li>2GB free disk space</li>
                <li>Internet connection</li>
                <li>Administrator privileges</li>
              </ul>
            </div>
          </section>

          <section className="compiler-installation">
            <h2>Installing MinGW-w64 (C++ Compiler)</h2>

            <div className="installation-steps">
              <h3>Step 1: Download MinGW-w64</h3>
              <ol>
                <li>Visit the <a href="https://winlibs.com/" target="_blank" rel="noopener noreferrer">WinLibs</a> website</li>
                <li>Download the latest MinGW-w64 release (with UCRT runtime)</li>
                <li>Choose the following options:
                  <ul>
                    <li>Architecture: x86_64</li>
                    <li>GCC Version: Latest (e.g., 12.2.0)</li>
                    <li>Type: Win64</li>
                  </ul>
                </li>
              </ol>

              <div className="image-container">
                <img src={mingwInstallImg} alt="MinGW Installation" />
                <p className="image-caption">MinGW-w64 Download Page</p>
              </div>
            </div>

            <div className="installation-steps">
              <h3>Step 2: Install MinGW-w64</h3>
              <ol>
                <li>Extract the downloaded archive to <code>C:\mingw64</code></li>
                <li>Add MinGW to System PATH:
                  <ol>
                    <li>Open System Properties (Win + Pause)</li>
                    <li>Click "Advanced system settings"</li>
                    <li>Click "Environment Variables"</li>
                    <li>Under "System variables", find and select "Path"</li>
                    <li>Click "New" and add <code>C:\mingw64\bin</code></li>
                  </ol>
                </li>
              </ol>

              <div className="important-note">
                <h4>Important:</h4>
                <p>Restart your system after modifying environment variables!</p>
              </div>
            </div>

            <h3>Step 3: Verify Installation</h3>
            <p>Open Command Prompt and run:</p>
            <CodeBlock code={checkGppVersion} />
          </section>

          <section className="ide-setup">
            <h2>Setting Up Visual Studio Code</h2>
            
            <div className="ide-steps">
              <h3>Step 1: Install VS Code</h3>
              <ol>
                <li>Download <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
                <li>Run the installer</li>
                <li>Enable "Add to PATH" during installation</li>
              </ol>

              <h3>Step 2: Install C++ Extensions</h3>
              <ol>
                <li>Open VS Code</li>
                <li>Go to Extensions (Ctrl+Shift+X)</li>
                <li>Install the following extensions:
                  <ul>
                    <li>C/C++ (by Microsoft)</li>
                    <li>C/C++ Extension Pack</li>
                    <li>Code Runner (optional)</li>
                  </ul>
                </li>
              </ol>

              <div className="image-container">
                <img src={vsCodeCppImg} alt="VS Code C++ Extensions" />
                <p className="image-caption">Required VS Code Extensions</p>
              </div>
            </div>
          </section>

          <section className="configuration">
            <h2>Configuring VS Code for C++</h2>

            <div className="config-steps">
              <h3>Step 1: Create c_cpp_properties.json</h3>
              <p>Press Ctrl+Shift+P, type "C/C++: Edit Configurations", and add:</p>
              <CodeBlock code={propertiesJson} language="json" />

              <h3>Step 2: Configure Build Tasks</h3>
              <p>Create <code>.vscode/tasks.json</code>:</p>
              <CodeBlock 
                code={`{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "cppbuild",
      "label": "C/C++: g++.exe build active file",
      "command": "C:\\mingw64\\bin\\g++.exe",
      "args": [
        "-fdiagnostics-color=always",
        "-g",
        "\${file}",
        "-o",
        "\${fileDirname}\\\\",
        "-std=c++17"
      ],
      "options": {
        "cwd": "\${fileDirname}"
      },
      "problemMatcher": ["$gcc"],
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

          <section className="first-program">
            <h2>Creating Your First C++ Program</h2>

            <div className="program-steps">
              <h3>Hello World Program</h3>
              <p>Create a new file named <code>hello.cpp</code>:</p>
              <CodeBlock code={helloWorldCode} language="cpp" />

              <h3>Building and Running</h3>
              <p>Use these commands in terminal:</p>
              <CodeBlock code={compileCode} />

              <div className="tip-card">
                <h4>Pro Tip:</h4>
                <p>
                  Press F5 to debug or Ctrl+F5 to run without debugging in VS Code
                </p>
              </div>
            </div>
          </section>

          <section className="debugging">
            <h2>Setting Up Debugging</h2>

            <div className="debug-steps">
              <h3>Configure launch.json</h3>
              <CodeBlock 
                code={`{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "g++.exe - Build and debug active file",
      "type": "cppdbg",
      "request": "launch",
      "program": "\${fileDirname}\\\\",
      "args": [],
      "stopAtEntry": false,
      "cwd": "\${fileDirname}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "miDebuggerPath": "C:\\mingw64\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "C/C++: g++.exe build active file"
    }
  ]
}`}
                language="json"
              />

              <div className="image-container">
                <img src={cppDebugImg} alt="C++ Debugging in VS Code" />
                <p className="image-caption">Debugging C++ in VS Code</p>
              </div>
            </div>
          </section>

          <section className="troubleshooting">
            <h2>Common Issues and Solutions</h2>

            <div className="issue-card">
              <h4>'g++' is not recognized</h4>
              <p>
                Verify MinGW is properly added to PATH and you've restarted your
                system. Check the path in Environment Variables.
              </p>
            </div>

            <div className="issue-card">
              <h4>IntelliSense not working</h4>
              <p>
                Ensure c_cpp_properties.json is properly configured and the compiler
                path is correct. Try reloading VS Code.
              </p>
            </div>

            <div className="issue-card">
              <h4>Debugging not working</h4>
              <p>
                Verify GDB path in launch.json and ensure you're building with debug
                information (-g flag).
              </p>
            </div>
          </section>

          <section className="best-practices">
            <h2>Best Practices</h2>

            <div className="practice-card">
              <h4>Project Organization</h4>
              <ul>
                <li>Use separate folders for each project</li>
                <li>Create a consistent folder structure</li>
                <li>Keep source files in a 'src' directory</li>
                <li>Store headers in an 'include' directory</li>
              </ul>
            </div>

            <div className="practice-card">
              <h4>Code Style</h4>
              <ul>
                <li>Use consistent naming conventions</li>
                <li>Enable format on save in VS Code</li>
                <li>Use .clang-format for consistent formatting</li>
              </ul>
            </div>
          </section>

          <section className="next-steps">
            <h2>Next Steps</h2>
            <div className="next-steps-content">
              <p>After setting up your C++ environment:</p>
              <ul>
                <li>Learn modern C++ features (C++11 and later)</li>
                <li>Practice debugging techniques</li>
                <li>Explore STL (Standard Template Library)</li>
                <li>Try building larger projects</li>
                <li>Learn about build systems (CMake)</li>
              </ul>
            </div>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              You now have a professional C++ development environment set up on Windows.
              This setup will allow you to write, compile, debug, and run C++ programs
              efficiently. Remember to keep your tools updated and explore advanced
              features as you progress in your C++ journey.
            </p>
          </section>
        </div>
      </Container>
    </Container>
  );
}

export default CppSetupPost;
