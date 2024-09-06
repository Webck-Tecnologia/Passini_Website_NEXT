import { useState } from 'react';
import Block from "@/components/about/Block";
import PdfModal from "../../../PdfModal"; // Vamos criar este componente
import About from "@/components/home-page/home-5/about";


const Aboutmain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      <div className="fancy-feature-fortyEight position-relative" id="about">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-two */}

      {/* 
        =============================================
        Feature Section Fifty Four
        ============================================== 
        */}
      <div className="fancy-feature-fiftyFour p-30 mt-150 lg-mt-90">
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
                  className="btn btn-primary mt-4"
                  onClick={openModal}
                >
                  Saiba mais
                </button>
                <img
                  src="/images/icon/grua.webp"
                  alt="icon"
                  className="lazy-img d-none d-lg-block mt-80"
                />
              </div>
              {/* End .col */}

              <div className="col-lg-7 ms-auto">
                <div className="row gx-xxl-5">
                  <Block />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/icon/gruabranca1.webp"
            alt="icon"
            className="lazy-img shapes shape-one imagem-responsiva"
          />
          <img
            src="/images/icon/gruabranca2.webp"
            alt="icon"
            className="lazy-img shapes shape-two imagem-responsiva"
          />
        </div>{" "}
        {/* /.bg-wrapper */}
      </div>
      <PdfModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Aboutmain;
