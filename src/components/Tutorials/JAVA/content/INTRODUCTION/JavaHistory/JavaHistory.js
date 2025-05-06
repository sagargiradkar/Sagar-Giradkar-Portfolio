// src/components/Tutorials/Java/content/JavaHistory/JavaHistory.js

import React from 'react';
import { Link } from 'react-router-dom';
import './JavaHistory.css';

function JavaHistory() {
    const timelineEvents = [
        {
            year: "1991",
            title: "Green Project Begins",
            description: "James Gosling, Mike Sheridan, and Patrick Naughton initiate the 'Green Project' at Sun Microsystems.",
            icon: "🌱"
        },
        {
            year: "1992",
            title: "Oak Language",
            description: "The team develops a new language called 'Oak', named after the oak tree outside Gosling's office.",
            icon: "🌳"
        },
        {
            year: "1995",
            title: "Java is Born",
            description: "Oak is renamed to 'Java' (inspired by Java coffee) and officially released to the public.",
            icon: "☕"
        },
        {
            year: "1996",
            title: "JDK 1.0",
            description: "First release of the Java Development Kit (JDK 1.0) with the promise of 'Write Once, Run Anywhere'.",
            icon: "💻"
        },
        {
            year: "2006",
            title: "Open Source",
            description: "Sun makes Java available under the GNU General Public License.",
            icon: "🔓"
        },
        {
            year: "2010",
            title: "Oracle Acquisition",
            description: "Oracle Corporation acquires Sun Microsystems and takes control of Java development.",
            icon: "🏢"
        },
        {
            year: "2014",
            title: "Java 8",
            description: "Major release with Lambda expressions and Stream API.",
            icon: "🚀"
        },
        {
            year: "2018",
            title: "Java 11 LTS",
            description: "Introduction of Long Term Support (LTS) versions.",
            icon: "📌"
        },
        {
            year: "2021",
            title: "Java 17 LTS",
            description: "Latest LTS release with significant improvements and new features.",
            icon: "✨"
        }
    ];

    return (
        <div className="content-wrapper">
            <div className="content-breadcrumb">
                <Link to="/tutorial/javatutorial">Tutorials</Link> <span>›</span>{" "}
                <Link to="/tutorial/javatutorial">Java</Link> <span>›</span> History
            </div>

            <h1 className="content-title">History of Java</h1>
            <p className="last-updated">Last Updated: 05 May, 2025</p>

            <section className="content-section introduction">
                <h2>Introduction</h2>
                <div className="intro-card">
                    <div className="intro-icon">☕</div>
                    <p>
                        Java's journey from a small project at Sun Microsystems to one of the 
                        world's most popular programming languages is a fascinating story of 
                        innovation, persistence, and evolution.
                    </p>
                </div>
            </section>

            <section className="content-section timeline">
                <h2>Java Timeline</h2>
                <div className="timeline-container">
                    {timelineEvents.map((event, index) => (
                        <div key={event.year} className="timeline-item">
                            <div className="timeline-icon">{event.icon}</div>
                            <div className="timeline-content">
                                <div className="timeline-year">{event.year}</div>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="content-section key-figures">
                <h2>Key Figures in Java's History</h2>
                <div className="figures-grid">
                    <div className="figure-card">
                        <div className="figure-image">👨‍💻</div>
                        <h3>James Gosling</h3>
                        <p>Known as the father of Java, led the original design and implementation</p>
                    </div>
                    <div className="figure-card">
                        <div className="figure-image">👨‍💼</div>
                        <h3>Patrick Naughton</h3>
                        <p>Initial team member and creator of the Java mascot "Duke"</p>
                    </div>
                    <div className="figure-card">
                        <div className="figure-image">👨‍🔬</div>
                        <h3>Mike Sheridan</h3>
                        <p>Original Green Team member and business strategist</p>
                    </div>
                </div>
            </section>

            <section className="content-section version-history">
                <h2>Major Version History</h2>
                <div className="version-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Version</th>
                                <th>Release Date</th>
                                <th>Key Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JDK 1.0</td>
                                <td>1996</td>
                                <td>Initial Release</td>
                            </tr>
                            <tr>
                                <td>Java 5</td>
                                <td>2004</td>
                                <td>Generics, Annotations</td>
                            </tr>
                            <tr>
                                <td>Java 8</td>
                                <td>2014</td>
                                <td>Lambda Expressions, Stream API</td>
                            </tr>
                            <tr>
                                <td>Java 11</td>
                                <td>2018</td>
                                <td>Long Term Support</td>
                            </tr>
                            <tr>
                                <td>Java 17</td>
                                <td>2021</td>
                                <td>Pattern Matching, Sealed Classes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="content-section impact">
                <h2>Impact on Software Development</h2>
                <div className="impact-grid">
                    <div className="impact-card">
                        <h3>Enterprise Applications</h3>
                        <p>Java became the standard for enterprise software development</p>
                    </div>
                    <div className="impact-card">
                        <h3>Mobile Development</h3>
                        <p>Powered Android development for many years</p>
                    </div>
                    <div className="impact-card">
                        <h3>Web Applications</h3>
                        <p>Established robust frameworks like Spring</p>
                    </div>
                    <div className="impact-card">
                        <h3>Cross-Platform</h3>
                        <p>Pioneered "Write Once, Run Anywhere" approach</p>
                    </div>
                </div>
            </section>

            <section className="content-section fun-facts">
                <h2>Fun Facts</h2>
                <div className="facts-container">
                    <div className="fact-card">
                        <div className="fact-icon">☕</div>
                        <p>Java was named after coffee grown in Java, Indonesia</p>
                    </div>
                    <div className="fact-card">
                        <div className="fact-icon">🎮</div>
                        <p>The original project was aimed at smart television devices</p>
                    </div>
                    <div className="fact-card">
                        <div className="fact-icon">🎯</div>
                        <p>Duke, Java's mascot, was created by Joe Klein in 1994</p>
                    </div>
                </div>
            </section>

            <div className="navigation-links">
                <Link to="/tutorials/java/introduction" className="prev-link">
                    ← Previous: Introduction
                </Link>
                <Link to="/tutorials/java/features" className="next-link">
                    Next: Java Features →
                </Link>
            </div>
        </div>
    );
}

export default JavaHistory;
