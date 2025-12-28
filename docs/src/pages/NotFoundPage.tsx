import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent } from "@azodik/ui";
import { HomeIcon, ChevronLeftIcon } from "@azodik/icons";
import SidebarLayout from "@/components/sidebar/Sidebar";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";
import "@/styles/docs.css";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useLanguageTranslation();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <SidebarLayout>
      <div className="not-found-container">
        <Card className="not-found-card">
          <CardContent className="not-found-content">
            {/* 404 Number */}
            <div className="not-found-number">
              <h1 className="not-found-404">404</h1>
              <div className="not-found-divider"></div>
            </div>

            {/* Error Message */}
            <div className="not-found-message">
              <h2 className="not-found-title">{t("notFound.title")}</h2>
              <p className="not-found-description">{t("notFound.description")}</p>
            </div>

            {/* Illustration */}
            <div className="not-found-illustration">
              <div className="not-found-icon-container">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="not-found-icon"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="not-found-actions">
              <Button onClick={handleGoHome} variant="solid" className="not-found-button">
                <HomeIcon size={16} />
                <span>{t("notFound.goHome")}</span>
              </Button>
              <Button onClick={handleGoBack} variant="outline" className="not-found-button">
                <ChevronLeftIcon size={16} />
                <span>{t("notFound.goBack")}</span>
              </Button>
            </div>

            {/* Help Text */}
            <div className="not-found-help">
              <p className="not-found-help-text">
                {t("notFound.helpText")}{" "}
                <a href="/components/docs/getting-started" className="not-found-link">
                  {t("notFound.gettingStarted")}
                </a>{" "}
                {t("notFound.orBrowse")}{" "}
                <a href="/components" className="not-found-link">
                  {t("notFound.components")}
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
}
