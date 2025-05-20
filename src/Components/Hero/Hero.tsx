import HeroDesktop from "../../assets/Imgs/Hero/HeroImg.webp"
import HeroMobile from "../../assets/Imgs/Hero/HeroImgMobile.webp"
import { useLanguage } from "../Language/LanguageContext"
import Logo from "../../assets/Imgs/Hero/HeroLogo.webp"
import Paymentmethods from "../../assets/Imgs/Hero/Paymentmethods.webp"
function Hero() {
  const {texts} = useLanguage();
  return (
    <div className="HeroContainer">
      <picture className="HeroBackground">
        <source
          srcSet={HeroDesktop}
          media="(min-width: 768px)"
          type="image/webp"
          width={1920} 
          height={1080}
        />
        <img
          src={HeroMobile}
          alt="Descripción del hero"
          fetchPriority="high"
          width={768}   
          height={1024}
          loading="eager"
        />
      </picture>
      <div className="HeroContent">
        <img className="Logo" src={Logo} alt="Hero Logo" width={1080} height={1080} />
        <p>{texts.HeroSection.HeroTitle}</p>
        <p>{texts.HeroSection.Description}</p>
        <a href="#"><button>{texts.HeroSection.ReservationButton}</button></a>
        <p>{texts.HeroSection.Price}</p>
        <img src={Paymentmethods} alt="Payment methods" width={1412} height={166}  />
      </div>
    </div>
  )
}

export default Hero