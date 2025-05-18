import { useLanguage } from "../Language/LanguageContext"

import Check from "../../assets/Imgs/TrustSection/CheckImg.webp"
function TrustSection() {
  const {texts} = useLanguage();
  return (
    <>
      <section className="TrustSectionGeneral">
        <div className="TrustSectiontitles">
          <h1>{texts.TrustSection.ReservationTitle}</h1>
          <p>{texts.TrustSection.Reservationsubtitle}</p>
        </div>
        <div className="DetailsTrustSection">
          <article>
            {texts?.TrustSection?.DetailsLeft?.map((info, index)=>
              <div key={index} className="TourFeature">
                  <img src={Check} loading="lazy" alt="Check Trust" width="34" height="34" />
                  <p><span>{info.BoldTitle}</span>{info.Description}</p>
              </div>   
            )}
          </article>
          <article>
            {texts?.TrustSection?.DetailsRight?.map((info, index)=>
              <div className="TourFeature" key={index} >
                  <img src={Check} loading="lazy" alt="Check Trust" width={53} height={37}/>
                  <p><span>{info.BoldTitle}</span>{info.Description}</p>
              </div>   
            )}
          </article>
        </div>
      </section>
    </>
  )
}

export default TrustSection