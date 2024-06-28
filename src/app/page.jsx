'use client'

import { useEffect } from 'react';
import RootLayout from "./RootLayout";
import Hero from "./_components/Hero";
import "aos/dist/aos.css";
import "../styles/index.scss";
import Property from "./_components/Hero/Property";
import Quote from "./_components/Hero/Quote";
import Insurance from "./_components/Intro/page";
import DesignAgency from "./_components/Partness/page";
import FancySection from "./_components/Hero/FancySection";
import Comentarios from "./_components/Testimonials/page";
import ContactForm from "./_components/ContactForm/ContactForm";
import Inferior from "./_components/Footer/page";
import Header3 from './_components/Header/Header';
import CookieConsent from './_components/cookies';

export default function Page() {
  useEffect(() => {
    // Carregar o script do Bootstrap apenas no lado do cliente
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <div>
      <RootLayout>
        <Header3 />
        <Hero />
        <div className="fancy-feature-fortySix position-relative">
          <div className="container">
            <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="title-style-eleven md-mb-20">
                    <h2 className="main-title tx-dark">
                      Nossos Serviços
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5 ms-auto " data-aos="fade-left">
                  <p className="text-lg m0">
                    Soluções personalizadas e serviços engenheirados para projetos completos
                  </p>
                </div>
              </div>
              <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
                <Property />
              </div>
              <Quote />
              <img
                src="/images/assets/sticker_01.png"
                alt="sticker"
                className="lazy-img shapes shape-one"
              />
              <div className="shapes shape-two" />
              <img
                src="/images/shape/shape_162.svg"
                alt="sticker"
                className="lazy-img shapes shape-three"
              />
              <img
                src="/images/assets/sticker_02.png"
                alt="sticker"
                className="lazy-img shapes shape-four"
              />
              <div className="shapes shape-five" />
              <div className="shapes shape-six" />
            </div>
          </div>
        </div>
        <Insurance />
        <DesignAgency />
        <FancySection />
        <Comentarios />
        <div
          className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
          data-aos="fade-up"
        >
          <div className="container">
            <div className="bg-wrapper zn2 bg-white position-relative">
              <div className="row">
                <div className="col-xl-11 m-auto">
                  <div className="row align-items-center">
                    <div className="col-lg-6 ms-auto order-lg-last">
                      <div className="text-wrapper">
                        <img
                          src="/images/icon/icon_114.svg"
                          alt="icon"
                          className="lazy-img mb-30"
                        />
                        <div className="title-style-one">
                          <h2 className="main-title fw-500 tx-dark m0">
                            Vamos conversar com consultores experientes
                          </h2>
                        </div>
                        <p className="fs-20 tx-dark pt-20 m0">
                        Nossos especialistas estão prontos para oferecer soluções sob medida para seu projeto. 
                        Entre em contato e descubra como podemos transformar suas ideias em realidade.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 order-lg-first">
                      <div className="form-style-two md-mb-40">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shapes shape-text fw-500 fs-20 tx-dark text-center m-5">
                Preencha o <br />
                formulário
              </div>
              <img
                src="/images/shape/shape_90.svg"
                alt="shape"
                className="lazy-img shapes shape-one m-5"
              />
              <img
                src="/images/shape/shape_91.svg"
                alt="shape"
                layout="responsive" 
                className="lazy-img shapes shape-two "
              />
            </div>
          </div>
        </div>
        <Inferior />
        <CookieConsent />
      </RootLayout>
    </div>
  );
}
