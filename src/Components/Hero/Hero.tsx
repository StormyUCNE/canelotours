
import HeroImg from "../../assets/Imgs/Hero/HeroImg.webp";
import PayMethods from "../../assets/Imgs/Hero/Paymentmethods.png";
import Logo from "../../assets/Imgs/Hero/HeroLogo.png";
import Formimg from "../../assets/Imgs/Hero/FormImg.png";
import { useLanguage } from "../Language/LanguageContext";
function Hero() {
const {texts} = useLanguage();
  return (
    <div className="HeroContainer">
      <div className="HeroBackground" style={{backgroundImage: `url(${HeroImg})`}}></div>
      <div className="Content">
        
        <img src={Logo} alt="Canelo Tours Logo" loading="lazy" />
        <h1>
          {texts.HeroSection.HeroTitle}
        </h1>
        <p>
          {texts.HeroSection.Description}
        </p>
        <button>
          <img src={Formimg} alt="Calendar Icon" loading="lazy" />
          <p>{texts.HeroSection.ReservationButton}</p>
        </button>
        <p>
          {texts.HeroSection.Price}
        </p>
        <img className="paymethods" src={PayMethods} alt="Payment Methods" loading="lazy" />
      </div>
    </div>
  )
}

export default Hero