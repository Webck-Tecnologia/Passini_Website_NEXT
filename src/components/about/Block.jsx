import React from "react";

const blocksData = [
  {
    id: 1,
    iconSrc: "/images/icon/superar-expectativas.webp",
    title: "Superar as expectativas",
    content: "É nosso compromisso diário. Entregando resultados que surpreendem e agregam valor.",
    dataAos: "fade-up",
    dataAosDelay: "",
  },
  {
    id: 2,
    iconSrc: "/images/icon/foco-no-cliente.webp",
    title: "Foco no cliente",
    content: "Contribuimos para que nossos clientes sejam líderes em seus negócios.",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 3,
    iconSrc: "/images/icon/tecnologia.webp",
    title: "Tecnologia",
    content: "Utilizamos as tecnologias mais avançadas para garantir a qualidade dos nossos serviços.",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },
  {
    id: 4,
    iconSrc: "/images/icon/compromisso.webp",
    title: "Compromisso",
    content: "As etapas de ensaio, inspeção e certificação são realizadas com rigor e precisão.",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
  // Add more blocks as needed
];

const Block = () => {
  return (
    <>
      {blocksData.map((block) => (
        <div className="col-sm-6" key={block.id}>
          <div
            className="card-style-twentyFour bg-white mt-30"
            data-aos={block.dataAos}
            data-aos-delay={block.dataAosDelay}
          >
            <div className="icon">
              <img src={block.iconSrc} alt="icon" className="lazy-img mh-100" />
            </div>
            <h4 className="fw-bold tx-dark mt-30 mb-15">{block.title}</h4>
            <p className="fs-18">{block.content}</p>
          </div>
          {/* /.card-style-twentyFour */}
        </div>
      ))}
    </>
  );
};

export default Block;
