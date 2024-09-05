import React from 'react';
import Modal from 'react-modal';

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

// Certifique-se de definir o elemento raiz do seu aplicativo
Modal.setAppElement('#root');

const PdfModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="PDF Viewer"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <button 
          onClick={onClose} 
          className="btn btn-secondary mb-3"
          style={{ alignSelf: 'flex-end' }}
        >
          Fechar
        </button>
        <iframe
          src="/passini.pdf#view=FitH"
          width="100%"
          height="100%"
          style={{ border: 'none', flex: 1 }}
          title="Passini PDF"
        />
      </div>
    </Modal>
  );
};

export default PdfModal;