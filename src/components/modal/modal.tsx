import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark/50 flex justify-center items-center z-50">
      <div className="bg-white w-full mx-2 p-8 rounded-lg md:w-1/3  text-center">
        <h2 className="text-xl font-semibold mb-4">Maaf, Fitur Belum Tersedia</h2>
        <p className="mb-6">Fitur kirim pesan sedang dalam pengembangan.</p>
      </div>
    </div>
  );
};

export default Modal;
