"use client"

import Link from 'next/link';

const gruaFeatures = [
  {
    id: 1,
    tag: "ALTA CAPACIDADE",
    title: "Grua SL para Grandes Projetos em São Paulo",
    level: "Robusta",
    numClasses: "Versátil",
    tag2: "ALUGUEL/VENDA",
  },
  {
    id: 2,
    tag: "SEGURANÇA",
    title: "Operação 100% Segura em São Paulo",
    level: "Precisa",
    numClasses: "Certificada",
    tag2: "CONFIÁVEL",
  },
  {
    id: 3,
    tag: "EFICIÊNCIA",
    title: "Aumente a Produtividade em Obras Paulistanas",
    level: "Ágil",
    numClasses: "Econômica",
    tag2: "PRODUTIVA",
  },
  {
    id: 4,
    tag: "SUPORTE",
    title: "Assistência Técnica Completa em São Paulo",
    level: "24/7",
    numClasses: "Especializada",
    tag2: "MANUTENÇÃO",
  },
];

const GruaFeatures = () => {
  return (
    <>
      {gruaFeatures.map((feature) => (
        <div className="col-sm-6 d-flex flex-column space-fix" key={feature.id}>
          <Link
            href="/contato"
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            <span className="tag fw-500 text-white text-uppercase">
              {feature.tag}
            </span>
            <h4 className="mb-0 mt-25 single-line-title">{feature.title}</h4>
            <ul className="style-none pb-40 lg-pb-20 d-flex flex-column justify-content-between">
              <li>
                <span className="check-icon">✔️</span> {feature.level}
              </li>
              <li>
                <span className="check-icon">✔️</span> {feature.numClasses}
              </li>
            </ul>
            <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
              {feature.tag2}
            </span>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .check-icon {
          color: green; /* Você pode mudar a cor conforme necessário */
          margin-right: 8px; /* Espaçamento entre o ícone e o texto */
        }
      `}</style>
    </>
  );
};

export default GruaFeatures;
