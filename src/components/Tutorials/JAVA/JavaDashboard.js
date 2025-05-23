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
import JavaLoops from "./content/BASIC CONCEPTS/JavaLoops/JavaLoops";
import JavaArrays from "./content/BASIC CONCEPTS/JavaArrays/JavaArrays";
import JavaStrings from "./content/BASIC CONCEPTS/JavaStrings/JavaStrings";
import JavaMethods from "./content/BASIC CONCEPTS/JavaMethods/JavaMethods";
import WhatIsJava from "./content/INTRODUCTION/WhatIsJava/WhatIsJava";
import JavaEdition from "./content/INTRODUCTION/JavaEdition/JavaEdition";
import JavaArchitecture from "./content/INTRODUCTION/JavaArchitecture/JavaArchitecture";
import JavaComments from "./content/BASIC CONCEPTS/JavaComments/JavaComments";
import TypeCasting from "./content/BASIC CONCEPTS/TypeCasting/TypeCasting";
import JavaIO from "./content/BASIC CONCEPTS/JavaIO/JavaIO";
import TopicNotFound from "./content/INTRODUCTION/TopicNotFound/TopicNotFound";
import ClassesAndObjects from "./content/OOP BASIC/ClassesAndObjects/ClassesAndObjects";
import Constructors from "./content/OOP BASIC/Constructors/Constructors";
import MethodsAndOverloading from "./content/OOP BASIC/Methods and Overloading/MethodsAndOverloading";
import ThisKeyword from "./content/OOP BASIC/ThisKeyword/ThisKeyword";
import StaticMembers from "./content/OOP BASIC/StaticMembers/StaticMembers";
import AccessModifiers from "./content/OOP BASIC/AccessModifiers/AccessModifiers";
import JavaInheritance from "./content/OOP TOPICS/Inheritance/JavaInheritance";
import JavaPolymorphism from "./content/OOP TOPICS/Polymorphism/JavaPolymorphism";
import JavaAbstraction from "./content/OOP TOPICS/JavaAbstraction/JavaAbstraction";
import JavaEncapsulation from "./content/OOP TOPICS/JavaEncapsulation/JavaEncapsulation";
import JavaInterfaces from "./content/OOP TOPICS/JavaInterfaces/JavaInterfaces";
import SuperKeyword from "./content/OOP TOPICS/SuperKeyword/SuperKeyword";
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
      case "whatIsJava":
        return <WhatIsJava />;
      case "javaHistory":
        return <JavaHistory />;
      case "javaFeatures":
        return <JavaFeatures />;
      case "javaEditions":
        return <JavaEdition/>;
      case "javaJDK":
        return <JavaJDK />;
      case "javaJRE":
        return <JavaJRE />;
      case "javaArchitecture":
        return <JavaArchitecture />;
      case "javaIDEs":
        return <JavaIDEs />;
      case "javaInstallation":
        return <JavaInstallation />;
      case "javaWorking":
        return <JavaWorking />;
      case "javaExecution":
        return <JavaExecution />;
      case "javaBasicSyntax":
        return <JavaBasicSyntax />;
      case "javaIntroduction":
        return <JavaIntroductionContent />;

      // Basic Concepts section
      case "javaVariables":
        return <JavaVariables />;
      case "javaDataTypes":
        return <JavaDataTypes />;
      case "javaOperators":
        return <JavaOperators />;
      case "comments":
        return <JavaComments />;
      case "typeCasting":
        return <TypeCasting />;
      case "inputOutput":
        return <JavaIO />;
      case "javaControlFlow":
        return <JavaControlFlow />;
      case "javaLoops":
        return <JavaLoops />;
      case "javaArrays":
        return <JavaArrays />;
      case "javaStrings":
        return <JavaStrings />;
      case "javaMethods":
        return <JavaMethods />;

      //OOP BASIC
      case "classesAndObjects":
        return <ClassesAndObjects />;
      case "constructors":
        return <Constructors />;
      case "methods":
        return <MethodsAndOverloading />;
      case "thisKeyword":
        return <ThisKeyword />;
      case "staticMembers":
        return <StaticMembers />;
      case "accessModifiers":
        return <AccessModifiers />;
      
      // OOP COncept
      case "javaInheritance":
        return <JavaInheritance />;
      case "javaPolymorphism":
        return <JavaPolymorphism />;
      case "javaAbstraction":
        return <JavaAbstraction />;
      case "javaEncapsulation":
        return <JavaEncapsulation />;
      case "javaInterfaces":
        return <JavaInterfaces />;
      case "superKeyword":
        return <SuperKeyword />;

      // Default case
      default:
        return <TopicNotFound />;
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