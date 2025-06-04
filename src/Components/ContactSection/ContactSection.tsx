import DotsImg from "../../assets/Imgs/Contacts/dots.eco-logo.webp"
import InstagramIco from "../../assets/Imgs/Contacts/InstagramIcon.webp"
import FacebookIcon from "../../assets/Imgs/Contacts/FacebookIcon.webp"
import TripaIcon from "../../assets/Imgs/Contacts/TripadvisIcon.webp"
import GoogleIcon from "../../assets/Imgs/Contacts/GoogleIcon.webp"
import { useLanguage } from "../Language/LanguageContext"
function ContactSection() {
    const {texts} = useLanguage()
  return (
    <>
        <section className="ContactGeneral">
            <p>{texts.ContactSection.MainTitle}</p>
            <div className="ContactContent">
                <p>{texts.ContactSection.ImpactDescription}</p>
                <p>{texts.ContactSection.PartnershipText}</p>
                <img src={DotsImg} alt="Dots.ec Img" width={150} />
                <a href="https://track.dots.eco/certificate/status/1104489-28-17">Certificate ID: 1104489-28-17</a>
                <div className="SocialMediaIcon">
                    <a href="https://www.instagram.com/canelotoursrd" target="blank"><img src={InstagramIco} alt="Instragram Icon" width={27} height={27}/></a>
                    <a href="https://www.facebook.com/canelotoursrd/" target="blank"><img src={FacebookIcon} alt="Facebook Icon" width={27} height={27} /></a>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g147293-d33223483-Reviews-Canelo_Tours-Punta_Cana_La_Altagracia_Province_Dominican_Republic.html" target="blank"><img src={TripaIcon} alt="Tripa Icon" width={27} height={27} /></a>
                    <a href="https://www.google.com/maps/place/Canelo+Tours/@18.6411284,-68.4724343,72129m/data=!3m2!1e3!4b1!4m6!3m5!1s0x647dec1085b217:0xe1e9dd8fc23e2665!8m2!3d18.6411284!4d-68.4724343!16s%2Fg%2F11xdmx3gyt?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D" target="blank"><img src={GoogleIcon} alt="Google Icon" width={27} height={27}/></a>
                </div>
                <div className="UbicationOperation">
                    <p><span>{texts.ContactSection.LegalCompany}</span> {texts.ContactSection.LegalInfo}</p>
                    <p>{texts.ContactSection.AddressTitle}</p>
                    <p>{texts.ContactSection.RegisteredAddress}</p>
                    <p>{texts.ContactSection.OperationTitle}</p>
                    <p>{texts.ContactSection.OperationLocation}</p>
                </div>
                
            </div>
            
        </section>
    </>
  )
}

export default ContactSection