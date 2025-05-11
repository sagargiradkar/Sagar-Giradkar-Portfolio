// TopicNotFound.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopicNotFound.css';

function TopicNotFound() {
  const location = useLocation();

  return (
    <div className="topic-not-found">
      <div className="topic-not-found-content">
        <div className="error-code">404</div>
        
        <div className="error-icon">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>

        <h1>Topic Not Found</h1>
        
        <p className="error-message">
          Sorry, we couldn't find the topic you're looking for.
        </p>
        
        <div className="current-path">
          Requested path: <code>{location.pathname}</code>
        </div>

        <div className="suggestion-box">
          <h2>You might want to:</h2>
          <ul>
            <li>Check if the URL is correct</li>
            <li>Return to the tutorials homepage</li>
            <li>Try searching for the topic</li>
            <li>Browse our popular topics</li>
          </ul>
        </div>

        <div className="popular-topics">
          <h2>Popular Topics</h2>
          <div className="topics-grid">
            <Link to="/tutorial/java/basics" className="topic-card">
              <div className="topic-icon">📚</div>
              <h3>Java Basics</h3>
              <p>Start with Java fundamentals</p>
            </Link>

            <Link to="/tutorial/java/oop" className="topic-card">
              <div className="topic-icon">🎯</div>
              <h3>OOP Concepts</h3>
              <p>Learn Object-Oriented Programming</p>
            </Link>

            <Link to="/tutorial/java/collections" className="topic-card">
              <div className="topic-icon">📊</div>
              <h3>Collections</h3>
              <p>Master Java Collections Framework</p>
            </Link>

            <Link to="/tutorial/java/exceptions" className="topic-card">
              <div className="topic-icon">⚠️</div>
              <h3>Exception Handling</h3>
              <p>Handle errors and exceptions</p>
            </Link>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/tutorial/javatutorial" className="primary-button">
            Go to Tutorials Home
          </Link>
          <Link to="/search" className="secondary-button">
            Search Topics
          </Link>
        </div>

        <div className="help-section">
          <h3>Need Help?</h3>
          <p>
            If you can't find what you're looking for, please 
            <Link to="/contact"> contact our support team</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopicNotFound;
