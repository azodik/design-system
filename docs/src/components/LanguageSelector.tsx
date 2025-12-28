import React, { useState, useRef, useEffect } from "react";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";
import { GlobeIcon, ChevronDownIcon } from "@azodik/icons";

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguageTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedLanguage = availableLanguages.find((lang) => lang.code === currentLanguage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: string) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      className="language-selector"
      style={{ display: "flex", alignItems: "center", gap: "0.5rem", position: "relative" }}
    >
      <GlobeIcon size={20} style={{ color: "var(--color-text-secondary)", flexShrink: 0 }} />
      <div ref={dropdownRef} style={{ position: "relative" }}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.75rem",
            border: "1px solid var(--color-border)",
            borderRadius: "0.375rem",
            background: "var(--color-surface)",
            color: "var(--color-text)",
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedLanguage && (
            <>
              <span style={{ display: "flex", alignItems: "center" }}>
                <selectedLanguage.flag size={16} />
              </span>
              <span>{selectedLanguage.name}</span>
            </>
          )}
          <ChevronDownIcon
            size={16}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        </button>

        {isOpen && (
          <div
            role="listbox"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: "0.25rem",
              minWidth: "150px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "0.375rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              zIndex: 1000,
              overflow: "hidden",
            }}
          >
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                type="button"
                role="option"
                aria-selected={currentLanguage === language.code}
                onClick={() => handleSelect(language.code)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(language.code);
                  }
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 0.75rem",
                  background:
                    currentLanguage === language.code
                      ? "var(--color-surface-hover)"
                      : "transparent",
                  color: "var(--color-text)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (currentLanguage !== language.code) {
                    e.currentTarget.style.background = "var(--color-surface-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLanguage !== language.code) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                  <language.flag size={16} />
                </span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
