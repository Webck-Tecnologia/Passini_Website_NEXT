"use client";

import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <section
      className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80"
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
                      alt="Ícone de contato"
                      className="lazy-img mb-30"
                    />
                    <h2 className="main-title fw-500 tx-dark m0 titulo">
                      Vamos conversar com consultores experientes
                    </h2>
                    <p className="descricao">
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
            alt="Forma decorativa"
            className="lazy-img shapes shape-one m-5"
          />
          <img
            src="/images/shape/shape_91.svg"
            alt="Forma decorativa"
            className="lazy-img shapes shape-two"
          />
        </div>
      </div>
    </section>
  );
};
