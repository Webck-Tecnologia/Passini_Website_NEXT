"use client"; // Não é uma diretiva válida no JavaScript ou em projetos Next.js, ajustei para o uso de useEffect

import { useEffect } from 'react';
import RootLayout from "../RootLayout";
import Inferior from "../_components/Footer/page";
import Header3 from '../_components/Header/Header';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const DynamicContactForm2 = dynamic(() => import('../_components/ContactForm/ContactForm2'), {
  loading: () => <p>Carregando formulário...</p>,
});
const BlockContact2 = dynamic(() => import('../_components/ContactForm/BlockContact2'), {
  loading: () => <p>Carregando bloco de contato...</p>,
});

export default function Page() {
  useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        const bootstrap = await import("bootstrap/dist/js/bootstrap");
        bootstrap.default.initialize();
      }
    };
    loadBootstrap();
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
                        <Image
                          src="/images/icon/icon_114.svg"
                          alt="icon"
                          width={50}
                          height={50}
                          className="mb-30"
                          loading="lazy"
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
                        <DynamicContactForm2 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shapes shape-text fw-500 fs-20 tx-dark text-center m-5">
                Preencha o <br />
                formulário
              </div>
              <Image
                src="/images/shape/shape_90.svg"
                alt="shape"
                width={100}
                height={100}
                className="shapes shape-one m-5"
                fetchpriority="high"
              />
              <Image
                src="/images/shape/shape_91.svg"
                alt="shape"
                width={100}
                height={100}
                className="shapes shape-two"
              />
            </div>
          </div>
        </div>
        <Inferior />
      </RootLayout>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        strategy="lazyOnload"
      />
    </div>
  );
}