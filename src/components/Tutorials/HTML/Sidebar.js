import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

function Sidebar({ isOpen, onSelectContent, selectedContent }) {
    const [expandedSections, setExpandedSections] = useState({
      introduction: true,
      basicTags: false
    });
  
    const introductionItems = [
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
  
    const basicTagsItems = [
      { id: "skeletalTags", title: "Skeletal Tags" },
      { id: "headingTags", title: "Heading Tags" },
      { id: "paragraphTag", title: "Paragraph Tag" },
      { id: "horizontalLineTag", title: "Horizontal Line Tag" },
      { id: "lineBreakTag", title: "Line Break Tag" },
      { id: "anchorTag", title: "Anchor Tag" },
      { id: "imageTag", title: "Image Tag" },
      { id: "preTag", title: "Pre Tag" }
    ];
  
    const toggleSection = (section) => {
      setExpandedSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };
  
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="tutorial-title">HTML Tutorial</h2>
        
        <div className="sidebar-menu">
          {/* Introduction Section */}
          <div className="menu-section">
            <div 
              className={`menu-section-header ${expandedSections.introduction ? 'expanded' : ''}`}
              onClick={() => toggleSection('introduction')}
            >
              <span>Introduction</span>
              {expandedSections.introduction ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            
            {expandedSections.introduction && (
              <div className="menu-section-content">
                {introductionItems.map(item => (
                  <div 
                    key={item.id}
                    className={`menu-item ${selectedContent === item.id ? 'active' : ''}`}
                    onClick={() => onSelectContent(item.id)}
                  >
                    <span>{item.title}</span>
                    <MdKeyboardArrowRight />
                  </div>
                ))}
              </div>
            )}
          </div>
  
          {/* Basic Tags Section */}
          <div className="menu-section">
            <div 
              className={`menu-section-header ${expandedSections.basicTags ? 'expanded' : ''}`}
              onClick={() => toggleSection('basicTags')}
            >
              <span>HTML BASIC TAGS</span>
              {expandedSections.basicTags ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            
            {expandedSections.basicTags && (
              <div className="menu-section-content">
                {basicTagsItems.map(item => (
                  <div 
                    key={item.id}
                    className={`menu-item ${selectedContent === item.id ? 'active' : ''}`}
                    onClick={() => onSelectContent(item.id)}
                  >
                    <span>{item.title}</span>
                    <MdKeyboardArrowRight />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

export default Sidebar;