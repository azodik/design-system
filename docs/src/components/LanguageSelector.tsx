import React from "react";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";
import { GlobeIcon } from "@azodik/icons";
import { Select } from "@azodik/ui";

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguageTranslation();

  const options = availableLanguages.map((lang) => ({
    value: lang.code,
    label: lang.name,
    icon: <lang.flag size={16} />,
  }));

  return (
    <div
      className="language-selector"
      style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "0.5rem",
      }}
    >
      <GlobeIcon size={20} style={{ color: "var(--color-text-secondary)", flexShrink: 0 }} />
      <Select
        options={options}
        value={currentLanguage}
        onChange={changeLanguage}
        size="2"
        style={{
          minWidth: "150px",
        }}
      />
    </div>
  );
};

export default LanguageSelector;

