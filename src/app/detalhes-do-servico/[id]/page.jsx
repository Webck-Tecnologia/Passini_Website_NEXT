'use client'

import { useEffect } from 'react';
import Header5 from '@/app/_components/Header';
import { notFound } from 'next/navigation';
import RootLayout from "../../RootLayout"
import ProgressBar from '../_components/ProgresBar';
import Social from '../_components/Social';
import Inferior from '../../_components/Footer/page'
import Header3 from '@/app/_components/Header/Header';
import Head from 'next/head';
import {  getServiceById } from './generateStaticParams';


function generateJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Passini Equipamentos",
      "url": "https://passini.com.br"
    },
    "image": `https://passini.com.br${service.image}`,
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
    const { id } = params;
    const service = getServiceById(id);
  
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
    <RootLayout>
      <Head>
        <link rel="canonical" href={`https://passini.com.br/detalhes-do-servico/${id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header3/>
      <div className="fancy-feature-fiftyOne position-relative mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <br/>
                <div className="sc-title-two fst-italic position-relative">
                  Detalhes do serviço
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Oferecemos serviços de qualidade.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
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
                <p>
                  {service.detalhada}
                </p>
                {service.reasons.length > 0 && (
                  <>
                    <div className="mt-50 lg-mt-30">
                      <div className="row gx-xxl-5">
                        <div className="col-lg-6">
                          <h4 className="sub-title mb-20 tx-dark">Por que escolher a {service.title}</h4>
                          <ul className="style-none list-item md-mb-40">
                            {service.reasons.map((reason, index) => (
                              <li key={index}>{reason}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <h4 className="sub-title mb-20 tx-dark">Vantagens</h4>
                          <p className="pe-xxl-5">
                            {service.advantages}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                      <div className="row gx-xxl-5">
                        <ProgressBar data={service.progressData} />
                      </div>
                    </div>
                  </>
                )}
                <p>
                  Essas taxas destacam os pontos fortes da {service.title} em termos de eficiência operacional, confiabilidade e precisão, reforçando sua posição como uma escolha superior para projetos de construção que exigem alta performance e segurança.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
              <div className="service-category mb-40">
                <h4 className="tx-dark mb-15">Palavras Chaves</h4>
                <ul className="style-none keyword-list">
                  <li className="current-page"><a href="#">grua</a></li>
                  <li><a href="#">mini grua</a></li>
                  <li><a href="#">grua construção civil</a></li>
                  <li><a href="#">gruas automontantes</a></li>
                  <li><a href="#">minigrua</a></li>
                  <li><a href="#">gruas pequenas</a></li>
                  <li><a href="#">locabens grua</a></li>
                  <li><a href="#">grumont gruas</a></li>
                  <li><a href="#">grua para construção civil</a></li>
                  <li><a href="#">grua construção</a></li>
                  <li><a href="#">mini grua preço</a></li>
                  <li><a href="#">grua guindaste</a></li>
                  <li><a href="#">grua de obra</a></li>
                  <li><a href="#">grua pequena</a></li>
                  <li><a href="#">grua são paulo</a></li>
                  <li><a href="#">mini grua construção civil</a></li>
                  <li><a href="#">preço grua</a></li>
                  <li><a href="#">aluguel e fabricação de grua</a></li>
                  <li><a href="#">preço mini grua</a></li>
                  <li><a href="#">guindaste para construção civil</a></li>
                  <li><a href="#">grua obra civil</a></li>
                  <li><a href="#">grua movel pequena</a></li>
                  <li><a href="#">grua predio</a></li>
                  <li><a href="#">mini grua preço</a></li>
                  <li><a href="#">grua na construção civil</a></li>
                  <li><a href="#">grua torre fixa</a></li>
                  <li><a href="#">grua automontante potain</a></li>
                  <li><a href="#">potain gruas</a></li>
                  <li><a href="#">siti gruas</a></li>
                  <li><a href="#">grua sobre trilhos</a></li>
                </ul>
              </div>
            </div>
                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                  Equipe de ponta , bom atendimento, e versatilidade no planejamento, fácil acesso pela Castelo Branco, amplo estacionamento.
                  </p>
                  <div className="name">- Nilton Cesar Maia</div>
                </div>
                <h4 className="tx-dark mb-15">Nos acompanhe.</h4>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-short-banner-sixteen mt-130 lg-mt-80" data-aos="fade-up">
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
      <Inferior />
    </RootLayout>
  );
}