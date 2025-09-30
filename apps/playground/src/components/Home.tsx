import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Badge } from "@azodik/ui";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/components");
  };

  const handlePlayground = () => {
    navigate("/playground");
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className="homepage-header">
        <div className="homepage-container">
          <div className="homepage-header-content">
            <div className="homepage-brand">
              <div className="homepage-logo">
                <img src="/logo.svg" alt="Azodik Logo" width="64" height="64" />
              </div>
            </div>
            <nav className="homepage-nav">
              <button 
                onClick={handleGetStarted}
                className="homepage-nav-link"
              >
                Components
              </button>
              <a href="#docs" className="homepage-nav-link">Documentation</a>
              <a href="#support" className="homepage-nav-link">Support</a>
            </nav>
            <div className="homepage-actions">
              <Button 
                variant="primary" 
                onClick={handlePlayground}
                className="homepage-nav-btn"
              >
                Playground
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="homepage-main">
        <div className="homepage-hero">
          {/* Trust Banner */}
          <div className="homepage-trust-banner">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10" stroke="#FF7F41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Trusted by 10,000+ developers worldwide</span>
          </div>

          <h1 className="homepage-hero-title">
            Design System
            <span className="homepage-hero-accent"> Made Simple</span>
          </h1>
          
          <p className="homepage-hero-description">
            Build beautiful, consistent user interfaces with our comprehensive collection of React components. 
            Get started in minutes, not months.
          </p>

          <div className="homepage-cta">
            <Button 
              variant="primary" 
              onClick={handleGetStarted}
              className="homepage-btn homepage-btn-primary"
            >
              View Components
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Button 
              variant="secondary" 
              onClick={handlePlayground}
              className="homepage-btn homepage-btn-secondary"
            >
              Open Playground
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="homepage-features">
            <div className="homepage-feature">
              <div className="homepage-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FF7F41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="homepage-feature-text">Enterprise-grade security</span>
            </div>

            <div className="homepage-feature">
              <div className="homepage-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14H7V21L16 10H13Z" stroke="#FF7F41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="homepage-feature-text">Lightning-fast integration</span>
            </div>

            <div className="homepage-feature">
              <div className="homepage-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#FF7F41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="homepage-feature-text">Scalable for any team size</span>
            </div>
          </div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="homepage-bg-elements">
        <div className="homepage-bg-circle homepage-bg-circle-1"></div>
        <div className="homepage-bg-circle homepage-bg-circle-2"></div>
        <div className="homepage-bg-circle homepage-bg-circle-3"></div>
      </div>
    </div>
  );
}
