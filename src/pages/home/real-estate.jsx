import Seo from "@/components/common/Seo";
import Property from "@/components/home-page/home-5/Property";
import Quote from "@/components/home-page/home-5/Quote";
import Hero from "@/components/home-page/home-5/hero";
import ContactForm from "./_components/ContactForm/ContactForm";
import Header3 from "@/components/header/Header3";
import Aboutmain from "@/components/home-page/main/about";
import IntroAbout from "@/components/home-page/home-5/about/IntroAbout";
import DesignAgency from "@/components/partness/page";
import FancySection from "@/components/FancySection";
import Comentarios from "@/components/Testimonials/page";
import Inferior from "./_components/Footer/page";
import CookieConsent from "./_components/cookies";
import PortfolioGallery1 from "@/components/portfolio/PortfolioGallery1";

const RealEstate = () => {
  return (
    <>
      <Seo pageTitle="Passini - Equipamentos" />

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header3 />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />

      <Aboutmain />
     

      {/* 
			=============================================
			Feature Section Forty Six
			============================================== 
			*/}
      <div id="services" className="fancy-feature-fortySix position-relative">
          <div className="container">
            <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="title-style-eleven md-mb-20">
                    <h2 className="main-title tx-dark">
                      EQUIPAMENTOS
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

      {/* 
			=============================================
				Feature Section Forty Seven
			============================================== 
			*/}
       <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout/>
          </div>
        </div>
      </div>

      {/* 
			=============================================
				Feature Section Forty Eight
			============================================== 
			*/}


      {/* 
			=============================================
				Feature Section Forty Nine
			============================================== 
			*/}
       <DesignAgency id="portfolio" />
       <FancySection />

      {/*
			=====================================================
			Feedback Section Fourteen
			=====================================================
			*/}
       <Comentarios id="testimonials" />
      {/* 
			=============================================
				Blog Section Six
			============================================== 
			*/}
      <PortfolioGallery1 />
      <div
          className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
          data-aos="fade-up"
          id="contact"
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
                          <h2 className="main-title fw-500 tx-dark m0 titulo">
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
    </>
  );
};

export default RealEstate;
