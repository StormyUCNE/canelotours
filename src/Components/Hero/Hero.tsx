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
          width={600} 
          height={400}
        />
        <img
          src={HeroMobile}
          alt="Descripción del hero"
          fetchPriority="high"
          loading="eager"
          width={700}   
          height={700}
          decoding="async"
        />
      </picture>
      <div className="HeroContent">
        <img className="Logo" src={Logo} alt="Hero Logo" decoding="async" width={500} height={500} />
        <p className="Fisttitle">{texts.HeroSection.HeroTitle}</p>
        <p className="Description">{texts.HeroSection.Description}</p>
        <a className="BookingButton" href="#"><button>{texts.HeroSection.ReservationButton}</button></a>
        <p className="Price">{texts.HeroSection.Price}</p>
        <img className="Payments" src={Paymentmethods} decoding="async" alt="Payment methods" width={1412} height={166}  />
      </div>
    </div>
  )
}

export default Hero