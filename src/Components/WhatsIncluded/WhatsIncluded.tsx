import IncludeBusImg from "../../assets/Imgs/WhatsIncluded/IncludeBusImg1.webp"
import IncludeHouseImg from "../../assets/Imgs/WhatsIncluded/IncludeHouseImg2.webp"
import IncludeCaveImg from "../../assets/Imgs/WhatsIncluded/IncludeCaveImg3.webp"
import IncludeBeachImg from "../../assets/Imgs/WhatsIncluded/IncludeBeachImg4.webp"
import IncludeSouvenirsImg from "../../assets/Imgs/WhatsIncluded/IncludeSouvenirsImg5.webp"
import RouteLine1 from "../../assets/Imgs/WhatsIncluded/RouteLine1.svg"
import NumberOneImg from "../../assets/Imgs/WhatsIncluded/NumberOneLine.svg"
import RouteLine2 from "../../assets/Imgs/WhatsIncluded/RouteLine2.svg"
import NumberTwoImg from "../../assets/Imgs/WhatsIncluded/NumberTwoLine.svg"
import RouteLine3 from "../../assets/Imgs/WhatsIncluded/RouteLine3.svg"
import NumberThreeImg from "../../assets/Imgs/WhatsIncluded/NumberThreeLine.svg"
import RouteLine4 from "../../assets/Imgs/WhatsIncluded/RouteLine4.svg"
import NumberFourImg from "../../assets/Imgs/WhatsIncluded/NumberFourLine.svg"
import { useLanguage } from "../Language/LanguageContext"
function WhatsIncluded() {
  const {texts} = useLanguage();
  return (
    <>
      <section className="IncludeGeneral">
          <div className="HeadlineInclude">
            <p>{texts.WhatsIncludedSection.IncludeTitle}</p>
            <p>{texts.WhatsIncludedSection.IncludeSubtitle}</p>
            <p>{texts.WhatsIncludedSection.IncludeDescription}</p>
          </div>

          <div className="IncludeContentGeneral">
            <div className="IncludeContent">
              <img src={RouteLine1} className="RouteLine1" alt="Route Line" width={800} height={700} loading="lazy" />
              <img src={NumberOneImg} className="NumberOneImg" alt="Route Line" width={85} height={18} loading="lazy"  />
              <img src={RouteLine2} className="RouteLine2" alt="Route Line" width={800} height={700} loading="lazy" />
              <img src={NumberTwoImg} className="NumberTwoImg" alt="Route Line" width={85} height={18} loading="lazy"  />
              <img src={RouteLine3} className="RouteLine3" alt="Route Line" width={800} height={700} loading="lazy" />
              <img src={NumberThreeImg} className="NumberThreeImg" alt="Route Line" width={85} height={18} loading="lazy"  />
              <img src={RouteLine4} className="RouteLine4" alt="Route Line" width={800} height={700} loading="lazy" />
              <img src={NumberFourImg} className="NumberFourImg" alt="Route Line" width={85} height={18} loading="lazy"  />
                
                <div className="IntineraryRow1">
                  <div className="ItineraryRightContentRow1">
                    <img className="ItineraryImg" src={IncludeBusImg} loading="lazy" alt="Bus Transportation" />
                    <p className="ResponsiveItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary1.Title}</p>
                  </div> 
                  <div className="ItineraryContentRow1">
                    <p className="ItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary1.Title}</p>
                    <p className="ItineraryDescription">{texts.WhatsIncludedSection.Itinerary1.Details}</p>
                    <a href="#" className="ItineraryButton"><button>{texts.WhatsIncludedSection.Itinerary1.LinkBookButton}</button></a>
                    <p className="ItineraryPrice">{texts.WhatsIncludedSection.Itinerary1.Price}</p>
                  </div>
                </div>

                <div className="IntineraryRow2">
                  <div className="ItineraryContentRow2">
                    <p className="ItineraryMainTitle2">{texts.WhatsIncludedSection.Itinerary2.Title}</p>
                    <p className="ItineraryDescription2">{texts.WhatsIncludedSection.Itinerary2.Details}</p>
                  </div>
                  <div className="ItineraryLeftContentRow2">
                    <img className="ItineraryImg2" src={IncludeHouseImg} alt="Typical Dominican House" loading="lazy" />
                    <p className="ResponsiveItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary2.Title}</p>
                  </div>
                </div>

                <div className="IntineraryRow1">
                  <div className="ItineraryRightContentRow1">
                    <img className="ItineraryImg" src={IncludeCaveImg} alt="Natural Cave" loading="lazy" />
                    <p className="ResponsiveItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary3.Title}</p>
                  </div>
                  <div className="ItineraryContentRow1">
                    <p className="ItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary3.Title}</p>
                    <p className="ItineraryDescription">{texts.WhatsIncludedSection.Itinerary3.Details}</p>
                  </div>
                </div>

                <div className="IntineraryRow2">
                  <div className="ItineraryContentRow2">
                    <p className="ItineraryMainTitle2">{texts.WhatsIncludedSection.Itinerary4.Title}</p>
                    <p className="ItineraryDescription2">{texts.WhatsIncludedSection.Itinerary4.Details}</p>
                  </div>
                  <div className="ItineraryLeftContentRow2">
                    <img className="ItineraryImg2" src={IncludeBeachImg} alt="Punta Cana Beach" loading="lazy" />
                    <p className="ResponsiveItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary4.Title}</p>
                  </div> 
                </div>

                <div className="IntineraryRow1">
                  <div className="ItineraryRightContentRow1">
                    <img className="ItineraryImg"  src={IncludeSouvenirsImg} alt="Souvenirs & Cooldown" />
                    <p className="ResponsiveItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary5.Title}</p>
                  </div>
                  <div className="ItineraryContentRow1">
                    <p className="ItineraryMainTitle">{texts.WhatsIncludedSection.Itinerary5.Title}</p>
                    <p className="ItineraryDescription">{texts.WhatsIncludedSection.Itinerary5.Details}</p>
                    <a href="#" className="ItineraryButton"><button>{texts.WhatsIncludedSection.Itinerary5.LinkBookButton}</button></a>
                    <p className="ItineraryPrice">{texts.WhatsIncludedSection.Itinerary5.Price}</p>
                  </div>
                </div>
            </div>

          </div>
          
      </section>
    </>
  )
}

export default WhatsIncluded