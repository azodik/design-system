import React from 'react';
import { useLanguageTranslation } from '@/hooks/useLanguageTranslation';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguageTranslation();

  return (
    <div className="language-selector">
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-selector-select"
      >
        {availableLanguages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
