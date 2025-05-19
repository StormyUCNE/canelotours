import PayMethods from "../../assets/Imgs/Hero/Paymentmethods.webp";
import LogoMobile from "../../assets/Imgs/Hero/HeroLogoMobile.webp";
import Formimg from "../../assets/Imgs/Hero/FormImg.png";
import { useLanguage } from "../Language/LanguageContext";
function Hero() {
const {texts} = useLanguage();
  return (
    <div className="HeroContainer">
      <div className="HeroBackground"></div>
      <div className="Content">
        <img src={LogoMobile} alt="Canelo Tours Logo" width={220} height={220}  />
        <h1>
          {texts.HeroSection.HeroTitle}
        </h1>
        <p>
          {texts.HeroSection.Description}
        </p>
        <button>
          <img src={Formimg} alt="Calendar Icon" width={25} height={25} />
          <p>{texts.HeroSection.ReservationButton}</p>
        </button>
        <p>
          {texts.HeroSection.Price}
        </p>
        <img className="paymethods" src={PayMethods} alt="Payment Methods" width={800} height={94}/>
      </div>
    </div>
  )
}

export default Hero