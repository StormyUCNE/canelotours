import PayMethods from "../../assets/Imgs/Hero/Paymentmethods.webp";
import Logo from "../../assets/Imgs/Hero/HeroLogo.webp";
import Formimg from "../../assets/Imgs/Hero/FormImg.png";
import { useLanguage } from "../Language/LanguageContext";
function Hero() {
const {texts} = useLanguage();
  return (
    <div className="HeroContainer">
      <div className="HeroBackground"></div>
      <div className="Content">
        <img src={Logo} alt="Canelo Tours Logo" loading="lazy" width={210} height={210} />
        <h1>
          {texts.HeroSection.HeroTitle}
        </h1>
        <p>
          {texts.HeroSection.Description}
        </p>
        <button>
          <img src={Formimg} alt="Calendar Icon" loading="lazy" width={25} height={25} />
          <p>{texts.HeroSection.ReservationButton}</p>
        </button>
        <p>
          {texts.HeroSection.Price}
        </p>
        <img className="paymethods" src={PayMethods} alt="Payment Methods" loading="lazy" width={800} height={80} />
      </div>
    </div>
  )
}

export default Hero