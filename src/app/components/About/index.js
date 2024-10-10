"use client"

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Block from "./Block";
import PdfModal from "./pdfModal";
import AboutPart from "./About";

const Aboutmain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* SEO otimizado */}
      <Head>
        <title>Sobre a Passini Equipamentos - Nossa Missão</title>
        <meta name="description" content="Conheça a missão da Passini Equipamentos e como oferecemos soluções únicas e exclusivas no segmento de atuação." />
        <meta name="keywords" content="Passini, equipamentos, soluções, missão, transformação, gruas, elevadores" />
        <meta property="og:title" content="Sobre a Passini Equipamentos - Nossa Missão" />
        <meta property="og:description" content="Oferecemos soluções únicas no segmento de gruas e elevadores, garantindo transformação no setor." />
        <meta property="og:image" content="/images/icon/grua.webp" />
      </Head>

      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <AboutPart />
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Fifty Four
        ============================================== 
        */}
      <div className="fancy-feature-fiftyFour p-30 mt-150 lg-mt-90" id="about">
        <div className="bg-wrapper position-relative zn2 pt-140 lg-pt-60 pb-140 lg-pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one mt-30">
                  <div className="sc-title text-uppercase branco">POR QUE PASSINI?</div>
                  <h2 className="main-title fw-bold text-white titulo texto-com-contorno">
                    Nossa <span className="missao-container">missão</span>.
                  </h2>
                </div>
                <p className="text-lg mt-40 lg-mt-20 cinzaclaro texto-com-contorno">
                  Oferecer soluções aos clientes e entregar
                  uma transformação única e exclusiva em
                  todo o segmento de atuação da
                  companhia.
                </p>
                <button 
                  className="btn btn-secondary mt-4"
                  onClick={openModal}
                >
                  Saiba mais
                </button>
                <Image
                  src="/images/icon/grua.webp"
                  alt="Grua Passini"
                  width={300}
                  height={80}
                  className="lazy-img d-none d-lg-block mt-80"
                />
              </div>

              <div className="col-lg-7 ms-auto">
                <div className="row gx-xxl-5">
                  <Block />
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/images/icon/gruabranca1.webp"
            alt="Grua Branca 1"
            width={120}
            height={80}
            className="lazy-img shapes shape-one imagem-responsiva"
          />
          <Image
            src="/images/icon/gruabranca2.webp"
            alt="Grua Branca 2"
            width={120}
            height={80}
            className="lazy-img shapes shape-two imagem-responsiva"
          />
        </div>
      </div>

      <PdfModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Aboutmain;
