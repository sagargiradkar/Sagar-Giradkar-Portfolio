// src/components/Tutorials/Java/content/JavaIDEs/JavaIDEs.js

import React from 'react';
import { Link } from 'react-router-dom';
import './JavaIDEs.css';

function JavaIDEs() {
    const ides = [
        {
            name: "Eclipse",
            logo: "/images/eclipse-logo.png",
            description: "Popular open-source IDE with extensive plugin support",
            features: [
                "Rich debugging capabilities",
                "Git integration",
                "Large marketplace for plugins",
                "Built-in Maven support",
                "Code refactoring tools"
            ],
            pros: [
                "Free and open-source",
                "Large community support",
                "Highly customizable",
                "Cross-platform"
            ],
            cons: [
                "Can be resource-heavy",
                "Initial setup might be complex",
                "Update management can be tricky"
            ],
            downloadLink: "https://www.eclipse.org/downloads/"
        },
        {
            name: "IntelliJ IDEA",
            logo: "/images/intellij-logo.png",
            description: "Powerful IDE by JetBrains with smart code assistance",
            features: [
                "Intelligent code completion",
                "Advanced code analysis",
                "Built-in version control",
                "Database tools",
                "Framework support"
            ],
            pros: [
                "Superior code assistance",
                "Excellent UI/UX",
                "Powerful refactoring tools",
                "Integrated build tools"
            ],
            cons: [
                "Premium version is paid",
                "Resource intensive",
                "Steeper learning curve"
            ],
            downloadLink: "https://www.jetbrains.com/idea/download/"
        },
        {
            name: "NetBeans",
            logo: "/images/netbeans-logo.png",
            description: "Feature-rich IDE with excellent GUI builder",
            features: [
                "Drag-and-drop GUI builder",
                "Multi-language support",
                "Built-in server support",
                "Code templates",
                "Profile tools"
            ],
            pros: [
                "Free and open-source",
                "Easy to use",
                "Great for beginners",
                "Built-in project templates"
            ],
            cons: [
                "Slower than other IDEs",
                "Limited plugin ecosystem",
                "Less frequent updates"
            ],
            downloadLink: "https://netbeans.apache.org/download/"
        }
    ];

    const ideFeatures = {
        "Code Editing": [
            "Syntax highlighting",
            "Code completion",
            "Error detection",
            "Quick fixes",
            "Code formatting"
        ],
        "Debugging": [
            "Breakpoints",
            "Step debugging",
            "Variable inspection",
            "Expression evaluation",
            "Hot reload"
        ],
        "Version Control": [
            "Git integration",
            "SVN support",
            "Branch management",
            "Conflict resolution",
            "Change tracking"
        ],
        "Build Tools": [
            "Maven integration",
            "Gradle support",
            "Project management",
            "Dependency handling",
            "Build automation"
        ]
    };

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> IDEs
            </div>

            <h1 className="content-title">Java IDEs</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section">
                <h2>Popular Java IDEs</h2>
                <div className="ide-grid">
                    {ides.map((ide, index) => (
                        <div key={index} className="ide-card">
                            <div className="ide-header">
                                <img src={ide.logo} alt={`${ide.name} logo`} className="ide-logo" />
                                <h3>{ide.name}</h3>
                            </div>
                            <p className="ide-description">{ide.description}</p>
                            
                            <div className="ide-features">
                                <h4>Key Features</h4>
                                <ul>
                                    {ide.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ide-pros-cons">
                                <div className="pros">
                                    <h4>Pros</h4>
                                    <ul>
                                        {ide.pros.map((pro, idx) => (
                                            <li key={idx}>{pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cons">
                                    <h4>Cons</h4>
                                    <ul>
                                        {ide.cons.map((con, idx) => (
                                            <li key={idx}>{con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a href={ide.downloadLink} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="download-button">
                                Download {ide.name}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="content-section">
                <h2>Common IDE Features</h2>
                <div className="features-grid">
                    {Object.entries(ideFeatures).map(([category, features]) => (
                        <div key={category} className="feature-category">
                            <h3>{category}</h3>
                            <ul>
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="content-section">
                <h2>IDE Selection Guide</h2>
                <div className="selection-guide">
                    <div className="guide-card">
                        <h3>For Beginners</h3>
                        <p>Recommended: NetBeans or Eclipse</p>
                        <ul>
                            <li>Easy to set up</li>
                            <li>User-friendly interface</li>
                            <li>Good documentation</li>
                            <li>Community support</li>
                        </ul>
                    </div>

                    <div className="guide-card">
                        <h3>For Professionals</h3>
                        <p>Recommended: IntelliJ IDEA</p>
                        <ul>
                            <li>Advanced features</li>
                            <li>Superior code analysis</li>
                            <li>Professional tools</li>
                            <li>Enterprise support</li>
                        </ul>
                    </div>

                    <div className="guide-card">
                        <h3>For Teams</h3>
                        <p>Recommended: IntelliJ IDEA or Eclipse</p>
                        <ul>
                            <li>Collaboration features</li>
                            <li>Version control integration</li>
                            <li>Project management</li>
                            <li>CI/CD support</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2>IDE Setup Tips</h2>
                <div className="setup-tips">
                    <div className="tip">
                        <h3>1. System Requirements</h3>
                        <ul>
                            <li>Check minimum RAM requirements</li>
                            <li>Verify JDK compatibility</li>
                            <li>Ensure sufficient disk space</li>
                            <li>Check OS compatibility</li>
                        </ul>
                    </div>

                    <div className="tip">
                        <h3>2. Initial Configuration</h3>
                        <ul>
                            <li>Set JDK path</li>
                            <li>Configure memory settings</li>
                            <li>Set up plugins</li>
                            <li>Customize editor preferences</li>
                        </ul>
                    </div>

                    <div className="tip">
                        <h3>3. Performance Optimization</h3>
                        <ul>
                            <li>Adjust heap size</li>
                            <li>Disable unused plugins</li>
                            <li>Configure auto-save</li>
                            <li>Set indexing options</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/tools" className="prev-link">
                    ← Previous: Java Tools
                </Link>
                <Link to="/tutorials/java/debugging" className="next-link">
                    Next: Debugging in Java →
                </Link>
            </div>
        </div>
    );
}

export default JavaIDEs;
