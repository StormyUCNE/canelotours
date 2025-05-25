import RealRiderImg1 from "../../assets/Imgs/RealRiders/RealRiderImg1.webp";
import RealRiderImg2 from "../../assets/Imgs/RealRiders/RealRiderImg2.webp";
import RealRiderImg3 from "../../assets/Imgs/RealRiders/RealRiderImg3.webp";
function RealRiders() {
  return (
    <>
      <section className="RiderGeneral">
        <div className="HeadlineRiders">
          <p>Real Riders</p>
          <p>What to Expect on Our ATV and Buggy Tours in Punta Cana</p>
          <p>Get a glimpse of what our ATV and Buggy Tours in Punta Cana really feel like. These are real riders, real trails, and unforgettable memories captured on camera — just like your experience will be.</p>
        </div>
        <div className="RiderImages">
          <img className="RidersItemsImg BottomImgs" src={RealRiderImg1} alt="Real Rider Img 1" loading="lazy" />
          <img className="RidersItemsImg" src={RealRiderImg2} alt="Real Rider Img 2" loading="lazy" />
          <img className="RidersItemsImg BottomImgs" src={RealRiderImg3} alt="Real Rider Img 3" loading="lazy" />
        </div>
        <div className="RidersBooking">
          <a href="#" className="RiderButton">
            <button>
              Book Now
            </button>
          </a>
          <p className="RidersPrice">From $35 USD / pax</p>
        </div>
      </section>
    </>
  )
}

export default RealRiders