'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getServiceById } from './generateStaticParams.js';
import '@/app/styles/index.scss';
import Header from '@/app/components/header/Header';
import Head from 'next/head';
import Image from 'next/image.js';
import Social from './Social.jsx';
import ProgressBar from './ProgressBar.jsx';
import DefaultFooter from '@/app/components/Footer/DefaultFooter.jsx';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import portfolio from '@/app/components/Projetos/PortfolioData';

function generateJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Passini Equipamentos",
      "url": "https://passiniequipamentos.com.br"
    },
    "image": `https://passiniequipamentos.com.br${service.image}`,
    "areaServed": "São Paulo",
    "serviceType": service.title,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Sob consulta",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    }
  };
}

export default function ServiceDetails({ params }) {
    const { slug } = params;
    const service = getServiceById(slug);

    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const openGallery = (images) => {
      setSelectedImages(images);
      setLightboxOpen(true);
    };

    const closeGallery = () => {
      setSelectedImages([]);
      setLightboxOpen(false);
    };

    useEffect(() => {
      if (typeof window !== "undefined") {
        require("bootstrap/dist/js/bootstrap");
      }
    }, []);

    if (!service) {
      notFound();
    }

    const jsonLd = generateJsonLd(service);

    return (
      <>
        <Head>
          <title>{service.title} | Passini Equipamentos</title>
          <meta name="description" content={service.description} />
          <meta name="keywords" content="Venda de gruas, aluguel de gruas, grua SL ascensional, grua São Paulo, elevadores de cremalheira, soluções para obras" />
          <link rel="canonical" href={`https://passini.com.br/detalhes-do-servico/${service.id}`} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
        <Header />
        <div id="detalhes" className="fancy-feature-fiftyOne position-relative mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-7" data-aos="fade-right">
                <div className="title-style-five mb-65 lg-mb-40">
                  <div className="sc-title-two fst-italic position-relative">
                    Detalhes do serviço
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    {service.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="vantagens" className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-lg-1">
                <div className="service-details-meta ps-lg-5">
                  <h2 className="main-title tx-dark mb-30">{service.title}</h2>
                  <p className="text-lg tx-dark">{service.description}</p>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="main-img-meta"
                  />
                  <button
                    className="btn btn-primary mb-30"
                    onClick={() => {
                      if (service.imagesLightbox) {
                        openGallery(service.imagesLightbox);
                      }
                    }}
                  >
                    Ver mais fotos
                  </button>
                  <p>{service.detalhada}</p>
                  {service.reasons.length > 0 && (
                    <>
                      <div className="mt-50 lg-mt-30">
                        <h4 className="sub-title mb-20 tx-dark">
                          Por que escolher a {service.title}?
                        </h4>
                        <ul className="style-none list-item md-mb-40">
                          {service.reasons.map((reason, index) => (
                            <li key={index}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                      <div className="row gx-xxl-5">
                        <ProgressBar data={service.progressData} />
                      </div>
                    </div>
                    </>
                  )}
                  <p>
                    Essas taxas destacam os pontos fortes da {service.title} em termos de eficiência operacional, confiabilidade e precisão.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                <div className="service-sidebar pe-xxl-5 md-mt-60">
                  <div className="service-category mb-40">
                    <h4 className="tx-dark mb-15">Categoria</h4>
                    <ul className="style-none keyword-list">
                      <li className="current-page"><a href="#">Grua SL</a></li>
                      <li><a href="#">Grua Ascensional</a></li>
                      <li><a href="#">Aluguel de Grua</a></li>
                    </ul>
                  </div>
                  <div className="sidebar-social mb-40">
                    <h4 className="tx-dark mb-20">Compartilhar</h4>
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contato" className="fancy-short-banner-sixteen mt-130 lg-mt-80" data-aos="fade-up">
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">Ficou interessado?</div>
                      <h2 className="main-title fw-500 text-white m0">Não hesite em nos enviar uma mensagem.</h2>
                    </div>
                  </div>
                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <a href="/contact" className="btn-twentyOne fw-500 tran3s">Vamos conversar!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <DefaultFooter />
      <Lightbox
        open={isLightboxOpen}
        close={closeGallery}
        slides={selectedImages.map((img) => ({
          src: img.src,
          alt: img.alt,
        }))}
      />
      </>
    );
}
