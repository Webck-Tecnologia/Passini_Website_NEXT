"use client"; // Não é uma diretiva válida no JavaScript ou em projetos Next.js, ajustei para o uso de useEffect

import { useEffect } from 'react';
import RootLayout from "../RootLayout";
import Inferior from "../_components/Footer/page";
import Header3 from '../_components/Header/Header';
import ContactForm2 from '../_components/ContactForm/ContactForm2';
import BlockContact2 from '../_components/ContactForm/BlockContact2';


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
                        <ContactForm2 />
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
                className="lazy-img shapes shape-two"
              />
            </div>
          </div>
        </div>
        <Inferior />
      </RootLayout>
    </div>
  );
}
