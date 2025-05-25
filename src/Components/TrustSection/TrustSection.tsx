import { useLanguage } from "../Language/LanguageContext"
import CheckIcon from "../../assets/Imgs/TrustSection/CheckImg.webp"
import TrustBackground from "../../assets/Imgs/TrustSection/BackgroundTrustSection.webp"
function TrustSection() {
  const {texts} = useLanguage();
  return (
    <>
      <section className="TrustGeneral">
        <div className="TrustTitles">
            <p>{texts.TrustSection.ReservationTitle}</p>
            <p>{texts.TrustSection.Reservationsubtitle}</p>
            <p>{texts.TrustSection.AdjectiveSubtitle}</p>
        </div>
        <div className="TrustContent">
          <div>
            {texts.TrustSection.DetailsLeft.map((detail, index) =>(
              <div key={index} className="LeftDetailsItems">
                <img src={CheckIcon} loading="lazy" alt="Check Icon" width={53} height={37} />
                <p><span>{detail.BoldTitle}</span> {detail.Description}</p>
              </div> 
            ))}
          </div>
          <div>
            {texts.TrustSection.DetailsRight.map((detail, index) =>(
              <article key={index} className="RightDetailsItems">
                <img src={CheckIcon} loading="lazy" alt="Check Icon" width={53} height={37} />
                <p><span>{detail.BoldTitle}</span> {detail.Description}</p>
              </article> 
            ))}
          </div>
            <img className="TrustBackground" src={TrustBackground} alt="Background TrustSection" loading="lazy" />
        </div>
      </section>
    </>
  )
}

export default TrustSection