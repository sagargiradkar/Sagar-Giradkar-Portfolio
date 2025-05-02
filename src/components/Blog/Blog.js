// components/Blog/Blog.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import mongoDbImg from "../../Assets/Blogs/1744093144351-1.webp";
import javaInstallImg from "../../Assets/Blogs/javaBlogs.png";
import pythonSetupImg from "../../Assets/Blogs/pythonSetupImg.jpg"
import jsSetupImg from "../../Assets/Blogs/jsSetupImg.jpg"
import cSetupImg from "../../Assets/Blogs/cSetupImg.jpg"
import cppSetupImg from "../../Assets/Blogs/cpp-setup.jpg"

const blogPosts = [
  {
    id: "mongodb-nextjs",
    title: "How to integrate MongoDB into your Next.js apps",
    description:
      "Learn how to seamlessly integrate MongoDB into your Next.js applications with best practices for efficient connection handling, resource...",
    image: mongoDbImg,
    date: "May 1, 2025",
    author: "Sagar Giradkar",
    category: "Database",
    tags: ["MongoDB", "Next.js", "Database", "Backend"],
  },
  {
    id: "java-windows-installation",
    title: "How to Install Java on Windows: A Complete Guide",
    description:
      "A comprehensive step-by-step guide to installing Java Development Kit (JDK) on Windows and setting up your development environment properly...",
    image: javaInstallImg,
    date: "May 3, 2025",
    author: "Sagar Giradkar",
    category: "Development Setup",
    tags: ["Java", "Windows", "Installation", "JDK"],
  },
  {
    id: "python-setup-virtual-env",
    title: "How to Download Python and Set Up a Virtual Environment",
    description:
      "Learn how to properly install Python and create isolated development environments using virtual environments for better project management...",
    image: pythonSetupImg,
    date: "May 3, 2025",
    author: "Sagar Giradkar",
    category: "Development Setup",
    tags: ["Python", "Virtual Environment", "Development", "Setup"],
  },
  {
    id: "javascript-setup",
    title: "How to Set Up JavaScript Development Environment",
    description:
      "Learn how to install Node.js, npm, and set up a professional JavaScript development environment with best practices and essential tools...",
    image: jsSetupImg,
    date: "May 3, 2025",
    author: "Sagar Giradkar",
    category: "Development Setup",
    tags: ["JavaScript", "Node.js", "npm", "Development"],
  },
  {
    id: "c-windows-setup",
    title: "How to Install C Programming Environment on Windows",
    description:
      "Learn how to set up a complete C programming environment on Windows with MinGW-w64 compiler and Visual Studio Code...",
    image: cSetupImg,
    date: "May 3, 2025",
    author: "Sagar Giradkar",
    category: "Development Setup",
    tags: ["C Programming", "Windows", "MinGW", "VS Code"],
  },
  {
    id: "cpp-windows-setup",
    title: "Complete Guide to Installing C++ Development Environment on Windows",
    description:
      "Learn how to set up a professional C++ development environment on Windows with MinGW-w64, Visual Studio Code, and essential development tools...",
    image: cppSetupImg,
    date: "May 3, 2025",
    author: "Sagar Giradkar",
    category: "Development Setup",
    tags: ["C++", "Windows", "MinGW", "VS Code", "Programming"],
  },
  




];
function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Calculate the posts to show on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog Posts </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blog posts I've written recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {currentPosts.map((post) => (
            <Col md={4} sm={6} xs={12} className="blog-card" key={post.id}>
              <Card className="blog-card-view h-100">
                <Card.Img
                  variant="top"
                  src={post.image}
                  alt={post.title}
                  className="blog-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="blog-card-title">{post.title}</Card.Title>
                  <Card.Text className="blog-card-text">
                    {post.description}
                  </Card.Text>
                  <div className="blog-card-meta">
                    <small className="text-muted">{post.date}</small>
                    <small className="text-muted">• {post.author}</small>
                  </div>
                  <div className="blog-card-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    as={Link}
                    to={`/blog/${post.id}`}
                    variant="primary"
                    className="mt-auto"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4 mb-4">
            <Pagination>
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {renderPaginationItems()}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Blog;
