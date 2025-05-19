import PayMethods from "../../assets/Imgs/Hero/Paymentmethods.webp";
import Herobackground2 from "../../assets/Imgs/Hero/HeroImgMobile.webp";
import Logo from "../../assets/Imgs/Hero/HeroLogo.webp";
import Formimg from "../../assets/Imgs/Hero/FormImg.png";
import { useLanguage } from "../Language/LanguageContext";
function Hero() {
const {texts} = useLanguage();
  return (
    <div className="HeroContainer">
      <img src={Herobackground2} loading="eager" alt="Background Img" className="HeroBackground"/>
      <div className="Content">
        <img src={Logo} alt="Canelo Tours Logo" width={216} height={216}  />
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
        <img className="paymethods" src={PayMethods} alt="Payment Methods" width={800} height={80}/>
      </div>
    </div>
  )
}

export default Hero