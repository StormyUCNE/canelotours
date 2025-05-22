import RealRiderImg1 from "../../assets/Imgs/RealRiders/RealRiderImg1.webp";
import RealRiderImg2 from "../../assets/Imgs/RealRiders/RealRiderImg2.webp";
import RealRiderImg3 from "../../assets/Imgs/RealRiders/RealRiderImg3.webp";
function RealRiders() {
  return (
    <>
      <section className="RiderGeneral">
        <div className="HeadlineRiders">
          <p>Real Riders</p>
          <p>Real Adventures</p>
          <p>Get a glimpse of what your ATV or Buggy ride through Punta Cana really looks like. These are real moments, real riders, and unforgettable memories waiting for you.</p>
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