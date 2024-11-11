import "./styles/index.scss";
import DefaulHeader from "./components/header/Header";
import Seo from "./components/seo/Seo";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Choosen from "./components/ChoosenUS/Choosen";
import Servico from "./components/servicos/Servico";
import Insurance from "./components/IntroAbout/Insurance";
import Partness from "./components/Partness/Partness";
import Fancy from "./components/fancy/Fancy";
import Portfolio from "./components/portfolio/Portfolio";
import BlogPage from "./components/Blog/index";
import Projetos from "./components/Projetos/Projetos";
import { Contact } from "./components/Contact/Contact";
import DefaultFooter from "./components/Footer/DefaultFooter";
import CookieConsent from "./components/CookieConsent";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Seo pageTitle="Passini" />
      <DefaulHeader />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section className="fancy-feature-fortyEight position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
                  <About />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre">
          <Choosen />
        </section>
        <section id="serviços">
          <Servico />
        </section>
        <Insurance />
        <Partness />
        <Fancy />
        <section id="faq">
          <Portfolio />
        </section>
        <section id="blog">
          <BlogPage />
        </section>
        <section id="portfólio">
          <Projetos/>
        </section>
        <section id="contato">
          <Contact/>
        </section>
      </main>
      <DefaultFooter/>
      <CookieConsent/>
    </div>
  );
}
