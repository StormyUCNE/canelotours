import PayMethods from "../../assets/Imgs/Hero/Paymentmethods.webp";
import { useEffect } from "react";
import HerobackgroundMobile from "../../assets/Imgs/Hero/HeroImgMobile.webp";
import Logo from "../../assets/Imgs/Hero/HeroLogo.webp";
import Formimg from "../../assets/Imgs/Hero/FormImg.png";
import { useLanguage } from "../Language/LanguageContext";
function Hero() {
const {texts} = useLanguage();
useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = HerobackgroundMobile; // esta es la ruta exacta con hash
    link.type = "image/webp";
    link.setAttribute("importance", "high");
    document.head.appendChild(link);
  }, []);
  return (
    <div className="HeroContainer">
      <img className="HeroBackground" src={HerobackgroundMobile} alt="Background Img" loading="eager" width="800" height="500"/>
      <div className="Content">
        <img src={Logo} alt="Canelo Tours Logo" width={600} height={600}  />
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
        <img className="paymethods" src={PayMethods} alt="Payment Methods" width={1000} height={118}/>
      </div>
    </div>
  )
}

export default Hero