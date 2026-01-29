import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children, onConfirm, confirmText = "Confirmar", cancelText = "Cancelar", confirmVariant = "primary" }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button
                        className="modal-close-btn"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="modal-body">
                    {children}
                </div>

                <div className="modal-footer">
                    <button
                        className="modal-btn modal-btn-cancel"
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    <button
                        className={`modal-btn modal-btn-${confirmVariant}`}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;