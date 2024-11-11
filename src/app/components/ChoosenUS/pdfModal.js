"use client"

import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Head from 'next/head';

// Estilos para o modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    padding: '20px',
    zIndex: 9999,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9998,
  }
};

const PdfModal = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Definir o elemento raiz do modal
    Modal.setAppElement(document.body);

    // Verificar se é um dispositivo móvel
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const openPdfInNewTab = () => {
    window.open('/passini.pdf', '_blank');
    onClose(); // Fecha o modal após abrir o PDF em uma nova aba
  };

  return (
    <>
      <Head>
        <title>Visualizar PDF - Passini Equipamentos</title>
        <meta name="description" content="Visualize o PDF da Passini Equipamentos e saiba mais sobre nossos serviços e missões." />
      </Head>

      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Visualizador de PDF"
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <button 
            onClick={onClose} 
            className="btn btn-secondary mb-3"
            style={{ alignSelf: 'flex-end' }}
          >
            Fechar
          </button>
          {isMobile ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p>Clique no botão abaixo para visualizar o PDF:</p>
              <button 
                onClick={openPdfInNewTab}
                className="btn btn-primary"
              >
                Abrir PDF
              </button>
            </div>
          ) : (
            <iframe
              src="/passini.pdf#view=FitH"
              width="100%"
              height="100%"
              style={{ border: 'none', flex: 1 }}
              title="Visualizador de PDF da Passini"
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default PdfModal;
