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
function WhatsIncluded() {
  return (
    <>
      <section className="IncludeGeneral">
          <div className="HeadlineInclude">
            <p>Itinerary</p>
            <p>What’s Included in Our ATV and Buggy Tours in Punta Cana</p>
            <p>Everything you get with every ride – no hidden fees, just pure off-road adventure</p>
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
                    <p className="ResponsiveItineraryMainTitle">Round-trip Transportation & Full Experience Included</p>
                  </div> 
                  <div className="ItineraryContentRow1">
                    <p className="ItineraryMainTitle">Round-trip Transportation & Full Experience Included</p>
                    <p className="ItineraryDescription">Our ATV and Buggy Tours in Punta Cana include hotel pick-up and drop-off, a fully guided route, and incredible stops that showcase the best of the Dominican countryside.</p>
                    <a href="#" className="ItineraryButton"><button>Start Your Adventure</button></a>
                    <p className="ItineraryPrice">From $35 USD per person</p>
                  </div>
                </div>

                <div className="IntineraryRow2">
                  <div className="ItineraryContentRow2">
                    <p className="ItineraryMainTitle2">Typical Dominican House (30 Min)</p>
                    <p className="ItineraryDescription2">During your ATV and Buggy Tour in Punta Cana, you’ll stop at a traditional Dominican house to taste local coffee, chocolate, organic tobacco, green tea, and mamajuana.</p>
                  </div>
                  <div className="ItineraryLeftContentRow2">
                    <img className="ItineraryImg2" src={IncludeHouseImg} alt="Typical Dominican House" loading="lazy" />
                    <p className="ResponsiveItineraryMainTitle">Typical Dominican House (30 Min)</p>
                  </div>
                </div>

                <div className="IntineraryRow1">
                  <div className="ItineraryRightContentRow1">
                    <img className="ItineraryImg" src={IncludeCaveImg} alt="Natural Cave" loading="lazy" />
                    <p className="ResponsiveItineraryMainTitle">Natural Cave Experience (40 Min)</p>
                  </div>
                  <div className="ItineraryContentRow1">
                    <p className="ItineraryMainTitle">Natural Cave Experience (40 Min)</p>
                    <p className="ItineraryDescription">One of the top highlights of our ATV and Buggy Tours in Punta Cana is the natural cave. Take a swim, explore this hidden gem, and refresh before continuing your adventure.</p>
                  </div>
                </div>

                <div className="IntineraryRow2">
                  <div className="ItineraryContentRow2">
                    <p className="ItineraryMainTitle2">Macao Beach Punta Cana(40 Min)</p>
                    <p className="ItineraryDescription2">Our ATV and Buggy Tours in Punta Cana include a stop at Macao Beach — one of the area’s most famous shorelines. Relax, take photos, shop, or grab a quick bite in paradise.</p>
                  </div>
                  <div className="ItineraryLeftContentRow2">
                    <img className="ItineraryImg2" src={IncludeBeachImg} alt="Punta Cana Beach" loading="lazy" />
                    <p className="ResponsiveItineraryMainTitle">Macao Beach Punta Cana(40 Min)</p>
                  </div> 
                </div>

                <div className="IntineraryRow1">
                  <div className="ItineraryRightContentRow1">
                    <img className="ItineraryImg"  src={IncludeSouvenirsImg} alt="Souvenirs & Cooldown" />
                    <p className="ResponsiveItineraryMainTitle">Base Arrival, Souvenirs & Cooldown</p>
                  </div>
                  <div className="ItineraryContentRow1">
                    <p className="ItineraryMainTitle">Base Arrival, Souvenirs & Cooldown</p>
                    <p className="ItineraryDescription">After your ATV and Buggy Tour in Punta Cana, return to base, browse souvenirs, and enjoy a cool-down moment while waiting for your return transportation.</p>
                    <a href="#" className="ItineraryButton"><button>Reserve Your Spot</button></a>
                    <p className="ItineraryPrice">From $35 USD per person</p>
                  </div>
                </div>
            </div>

          </div>
          
      </section>
    </>
  )
}

export default WhatsIncluded