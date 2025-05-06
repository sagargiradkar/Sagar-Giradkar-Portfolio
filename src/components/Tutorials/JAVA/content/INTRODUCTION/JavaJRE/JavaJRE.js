// src/components/Tutorials/Java/content/JavaJRE/JavaJRE.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaJRE.css';

function JavaJRE() {
    const jreVersionCheck = `java -version`;

    const javaClassExample = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

    const jvmMemoryExample = `java -Xmx512m -Xms256m MyApplication`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> JRE
            </div>

            <h1 className="content-title">Java Runtime Environment (JRE)</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>What is JRE?</h2>
                <div className="jre-overview">
                    <div className="info-box">
                        <div className="info-icon">🔄</div>
                        <div className="info-content">
                            <p>
                                The Java Runtime Environment (JRE) provides the minimum requirements
                                for executing a Java application. It consists of the Java Virtual
                                Machine (JVM), core classes, and supporting files.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JRE Architecture</h2>
                <div className="architecture-diagram">
                    <div className="layer" data-layer="Application">Java Application</div>
                    <div className="layer-arrow">↓</div>
                    <div className="layer" data-layer="JRE">
                        Java Runtime Environment
                        <div className="sub-layers">
                            <div className="sub-layer">Class Loader</div>
                            <div className="sub-layer">JVM</div>
                            <div className="sub-layer">Runtime Libraries</div>
                        </div>
                    </div>
                    <div className="layer-arrow">↓</div>
                    <div className="layer" data-layer="OS">Operating System</div>
                </div>
            </section>

            <section className="content-section">
                <h2>JRE Components</h2>
                <div className="components-grid">
                    <div className="component-card">
                        <h3>Java Virtual Machine (JVM)</h3>
                        <ul>
                            <li>Class Loader Subsystem</li>
                            <li>Runtime Data Areas</li>
                            <li>Execution Engine</li>
                            <li>Native Method Interface</li>
                        </ul>
                    </div>

                    <div className="component-card">
                        <h3>Runtime Libraries</h3>
                        <ul>
                            <li>Java Class Libraries</li>
                            <li>Integration Libraries</li>
                            <li>Lang and Util Classes</li>
                            <li>Input/Output Classes</li>
                        </ul>
                    </div>

                    <div className="component-card">
                        <h3>Supporting Files</h3>
                        <ul>
                            <li>Property Settings</li>
                            <li>Resource Files</li>
                            <li>Deployment Files</li>
                            <li>Security Files</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JRE vs JDK</h2>
                <div className="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>JRE</th>
                                <th>JDK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Purpose</td>
                                <td>Running Java Applications</td>
                                <td>Developing Java Applications</td>
                            </tr>
                            <tr>
                                <td>Components</td>
                                <td>JVM + Libraries</td>
                                <td>JRE + Development Tools</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>Smaller</td>
                                <td>Larger</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="content-section">
                <h2>Installation and Verification</h2>
                <div className="setup-steps">
                    <div className="step-card">
                        <h3>1. Download JRE</h3>
                        <p>Download from Oracle's official website</p>
                        <a href="https://www.java.com/download/" target="_blank" rel="noopener noreferrer" 
                           className="download-button">
                            Download JRE
                        </a>
                    </div>

                    <div className="step-card">
                        <h3>2. Install JRE</h3>
                        <p>Run the installer and follow the setup wizard</p>
                    </div>

                    <div className="step-card">
                        <h3>3. Verify Installation</h3>
                        <CodeBlock initialCode={jreVersionCheck} />
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Running Java Applications</h2>
                <div className="execution-example">
                    <h3>Example Java Class</h3>
                    <CodeBlock initialCode={javaClassExample} />
                    
                    <div className="execution-steps">
                        <div className="step">
                            <h4>1. Save as HelloWorld.java</h4>
                        </div>
                        <div className="step">
                            <h4>2. Compile: javac HelloWorld.java</h4>
                        </div>
                        <div className="step">
                            <h4>3. Run: java HelloWorld</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>JVM Memory Management</h2>
                <div className="memory-management">
                    <div className="memory-areas">
                        <div className="memory-area">
                            <h3>Heap Memory</h3>
                            <p>Object storage and garbage collection</p>
                        </div>
                        <div className="memory-area">
                            <h3>Stack Memory</h3>
                            <p>Method execution and local variables</p>
                        </div>
                        <div className="memory-area">
                            <h3>Method Area</h3>
                            <p>Class structures and static variables</p>
                        </div>
                    </div>

                    <div className="memory-settings">
                        <h3>Memory Settings Example</h3>
                        <CodeBlock initialCode={jvmMemoryExample} />
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Troubleshooting</h2>
                <div className="troubleshooting-grid">
                    <div className="trouble-card">
                        <h3>OutOfMemoryError</h3>
                        <p>Increase heap size using -Xmx parameter</p>
                    </div>
                    <div className="trouble-card">
                        <h3>ClassNotFoundException</h3>
                        <p>Check classpath and class availability</p>
                    </div>
                    <div className="trouble-card">
                        <h3>StackOverflowError</h3>
                        <p>Check for infinite recursion or increase stack size</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/jdk" className="prev-link">
                    ← Previous: Java Development Kit
                </Link>
                <Link to="/tutorials/java/jvm" className="next-link">
                    Next: Java Virtual Machine →
                </Link>
            </div>
        </div>
    );
}

export default JavaJRE;
