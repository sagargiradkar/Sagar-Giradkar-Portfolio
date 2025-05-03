import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types'; 

// Move data to separate constants
const INTRODUCTION_ITEMS = [
  { id: "javaIntroduction", title: "Java Introduction" },
  { id: "javaWorking", title: "Java Working" },
  { id: "javaInstallation", title: "Java Installation" },
  { id: "javaExecution", title: "Java Execution" },
  { id: "javaBasicSyntax", title: "Java Basic Syntax" },
  { id: "javaHistory", title: "Java History" },
  { id: "javaFeatures", title: "Java Features" },
  { id: "javaJDK", title: "Java JDK" },
  { id: "javaJRE", title: "Java JRE" },
  { id: "javaIDEs", title: "Java IDEs" }
];

const BASIC_CONCEPTS_ITEMS = [
  { id: "javaVariables", title: "Variables" },
  { id: "javaDataTypes", title: "Data Types" },
  { id: "javaOperators", title: "Operators" },
  { id: "javaControlFlow", title: "Control Flow" },
  { id: "javaLoops", title: "Loops" },
  { id: "javaArrays", title: "Arrays" },
  { id: "javaStrings", title: "Strings" },
  { id: "javaMethods", title: "Methods" }
];

const OOP_CONCEPTS_ITEMS = [
  { id: "javaClasses", title: "Classes & Objects" },
  { id: "javaConstructors", title: "Constructors" },
  { id: "javaInheritance", title: "Inheritance" },
  { id: "javaPolymorphism", title: "Polymorphism" },
  { id: "javaAbstraction", title: "Abstraction" },
  { id: "javaEncapsulation", title: "Encapsulation" },
  { id: "javaInterfaces", title: "Interfaces" }
];

// Create a reusable MenuItem component
const MenuItem = ({ item, isActive, onClick }) => (
  <div 
    className={`menu-item ${isActive ? 'active' : ''}`}
    onClick={() => onClick(item.id)}
    id={`sidebar-item-${item.id}`}
  >
    <span>{item.title}</span>
    <MdKeyboardArrowRight className="menu-item-icon" />
  </div>
);

// Create a reusable MenuSection component
const MenuSection = ({ 
  title, 
  items, 
  isExpanded, 
  onToggle, 
  selectedContent, 
  onSelectContent 
}) => (
  <div className="menu-section">
    <div 
      className={`menu-section-header ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      <span>{title}</span>
      {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
    </div>
    
    {isExpanded && (
      <div className="menu-section-content">
        {items.map(item => (
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

function Sidebar({ isOpen, onSelectContent, selectedContent, mainContentRef }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    basicConcepts: false,
    oopConcepts: false
  });
  
  const sidebarMenuRef = useRef(null);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Scroll to selected content in the sidebar
  useEffect(() => {
    if (selectedContent && sidebarMenuRef.current) {
      const selectedElement = document.getElementById(`sidebar-item-${selectedContent}`);
      if (selectedElement) {
        // Calculate position to ensure element is visible but doesn't scroll footer into view
        const sidebarRect = sidebarMenuRef.current.getBoundingClientRect();
        const elemRect = selectedElement.getBoundingClientRect();
        const footerHeight = 60; // Match CSS var(--footer-height)
        
        // Check if element is below the visible area
        if (elemRect.bottom > sidebarRect.bottom - footerHeight) {
          selectedElement.scrollIntoView({ block: 'center' });
        }
        // Check if element is above the visible area
        else if (elemRect.top < sidebarRect.top) {
          selectedElement.scrollIntoView({ block: 'center' });
        }
      }
    }
  }, [selectedContent]);
  
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-inner">
        <h2 className="tutorial-title">Java Tutorial</h2>
        
        <nav className="sidebar-menu" ref={sidebarMenuRef}>
          <MenuSection
            title="Introduction"
            items={INTRODUCTION_ITEMS}
            isExpanded={expandedSections.introduction}
            onToggle={() => toggleSection('introduction')}
            selectedContent={selectedContent}
            onSelectContent={onSelectContent}
          />

          <MenuSection
            title="BASIC CONCEPTS"
            items={BASIC_CONCEPTS_ITEMS}
            isExpanded={expandedSections.basicConcepts}
            onToggle={() => toggleSection('basicConcepts')}
            selectedContent={selectedContent}
            onSelectContent={onSelectContent}
          />

          <MenuSection
            title="OOP CONCEPTS"
            items={OOP_CONCEPTS_ITEMS}
            isExpanded={expandedSections.oopConcepts}
            onToggle={() => toggleSection('oopConcepts')}
            selectedContent={selectedContent}
            onSelectContent={onSelectContent}
          />
        </nav>
      </div>
      
      <div className="sidebar-footer">
        Java Tutorial © 2025
      </div>
    </aside>
  );
}

// Add PropTypes for better development experience
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSelectContent: PropTypes.func.isRequired,
  selectedContent: PropTypes.string.isRequired,
  mainContentRef: PropTypes.object
};

export default Sidebar;