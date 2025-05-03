import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Experience from "./components/About/Experience";
import Blog from "./components/Blog/Blog";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MongoPost from "./components/Blog/BlogPost/MongoPost/MongoPost";
import JavaInstallationPost from "./components/Blog/BlogPost/JavaInstallationPost/JavaInstallationPost";
import PythonSetupPost from "./components/Blog/BlogPost/PythonSetupPost/PythonSetupPost";
import JavaScriptSetupPost from "./components/Blog/BlogPost/JavaScriptSetupPost/JavaScriptSetupPost";
import CSetupPost from "./components/Blog/BlogPost/CSetupPost/CSetupPost";
import CppSetupPost from "./components/Blog/BlogPost/CppSetupPost/CppSetupPost";
import ReactCPanelPost from "./components/Blog/BlogPost/ReactCPanelPost/ReactCPanelPost";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/react-cpanel-hosting" element={<ReactCPanelPost />} />
          
          <Route path="/blog/mongodb-nextjs" element={<MongoPost />} />
          <Route path="/blog/java-windows-installation" element={<JavaInstallationPost />} />
          <Route path="/blog/python-setup-virtual-env" element={<PythonSetupPost />} />
          <Route path="/blog/javascript-setup" element={<JavaScriptSetupPost />} />
          <Route path="/blog/c-windows-setup" element={<CSetupPost />} />
          <Route path="/blog/cpp-windows-setup" element={<CppSetupPost />} />

        
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
