import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Emergency Hotlines</h2>
        <p className="mb-4">National Suicide & Crisis Hotline - Call: 988</p>
        <p className="mb-4">Trevor Project - Call: 1-866-488-7386</p>
        <p className="mb-4">National Sexual Assault Hotline - Call: 1-800-656-4673</p>
        <p className="mb-4">National Domestic Violence Hotline - Call: 1-800-799-7233</p>
        
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;