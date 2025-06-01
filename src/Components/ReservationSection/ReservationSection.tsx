import { useLanguage } from "../Language/LanguageContext"
function ReservationSection() {
    const {texts} = useLanguage();
  return (
    <>
        <section className="ReservationGeneral">
            <p className="Reservationtitle">{texts.ReservationSection.Title}</p>
            <p className="ReservationSubtitle">{texts.ReservationSection.Subtitle}</p>
            <p className="ReservationDetails">{texts.ReservationSection.BookingCallToAction} <span>{texts.ReservationSection.BookingPriceInfo}</span>{texts.ReservationSection.BookingCancellationPolicy}</p>
            <a className="ReservationButton" href="#">{texts.ReservationSection.BookButton}</a>
        </section>
    </>
  )
}

export default ReservationSection