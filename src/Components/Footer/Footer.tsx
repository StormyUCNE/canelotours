import GingertecLogo from "../../assets/Imgs/Footer/LogoGingertec.webp"
import { useLanguage } from "../Language/LanguageContext"
function Footer() {
    const {texts} = useLanguage();
  return (
    <>
        <footer className="FooterGeneral">
            <p>{texts.FooterSection.RightsYear} {texts.FooterSection.LegalCompany} {texts.FooterSection.RightsReserved}</p>
            <a href="https://canelotours.com/policies/" target="blank"><p>{texts.FooterSection.TermsConditions}</p></a>
            <a href="https://gingertec.us/" target="blank"><img src={GingertecLogo} alt="Gingertec Logo" width={120} /></a>
        </footer>
    </>
  )
}

export default Footer