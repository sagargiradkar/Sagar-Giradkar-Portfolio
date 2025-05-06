// src/components/Tutorials/Java/content/JavaJDK/JavaJDK.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaJDK.css';

function JavaJDK() {
    const javaVersionCheck = `java -version
javac -version`;

    const javaHomeCheck = `// Windows
echo %JAVA_HOME%

// Linux/macOS
echo $JAVA_HOME`;

    const pathCheck = `// Windows
echo %PATH%

// Linux/macOS
echo $PATH`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> JDK
            </div>

            <h1 className="content-title">Java Development Kit (JDK)</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>What is JDK?</h2>
                <div className="jdk-overview">
                    <div className="info-card">
                        <div className="info-icon">⚙️</div>
                        <p>
                            The Java Development Kit (JDK) is a software development environment
                            used for developing Java applications. It includes the Java Runtime
                            Environment (JRE), an interpreter/loader (Java), a compiler (javac),
                            an archiver (jar), a documentation generator (Javadoc), and other
                            tools needed for Java development.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JDK Components</h2>
                <div className="components-grid">
                    <div className="component-card">
                        <h3>Development Tools</h3>
                        <ul>
                            <li>javac - Compiler</li>
                            <li>java - Interpreter</li>
                            <li>javadoc - Documentation Generator</li>
                            <li>jar - Archiver</li>
                            <li>javap - Class File Disassembler</li>
                        </ul>
                    </div>

                    <div className="component-card">
                        <h3>Runtime Environment</h3>
                        <ul>
                            <li>JRE (Java Runtime Environment)</li>
                            <li>JVM (Java Virtual Machine)</li>
                            <li>Core Classes and Libraries</li>
                        </ul>
                    </div>

                    <div className="component-card">
                        <h3>Additional Tools</h3>
                        <ul>
                            <li>jdb - Debugger</li>
                            <li>jps - Process Status</li>
                            <li>jstack - Stack Trace</li>
                            <li>jmap - Memory Map</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JDK Versions</h2>
                <div className="version-timeline">
                    {[
                        { version: "JDK 8", date: "March 2014", features: "Lambda Expressions, Stream API" },
                        { version: "JDK 11", date: "September 2018", features: "Dynamic Class-File Constants" },
                        { version: "JDK 17", date: "September 2021", features: "Sealed Classes, Pattern Matching" }
                    ].map((item, index) => (
                        <div key={index} className="version-card">
                            <div className="version-header">{item.version}</div>
                            <div className="version-date">{item.date}</div>
                            <div className="version-features">{item.features}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="content-section">
                <h2>Installation and Setup</h2>
                <div className="setup-steps">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Download JDK</h3>
                        <p>Download the latest JDK from Oracle's official website or adopt OpenJDK</p>
                        <div className="download-links">
                            <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">Oracle JDK</a>
                            <a href="https://adoptopenjdk.net/" target="_blank" rel="noopener noreferrer">OpenJDK</a>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Install JDK</h3>
                        <p>Run the installer and follow the installation wizard</p>
                    </div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Set Environment Variables</h3>
                        <p>Set JAVA_HOME and update PATH</p>
                        <CodeBlock initialCode={javaHomeCheck} />
                    </div>

                    <div className="step-card">
                        <div className="step-number">4</div>
                        <h3>Verify Installation</h3>
                        <p>Check Java version in terminal/command prompt</p>
                        <CodeBlock initialCode={javaVersionCheck} />
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Environment Variables</h2>
                <div className="env-variables">
                    <div className="env-card">
                        <h3>JAVA_HOME</h3>
                        <p>Points to JDK installation directory</p>
                        <CodeBlock initialCode={javaHomeCheck} />
                    </div>

                    <div className="env-card">
                        <h3>PATH</h3>
                        <p>Includes path to JDK bin directory</p>
                        <CodeBlock initialCode={pathCheck} />
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JDK vs JRE vs JVM</h2>
                <div className="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Purpose</th>
                                <th>Contents</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JDK</td>
                                <td>Development Environment</td>
                                <td>Development Tools + JRE</td>
                            </tr>
                            <tr>
                                <td>JRE</td>
                                <td>Runtime Environment</td>
                                <td>Libraries + JVM</td>
                            </tr>
                            <tr>
                                <td>JVM</td>
                                <td>Execution Environment</td>
                                <td>Java Bytecode Interpreter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="content-section">
                <h2>Troubleshooting</h2>
                <div className="troubleshooting-grid">
                    <div className="trouble-card">
                        <h3>'java' not recognized</h3>
                        <p>Check PATH environment variable and JDK installation</p>
                    </div>
                    <div className="trouble-card">
                        <h3>Multiple JDK versions</h3>
                        <p>Use update-alternatives (Linux) or modify PATH order</p>
                    </div>
                    <div className="trouble-card">
                        <h3>JAVA_HOME not set</h3>
                        <p>Set JAVA_HOME environment variable to JDK installation path</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/features" className="prev-link">
                    ← Previous: Java Features
                </Link>
                <Link to="/tutorials/java/installation" className="next-link">
                    Next: Java Installation →
                </Link>
            </div>
        </div>
    );
}

export default JavaJDK;
