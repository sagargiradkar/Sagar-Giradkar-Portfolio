// src/components/Tutorials/Java/content/JavaInstallation/JavaInstallation.js

import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import './JavaInstallation.css';

function JavaInstallation() {
    const verifyJavaCode = `java -version
javac -version`;

    const systemPathCode = `echo %JAVA_HOME%
echo $JAVA_HOME    // for Unix/Linux/Mac`;

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> Installation
            </div>

            <h1 className="content-title">Java Installation Guide</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Prerequisites</h2>
                <div className="prerequisites-box">
                    <h3>System Requirements:</h3>
                    <ul>
                        <li>RAM: Minimum 4GB (8GB recommended)</li>
                        <li>Disk Space: At least 2GB free space</li>
                        <li>Operating System: Windows 7 or later, macOS 10.13 or later, Linux</li>
                        <li>Internet connection for downloading</li>
                    </ul>
                </div>
            </section>

            <section className="content-section">
                <h2>Download JDK</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Visit Oracle Website</h3>
                            <p>Go to <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">Oracle's Java Downloads page</a></p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Choose JDK Version</h3>
                            <p>Select the latest LTS (Long Term Support) version for your operating system</p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Download and Install</h3>
                            <p>Download the installer and run it with administrative privileges</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Installation Steps</h2>
                
                <div className="os-specific-instructions">
                    <h3>Windows Installation</h3>
                    <ol>
                        <li>Run the downloaded .exe file</li>
                        <li>Follow the installation wizard</li>
                        <li>Set JAVA_HOME environment variable</li>
                        <li>Add Java to System PATH</li>
                    </ol>

                    <h3>macOS Installation</h3>
                    <ol>
                        <li>Open the downloaded .dmg file</li>
                        <li>Follow the installation process</li>
                        <li>Verify installation in Terminal</li>
                    </ol>

                    <h3>Linux Installation</h3>
                    <ol>
                        <li>Extract the downloaded .tar.gz file</li>
                        <li>Move to /usr/local/java/</li>
                        <li>Update environment variables</li>
                        <li>Update alternatives</li>
                    </ol>
                </div>

                <div className="warning-box">
                    <h4>⚠️ Important Note</h4>
                    <p>Make sure to set the JAVA_HOME environment variable and update your system's PATH variable after installation.</p>
                </div>
            </section>

            <section className="content-section">
                <h2>Verify Installation</h2>
                <p>Open a terminal/command prompt and run the following commands:</p>
                <CodeBlock initialCode={verifyJavaCode} />

                <h3>Check Environment Variables</h3>
                <CodeBlock initialCode={systemPathCode} />
            </section>

            <section className="content-section">
                <h2>Integrated Development Environments (IDEs)</h2>
                <div className="ide-options">
                    <div className="ide-card">
                        <h3>Eclipse</h3>
                        <p>Popular open-source IDE with extensive plugin support</p>
                        <a href="https://www.eclipse.org/downloads/" target="_blank" rel="noopener noreferrer">Download Eclipse</a>
                    </div>

                    <div className="ide-card">
                        <h3>IntelliJ IDEA</h3>
                        <p>Powerful IDE with advanced features and smart coding assistance</p>
                        <a href="https://www.jetbrains.com/idea/download/" target="_blank" rel="noopener noreferrer">Download IntelliJ IDEA</a>
                    </div>

                    <div className="ide-card">
                        <h3>NetBeans</h3>
                        <p>Feature-rich IDE supporting multiple programming languages</p>
                        <a href="https://netbeans.apache.org/download/" target="_blank" rel="noopener noreferrer">Download NetBeans</a>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>Troubleshooting</h2>
                <div className="troubleshooting-section">
                    <div className="common-issue">
                        <h3>'java' is not recognized</h3>
                        <p>This usually means Java is not properly added to your system's PATH variable.</p>
                        <div className="solution">
                            <strong>Solution:</strong> Verify your environment variables and PATH settings.
                        </div>
                    </div>

                    <div className="common-issue">
                        <h3>Multiple Java versions</h3>
                        <p>Multiple Java versions can cause conflicts.</p>
                        <div className="solution">
                            <strong>Solution:</strong> Use the update-alternatives command (Linux) or modify PATH priority (Windows).
                        </div>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/introduction" className="prev-link">
                    ← Previous: Introduction to Java
                </Link>
                <Link to="/tutorials/java/first-program" className="next-link">
                    Next: Your First Java Program →
                </Link>
            </div>
        </div>
    );
}

export default JavaInstallation;
