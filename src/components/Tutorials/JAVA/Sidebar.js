import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import PropTypes from "prop-types";

const JAVA_TUTORIAL_SECTIONS = {
  INTRODUCTION_ITEMS: [
    { id: "javaIntroduction", title: "Java Introduction" },
    { id: "javaWorking", title: "Java Working" },
    { id: "javaInstallation", title: "Java Installation" },
    { id: "javaExecution", title: "Java Execution" },
    { id: "javaBasicSyntax", title: "Java Basic Syntax" },
    { id: "javaHistory", title: "Java History" },
    { id: "javaFeatures", title: "Java Features" },
    { id: "javaJDK", title: "Java JDK" },
    { id: "javaJRE", title: "Java JRE" },
    { id: "javaIDEs", title: "Java IDEs" },
  ],

  INTRODUCTION: [
    { id: "whatIsJava", title: "What is Java?" },
    { id: "javaFeatures", title: "Features of Java" },
    { id: "javaHistory", title: "History of Java" },
    { id: "javaEditions", title: "Java Editions (SE, EE, ME)" },
    { id: "javaArchitecture", title: "JDK, JRE, and JVM" },
    { id: "developmentEnvironment", title: "Development Environment Setup" },
    { id: "firstProgram", title: "First Java Program" },
    { id: "basicSyntax", title: "Basic Syntax and Structure" },
  ],
  BASIC_CONCEPTS_ITEMS: [
    { id: "javaVariables", title: "Variables" },
    { id: "javaDataTypes", title: "Data Types" },
    { id: "javaOperators", title: "Operators" },
    { id: "javaControlFlow", title: "Control Flow" },
    { id: "javaLoops", title: "Loops" },
    { id: "javaArrays", title: "Arrays" },
    { id: "javaStrings", title: "Strings" },
    { id: "javaMethods", title: "Methods" },
  ],
  LANGUAGE_FUNDAMENTALS: [
    { id: "comments", title: "Comments and Documentation" },
    { id: "identifiersKeywords", title: "Identifiers and Keywords" },
    { id: "dataTypes", title: "Data Types" },
    { id: "variables", title: "Variables and Constants" },
    { id: "typeCasting", title: "Type Casting" },
    { id: "operators", title: "Operators" },
    { id: "inputOutput", title: "Input/Output Operations" },
  ],

  CONTROL_FLOW: [
    { id: "ifElse", title: "If-Else Statements" },
    { id: "switchCase", title: "Switch-Case" },
    { id: "forLoop", title: "For Loop" },
    { id: "whileLoop", title: "While Loop" },
    { id: "doWhileLoop", title: "Do-While Loop" },
    { id: "jumpStatements", title: "Break, Continue, Return" },
  ],

  OOP_BASICS: [
    { id: "classesObjects", title: "Classes and Objects" },
    { id: "constructors", title: "Constructors" },
    { id: "methods", title: "Methods and Overloading" },
    { id: "thisKeyword", title: "This Keyword" },
    { id: "staticMembers", title: "Static Members" },
    { id: "accessModifiers", title: "Access Modifiers" },
  ],
  OOP_CONCEPTS_ITEMS: [
    { id: "javaClasses", title: "Classes & Objects" },
    { id: "javaConstructors", title: "Constructors" },
    { id: "javaInheritance", title: "Inheritance" },
    { id: "javaPolymorphism", title: "Polymorphism" },
    { id: "javaAbstraction", title: "Abstraction" },
    { id: "javaEncapsulation", title: "Encapsulation" },
    { id: "javaInterfaces", title: "Interfaces" },
  ],
  OOP_ADVANCED: [
    { id: "inheritance", title: "Inheritance" },
    { id: "superKeyword", title: "Super Keyword" },
    { id: "polymorphism", title: "Polymorphism" },
    { id: "abstraction", title: "Abstraction" },
    { id: "interfaces", title: "Interfaces" },
    { id: "encapsulation", title: "Encapsulation" },
  ],

  DATA_STRUCTURES: [
    { id: "arrays", title: "Arrays (1D and 2D)" },
    { id: "arrayOperations", title: "Array Operations" },
    { id: "strings", title: "Strings and String Methods" },
    { id: "stringBuilder", title: "StringBuilder and StringBuffer" },
    { id: "stringTokenizer", title: "StringTokenizer" },
  ],

  COLLECTIONS: [
    { id: "collectionInterface", title: "Collection Interface" },
    { id: "lists", title: "Lists (ArrayList, LinkedList)" },
    { id: "sets", title: "Sets (HashSet, TreeSet)" },
    { id: "maps", title: "Maps (HashMap, TreeMap)" },
    { id: "queues", title: "Queues and Stacks" },
    { id: "comparators", title: "Comparable and Comparator" },
  ],

  EXCEPTION_HANDLING: [
    { id: "tryCatch", title: "Try-Catch Blocks" },
    { id: "throwThrows", title: "Throw and Throws" },
    { id: "customExceptions", title: "Custom Exceptions" },
    { id: "exceptionTypes", title: "Checked vs Unchecked Exceptions" },
  ],

  IO_OPERATIONS: [
    { id: "fileClass", title: "File Class" },
    { id: "byteStreams", title: "Byte Streams" },
    { id: "charStreams", title: "Character Streams" },
    { id: "bufferedStreams", title: "Buffered Streams" },
    { id: "serialization", title: "Serialization" },
  ],

  MULTITHREADING: [
    { id: "threadBasics", title: "Thread Basics" },
    { id: "threadLifecycle", title: "Thread Lifecycle" },
    { id: "synchronization", title: "Synchronization" },
    { id: "threadCommunication", title: "Inter-thread Communication" },
    { id: "executorFramework", title: "Executor Framework" },
  ],

  GUI_PROGRAMMING: [
    { id: "swingBasics", title: "Swing Basics" },
    { id: "swingComponents", title: "Swing Components" },
    { id: "eventHandling", title: "Event Handling" },
    { id: "layoutManagers", title: "Layout Managers" },
    { id: "javaFX", title: "JavaFX (Optional)" },
  ],

  ADVANCED_FEATURES: [
    { id: "generics", title: "Generics" },
    { id: "lambdaExpressions", title: "Lambda Expressions" },
    { id: "streamAPI", title: "Stream API" },
    { id: "methodReferences", title: "Method References" },
    { id: "annotations", title: "Annotations" },
    { id: "reflection", title: "Reflection API" },
  ],

  DATABASE_JDBC: [
    { id: "jdbcBasics", title: "JDBC Basics" },
    { id: "jdbcConnectivity", title: "Database Connectivity" },
    { id: "jdbcOperations", title: "CRUD Operations" },
    { id: "transactions", title: "Transactions" },
  ],

  NETWORKING: [
    { id: "networkingBasics", title: "Networking Basics" },
    { id: "socketProgramming", title: "Socket Programming" },
    { id: "urlConnection", title: "URL and HTTP Connection" },
  ],

  MODERN_JAVA: [
    { id: "java8Features", title: "Java 8 Features" },
    { id: "java9To12", title: "Java 9-12 Features" },
    { id: "java13To17", title: "Java 13-17 Features" },
    { id: "modules", title: "Java Modules" },
  ],

  PRACTICAL_DEVELOPMENT: [
    { id: "consoleProjects", title: "Console Applications" },
    { id: "guiProjects", title: "GUI Applications" },
    { id: "databaseProjects", title: "Database Projects" },
    { id: "testing", title: "Unit Testing" },
    { id: "buildTools", title: "Build Tools" },
    { id: "deployment", title: "Deployment" },
  ],

  CAREER_PREPARATION: [
    { id: "interviewQuestions", title: "Interview Questions" },
    { id: "codingPractice", title: "Coding Practice" },
    { id: "certificationPrep", title: "Certification Preparation" },
  ],
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
    Object.keys(JAVA_TUTORIAL_SECTIONS).reduce(
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
        <h2 className="tutorial-title">Java Tutorial</h2>

        <nav className="sidebar-menu" ref={sidebarMenuRef}>
          {Object.entries(JAVA_TUTORIAL_SECTIONS).map(([sectionKey, items]) => (
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

      <div className="sidebar-footer">Java Tutorial © 2025</div>
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
