import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Quais são os benefícios da Grua modelo SL?",
    answer:
      "Construída com materiais de alta resistência desde 2010, nossa Grua proporciona durabilidade e segurança incomparáveis. Sua capacidade de carga impressionante e design ergonômico facilitam a mobilização na obra.",
  },
  {
    id: 2,
    question: "Como a Grua modelo SL pode melhorar meus projetos?",
    answer:
      "Economize tempo e energia com nossa Grua modelo SL. Aumente a eficiência e a qualidade dos seus projetos, focando em áreas estratégicas para melhorar a produtividade da sua obra.",
  },
];


const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion accordion-style-six" id="accordionOne">
      {faqData.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={openItemId === item.id ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse ${
              openItemId === item.id ? "collapse" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
