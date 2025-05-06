import React, { useState, useEffect } from "react";  // Added useEffect import
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";  // Added useLocation

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();  // Get current location

  // Scroll handler
  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);  // Cleanup
    };
  }, []);

  // Handle menu open/close
  useEffect(() => {
    if (expand) {
      document.body.style.overflow = 'hidden';  // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';  // Cleanup
    };
  }, [expand]);

  // Close menu on route change
  useEffect(() => {
    updateExpanded(false);
  }, [location]);

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (expand && e.target.classList.contains('navbar-collapse')) {
      updateExpanded(false);
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <span className="brand-name">SAGAR GIRADKAR</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
          className="navbar-toggler"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse 
          id="responsive-navbar-nav" 
          className={`drawer-menu ${expand ? 'show' : ''}`}
          onClick={handleClickOutside}
        >
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/experience"
                className={location.pathname === "/experience" ? "active" : ""}
              >
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/project"
                className={location.pathname === "/project" ? "active" : ""}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/tutorials"
                className={location.pathname === "/tutorials" ? "active" : ""}
              >
                Tutorials
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
              >
                Blogs
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/resume"
                className={location.pathname === "/resume" ? "active" : ""}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
