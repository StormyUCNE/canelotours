import HeroDesktop from "../../assets/Imgs/Hero/HeroImg.webp"
import HeroMobile from "../../assets/Imgs/Hero/HeroImgMobile.webp"
import { useLanguage } from "../Language/LanguageContext"
import Logo from "../../assets/Imgs/Hero/HeroLogo.webp"
import ApprovedIcon from "../../assets/Imgs/Hero/ApprovedIcon.webp"
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
        />
        <img
          src={HeroMobile}
          alt="Hero Background"
          fetchPriority="high"
          loading="eager"
          width={800}   
          height={533}
          decoding="async"
        />
      </picture>
      <div className="HeroContent">
        <img className="Logo" src={Logo}  alt="Hero Logo" fetchPriority="high" loading="eager" width={300} height={188} />
        <p className="Fisttitle">{texts.HeroSection.HeroTitle}</p>
        <p className="Description">{texts.HeroSection.Description}</p>
        <a className="BookingButton" href="https://canelotours.com/atv-and-buggy-tours-in-punta-cana/book-atv-buggy/">
          <img src={ApprovedIcon} alt="Approved Icon" width={18} height={18} fetchPriority="high" loading="eager" />
          {texts.HeroSection.ReservationButton}
        </a>
        <p className="Price">{texts.HeroSection.Price}</p>
        <img className="Payments" src={Paymentmethods} fetchPriority="high" loading="eager" alt="Payment methods" width={600} height={70} />
      </div>
    </div>
  )
}
export default Hero