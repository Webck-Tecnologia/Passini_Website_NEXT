"use client";

import React, { useState } from "react";

const faqData = [
    {
      id: 1,
      question: "Quais são os benefícios de alugar uma Grua modelo SL em São Paulo?",
      answer:
        "Alugar uma Grua modelo SL em São Paulo oferece flexibilidade financeira, acesso a equipamentos modernos e manutenção inclusa. Ideal para projetos de curto e médio prazo, economizando em custos de armazenamento e manutenção.",
    },
    {
      id: 2,
      question: "Por que comprar uma Grua modelo SL para projetos em São Paulo?",
      answer:
        "Comprar uma Grua modelo SL para projetos em São Paulo é um investimento a longo prazo. Oferece controle total sobre o equipamento, personalização para necessidades específicas e potencial de retorno do investimento em projetos futuros.",
    },
    {
      id: 3,
      question: "Como a Grua modelo SL pode melhorar a eficiência em obras em São Paulo?",
      answer:
        "A Grua modelo SL aumenta significativamente a eficiência em obras em São Paulo. Sua alta capacidade de carga e alcance permitem movimentação rápida de materiais, reduzindo tempo e mão de obra. Isso resulta em prazos mais curtos e custos operacionais menores.",
    },
    {
      id: 4,
      question: "Quais são as melhores opções de gruas disponíveis para aluguel em São Paulo?",
      answer:
        "As melhores opções de gruas para aluguel em São Paulo incluem a Grua modelo SL, conhecida por sua robustez e eficiência. Nossas gruas são atendidas por assistência técnica especializada e manutenção regular, garantindo segurança e confiabilidade em seu projeto.",
    },
    {
      id: 5,
      question: "Como a utilização de gruas aumenta a segurança em obras?",
      answer:
        "As gruas são essenciais para a segurança nas obras, pois minimizam o risco de acidentes, permitindo movimentações mais seguras e eficientes. O uso de gruas reduz a necessidade de transporte manual de cargas pesadas, o que diminui a chance de lesões entre os trabalhadores.",
    },
    {
      id: 6,
      question: "Quais tipos de projetos especiais vocês oferecem?",
      answer:
        "Oferecemos projetos especiais para obras complexas, como montagens de gruas e elevadores, ancoragens personalizadas e soluções para restrições de altura em áreas metropolitanas. Temos experiência em adaptar nossos equipamentos às necessidades específicas de cada projeto.",
    },
    {
      id: 7,
      question: "Qual é a capacidade de carga da Grua modelo SL?",
      answer:
        "A Grua modelo SL possui uma capacidade de carga de até 2.5 toneladas e é projetada para operar em obras com limitações de raio de atuação, garantindo eficiência e segurança durante o transporte de materiais.",
    },
    {
      id: 8,
      question: "Como a Passini garante a qualidade e segurança dos equipamentos?",
      answer:
        "A Passini realiza um rigoroso controle de qualidade, desde a escolha de fornecedores até treinamentos periódicos para colaboradores. Isso garante que nossos equipamentos, como gruas e elevadores, atendam às mais altas normas de segurança e eficiência.",
    },
  ];

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="faq-container">
      {faqData.map((item) => (
        <div className="faq-item" key={item.id}>
          <div className="faq-question" onClick={() => toggleAccordion(item.id)}>
            <h3 className="question-text">
              {item.question}
            </h3>
            <span className="toggle-icon">{openItemId === item.id ? "−" : "+"}</span>
          </div>
          <div className={`faq-answer ${openItemId === item.id ? 'open' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .faq-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }
        .faq-item {
          border-bottom: 1px solid #ddd;
          padding: 15px 0;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          align-items: center;
        }
        .question-text {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          flex-grow: 1;
        }
        .toggle-icon {
          font-size: 24px;
          font-weight: bold;
          margin-left: 10px;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
          opacity: 0;
        }
        .faq-answer.open {
          max-height: 1000px;
          opacity: 1;
          transition: max-height 0.5s ease-in, opacity 0.5s ease-in;
        }
        .faq-answer p {
          margin: 10px 0 0;
          font-size: 14px;
        }
      `}</style>
      <br/>
    </div>
  );
};

export default Faq;
