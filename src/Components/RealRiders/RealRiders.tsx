import RealRiderImg1 from "../../assets/Imgs/RealRiders/RealRiderImg1.webp";
import RealRiderImg2 from "../../assets/Imgs/RealRiders/RealRiderImg2.webp";
import RealRiderImg3 from "../../assets/Imgs/RealRiders/RealRiderImg3.webp";
import { useLanguage } from "../Language/LanguageContext";
function RealRiders() {
  const {texts} = useLanguage();
  return (
    <>
      <section className="RiderGeneral">
        <div className="HeadlineRiders">
          <p>{texts.RealRiderSection.RealTitle}</p>
          <p>{texts.RealRiderSection.RealSubtitle}</p>
          <p>{texts.RealRiderSection.RealDescription}</p>
        </div>
        <div className="RiderImages">
          <img className="RidersItemsImg BottomImgs" src={RealRiderImg1} alt="Real Rider Img 1" loading="lazy" />
          <img className="RidersItemsImg" src={RealRiderImg2} alt="Real Rider Img 2" loading="lazy" />
          <img className="RidersItemsImg BottomImgs" src={RealRiderImg3} alt="Real Rider Img 3" loading="lazy" />
        </div>
        <div className="RidersBooking">
          <a href="#" className="RiderButton">
            <button>
              {texts.RealRiderSection.RealBookButton}
            </button>
          </a>
          <p className="RidersPrice">{texts.RealRiderSection.RealPrice}</p>
        </div>
      </section>
    </>
  )
}

export default RealRiders