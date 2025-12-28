import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@azodik/ui";
import { GithubIcon, AppsIcon, BookOpenIcon, ArrowRightIcon, SparklesIcon } from "@azodik/icons";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    navigate("/components/getting-started");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
                <AppsIcon size={18} />
                Components
              </button>
              <a href="/components/getting-started" className="homepage-nav-link">
                <BookOpenIcon size={18} />
                Documentation
              </a>
              <a href="/components/docs/icons" className="homepage-nav-link">
                <SparklesIcon size={18} />
                Icons
              </a>
              <a href="https://github.com/azodik/design-system" className="homepage-nav-link">
                <GithubIcon size={18} />
                Repository
              </a>
            </nav>
            <div className="homepage-actions">
              <div className="homepage-theme-toggle">
                <ThemeToggle />
              </div>
              <button
                className={`homepage-hamburger ${isMobileMenuOpen ? "active" : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span className="homepage-hamburger-line"></span>
                <span className="homepage-hamburger-line"></span>
                <span className="homepage-hamburger-line"></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            ref={mobileMenuRef}
            className={`homepage-mobile-nav ${isMobileMenuOpen ? "active" : ""}`}
          >
            <div className="homepage-mobile-nav-content">
              <button
                onClick={() => {
                  handleGetStarted();
                  closeMobileMenu();
                }}
                className="homepage-mobile-nav-link"
              >
                <AppsIcon size={18} />
                Components
              </button>
              <a
                href="/components/getting-started"
                className="homepage-mobile-nav-link"
                onClick={closeMobileMenu}
              >
                <BookOpenIcon size={18} />
                Documentation
              </a>
              <a
                href="/components/docs/icons"
                className="homepage-mobile-nav-link"
                onClick={closeMobileMenu}
              >
                <SparklesIcon size={18} />
                Icons
              </a>
              <a
                href="https://github.com/azodik/design-system"
                className="homepage-mobile-nav-link"
                onClick={closeMobileMenu}
              >
                <GithubIcon size={18} />
                Repository
              </a>
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
              variant="solid"
              color="amber"
              onClick={handleGetStarted}
              className="homepage-btn homepage-btn-primary"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              View Components
              <ArrowRightIcon size={16} />
            </Button>
            <Button
              variant="soft"
              onClick={() => window.open("https://github.com/azodik/design-system", "_blank")}
              className="homepage-btn homepage-btn-secondary"
            >
              View Repository
              <GithubIcon />
            </Button>
          </div>

          {/* Action Buttons */}
          {/* <div className="homepage-action-buttons">
            <Button
              variant="outline"
              onClick={handleTestComponents}
              className="homepage-action-btn homepage-action-btn-test"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Test Components
            </Button>
            <Button
              variant="outline"
              onClick={handlePlayground}
              className="homepage-action-btn homepage-action-btn-playground"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Playground
            </Button>
          </div> */}
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
