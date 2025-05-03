import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types'; 

// Move data to separate constants
const INTRODUCTION_ITEMS = [
  { id: "htmlIntroduction", title: "HTML Introduction" },
  { id: "htmlWorking", title: "HTML Working" },
  { id: "htmlInstallation", title: "HTML Installation" },
  { id: "htmlExecution", title: "HTML Execution" },
  { id: "htmlPageStructure", title: "HTML Page Structure" },
  { id: "htmlTags", title: "HTML Tags" },
  { id: "htmlElements", title: "HTML Elements" },
  { id: "htmlAttributes", title: "HTML Attributes" },
  { id: "htmlComments", title: "HTML Comments" },
  { id: "htmlIdClasses", title: "HTML Id & Classes" }
];

const BASIC_TAGS_ITEMS = [
  { id: "skeletalTags", title: "Skeletal Tags" },
  { id: "headingTags", title: "Heading Tags" },
  { id: "paragraphTag", title: "Paragraph Tag" },
  { id: "horizontalLineTag", title: "Horizontal Line Tag" },
  { id: "lineBreakTag", title: "Line Break Tag" },
  { id: "anchorTag", title: "Anchor Tag" },
  { id: "imageTag", title: "Image Tag" },
  { id: "preTag", title: "Pre Tag" }
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
    basicTags: false
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
        <h2 className="tutorial-title">HTML Tutorial</h2>
        
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
            title="HTML BASIC TAGS"
            items={BASIC_TAGS_ITEMS}
            isExpanded={expandedSections.basicTags}
            onToggle={() => toggleSection('basicTags')}
            selectedContent={selectedContent}
            onSelectContent={onSelectContent}
          />
        </nav>
      </div>
      
      <div className="sidebar-footer">
        HTML Tutorial © 2025
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