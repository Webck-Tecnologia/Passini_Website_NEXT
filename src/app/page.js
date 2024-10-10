import Aboutmain from "./components/About"
import FancySection from "./components/Banner"
import BlogSection from "./components/blogSection"
import { Contact } from "./components/Contact"
import CookieConsent from "./components/CookieConsent"
import Equipamentos from "./components/Equipamentos"
import Inferior from "./components/Footer/index"
import Header from "./components/Header/Header"
import Hero from "./components/Hero"
import Insurance from "./components/Intro"
import DesignAgency from "./components/Partness"
import PortfolioGallery from "./components/PortfolioGallery"
import Seo from "./components/Seo/Seo"
import Comentarios from "./components/Testimonials"
import RootLayout from "./layout"
import "./styles/index.scss"

const Home = () => {
  
  return(
    <RootLayout>
      <Header />
      <Seo/>
      <Hero/>
      <Aboutmain/>
      <Equipamentos/>
      <Insurance/>
      <DesignAgency/>
      <FancySection/>
      <Comentarios/>
      <PortfolioGallery/>
      <BlogSection/>
      <Contact/>
      <Inferior/>
      <CookieConsent/>
    </RootLayout>
  )
}

export default Home