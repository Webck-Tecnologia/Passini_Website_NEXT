import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProgressBar from '../_components/ProgressBar';
import Social from '../_components/Social';
import { getServiceById } from './generateStaticParams';
import Inferior from '@/pages/home/_components/Footer/page';
import Header3 from '@/components/header/Header3';
import Seo from '@/components/common/Seo';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID from params:", id);
    if (id) {
      const fetchedService = getServiceById(id);
      console.log("Fetched service:", fetchedService);
      setService(fetchedService);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!service) {
    return <div>Serviço não encontrado</div>;
  }

  const jsonLd = generateJsonLd(service);

  console.log("Rendering service:", service);

  return (
    <>
      <Seo
        pageTitle={`${service.title} - Detalhes do Serviço - Passini Equipamentos`}
        description={`Descubra os detalhes sobre ${service.title}, um serviço de alta qualidade oferecido pela Passini Equipamentos. Saiba mais sobre suas características e benefícios.`}
        keywords={`${service.title}, equipamentos industriais, Passini, serviços`}
        ogImage={service.image}
      />
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
                        <div className="col-lg-12">
                          <h4 className="sub-title mb-20 tx-dark">Por que escolher a {service.title}</h4>
                          <ul className="style-none list-item md-mb-40">
                            {service.reasons.map((reason, index) => (
                              <li key={index}>{reason}</li>
                            ))}
                          </ul>
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
                <h4 className="tx-dark mb-15">Categoria</h4>
                <ul className="style-none keyword-list">
                  <li className="current-page"><Link to="#">Grua SL</Link></li>
                  <li><Link to="#">Grua Ascensional</Link></li>
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
                    <a href="https://api.whatsapp.com/send?phone=5511947910983&text=Ol%C3%A1%2C%20vim%20pelo%20site.%20Estou%20buscando%20por%20Grua%20SL%2C%20para%20Alugar%2C%20tipo%20de%20grua%20Grua%20Fixa." target="_blank" className="btn-twentyOne fw-500 tran3s">Vamos conversar!</a>
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
    </>
  );
}