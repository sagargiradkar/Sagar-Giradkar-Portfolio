import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import PropTypes from "prop-types";

// SystemDesignDashboard.js
const SYSTEM_DESIGN_SECTIONS = {
    INTRODUCTION: [
        { id: "whatIsSystemDesign", title: "What is System Design?" },
        { id: "typesOfDesign", title: "Types of System Design (LLD vs HLD)" },
        { id: "designFundamentals", title: "Design Fundamentals" },
        { id: "systemRequirements", title: "System Requirements" },
        { id: "designPrinciples", title: "Design Principles" },
        { id: "scalabilityBasics", title: "Scalability Basics" },
        { id: "performanceBasics", title: "Performance Basics" },
        { id: "reliabilityBasics", title: "Reliability Basics" }
    ],

    LOW_LEVEL_DESIGN: [
        { id: "oopConcepts", title: "OOP Concepts" },
        { id: "solidPrinciples", title: "SOLID Principles" },
        { id: "designPatterns", title: "Design Patterns" },
        { id: "codeOrganization", title: "Code Organization" },
        { id: "errorHandling", title: "Error Handling" },
        { id: "testingStrategies", title: "Testing Strategies" }
    ],

    DESIGN_PATTERNS: [
        { id: "creationalPatterns", title: "Creational Patterns" },
        { id: "structuralPatterns", title: "Structural Patterns" },
        { id: "behavioralPatterns", title: "Behavioral Patterns" },
        { id: "architecturalPatterns", title: "Architectural Patterns" }
    ],

    LLD_CASE_STUDIES: [
        { id: "parkingLot", title: "Parking Lot System" },
        { id: "libraryManagement", title: "Library Management" },
        { id: "atmMachine", title: "ATM Machine" },
        { id: "elevatorSystem", title: "Elevator System" },
        { id: "chessGame", title: "Chess Game" }
    ],

    HIGH_LEVEL_DESIGN: [
        { id: "distributedSystems", title: "Distributed Systems" },
        { id: "scalability", title: "Scalability" },
        { id: "loadBalancing", title: "Load Balancing" },
        { id: "caching", title: "Caching" },
        { id: "microservices", title: "Microservices" },
        { id: "systemComponents", title: "System Components" }
    ],

    DATA_MANAGEMENT: [
        { id: "databases", title: "Databases (SQL vs NoSQL)" },
        { id: "dataStorage", title: "Data Storage" },
        { id: "dataPartitioning", title: "Data Partitioning" },
        { id: "replication", title: "Replication" },
        { id: "consistency", title: "Consistency Patterns" }
    ],

    SYSTEM_COMMUNICATION: [
        { id: "apiDesign", title: "API Design" },
        { id: "communication", title: "Communication Protocols" },
        { id: "messageQueues", title: "Message Queues" },
        { id: "eventDriven", title: "Event-Driven Architecture" }
    ],

    HLD_CASE_STUDIES: [
        { id: "urlShortener", title: "URL Shortener" },
        { id: "twitterClone", title: "Twitter Clone" },
        { id: "netflixArchitecture", title: "Netflix Architecture" },
        { id: "uberBackend", title: "Uber Backend" }
    ],

    SECURITY_AND_MONITORING: [
        { id: "authentication", title: "Authentication & Authorization" },
        { id: "security", title: "Security Patterns" },
        { id: "monitoring", title: "System Monitoring" },
        { id: "logging", title: "Logging & Debugging" }
    ],

    ADVANCED_TOPICS: [
        { id: "cloudNative", title: "Cloud Native Architecture" },
        { id: "containerization", title: "Containerization" },
        { id: "serverless", title: "Serverless Architecture" },
        { id: "devops", title: "DevOps Integration" }
    ]
};

// MenuItem Component
const MenuItem = ({ item, isActive, onClick }) => (
    <div
        className={`menu-item ${isActive ? "active" : ""}`}
        onClick={() => onClick(item.id)}
        id={`sidebar-item-${item.id}`}
    >
        <span>{item.title}</span>
        <MdKeyboardArrowRight className="menu-item-icon" />
    </div>
);

// MenuSection Component
const MenuSection = ({
    title,
    items,
    isExpanded,
    onToggle,
    selectedContent,
    onSelectContent,
}) => (
    <div className="menu-section">
        <div
            className={`menu-section-header ${isExpanded ? "expanded" : ""}`}
            onClick={onToggle}
        >
            <span>{title}</span>
            {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </div>

        {isExpanded && (
            <div className="menu-section-content">
                {items.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        isActive={selectedContent === item.id}
                        onClick={onSelectContent}
                    />
                ))}
            </div>
        )}
    </div>
);

// Main Sidebar Component
function Sidebar({ isOpen, onSelectContent, selectedContent, mainContentRef }) {
    // Initialize expanded sections state with all sections
    const [expandedSections, setExpandedSections] = useState(
        Object.keys(SYSTEM_DESIGN_SECTIONS).reduce(
            (acc, key) => ({
                ...acc,
                [key]: false,
            }),
            { INTRODUCTION: true }
        ) // Only Introduction expanded by default
    );

    const sidebarMenuRef = useRef(null);

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Scroll handling effect
    useEffect(() => {
        if (selectedContent && sidebarMenuRef.current) {
            const selectedElement = document.getElementById(
                `sidebar-item-${selectedContent}`
            );
            if (selectedElement) {
                const sidebarRect = sidebarMenuRef.current.getBoundingClientRect();
                const elemRect = selectedElement.getBoundingClientRect();
                const footerHeight = 60;

                if (
                    elemRect.bottom > sidebarRect.bottom - footerHeight ||
                    elemRect.top < sidebarRect.top
                ) {
                    selectedElement.scrollIntoView({ block: "center" });
                }
            }
        }
    }, [selectedContent]);

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-inner">
                <h2 className="tutorial-title">System Design Tutorial</h2>

                <nav className="sidebar-menu" ref={sidebarMenuRef}>
                    {Object.entries(SYSTEM_DESIGN_SECTIONS).map(([sectionKey, items]) => (
                        <MenuSection
                            key={sectionKey}
                            title={sectionKey.replace(/_/g, " ")}
                            items={items}
                            isExpanded={expandedSections[sectionKey]}
                            onToggle={() => toggleSection(sectionKey)}
                            selectedContent={selectedContent}
                            onSelectContent={onSelectContent}
                        />
                    ))}
                </nav>
            </div>

            <div className="sidebar-footer">System Design Tutorial © 2025</div>
        </aside>
    );
}

// PropTypes
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onSelectContent: PropTypes.func.isRequired,
    selectedContent: PropTypes.string.isRequired,
    mainContentRef: PropTypes.object,
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

MenuSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    selectedContent: PropTypes.string.isRequired,
    onSelectContent: PropTypes.func.isRequired,
};

export default Sidebar;
