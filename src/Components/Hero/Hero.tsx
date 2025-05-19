import PayMethods from "../../assets/Imgs/Hero/Paymentmethods.webp";
import HerobackgroundMobile from "../../assets/Imgs/Hero/HeroImgMobile.webp";
import Logo from "../../assets/Imgs/Hero/HeroLogo.webp";
import LogoMobile from "../../assets/Imgs/Hero/HeroLogoMobile.webp";
import Formimg from "../../assets/Imgs/Hero/FormImg.png";
import { useLanguage } from "../Language/LanguageContext";
function Hero() {
const {texts} = useLanguage();
  return (
    <div className="HeroContainer">
      <img className="HeroBackground" src={HerobackgroundMobile} alt="Background Img" loading="eager" width="900" height="600"/>
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