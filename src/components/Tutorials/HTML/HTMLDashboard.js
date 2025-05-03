// src/components/Tutorials/HTML/HTMLDashboard.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import "./HTMLDashboard.css";
import Sidebar from "./Sidebar";
import HTMLIntroductionContent from "./content/HTMLIntroduction";
import SkeletalTagsContent from "./content/SkeletalTags";

function HTMLDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("htmlIntroduction");
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch(selectedContent) {
      case "htmlIntroduction":
        return <HTMLIntroductionContent />;
      case "skeletalTags":
        return <SkeletalTagsContent />;
      default:
        return <HTMLIntroductionContent />;
    }
  };

  return (
    <div className="dashboard-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onSelectContent={setSelectedContent}
        selectedContent={selectedContent}
      />

      <div className={`main-content ${!isSidebarOpen ? 'expanded' : ''}`}>
        {renderContent()}
      </div>
    </div>
  );
}

export default HTMLDashboard;