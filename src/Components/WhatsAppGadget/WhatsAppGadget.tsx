import WhatsAppIcon from "../../assets/Imgs/WhatsAppGadget/WhatsAppIcon.webp"
function WhatsAppGadget() {
  return (
    <>
        <section className="WhatsAppGadget">
            <a href="https://api.whatsapp.com/send/?phone=16468132877&text=Hi%21+I%27m+contacting+Canelo+Tours.+I%27m+interested+in+the+ATV+or+Buggy+tour+in+Punta+Cana.&type=phone_number&app_absent=0" target="blank" className="WhatsAppIcon">
                <img src={WhatsAppIcon} alt="WhatsApp Gadget" width={60} height={60} />
            </a>
        </section>
    </>
  )
}
export default WhatsAppGadget