import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Badge, Alert } from "@azodik/ui";
import { GithubIcon } from "../icons";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/components/getting-started");
  };

  const handleTestComponents = () => {
    navigate("/test-components");
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
                <img
                  src="https://cdn.azodik.com/azodik/logo.svg"
                  alt="Azodik Logo"
                  width="64"
                  height="64"
                />
              </div>
            </div>
            <nav className="homepage-nav">
              <button onClick={handleGetStarted} className="homepage-nav-link">
                Components
              </button>
              <a href="/components/getting-started" className="homepage-nav-link">
                Documentation
              </a>
              <a href="https://github.com/azodik/design-system" className="homepage-nav-link">
                Repository
              </a>
            </nav>
            <div className="homepage-actions">
              <Button
                variant="secondary"
                onClick={handleTestComponents}
                className="homepage-nav-btn"
              >
                Test Components
              </Button>
              <Button variant="primary" onClick={handlePlayground} className="homepage-nav-btn">
                Playground
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="homepage-main">
        <div className="homepage-hero">
          <h1 className="homepage-hero-title">
            Design System
            <span className="homepage-hero-accent"> Made Simple</span>
          </h1>

          <p className="homepage-hero-description">
            Build beautiful, consistent user interfaces with our comprehensive collection of React
            components. Get started in minutes, not months.
          </p>

          <div className="homepage-cta">
            <Button
              variant="primary"
              onClick={handleGetStarted}
              className="homepage-btn homepage-btn-primary"
            >
              View Components
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open("https://github.com/azodik/design-system", "_blank")}
              className="homepage-btn homepage-btn-secondary"
            >
              View Repository
              <GithubIcon />
            </Button>
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
