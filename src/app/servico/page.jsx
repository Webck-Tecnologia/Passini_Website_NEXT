"use client"; // Não é uma diretiva válida no JavaScript ou em projetos Next.js, ajustei para o uso de useEffect

import { useEffect } from 'react';
import RootLayout from "../RootLayout";
import Inferior from "../_components/Footer/page";
import Header3 from '../_components/Header/Header';
import Property from "../_components/Hero/Property";
import Quote from "../_components/Hero/Quote";

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
        <div className="fancy-feature-fortySix position-relative">
            <div className="container">
                <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                    <div className="title-style-eleven md-mb-20">
                        <h2 className="main-title tx-dark">
                        Nossos Serviços
                        </h2>
                    </div>
                    </div>
                    <div className="col-lg-5 ms-auto " data-aos="fade-left">
                    <p className="text-lg m0">
                        Soluções personalizadas e serviços engenheirados para projetos completos
                    </p>
                    </div>
                </div>
                <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
                    <Property />
                </div>
                <Quote />
                <img
                    src="/images/assets/sticker_01.png"
                    alt="sticker"
                    className="lazy-img shapes shape-one"
                />
                <div className="shapes shape-two" />
                <img
                    src="/images/shape/shape_162.svg"
                    alt="sticker"
                    className="lazy-img shapes shape-three"
                />
                <img
                    src="/images/assets/sticker_02.png"
                    alt="sticker"
                    className="lazy-img shapes shape-four"
                />
                <div className="shapes shape-five" />
                <div className="shapes shape-six" />
                </div>
            </div>
            </div>
        <Inferior />
      </RootLayout>
    </div>
  );
}
