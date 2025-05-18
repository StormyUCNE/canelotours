import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import { Language } from "./Language";
type LanguageCode = keyof typeof Language;
type LanguageTexts = typeof Language["en"]; // o Language["es"], ambos tienen misma forma
interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  texts: LanguageTexts;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const storedLang = (localStorage.getItem("lang") as LanguageCode) || "en";
  const [language, setLanguage] = useState<LanguageCode>(storedLang);

  const changeLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage: changeLanguage,
    texts: Language[language] || Language.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};