"use client"

import React, { useState } from 'react';
import Block from './Block';
import Image from 'next/image';
import PdfModal from './pdfModal';

const Choosen = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className="fancy-feature-fiftyFour p-30 mt-150 lg-mt-90">
      <div className="bg-wrapper position-relative zn2 pt-140 lg-pt-60 pb-140 lg-pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="title-style-one">
                <div className="sc-title text-uppercase">POR QUE PASSINI?</div>
                <h2 className="main-title fw-bold tx-white">
                  Nossa <span>Missão</span>
                </h2>
              </div>
              <p className="text-lg mt-40 lg-mt-20 text-white">
                Oferecer soluções aos clientes e entregar uma transformação única e exclusiva em todo o segmento de atuação da companhia.
              </p>
              <button 
                className="btn mt-4"
                onClick={openModal}
                style={{
                  backgroundColor: '#1F27BF',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#161d8f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1F27BF'}
              >
                Saiba mais
              </button>
            </div>
            <div className="col-lg-7 ms-auto">
              <div className="row gx-xxl-5">
                <Block />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/icon/gruabranca1.webp"
          alt="Grua Branca 1"
          width={120}
          height={120}
          className="lazy-img shapes shape-one imagem-responsiva"
        />
        <Image
          src="/images/icon/gruabranca2.webp"
          alt="Grua Branca 2"
          width={120}
          height={120}
          className="lazy-img shapes shape-two imagem-responsiva"
        />
      </div>
      <PdfModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Choosen;
