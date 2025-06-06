import { useEffect } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import { useLanguage, LanguageProvider } from './Components/Language/LanguageContext'
import LanguageSelector from './Components/LanguageSelector/LanguageSelector'
import RealRiders from './Components/RealRiders/RealRiders'
import ReservationSection from './Components/ReservationSection/ReservationSection'
import ReviewsSection from './Components/ReviewsSection/ReviewsSection'
import TrustSection from './Components/TrustSection/TrustSection'
import WhatsIncluded from './Components/WhatsIncluded/WhatsIncluded'
import MainInformationSection from './Components/MainInformationSection/MainInformationSection'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import WhatsAppGadget from './Components/WhatsAppGadget/WhatsAppGadget'
function AppContent() {
  const { texts } = useLanguage();
  useEffect(() => {
    document.title = texts.TitleName;
  }, [texts]);
  return (
    <>
      <LanguageSelector />
      <WhatsAppGadget/>
      <Hero />
      <TrustSection />
      <RealRiders />
      <WhatsIncluded />
      <ReviewsSection />
      <ReservationSection />
      <MainInformationSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
export default App
