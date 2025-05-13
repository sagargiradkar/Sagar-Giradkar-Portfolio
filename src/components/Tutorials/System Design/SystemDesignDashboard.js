import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./SystemDesignDashboard.css";
import Sidebar from "./Sidebar";
import TopicNotFound from "../JAVA/content/INTRODUCTION/TopicNotFound/TopicNotFound";
import WhatIsSystemDesign from "./content/INTRODUCTION/WhatIsSystemDesign/WhatIsSystemDesign";
import TypesOfDesign from "./content/INTRODUCTION/TypesOfDesign/TypesOfDesign";
import DesignFundamentals from "./content/INTRODUCTION/DesignFundamentals/DesignFundamentals";
import SystemRequirements from "./content/INTRODUCTION/SystemRequirements/SystemRequirements";

// Import all content components

function SystemDesignDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedContent, setSelectedContent] = useState("javaIntroduction");
    const mainContentRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const renderContent = () => {
        switch (selectedContent) {

            // Introduction section

            case "whatIsSystemDesign":
                return <WhatIsSystemDesign />;
            case "typesOfDesign":
                return <TypesOfDesign />;
            case "designFundamentals":
                return <DesignFundamentals />;
            case "systemRequirements":
                return <SystemRequirements />

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

export default SystemDesignDashboard;