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
          loading="eager"
          width={800}   
          height={533}
        />
      </picture>
      <div className="HeroContent">
        <img className="Logo" src={Logo} alt="Hero Logo" fetchPriority="high" decoding="async" width={885} height={554} />
        <p className="Fisttitle">{texts.HeroSection.HeroTitle}</p>
        <p className="Description">{texts.HeroSection.Description}</p>
        <a className="BookingButton" href="#"><button>{texts.HeroSection.ReservationButton}</button></a>
        <p className="Price">{texts.HeroSection.Price}</p>
        <img className="Payments" src={Paymentmethods} fetchPriority="high" decoding="async" alt="Payment methods" width={1412} height={166}  />
      </div>
    </div>
  )
}

export default Hero