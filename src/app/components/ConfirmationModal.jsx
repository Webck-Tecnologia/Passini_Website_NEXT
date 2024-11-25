import React from 'react';
import './modal.scss';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message, isSuccess }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        // Fecha o modal se o clique for no overlay
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>{isSuccess ? "Parabéns!" : "Confirmação"}</h2>
                <p>{message}</p>
                {isSuccess ? (
                    <div className="confetti">
                        <span className="confetti-piece"></span>
                        <span className="confetti-piece"></span>
                        <span className="confetti-piece"></span>
                        <span className="confetti-piece"></span>
                        <span className="confetti-piece"></span>
                    </div>
                ) : (
                    <>
                        <button className="btn-confirm" onClick={onConfirm}>Confirmar</button>
                        <button className="btn-cancel" onClick={onClose}>Cancelar</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ConfirmationModal;
