import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./SystemDesignDashboard.css";
import Sidebar from "./Sidebar";
import TopicNotFound from "../JAVA/content/INTRODUCTION/TopicNotFound/TopicNotFound";
import WhatIsSystemDesign from "./content/INTRODUCTION/WhatIsSystemDesign/WhatIsSystemDesign";
import TypesOfDesign from "./content/INTRODUCTION/TypesOfDesign/TypesOfDesign";
import DesignFundamentals from "./content/INTRODUCTION/DesignFundamentals/DesignFundamentals";
import SystemRequirements from "./content/INTRODUCTION/SystemRequirements/SystemRequirements";
import DesignPrinciples from "./content/INTRODUCTION/DesignPrinciples/DesignPrinciples";
import ScalabilityBasics from "./content/INTRODUCTION/ScalabilityBasics/ScalabilityBasics";
import PerformanceBasics from "./content/INTRODUCTION/PerformanceBasics/PerformanceBasics";
import ReliabilityBasics from "./content/INTRODUCTION/ReliabilityBasics/ReliabilityBasics";
import OOPConcepts from "./content/LowLevelDesign/OOPConcepts/OOPConcepts";
import SolidPrinciples from "./content/LowLevelDesign/SolidPrinciples/SolidPrinciples";

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

            // INTRODUCTION section

            case "whatIsSystemDesign":
                return <WhatIsSystemDesign />;
            case "typesOfDesign":
                return <TypesOfDesign />;
            case "designFundamentals":
                return <DesignFundamentals />;
            case "systemRequirements":
                return <SystemRequirements />;
            case "designPrinciples":
                return <DesignPrinciples />;
            case "scalabilityBasics":
                return <ScalabilityBasics />;
            case "performanceBasics":
                return <PerformanceBasics />;
            case "reliabilityBasics":
                return <ReliabilityBasics />

            // LOW_LEVEL_DESIGN section

            case "oopConcepts":
                return <OOPConcepts />
            case "solidPrinciples":
                return <SolidPrinciples />
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