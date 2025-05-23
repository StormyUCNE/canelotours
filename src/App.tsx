import './App.css'
import Hero from './Components/Hero/Hero'
import { LanguageProvider } from './Components/Language/LanguageContext'
import LanguageSelector from './Components/LanguageSelector/LanguageSelector'
import RealRiders from './Components/RealRiders/RealRiders'
import TrustSection from './Components/TrustSection/TrustSection'
function App() {
  return (
    <>
      <LanguageProvider>
        <LanguageSelector/>
        <Hero/>
        <TrustSection/>
        <RealRiders/>
      </LanguageProvider>
    </>
  )
}
export default App
