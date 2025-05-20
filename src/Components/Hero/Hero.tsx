import HeroDesktop from "../../assets/Imgs/Hero/HeroImg.webp"
import HeroMobile from "../../assets/Imgs/Hero/HeroImgMobile.webp"

function Hero() {
  return (
    <div className="HeroContainer">
      <picture className="HeroBackground">
  <source
    srcSet={HeroDesktop}
    media="(min-width: 768px)"
    type="image/webp"
    width={1920}  // Añade dimensiones reales
    height={1080}
  />
  <img
    src={HeroMobile}
    alt="Descripción del hero"
    fetchPriority="high"
    width={768}   // Añade dimensiones reales
    height={1024}
    loading="eager" // Ya que es el hero
  />
</picture>
      
    </div>
  )
}

export default Hero