// src/components/Tutorials/Java/JavaDashboard.js
import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./JavaDashboard.css";
import Sidebar from "./Sidebar";

// Import all content components
import JavaIntroductionContent from "./content/JavaIntroduction/JavaIntroduction";
import JavaBasicSyntax from "./content/JavaBasicSyntax/JavaBasicSyntax";
import JavaWorking from "./content/JavaWorking/JavaWorking";
import JavaInstallation from "./content/JavaInstallation/JavaInstallation";

function JavaDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("javaIntroduction");
  const mainContentRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (selectedContent) {
      // Introduction section
      case "javaIntroduction":
        return <JavaIntroductionContent />;
      case "javaWorking":
        return <JavaWorking />;
      case "javaInstallation":
        return <JavaInstallation />;
    //   case "javaExecution":
    //     return <JavaExecution />;
      case "javaBasicSyntax":
        return <JavaBasicSyntax />;
      // case "javaHistory":
      //   return <JavaHistoryContent />;
      // case "javaFeatures":
      //   return <JavaFeaturesContent />;
      // case "javaJDK":
      //   return <JavaJDKContent />;
      // case "javaJRE":
      //   return <JavaJREContent />;
      // case "javaIDEs":
      //   return <JavaIDEsContent />;

      // Basic Concepts section
      // case "javaVariables":
      //   return <JavaVariablesContent />;
      // case "javaDataTypes":
      //   return <JavaDataTypesContent />;
      // case "javaOperators":
      //   return <JavaOperatorsContent />;
      // case "javaControlFlow":
      //   return <JavaControlFlowContent />;
      // case "javaLoops":
      //   return <JavaLoopsContent />;
      // case "javaArrays":
      //   return <JavaArraysContent />;
      // case "javaStrings":
      //   return <JavaStringsContent />;
      // case "javaMethods":
      //   return <JavaMethodsContent />;
        
      // Default case
      default:
        return <JavaIntroductionContent />;
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

export default JavaDashboard;