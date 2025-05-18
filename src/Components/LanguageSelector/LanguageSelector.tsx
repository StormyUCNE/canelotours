import { useLanguage } from "../Language/LanguageContext";
import EnglishFlag from "../../assets/Imgs/LanguageSelector/EnglishFlag.webp";
import SpanishFlag from "../../assets/Imgs/LanguageSelector/SpainFlag.webp";
import FrenchFlag from "../../assets/Imgs/LanguageSelector/france.webp";
import GermanFlag from "../../assets/Imgs/LanguageSelector/germanflag.webp";
import ItalianFlag from "../../assets/Imgs/LanguageSelector/italianflag.webp";
import PortuguseFlag from "../../assets/Imgs/LanguageSelector/portuguese.webp";
import NetherlandFlag from "../../assets/Imgs/LanguageSelector/netherlands.webp";
import RussianFlag from "../../assets/Imgs/LanguageSelector/russia.webp";
import { useState } from "react";
function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const[open, setOpen] = useState(false);
  const options = [
    { code: "en", label: "English", icon: EnglishFlag },
    { code: "nl", label: "Dutch", icon: NetherlandFlag },
    { code: "fr", label: "French", icon: FrenchFlag },
    { code: "de", label: "German", icon: GermanFlag },
    { code: "it", label: "Italian", icon: ItalianFlag },
    { code: "pt", label: "Portuguese", icon: PortuguseFlag },
    { code: "ru", label: "Russian", icon: RussianFlag },
    { code: "es", label: "Spanish", icon: SpanishFlag },
  ];
  const current = options.find((o) => o.code === language);
  return (
    <>
        <div className="LanguageSelector">
          <div className="selected" onClick={() => setOpen(!open)}>
              <img src={current?.icon} alt={current?.label} />
              <span>{current?.code}</span>
              <span className="arrow">&#9662;</span>
          </div>
          {open && (
            <div className="dropdown">
              {options.map((opt) => (
                  <div
                  key={opt.code}
                  className="option"
                  onClick={() => {
                      setLanguage(opt.code as "en" | "es" | "nl" | "fr" | "de" | "it" | "pt" | "ru");
                      setOpen(false);
                  }}
                  >
                  <img src={opt.icon} alt={opt.label} />
                  <span>{opt.label}</span>
                  </div>
              ))}
            </div>
          )}
        </div> 
    </>
  )
}

export default LanguageSelector