import { useLanguage } from "../Language/LanguageContext"
import ApprovedIcon from "../../assets/Imgs/ReservationSection/ApprovedIcon.webp"
function ReservationSection() {
    const {texts} = useLanguage();
  return (
    <>
        <section className="ReservationGeneral">
            <p className="Reservationtitle">{texts.ReservationSection.Title}</p>
            <p className="ReservationSubtitle">{texts.ReservationSection.Subtitle}</p>
            <p className="ReservationDetails">{texts.ReservationSection.BookingCallToAction} <span>{texts.ReservationSection.BookingPriceInfo}</span>{texts.ReservationSection.BookingCancellationPolicy}</p>
            <a className="ReservationButton" href="https://canelotours.com/atv-and-buggy-tours-in-punta-cana/book-atv-buggy/">
              <img src={ApprovedIcon} alt="Approved Icon" width={18} height={18} />
              {texts.ReservationSection.BookButton}
            </a>
        </section>
    </>
  )
}

export default ReservationSection