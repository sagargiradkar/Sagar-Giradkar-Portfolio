// src/components/Tutorials/Java/JavaDashboard.js
import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./JavaDashboard.css";
import Sidebar from "./Sidebar";

// Import all content components
import JavaIntroductionContent from "./content/INTRODUCTION/JavaIntroduction/JavaIntroduction";
import JavaBasicSyntax from "./content/INTRODUCTION/JavaBasicSyntax/JavaBasicSyntax";
import JavaWorking from "./content/INTRODUCTION/JavaWorking/JavaWorking";
import JavaInstallation from "./content/INTRODUCTION/JavaInstallation/JavaInstallation";
import JavaExecution from "./content/INTRODUCTION/JavaExecution/JavaExecution";
import JavaHistory from "./content/INTRODUCTION/JavaHistory/JavaHistory";
import JavaFeatures from "./content/INTRODUCTION/JavaFeatures/JavaFeatures";
import JavaJDK from "./content/INTRODUCTION/JavaJDK/JavaJDK";
import JavaJRE from "./content/INTRODUCTION/JavaJRE/JavaJRE";
import JavaIDEs from "./content/INTRODUCTION/JavaIDEs/JavaIDEs";
import JavaVariables from "./content/BASIC CONCEPTS/JavaVariables/JavaVariables";
import JavaDataTypes from "./content/BASIC CONCEPTS/JavaDataTypes/JavaDataTypes";
import JavaOperators from "./content/BASIC CONCEPTS/JavaOperators/JavaOperators";
import JavaControlFlow from "./content/BASIC CONCEPTS/JavaControlFlow/JavaControlFlow";

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
      case "javaExecution":
        return <JavaExecution />;
      case "javaBasicSyntax":
        return <JavaBasicSyntax />;
      case "javaHistory":
        return <JavaHistory />;
      case "javaFeatures":
        return <JavaFeatures />;
      case "javaJDK":
        return <JavaJDK />;
      case "javaJRE":
        return <JavaJRE />;
      case "javaIDEs":
        return <JavaIDEs />;

      // Basic Concepts section
      case "javaVariables":
        return <JavaVariables />;
      case "javaDataTypes":
        return <JavaDataTypes />;
      case "javaOperators":
        return <JavaOperators />;
      case "javaControlFlow":
        return <JavaControlFlow />;
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