// src/components/Tutorials/HTML/HTMLDashboard.js
import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HTMLDashboard.css";
import Sidebar from "./Sidebar";

// Import all content components
import HTMLIntroductionContent from "./content/HTMLIntroduction";
import HTMLInstallation from "./content/HTMLInstallation";
import HTMLWorking from "./content/HTMLWorking";
import HTMLExecution from "./content/HTMLExecution";
import SkeletalTags from "./content/SkeletalTags"
function HTMLDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("htmlIntroduction");
  const mainContentRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (selectedContent) {
      // Introduction section
      case "htmlIntroduction":
        return <HTMLIntroductionContent />;
      case "htmlWorking":
        return <HTMLWorking />;
      case "htmlInstallation":
        return <HTMLInstallation />;
      case "htmlExecution":
        return <HTMLExecution />;
      // case "htmlPageStructure":
      //   return <HTMLPageStructureContent />;
      // case "htmlTags":
      //   return <HTMLTagsContent />;
      // case "htmlElements":
      //   return <HTMLElementsContent />;
      // case "htmlAttributes":
      //   return <HTMLAttributesContent />;
      // case "htmlComments":
      //   return <HTMLCommentsContent />;
      // case "htmlIdClasses":
      //   return <HTMLIdClassesContent />;

      // Basic Tags section
      case "skeletalTags":
        return <SkeletalTags />;
      // case "headingTags":
      //   return <HeadingTagsContent />;
      // case "paragraphTag":
      //   return <ParagraphTagContent />;
      // case "horizontalLineTag":
      //   return <HorizontalLineTagContent />;
      // case "lineBreakTag":
      //   return <LineBreakTagContent />;
      // case "anchorTag":
      //   return <AnchorTagContent />;
      // case "imageTag":
      //   return <ImageTagContent />;
      // case "preTag":
      //   return <PreTagContent />;
        
      // Default case
      default:
        return <HTMLIntroductionContent />;
    }
  };

  return (
    <div className="dashboard-container">
      <button 
        className="sidebar-toggle" 
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <Sidebar
        isOpen={isSidebarOpen}
        onSelectContent={setSelectedContent}
        selectedContent={selectedContent}
        mainContentRef={mainContentRef}
      />

      <main 
        className={`main-content ${!isSidebarOpen ? 'expanded' : ''}`}
        ref={mainContentRef}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default HTMLDashboard;
