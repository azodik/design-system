import React from "react";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";
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

