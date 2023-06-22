import React from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "hr" : "en";
    i18n.changeLanguage(newLanguage);
  };
  const oppositeLanguage = currentLanguage === "en" ? "hr" : "en";
  return (
    <Button 
    variant="dark"
    onClick={toggleLanguage}>
      {oppositeLanguage}
    </Button>
  );


};

export default LanguageSwitcher;
