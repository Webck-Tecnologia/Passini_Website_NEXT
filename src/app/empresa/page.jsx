"use client"; // Não é uma diretiva válida no JavaScript ou em projetos Next.js, ajustei para o uso de useEffect

import { useEffect } from 'react';
import RootLayout from "../RootLayout";
import Inferior from "../_components/Footer/page";
import Header3 from '../_components/Header/Header';
import Counter from "../_components/about/Counter";
import VideoBlock from './VideoBlock';

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
        <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                    Seja bem-vindo à Passini
                </div>
                <h2 className="main-title fw-500 tx-dark">
                    Transformando canteiros de obra em ambientes de trabalho modernos e eficientes!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Nossa história &amp; objetivos</h6>
                <p className="text-lg tx-dark">
                A Passini Equipamentos, fundada em janeiro de 1970 pelo engenheiro Waldemar Henrique Passini, é uma empresa com quase 50 anos de experiência na prestação de serviços engenheirados para a construção civil, indústrias e siderúrgicas. Ao longo dos anos, adquirimos um vasto know-how por meio de soluções técnicas eficientes e baseadas em conhecimento profundo.

Destacamo-nos em serviços especializados, como projetos de engenharia mecânica, elétrica e cálculos de elementos finitos aplicados a pórticos especiais, andaimes customizados, gruas e elevadores de cremalheira. Nosso foco está no desenvolvimento de um relacionamento sólido com o cliente, pautado pelo profissionalismo e pela excelência no atendimento.

Na Passini, acreditamos na modernização dos métodos de trabalho, oferecendo tecnologias de ponta para transformar canteiros de obra em ambientes eficientes e seguros. Junte-se a nós e experimente a diferença que nossa expertise pode fazer em seus projetos.
                </p>
                <div className="row">
                  <Counter />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
        <br/>
        <br/>
        <Inferior />
      </RootLayout>
    </div>
  );
}
